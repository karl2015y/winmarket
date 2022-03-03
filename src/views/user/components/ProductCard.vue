<template>
  <router-link :to="`/shop/product/${product.id}`">
    <div
      class="w-full hover:shadow pb-2 rounded bg-white"
      @mouseover="showFirstImg = false"
      @mouseleave="showFirstImg = true"
    >
      <router-link class="card-img" :to="`/shop/product/${product.id}`">
        <div class="relative h-52 md:h-72">
          <img
            @load="ImgIsLoaded"
            :src="product.image_url[0]"
            :alt="product.name"
            class="
              loading-img
              absolute
              object-contain
              top-0
              left-0
              w-full
              h-full
              animate__animated
            "
            :class="
              showFirstImg || product.image_url.length == 1
                ? 'animate__fadeIn'
                : 'animate__fadeOut'
            "
          />
          <img
            :src="product.image_url[1]"
            :alt="product.name"
            class="
              absolute
              object-contain
              top-0
              left-0
              w-full
              h-full
              animate__animated
            "
            :class="
              product.image_url.length > 1 && !showFirstImg
                ? 'animate__fadeIn'
                : 'animate__fadeOut'
            "
          />
        </div>
      </router-link>
      <div class="card-body">
        <div class="flex items-center flex-col relative">
          <transition
            enter-active-class="animate__animated animate__fadeIn animate__faster"
            leave-active-class="animate__animated animate__fadeOut animate__faster"
          >
            <div
              v-if="!showFirstImg"
              class="
                absolute
                w-full
                h-full
                bg-black bg-opacity-50
                flex
                justify-center
                items-center
              "
            >
              <button
                class="
                  text-white
                  bg-skin-500
                  border-0
                  py-1
                  px-2.5
                  focus:outline-none
                  hover:bg-skin-600
                  rounded
                  text-xs
                "
              >
                查看商品
              </button>
            </div>
          </transition>

          <div class="my-3 text-center">
            <div class="text-xl sm:text-sm md:text-lg 2xl:text-sm">
              <router-link :to="`/shop/product/${product.id}`">{{
                product.name
              }}</router-link>
            </div>
            <p class="mt-2 text-base sm:text-sm 2xl:text-xs font-bold">
              {{ $filters.money(product.min_price) }}
              <span v-if="product.min_price != product.max_price"
                >~ {{ $filters.money(product.max_price) }}</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
import { ref, inject, onMounted } from "vue";

export default {
  props: ["product"],
  setup(props) {
    const { chageLoadingStatusHandler } = inject("mapStore");
    const product = ref(props.product);

    const getAllLoadingImageSrc = () => {
      document.querySelectorAll("img.loading-img").forEach((item) => {
        if (item.src) {
          // chageLoadingStatusHandler(item.src, true);
        }
      });
    };
    const ImgIsLoaded = (el) => {
      if (el.path[0].src ?? false) {
        // chageLoadingStatusHandler(el.path[0].src, false);
        el.path[0].classList.remove("loading-img");
      }
    };
    onMounted(() => {
      getAllLoadingImageSrc();
    });
    // hover 動畫
    const showFirstImg = ref(true);
    return {
      product,
      showFirstImg,
      ImgIsLoaded,
    };
  },
};
</script>