<template>
    <div class="card">
        <div class="pic-img-wrapper">
            <img src="../assets/03.png" alt="">
        </div>
        <div class="flex flex-col g-10">
            <p class="picture-title">
                Франсуа Дюпон
            </p>
            <div class="flex flex-col g-8">
                <h2 class="card__text-header card__text">
                    Процедура
                </h2>
                <h3>Цветная литография (40х60) </h3>
            </div>
            <div class="flex flex-col g-20">
                <p class="card__price">
                    20 000 руб
                </p>
                <PrimaryBtn></PrimaryBtn>
            </div>


        </div>

    </div>
</template>

<script setup>
import PrimaryBtn from './PrimaryBtn.vue';
</script>

<style scoped>
.card {
    background-color: #E1EDE6;
    padding: 20px 20px 30px 20px;
    max-width: 350px;
    max-height: 730px;
}

.pic-img-wrapper {
    width: 310px;
    height: 420px;
}

.picture-title {
    margin-top: 20px;


    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;

    color: #86928B;


}

.card__text-header {
    font-size: 30px;
}

.card__text-subtitle {
    font-size: 18px;
}

.card__text {
    color: rgb(44, 45, 53);
    font-family: Raleway;
    font-weight: 500;
    line-height: 35px;
    letter-spacing: 0%;
    text-align: left;
}

.card__price {
    margin-top: 10px;
    color: rgb(89, 141, 102);
    font-family: Raleway;
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0%;
    text-align: left;
}

@media screen and (max-width: 768px) {
    .card {
        max-height: 730px;
        max-width: 330px;
    }

    .pic-img-wrapper {
        width: 290px;
    }
}

@media screen and (max-width: 512px) {
    .card {
        max-height: 514px;
        max-width: 240px;
    }

    .pic-img-wrapper {
        width: 200px;
        height: 250px;
    }
}
</style>