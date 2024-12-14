<template>
  <section class="flex flex-col md:flex-row items-center p-[15px] md:p-12 bg-white">
    <!-- Левая часть: картинка -->
    <div class="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
      <div class="relative w-64 h-64 md:w-80 md:h-80">
        <img
          src="@/assets/picture.svg"
          alt="Frame"
          class="absolute inset-0 w-full h-full object-cover border-4 border-gray-300 rounded"
        />
        <div class="absolute inset-0 flex items-center justify-start left-2.5 bottom-4">
          <img src="@/assets/hand.svg" alt="Hand with Brushes" class="h-48 md:h-64" />
        </div>
      </div>
    </div>

    <!-- Правая часть: текст и иконки -->
    <div class="w-full md:w-1/2 text-center md:text-left">
      <h2 class="text-3xl font-semibold mb-4">Наша команда</h2>
      <p class="text-gray-600 mb-6 leading-relaxed">
        Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить
        значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены
        отталкиваться от того, что консультация с широким активом.
      </p>
      <!-- Иконки команды -->
      <div class="flex justify-center md:justify-start space-x-6">
        <div
          v-for="(member, index) in teamMembers"
          :key="index"
          class="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300"
        >
          <img :src="member.image" :alt="member.name" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamSection',
  data() {
    return {
      teamMembers: [
        { name: 'Member 1', image: 'https://via.placeholder.com/64' },
        { name: 'Member 2', image: 'https://via.placeholder.com/64' },
        { name: 'Member 3', image: 'https://via.placeholder.com/64' },
      ],
    }
  },
}
</script>

<style scoped></style>
