import Axios from 'axios'
import router from '@/router'

const axios = Axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_BACKEND_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: true,
  withXSRFToken: true
})

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    switch (error.response.status) {
      case 401:
        localStorage.removeItem('isLoggedIn')
        router.push({
          name: 'auth-signin',
          props: {
            error: {
              message: error.response.data.message,
              status: error.status
            }
          }
        })
        break
      case 403:
      case 404:
        router.push({
          name: 'error-not-found',
          props: {
            error: {
              message: error.response.data.message,
              status: error.status
            }
          }
        })
        break
      case 500:
        router.push({
          name: 'error-internal-server',
          props: {
            error: {
              message: error.response.data.message,
              status: error.status
            }
          }
        })
        break
      case 409:
        router.push({
          name: 'auth-email-verification-notification',
          props: {
            error: {
              message: error.response.data.message,
              status: error.status
            }
          }
        })
        break
      case 422:
      default:
        console.log(error.response.data)
    }
    return Promise.reject(error)
  }
)

export default axios
