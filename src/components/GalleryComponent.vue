<template>
    <div class="flex flex-col gap-8 ">
        <div class="flex sm:flex-row justify-between flex-col items-center">
            <h1>Репродукции</h1>
            <div class="flex flex-row gap-8">
                <button class="gallery_btn-size rounded-[20px]"
                    :class="btnActiveIndex === 0 ? 'bg-btn-bg-d-green' : 'bg-btn-bg-d-green-inactive'">Франция</button>
                <button class="gallery_btn-size rounded-[20px]"
                    :class="btnActiveIndex === 1 ? 'bg-btn-bg-d-green' : 'bg-btn-bg-d-green-inactive'">Германия</button>
                <button class="gallery_btn-size  rounded-[20px]"
                    :class="btnActiveIndex === 2 ? 'bg-btn-bg-d-green' : 'bg-btn-bg-d-green-inactive'">Англия</button>
            </div>

        </div>
        <PictureCard></PictureCard>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import PictureCard from './PictureCard.vue';
const btnActiveIndex = ref(0)

</script>
<style scoped>
.gallery_btn-size {
    width: 126px;
    height: 43px;
}

.gallery_btn-text {
    color: rgb(244, 246, 245);
    font-family: Raleway;
    font-size: 20px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0%;
    text-align: left;
}


@media screen {}
</style>