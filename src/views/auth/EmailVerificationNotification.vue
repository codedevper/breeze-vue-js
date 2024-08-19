<template>
  <AuthLayout>
    <template #title>Email Verification</template>

    <ActionStatus :status="status" />

    <form v-if="!status" @submit.prevent="submit" class="space-y-6">
      <div>
        <p class="text-gray-700">Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.</p>
      </div>

      <div>
        <p class="text-green-600">A new verification link has been sent to the email address you provided during registration.</p>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Resend Verification Email</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      <a @click="logout" href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Logout</a>
    </p>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue'
import ActionStatus from '@/components/elements/ActionStatus.vue'

import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

const status = ref('')
const message = ref('')
const errors = ref([])

function submit(params) {
  auth
    .emailVerificationNotification()
    .then(function (response) {
      console.log(response)
      status.value = response.data.status
    })
    .catch(function (error) {
      if (!error.status) {
        window.location.href = '/account?verified=1'
      }
      console.log(error)
      console.log(error.response.data.message)
      message.value = error.response.data.message
      errors.value = error.response.data.errors
    })
}

function logout(params) {
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
}
</script>

<style scoped>
/** */
</style>
