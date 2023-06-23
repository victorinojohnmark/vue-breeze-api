<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRoute } from 'vue-router';

const route = useRoute()
const authStore = useAuthStore()

const form = ref({
  password: '',
  password_confirmation : '',
  email: route.query.email,
  token: route.params.token

})

</script>

<template>
  <form class="mx-auto max-w-md" @submit.prevent="authStore.handleResetPassword(form)">
    <h3 class="font-bold">Reset Password</h3>
    <div class="my-2 text-green-900 font-semibold bg-green-200 rounded-md p-2" v-if="authStore.status">
      {{ authStore.status }}
    </div>
    <div class="my-6">
      <label class="mb-2 block text-sm font-medium text-gray-900">New Password</label>
      <input type="password" v-model="form.password" id="password" class="block w-full rounded-lg border border-gray-300 p-2">
      <p v-if="authStore.errors.password" class="mt-1 text-xs font-semibold text-red-400">{{ authStore.errors.password[0] }}</p>
    </div>

    <div class="my-6">
      <label class="mb-2 block text-sm font-medium text-gray-900">Confirm Password</label>
      <input type="password" v-model="form.password_confirmation" id="password_confirmation" class="block w-full rounded-lg border border-gray-300 p-2">
    </div>

    <button class="w-auto rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white">Submit</button>
  </form>
</template>