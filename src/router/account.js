const auth = [
  {
    path: '/account',
    name: 'account',
    component: () => import('@/views/account/DashboardView.vue'),
    meta: { requiresAuth: true }
  }
]

export default auth
