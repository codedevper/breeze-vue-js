<template>
  <div>
    <transition leave-active-class="transition ease-in duration-1000" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-show="status" class="bg-green-50 text-green-800 text-sm p-4 mb-4 rounded-lg">
        {{ status }}
      </div>
    </transition>
  </div>
</template>

<script setup>
defineProps({
  status: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
/** */
</style>
