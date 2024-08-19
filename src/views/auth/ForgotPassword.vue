<template>
  <AuthLayout>
    <template #title>Forgot your password?</template>

    <ActionStatus :status="status" />

    <form v-if="!status" @submit.prevent="submit" class="space-y-6">
      <div>
        <p class="text-gray-700">No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.</p>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input v-model="email" type="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Email address" autocomplete="email" required />
        </div>
        <div v-if="errors.email" class="text-red-500 mt-1">{{ errors.email.toString() }}</div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Email Password Reset Link</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      <a href="/auth/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Go back</a>
    </p>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue'
import ActionStatus from '@/components/elements/ActionStatus.vue'

import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

const email = ref('')
const status = ref('')
const message = ref('')
const errors = ref([])

async function submit(params) {
  auth
    .forgotPassword(email.value)
    .then(function (response) {
      console.log(response)
      status.value = response.data.status
    })
    .catch(function (error) {
      console.log(error)
      console.log(error.response.data.message)
      message.value = error.response.data.message
      errors.value = error.response.data.errors
    })
}
</script>

<style scoped>
/** */
</style>
