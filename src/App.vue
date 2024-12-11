<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>

  <header>
    <Header></Header>

  </header>
  <div class="container flex justify-center">
    <RouterView />
  </div>

</template>

<style src="@/assets/main.css">
/* .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  justify-content: center;
  margin: 0 auto;
} */
</style>
