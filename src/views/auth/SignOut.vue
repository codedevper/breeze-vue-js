<template>
  <AuthLayout>
    <div></div>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

auth
  .logout()
  .then(function (response) {
    console.log(response)
    localStorage.removeItem('isLoggedIn')
    window.location.href = '/auth/login'
  })
  .catch(function (error) {
    console.log(error)
  })
</script>

<style scoped>
/** */
</style>
