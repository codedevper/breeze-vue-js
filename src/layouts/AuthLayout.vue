<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-white lg:bg-indigo-500">
    <div class="w-full max-w-lg bg-white lg:shadow overflow-hidden sm:rounded-lg">
      <div class="flex flex-col justify-center px-4 lg:px-6 py-16 lg:py-10">
        <div class="text-center">
          <a href="/" class="mx-auto">
            <div class="bg-indigo-500 rounded-full group border-4 border-white p-1 inline-flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="text-white w-16 h-16 fa-spin-pulse" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 10h-14l4 -4" />
                <path d="M7 14h14l-4 4" />
              </svg>
            </div>
          </a>
          <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            <slot name="title" />
          </h2>
        </div>

        <div class="mt-5">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//
</script>

<style scoped>
/** */
</style>
