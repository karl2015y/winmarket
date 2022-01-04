<template>
  <carousel :wrapAround="true" class="">
    <slide v-for="slide in 2" :key="slide">
      <img class="w-full h-[50vw]" src="/icon/bg1920-1.jpg" alt />
    </slide>

  </carousel>
  <div class="w-full h-5 bg-gradient-to-r from-[#FCD44D] to-[#EC781E]"></div>
</template>
<script>


import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
export default {
  components: {
    Carousel,
    Slide,
  },
  setup() {

  },
}
</script>


<style scoped>
</style>