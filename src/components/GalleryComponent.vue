<template>
  <div class="flex flex-col mx-[15px] tablet-sm:mx-[30px] mt-[60px] tablet-sm:mt-[70px]">
    <div
      class="flex flex-col tablet:flex-row justify-between items-start tablet:items-center w-full relative gap-5"
    >
      <h1 class="relative heading heading-black">Репродукции</h1>
      <div
        class="flex absolute top-10 tablet-sm:top-0 tablet-sm:relative flex-row items-start tablet:justify-end gap-5 overflow-x-scroll tablet-sm:gap-8 w-full scrollbar-hide"
      >
        <button
          class="gallery_btn-size rounded-[20px] flex-shrink-0"
          :class="
            btnActiveIndex === 0 ? 'bg-btn-bg-d-green text-white' : 'bg-btn-bg-d-green-inactive'
          "
          @click="handleFilter(0)"
        >
          Франция
        </button>
        <button
          class="gallery_btn-size rounded-[20px] flex-shrink-0"
          :class="
            btnActiveIndex === 1 ? 'bg-btn-bg-d-green text-white' : 'bg-btn-bg-d-green-inactive'
          "
          @click="handleFilter(1)"
        >
          Германия
        </button>
        <button
          class="gallery_btn-size rounded-[20px] flex-shrink-0"
          :class="
            btnActiveIndex === 2 ? 'bg-btn-bg-d-green text-white' : 'bg-btn-bg-d-green-inactive'
          "
          @click="handleFilter(2)"
        >
          Англия
        </button>
      </div>
    </div>
    <div
      class="grid grid-flow-row-dense grid-cols-1 gap-7 tablet-sm:grid-cols-2 md:grid-cols-3 place-items-center mt-[81px] tablet-sm:mt-5 xs:bg-red-500"
    >
      <PictureCard
        :key="item.title"
        v-for="item in cards[selectedFilter]"
        :author="item.author"
        :title="item.title"
        :description="item.description"
        :price="item.price"
        :image="item.image"
      ></PictureCard>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PictureCard from './PictureCard.vue'
import { cards } from '@/const/data'

const btnActiveIndex = ref(0)

const filters = {
  0: 'france',
  1: 'germany',
  2: 'england',
}
const selectedFilter = ref('france')

const handleFilter = (index) => {
  btnActiveIndex.value = index
  selectedFilter.value = filters[btnActiveIndex.value]
  console.log(selectedFilter.value)
}
</script>

<style scoped>
.gallery_btn-size {
  width: 126px;
  height: 43px;
  font-size: 20px;
}

.scrollbar-hide {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
