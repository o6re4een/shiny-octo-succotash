<template>
  <div class="relative info-container bg-cover bg-center h-[502px] bg-no-repeat w-full">
    <!-- Полупрозрачный оверлей -->
    <div class="absolute inset-4 bg-black bg-opacity-40 right-10 blur-[50px] -z-10"></div>

    <!-- Контент -->
    <div class="relative flex flex-col justify-center h-full px-6 tablet:px-12 text-white gap-7">
      <!-- Иконка и Заголовок -->
      <div class="flex items-center">
        <div class="w-6 h-6 mr-2">
          <img src="@/components/icons/IconStart.svg" alt="" />
        </div>
        <h1 class="heading text-white">Новая коллекция французских авторов</h1>
      </div>

      <!-- Описание -->
      <div class="flex flex-col gap-4">
        <p class="text-sm tablet-sm:text-base leading-relaxed">
          Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям,
          которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных
          ограничений.
        </p>
        <p class="text-sm tablet-sm:text-base leading-relaxed">
          Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую
          востребованность направлений прогрессивного развития.
        </p>
      </div>

      <!-- Кнопка -->
      <button
        class="bg-[#EEDB6D] bth__info w-full tablet-sm:w-fit text-black py-2 px-4 font-semibold hover:bg-yellow-600 transition"
      >
        Ознакомиться
      </button>
    </div>
  </div>
</template>

<style scoped>
.info-container {
  background-image: url('@/assets/InfoBg.jpeg');
  max-height: 573px;
}

.info-blur {
  filter: blur(315px);
  background: rgba(13, 43, 67, 0.7);
}

.btn__info {
  padding: 20px 60px 20px 60px;
}
</style>
