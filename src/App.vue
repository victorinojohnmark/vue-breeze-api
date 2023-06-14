<template>
  <main>
    <Nav />
    <div class="container mx-auto">
      <RouterView />
    </div>
  </main>
  
</template>

<script setup>
import Nav from './components/Nav.vue';
</script>

