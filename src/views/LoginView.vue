<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter();

const form = ref({
  email: '',
  password: ''
})

const getToken = async () => {
  await axios.get('/sanctum/csrf-cookie');
}

const handleLogin = async () => {
  await getToken()
  await axios.post('/login', {
    email: form.value.email,
    password: form.value.password
  })

  router.push('/')
}


</script>

<template>
<div class="flex flex-col bg-white justify-center py-6 px-10 my-12 rounded-md w-96 mx-auto">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Laraveller</h2>
  </div>

  <div class="mt-10 sm:mx-auto w-full">
    <form class="space-y-6" action="#" method="POST" @submit.prevent="handleLogin">
      <div class="mt-2">
        <input id="email" name="email" v-model="form.email" type="email" placeholder="Email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>

      <div class="mt-2">
        <input id="password" name="password" v-model="form.password" type="password" placeholder="Password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      <router-link :to="{name: 'forgotpassword'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Forgot Password?</router-link>
    </p>

    <p class="text-center text-sm text-gray-500">
      Not a member yet?
      <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign Up</a>
    </p>

  </div>
</div>
</template>