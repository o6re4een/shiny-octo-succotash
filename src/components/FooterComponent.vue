<template>
  <footer
    class="footer-container bg-footer_bg_color py-[25px] px-[15px] tablet-sm:px-[30px] lg:px-[100px] flex justify-center"
  >
    <div
      class="flex items-center justify-center container flex-col mx-auto lg:justify-between lg:flex-row gap-5 lg:gap-20 w-full"
    >
      <div
        class="flex flex-row lg:flex-col gap-8 items-center tablet-sm:justify-between w-full tablet:w-fit"
      >
        <div>
          <img src="../assets/LogoHome.svg" alt="" class="hero__img" />
        </div>
        <div class="flex-col gap-2 hidden tablet-sm:flex">
          <h2 class="footer-heading-text">+7 (999) 543-54-54</h2>
          <p class="footer-item-text">Мастерская</p>
        </div>
      </div>
      <div class="hidden tablet-sm:flex flex-row gap-14 justify-between w-full tablet:w-fit">
        <div class="flex flex-col gap-1.5">
          <h2 class="footer-heading-text">Репродукции</h2>
          <p class="footer-item-text">Франция</p>
          <p class="footer-item-text">Германия</p>
          <p class="footer-item-text">Англия</p>
        </div>
        <div class="flex flex-col gap-1.5">
          <h2 class="footer-heading-text">Новинки</h2>
          <p class="footer-item-text">2021</p>
          <p class="footer-item-text">2020</p>
        </div>
        <div class="flex flex-col gap-1.5">
          <h2 class="footer-heading-text">О нас</h2>
          <p class="footer-item-text">Художники</p>
          <p class="footer-item-text">Менеджеры</p>
        </div>
      </div>

      <!-- Mobile linls -->
      <div class="flex tablet-sm:hidden flex-col gap-5">
        <div class="flex flex-row gap-10 justify-between">
          <div class="flex-col gap-2 flex">
            <h2 class="footer-heading-text">+7 (999) 543-54-54</h2>
            <p class="footer-item-text">Мастерская</p>
          </div>
          <div class="flex flex-col gap-1.5">
            <h2 class="footer-heading-text">Репродукции</h2>
            <p class="footer-item-text">Франция</p>
            <p class="footer-item-text">Германия</p>
            <p class="footer-item-text">Англия</p>
          </div>
        </div>
        <div class="flex flex-row gap-10 justify-between">
          <div class="flex flex-col gap-1.5">
            <h2 class="footer-heading-text">Новинки</h2>
            <p class="footer-item-text">2021</p>
            <p class="footer-item-text">2020</p>
          </div>
          <div class="flex flex-col gap-1.5">
            <h2 class="footer-heading-text">О нас</h2>
            <p class="footer-item-text">Художники</p>
            <p class="footer-item-text">Менеджеры</p>
          </div>
        </div>
      </div>
      <DeviderComponent></DeviderComponent>
      <div class="flex flex-col gap-2.5 items-center">
        <div class="flex flex-row gap-7">
          <img src="@/components/icons/IconFacebook.svg" alt="footer-icon" class="footer-icon" />
          <img src="@/components/icons/IconInstagram.svg" alt="footer-icon" class="footer-icon" />
          <img src="@/components/icons/IconYouTube.svg" alt="footer-icon" class="footer-icon" />
        </div>
        <div class="flex-flex-col gap-1.5 flex flex-row lg:flex-col">
          <p class="footer-links">Ink. House ®</p>
          <p class="footer-links">All rigths reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import DeviderComponent from './DeviderComponent.vue'
</script>

<style scoped>
.footer-heading-text {
  font-size: 20px;
  font-weight: 500;
  line-height: 23px;
  color: var(--black-text);
}
.footer-item-text {
  font-size: 18px;
  line-height: 150%;
  font-weight: 500;
  color: var(--gray-text);
}

.footer-links {
  font-size: 12px;
  font-weight: 500;
  line-height: 120%;
  color: var(--gray-text);
}

.footer-icon {
  width: 24px;
  height: 24px;
  padding: 3px;
}

@media screen and (max-width: 510px) {
  .footer-item-text {
    font-size: 16px;
  }
  .footer-heading-text {
    font-size: 16px;
    line-height: 19px;
  }
}

.footer-container {
  background-color: #e1ede6;
}
</style>
