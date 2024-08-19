<template>
  <AuthLayout>
    <template #title>Create your account</template>
    <form @submit.prevent="submit" class="space-y-6">
      <div>
        <label for="display_name" class="block text-sm font-medium leading-6 text-gray-900">Display name</label>
        <div class="mt-2">
          <input v-model="display_name" type="text" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Display name" required />
        </div>
        <div v-if="errors.display_name" class="text-red-500 mt-1">{{ errors.display_name.toString() }}</div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input v-model="email" type="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Email address" required />
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
        <label for="terms" class="block text-sm font-normal leading-6 text-gray-900">
          <input v-model="terms" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" />
          <span class="ml-2">I agree to the Terms of Service and Privacy Policy</span>
        </label>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-75 disabled:pointer-events-none" :disabled="!terms">Sign up</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Already registered?
      <a href="/auth/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in</a>
    </p>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue'

import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

const display_name = ref('')
const email = ref('')
const password = ref('')
const password_confirmation = ref('')
const terms = ref(false)
const message = ref('')
const errors = ref([])

async function submit(params) {
  auth
    .register(display_name.value, email.value, password.value, password_confirmation.value)
    .then(function (response) {
      console.log(response)
      localStorage.setItem('isLoggedIn', true)
      window.location.href = '/account'
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
