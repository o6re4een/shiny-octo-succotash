<template>
  <div class="card">
    <div class="pic-img-wrapper">
      <img src="../assets/03.png" alt="" class="w-full h-full" />
    </div>
    <div class="flex flex-col gap-2.5">
      <p class="picture-title">{{ props.author }}</p>
      <div class="flex flex-col gap-2">
        <h2 class="card__text-header card__text">{{ props.title }}</h2>
        <h3 class="card-text card-desc">{{ props.description }}</h3>
      </div>
      <div class="flex flex-col gap-2.5 tablet:gap-5 tablet w-full">
        <p class="card__price">{{ props.price }} руб</p>
        <PrimaryBtn></PrimaryBtn>
      </div>
    </div>
  </div>
</template>

<script setup>
import PrimaryBtn from './PrimaryBtn.vue'

const props = defineProps({
  author: {
    type: String,
    default: 'author',
  },
  title: {
    type: String,
    default: 'title',
  },
  price: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: 'description',
  },
  image: {
    type: String,
    default: 'image',
  },
})
</script>

<style scoped>
.card {
  background-color: #e1ede6;
  padding: 20px 20px 30px 20px;
  max-width: 350px;
  height: 100%;
  width: 100%;
  max-height: 730px;
}

.pic-img-wrapper {
  width: 100%;
  height: auto;
}

.picture-title {
  margin-top: 20px;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  color: #86928b;
}

.card__text-header {
  font-size: 30px;
}

.card__text-subtitle {
  font-size: 18px;
}

.card-desc {
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

@media screen and (max-width: 690px) {
  .card {
    max-height: 730px;
    max-width: 330px;
  }

  /* .card */
}

/* @media screen and (max-width: 610px) {
  .card {
    max-height: 514px;
    max-width: 240px;
  }
} */

@media screen and (max-width: 510px) {
  .card {
    max-height: 514px;
    max-width: 240px;
  }

  .pic-img-wrapper {
    width: 200px;
    height: 250px;
  }

  .card__text-header {
    font-size: 30px;
  }

  .card__text-subtitle {
    font-size: 16px;
  }

  .card__price {
    font-size: 20px;
  }

  .pic-img-wrapper {
    width: auto;
  }

  .picture-title {
    margin-top: 10px;
  }
  .card-desc {
    font-size: 16px;
  }
}

@media screen and (max-width: 420px) {
  .pic-img-wrapper {
    width: 250px;
    height: 250px;
  }

  .card__text-header {
    font-size: 24px;
  }

  .card__text-subtitle {
    font-size: 16px;
  }

  .card__price {
    font-size: 20px;
  }

  .pic-img-wrapper {
    width: auto;
  }
}
</style>
