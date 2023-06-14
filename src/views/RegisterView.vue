<script setup>
import { ref } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter()
const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const handleRegister = async () => {
  await axios.post('/register', {
    name: form.value.name,
    email: form.value.email,
    password: form.value.password,
    password_confirmation: form.value.password_confirmation
  })

  router.push("/")
}

</script>

<template>
<div class="flex flex-col bg-white justify-center py-6 px-10 my-12 rounded-md w-96 mx-auto">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Laraveller</h2>
  </div>

  <div class="mt-10 sm:mx-auto w-full">
    <form class="space-y-6" action="#" method="POST" @submit.prevent="handleRegister">
      <div class="mt-2">
        <input id="name" name="name" type="name" v-model="form.name" placeholder="Name" required class="block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>

      <div class="mt-2">
        <input id="email" type="email" placeholder="Email" v-model="form.email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>

      <div class="mt-2">
        <input id="password" type="password" placeholder="Password" v-model="form.password" required class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>

      <div class="mt-2">
        <input id="password-confiration" type="password" v-model="form.password_confirmation" placeholder="Confirm Password" required class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>

      <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
      </div>
    </form>

    <p class="mt-3 text-center text-sm text-gray-500">
      <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign In</a>
    </p>

  </div>
</div>
</template>