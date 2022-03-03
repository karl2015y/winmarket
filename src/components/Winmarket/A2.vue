<template>
  <swiper
    :speed="2000"
    :slidesPerView="1"
    :loop="loc_data.sec.length>1"
    :pagination="{ clickable: true }"
    :navigation="true"
    :autoplay="{ delay: 3500, disableOnInteraction: false }"
  >
    <swiper-slide v-for="item in loc_data.sec" :key="item">
      <a v-if="item.url.value ?? false" :href="item.url.value" target="_blank">
        <img
          class="w-full h-[50vw] hidden md:block"
          :src="item.pic_desktop.value"
          :alt="item.title.value"
        />
        <img
          class="w-full h-[50vw] md:hidden"
          :src="item.pic_phone.value"
          :alt="item.title.value"
        />
      </a>
      <a v-else>
        <img
          class="w-full h-[50vw] hidden md:block"
          :src="item.pic_desktop.value"
          :alt="item.title.value"
        />
        <img
          class="w-full h-[50vw] md:hidden"
          :src="item.pic_phone.value"
          :alt="item.title.value"
        />
      </a>
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
import { ref, watch } from "vue";

SwiperCore.use([Pagination, Navigation, Autoplay]);
export default {
  props: ["data"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    const loc_data = ref({
      main: {},
      sec: [
        {
          title: { type: "text", value: "首頁圖片" },
          url: { type: "text", value: "https://www.google.com" },
          pic_phone: {
            type: "img@820x410",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F10d362de-aa20-4cf2-8bfe-7199ac335b1d.png?alt=media&token=9c400ced-284d-434e-ab6d-95c2ba6361a0",
          },
          pic_desktop: {
            type: "img@1920x1080",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2Fe4418ba7-8572-405e-b946-351cf4a56912.png?alt=media&token=1e88f9f9-7156-40e5-b82c-1b991fb97358",
          },
        },
      ],
    });
    if (props.data) {
      loc_data.value = JSON.parse(props.data);
      watch(
        () => props.data,
        (val) => {
          loc_data.value = JSON.parse(val);
        }
      );
    }
    return {
      loc_data,
    };
  },
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