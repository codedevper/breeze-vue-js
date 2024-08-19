<template>
  <AuthLayout>
    <template #title>Reset Password</template>

    <ActionStatus :status="status" />

    <form v-if="!status" @submit.prevent="submit" class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input v-model="email" type="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100" placeholder="Email address" disabled />
        </div>
        <div v-if="errors.email" class="text-red-500 mt-1">{{ errors.email.toString() }}</div>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
        <div class="mt-2">
          <input v-model="password" type="password" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Password" required />
        </div>
        <div v-if="errors.password" class="text-red-500 mt-1">{{ errors.password.toString() }}</div>
      </div>

      <div>
        <label for="password_confirmation" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
        <div class="mt-2">
          <input v-model="password_confirmation" type="password" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Confirm Password" required />
        </div>
        <div v-if="errors.password_confirmation" class="text-red-500 mt-1">{{ errors.password_confirmation.toString() }}</div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-75 disabled:pointer-events-none">Update Password</button>
      </div>
    </form>

    <p v-if="status" class="mt-10 text-center text-sm text-gray-500">
      <a href="/auth/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Go to sign in</a>
    </p>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue'
import ActionStatus from '@/components/elements/ActionStatus.vue'

import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRoute } from 'vue-router'

const auth = useAuthStore()
const route = useRoute()

console.log(route.params.token)
console.log(route.query.email)

const token = ref(route.params.token)
const email = ref(route.query.email)
const password = ref('')
const password_confirmation = ref('')
const status = ref('')
const message = ref('')
const errors = ref([])

async function submit(params) {
  auth
    .resetPassword(token.value, email.value, password.value, password_confirmation.value)
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
