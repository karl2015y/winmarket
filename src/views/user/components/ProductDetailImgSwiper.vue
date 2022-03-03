<template>
  {{}}
  <swiper
    @swiper="
      (swiper) => {
        thumbsSwiper = swiper;
        slideChange(thumbsSwiper);
      }
    "
    :style="{
      '--swiper-navigation-color': '#00000014',
      '--swiper-pagination-color': '#00000014',
    }"
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper2 }"
    :modules="modules"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    class="shadow"
    @slideChangeTransitionStart="slideChange"
  >
    <swiper-slide v-for="item in images" :key="item" class="bg-white">
      <img :src="item" @load="ImgIsLoaded" class="loading-img" />
    </swiper-slide>
  </swiper>

  <swiper
    v-show="imgs_length > 1"
    @swiper="
      (swiper) => {
        thumbsSwiper2 = swiper;
      }
    "
    :spaceBetween="10"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
  >
    <swiper-slide v-for="item in images" :key="item">
      <img
        :src="item"
        class="thumbs-img opacity-25 loading-img"
        @load="ImgIsLoaded"
      />
    </swiper-slide>
  </swiper>

  <!-- {{ product }} -->
  <!-- <button
    @click="
      toSideHandler(
        'https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F9f4cf9ed-ed73-4e56-a158-f31cf80c592d.png?alt=media&token=c6f43bee-6e4f-4149-b40d-c2152499f89c'
      )
    "
  >
    123
  </button> -->
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";

import { watch, ref, inject, onMounted } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["images", "choose_spec_obj"],
  setup(props) {
    // const product = ref(props.product);
    const { chageLoadingStatusHandler } = inject("mapStore");
    const getAllLoadingImageSrc = () => {
      document.querySelectorAll("img.loading-img").forEach((item) => {
        if (item.src) {
          // chageLoadingStatusHandler(item.src, true);
        }
      });
    };
    onMounted(() => {
      getAllLoadingImageSrc();
    });
    const ImgIsLoaded = (el) => {
      if (el.path[0].src ?? false) {
        // chageLoadingStatusHandler(el.path[0].src, false);
        el.path[0].classList.remove("loading-img");
      }
    };
    const imgs_length = ref(Object.keys(props.images).length);
    const thumbsSwiper = ref(null);

    const thumbsSwiper2 = ref(null);

    const slideChange = (item) => {
      const current_img_src =
        item.slides[item.activeIndex].querySelector("img").src;
      document.querySelectorAll("img.thumbs-img").forEach((el) => {
        el.className = "thumbs-img opacity-25 mt-2";
      });
      document
        .querySelectorAll(`img.thumbs-img[src="${current_img_src}"]`)
        .forEach((el) => {
          el.className = "thumbs-img border shadow mt-1.5";
        });
      if (thumbsSwiper.value) {
        thumbsSwiper.value.autoplay.start();
      }
    };

    const toSideHandler = (src) => {
      let _index = null;
      const array = thumbsSwiper.value.slides;
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.querySelector(`img[src="${src}"]`)) {
          _index = index;
          break;
        }
      }
      if (thumbsSwiper.value.slides[_index]) {
        thumbsSwiper.value.slideTo(_index);
        thumbsSwiper.value.autoplay.stop();
      } else {
        thumbsSwiper.value.autoplay.start();
      }
    };

    watch(
      () => props.choose_spec_obj,
      (val) => {
        toSideHandler(val.image_url);
      }
    );

    return {
      imgs_length,
      modules: [Autoplay, FreeMode, Navigation, Thumbs],
      thumbsSwiper,
      thumbsSwiper2,
      slideChange,
      toSideHandler,
      ImgIsLoaded,
    };
  },
};
</script>
