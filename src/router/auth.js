import { useAuthStore } from '@/stores/auth'

const redirectOnLoggedIn = (to, from, next) => {
  const auth = useAuthStore()

  if (auth.isLoggedIn) next({ name: 'account' })
  else next()
}

const auth = [
  {
    path: '/auth/register',
    name: 'auth-signup',
    component: () => import('@/views/auth/SignUp.vue'),
    beforeEnter: redirectOnLoggedIn
  },
  {
    path: '/auth/login',
    name: 'auth-signin',
    component: () => import('@/views/auth/SignIn.vue'),
    beforeEnter: redirectOnLoggedIn
  },
  {
    path: '/auth/logout',
    name: 'auth-signout',
    component: () => import('@/views/auth/SignOut.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/auth/forgot-password',
    name: 'auth-forgot-password',
    component: () => import('@/views/auth/ForgotPassword.vue'),
    beforeEnter: redirectOnLoggedIn
  },
  {
    path: '/auth/reset-password/:token',
    name: 'auth-reset-password',
    component: () => import('@/views/auth/ResetPassword.vue')
  },
  {
    path: '/auth/email/verification-notification',
    name: 'auth-email-verification-notification',
    component: () => import('@/views/auth/EmailVerificationNotification.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/auth/verify-email/:id/:hash',
    name: 'auth-verify-email',
    component: () => import('@/views/auth/VerifyEmail.vue'),
    meta: { requiresAuth: true }
  }
]

export default auth
