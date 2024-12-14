<template>
  <nav class="navbar-container">
    <div class="navbar">
      <div class="w-fit">
        <img src="../assets/LogoHome.svg" alt="" />
      </div>

      <DeviderComponent></DeviderComponent>
      <div class="navbar__links">
        <p class="">Репродукции</p>
        <p class="">Новинки</p>
        <p class="">О нас</p>
        <div>
          <img src="../assets/CartIcon.svg" alt="" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import DeviderComponent from './DeviderComponent.vue'
</script>

<style scoped>
.navbar {
  display: flex;
  max-width: 1280px;
  width: 100%;
  justify-content: space-between;

  padding: 0 20px;
}

.navbar-container {
  display: flex;
  align-items: center;
  position: static;
  justify-content: center;
  top: 0;
  height: 100px;
  background-color: #e1ede6;
}

.navbar__links {
  display: flex;
  gap: 60px;
  align-items: center;
  /* width: 100%; */
}

@media screen and (max-width: 690px) {
  .navbar-container {
    justify-content: center;
    padding: 16px 0;
    height: 123px;
  }
  .navbar {
    display: flex;

    align-items: center;
    flex-direction: column;
    padding: 0 30px;
  }
  .navbar__links {
    width: 100%;
    justify-content: space-between;
    gap: 0;
  }
  .header__devider {
    display: block;
  }
}
</style>
