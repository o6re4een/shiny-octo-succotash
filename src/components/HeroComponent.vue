<template>
    <div class="hero-container">
        <img src="../assets/HeroImg.png" alt="" class="hero__img">
        <div class="hero__left-part">
            <div class="hero__content-title">
                <h3 class="hero__title">Реплики картин <br> от <b class="hero__title-green">Ink. House</b>
                </h3>
                <p class="hero__subtitle">Высокое качество отрисовки на плотной бумаге или льняном <br> холсте.
                    Редкие
                    произведения, доступные
                    цены.</p>
            </div>

            <PrimaryBtn></PrimaryBtn>
        </div>
    </div>
</template>

<script setup>
import PrimaryBtn from './PrimaryBtn.vue';
</script>

<style scoped>
.hero-container {
    display: flex;
    flex-direction: row;
    gap: 30px;

}

.hero__content-title {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.hero__left-part {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 60px
}

.hero__img {
    width: 540px;
    height: 621px;
}

.hero__title {
    /* Реплики картин от Ink. House */
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    line-height: 110%;
    /* or 66px */

    color: #2C2D35;
}

.hero__title-green {
    color: #598D66;
}

.hero__subtitle {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    /* or 27px */
}


@media screen and (max-width: 768px) {
    .hero__img {
        width: 330px;
        height: 380px;
    }

    .hero__title {

        font-size: 40px;
    }

    .hero__subtitle {
        font-size: 18px;
    }
}

@media screen and (max-width: 540px) {
    .hero__img {
        width: 195px;
        height: 239px;
    }

    .hero__title {

        font-size: 36px;

    }

    .hero__subtitle {
        font-size: 16px;
    }


}

@media screen and (max-width: 510px) {
    .hero__img {
        display: none;
    }
}
</style>