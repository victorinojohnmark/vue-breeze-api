<template>
<header class="bg-white">
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
      <a href="#" class="-m-1.5 p-1.5">
        <h5 class="font-bold">Laraveller</h5>
      </a>
    </div>
    <div class="flex gap-x-12">
        <router-link :to="{name: 'home'}" class="text-sm font-semibold leading-6 text-gray-900">Home</router-link>
        <template v-if="!authStore.user">
          <router-link :to="{name: 'login'}" class="text-sm font-semibold leading-6 text-gray-900">Login</router-link>
          <router-link :to="{name: 'register'}" class="text-sm font-semibold leading-6 text-gray-900">Register</router-link>
        </template>
        <template v-else>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900" @click.prevent="authStore.handleLogout">Logout</a>
        </template>
    </div>
  </nav>
</header>

</template>

<script setup>
import { useAuthStore } from '../stores/auth';


const authStore = useAuthStore()



</script>