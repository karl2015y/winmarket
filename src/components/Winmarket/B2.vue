<template>
  <section class="px-5 md:px-48 lg:px-64 2xl:px-72 pt-5 md:pt-24 pb-12 md:pb-28 bg-skin-500">
    <div class="w-full flex justify-center flex-col items-center">
      <img class="h-auto w-14" src="/icon/logo2.png" alt="穩盈logo" />
      <h2 class="text-white my-3.5">『 憑什麼 』懶人包</h2>
    </div>
   <div class=" mt-6 grid grid-cols-3  xl:grid-cols-6 gap-10 xl:gap-0 ">
        <div v-for="icon in icons" :key="icon">
          <div
            class="
              mx-auto
              w-20
              h-20
              border-solid border-4 border-white
              rounded-full
              flex
              justify-center
              items-center
            "
          >
            <img
              class="h-14 w-14"
              :src="icon.img_url"
              :alt="icon.name"
            />
          </div>
          <div class="mt-6 text-[#FCD44D] text-center">
            <div class="-mt-3 text-xs" v-if="icon.title">
              {{ icon.title }}
            </div>
            <h3>
              {{ icon.name }}
            </h3>
          </div>
        </div>
      </div>
  </section>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const icons = ref([
      { name: "廣告投放操作", img_url: "/icon/home/banner icon-1.png" },
      { name: "社群媒體整合", img_url: "/icon/home/banner icon-2.png" },
      { name: "影音圖文素材", img_url: "/icon/home/banner icon-3.png" },
      {
        title: "Win Market Channel",
        name: "電商平台",
        img_url: "/icon/home/banner icon-4.png",
      },
      {
        title: "Win Market Channel",
        name: "自媒體電視台",
        img_url: "/icon/home/banner icon-5.png",
      },
      { name: "網紅宅經濟", img_url: "/icon/home/banner icon-6.png" },
    ]);

    return {
      icons,
    };
  },
};
</script>