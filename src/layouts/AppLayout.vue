<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/account">Account</RouterLink>
        <RouterLink to="/auth/register">Register</RouterLink>
        <RouterLink to="/auth/login">Login</RouterLink>
        <RouterLink to="/auth/logout">Logout</RouterLink>
      </nav>
    </div>
  </header>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<style scoped>
/** */
</style>
