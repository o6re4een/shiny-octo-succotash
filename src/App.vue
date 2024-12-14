<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="">
    <header>
      <HeaderComponent></HeaderComponent>
    </header>
    <div class="">
      <RouterView />
    </div>
    <FooterComponent></FooterComponent>
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
