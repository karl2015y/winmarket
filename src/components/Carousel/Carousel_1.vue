<template>
  <swiper
    :speed="2000"
    :slidesPerView="1"
    :loop="true"
    :pagination="{ clickable: true }"
    :navigation="true"
    :autoplay="{ delay: 3500, disableOnInteraction: false }"
  >
    <swiper-slide>
      <a href="http://www.google.com">
        <img class="w-full h-[50vw]" src="/icon/bg1920-1.jpg" alt />
      </a>
    </swiper-slide>
    <swiper-slide>
      <img class="w-full h-[50vw]" src="/pic/home/banner1.png" alt />
    </swiper-slide>
    <swiper-slide>
      <img class="w-full h-[50vw]" src="/pic/home/banner2.png" alt />
    </swiper-slide>
    <swiper-slide>
      <img class="w-full h-[50vw]" src="/pic/home/banner3.png" alt />
    </swiper-slide>
  </swiper>
  <div class="w-full h-5 bg-gradient-to-r from-[#FCD44D] to-[#EC781E]"></div>
</template>
<script>
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation, Autoplay]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {},
};
</script>


<style scoped>
:deep(.swiper-pagination-bullet) {
  opacity: 1;
  border: white solid 1px;
  background-color: transparent;
}
:deep(.swiper-pagination-bullet-active) {
  @apply bg-white;
}

:deep(.swiper-button-prev) {
  @apply text-white;
}

:deep(.swiper-button-next) {
  @apply text-white;
}
</style>