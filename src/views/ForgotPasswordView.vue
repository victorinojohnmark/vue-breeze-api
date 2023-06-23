<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
const email = ref('')

</script>

<template>
  <form class="mx-auto max-w-md bg-slate-100 p-4 mt-12 rounded-lg" @submit.prevent="authStore.handleForgotPassword(email)">
    <h3 class="font-bold">Forgot password</h3>
    <div class="my-2 text-green-900 font-semibold bg-green-200 rounded-md p-2" v-if="authStore.status">
      {{ authStore.status }}
    </div>
    <div class="my-6">
      <label class="mb-2 block text-sm font-medium text-gray-900">Your email</label>
      <input type="email" v-model="email" id="email" class="block w-full rounded-lg border border-gray-300 p-2" placeholder="email@laraveller.com">
      <p v-if="authStore.errors.email" class="mt-1 text-xs font-semibold text-red-400">{{ authStore.errors.email[0] }}</p>
    </div>

    <button class="w-auto rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white">Submit</button>
  </form>
</template>