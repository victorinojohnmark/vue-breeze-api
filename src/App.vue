<template>
  <main>
    <Nav />
    <div class="container mx-auto my-3">
      <RouterView />
    </div>
  </main>
  
</template>

<script setup>
import Nav from './components/Nav.vue';
</script>

