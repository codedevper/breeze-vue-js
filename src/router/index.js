import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import HomeView from '@/views/pages/HomeView.vue'
import auth from './auth'
import account from './account'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'page-home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'page-about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/pages/AboutView.vue')
    },
    ...auth,
    ...account,
    {
      path: '/:pathMatch(.*)*',
      name: 'error-not-found',
      component: () => import('@/views/pages/AboutView.vue')
    }
  ]
})

router.beforeEach((to) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.isLoggedIn) return '/auth/login'
})

export default router
