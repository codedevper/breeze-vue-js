import { useAuthStore } from '@/stores/auth'

export default {
  install: ({ config }) => {
    const auth = useAuthStore()
    config.globalProperties.$auth = auth

    if (auth.isLoggedIn) {
      auth.ftechUser()
    }
  }
}
