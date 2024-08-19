<template>
  <AuthLayout>
    <div></div>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue'
import { useAuthStore } from '@/stores/auth'
import { useRoute } from 'vue-router'

const auth = useAuthStore()
const route = useRoute()

console.log(route.fullPath)
console.log(route.params.hash)

auth
  .emailVerify(route.fullPath)
  .then(function (response) {
    console.log(response)
    window.location.href = '/account?verified=1'
  })
  .catch(function (error) {
    console.log(error)
  })
</script>

<style scoped>
/** */
</style>
