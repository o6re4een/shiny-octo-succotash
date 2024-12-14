<script setup>
import GalleryComponent from '@/components/GalleryComponent.vue'
import HeroComponent from '../components/HeroComponent.vue'
import InfoComponent from '@/components/InfoComponent.vue'
import TeamSection from '@/components/TeamSection.vue'
</script>

<template>
  <main>
    <div class="flex flex-col gap-[50px] tablet:gap-[70px]">
      <div class="container mx-auto z-10">
        <HeroComponent></HeroComponent>

        <GalleryComponent></GalleryComponent>
      </div>

      <InfoComponent></InfoComponent>
      <div class="container mx-auto z-10">
        <TeamSection></TeamSection>
      </div>
    </div>

    <!-- <PictureCard></PictureCard> -->
  </main>
</template>
