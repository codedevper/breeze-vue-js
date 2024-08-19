import { defineStore } from 'pinia'
import axios from '@/lib/axios'

const csrf = () => axios.get('/sanctum/csrf-cookie')

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: localStorage.getItem('isLoggedIn') ? true : false,
    user: null
  }),
  getters: {
    //
  },
  actions: {
    async register(display_name, email, password, password_confirmation) {
      await csrf()
      return axios.post('/auth/register', {
        display_name: display_name,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      })
    },
    async login(email, password, remember) {
      await csrf()
      return axios.post('/auth/login', {
        email: email,
        password: password,
        remember: remember
      })
    },
    async logout() {
      await csrf()
      return axios.post('/auth/logout')
    },
    async forgotPassword(email) {
      await csrf()
      return axios.post('/auth/forgot-password', {
        email: email
      })
    },
    async resetPassword(token, email, password, password_confirmation) {
      await csrf()
      return axios.post('/auth/reset-password', {
        token: token,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      })
    },
    async emailVerificationNotification() {
      await csrf()
      return axios.post('/auth/email/verification-notification')
    },
    async emailVerify(fullPath) {
      try {
        let user = await axios.get(fullPath)
        console.log(user)
      } catch (error) {
        console.log(error)
      }
    },
    async ftechUser() {
      try {
        let user = await axios.get('/api/user')
        console.log(user.data)
        this.user = user.data
      } catch (error) {
        //console.log(error)
      }
    }
  }
})
