<script setup>
import { ref } from 'vue'

const email = ref('')

</script>

<template>
    <form class="mx-auto max-w-md" @submit.prevent="">
        <h3 class="font-bold">Forgot password</h3>

        <div class="my-6">
            <label for="" class="mb-2 block text-sm font-medium text-gray-900">Your email</label>
            <input type="email" v-model="email" id="email" class="blcok w-full rounded-lg border border-gray-300 p-2" placeholder="email@laraveller.com">
        </div>

        <button class="w-auto rounded-lg bg-blue-700 px-5 py-2 5 text-center text-sm font-medium text-white">Submit</button>
    </form>
</template>

