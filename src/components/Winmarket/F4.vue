<template>
  <PicText3
    class="px-16 md:px-44 xl:px-72 pt-5 md:pt-28 pb-12 md:pb-32  bg-white"
    chtTitle="穩盈的優勢"
    engTitle=""
    _class="!w-full flex-col"
  >

    <div class="!w-full flex flex-col md:flex-row gap-16 justify-center">
      <div
        v-for="item in _data"
        :key="item"
        class="w-full md:w-36 xl:w-44 flex flex-col "
      >
        <img
          :src="item.image_url"
          :alt="item.name"
          class="w-8/12 h-auto mx-auto"
        />
        <h1 class="text-skin-500 mt-5 font-bold">{{ item.name }}</h1>
        <p class="mt-4 text-left text-gray-400">{{ item.content }}</p>
      </div>
    </div>
  </PicText3>
</template>
<script>
import PicText3 from "@/components/PicText/PicText_3.vue";
import { ref } from "vue";

export default {
  components: {
    PicText3,
  },
  setup() {
    const _data = ref([
      {
        name: "節慶節氣",
        content:
          "商品為出發點搭配節慶及節氣發想延伸至生活相關題材題材，為商品加大與民眾之間的共鳴。",
        image_url: "/pic/About/icon-04.png",
      },
      {
        name: "時事議題",
        content:
          "每月以大數據抓取網絡流行的時事議題，結合社群玩法加大擴散的效益，使熱度持續延燒且加大聲量。",
        image_url: "/pic/About/icon-05.png",
      },
      {
        name: "品牌形象",
        content:
          "找出各項商品的品牌優勢及市場差異化為其目標受眾打造出需求並搭配其社群活動，確立品牌的定位。",
        image_url: "/pic/About/icon-06.png",
      },
    ]);
    return {
      _data,
    };
  },
};
</script>