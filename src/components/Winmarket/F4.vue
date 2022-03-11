<template>
  <PicText3
    class="px-16 md:px-44 xl:px-72 pt-5 md:pt-28 pb-12 md:pb-32 bg-white"
    :chtTitle="loc_data.main.title_cht.value"
    :engTitle="loc_data.main.title_eng.value"
    _class="!w-full flex-col"
  >
    <div class="!w-full flex flex-col md:flex-row gap-16 justify-center">
      <div
        v-for="item in loc_data.sec"
        :key="item"
        class="w-full md:w-36 xl:w-44 flex flex-col"
      >
        <img
          :src="item.img_url.value"
          :alt="item.name.value"
          class="w-8/12 h-auto mx-auto"
        />
        <h1 class="text-skin-500 mt-5 font-bold">{{ item.name.value }}</h1>
        <p class="mt-4 text-left text-gray-400">{{ item.content.value }}</p>
      </div>
    </div>
  </PicText3>
</template>
<script>
import PicText3 from "@/components/PicText/PicText_3.vue";
import { ref, watch } from "vue";

export default {
  components: {
    PicText3,
  },
  props: ["data"],

  setup(props) {
    const loc_data = ref({
      main: {
        title_cht: { type: "text", value: "穩盈的優勢" },
        title_eng: { type: "text", value: "" },
      },
      sec: [
        {
          img_url: {
            type: "img@155x131",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F2708ffc5-2dc7-44cf-82bf-018341c9f5a9.png?alt=media&token=a046e1f2-e569-4088-8144-bf1aadc576a2",
          },
          name: { type: "text", value: "節慶節氣" },
          content: {
            type: "textarea",
            value:
              "商品為出發點搭配節慶及節氣發想延伸至生活相關題材題材，為商品加大與民眾之間的共鳴。",
          },
        },
        {
          img_url: {
            type: "img@155x131",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F8d8c1878-0736-4eff-aa64-508dda8adb68.png?alt=media&token=45ee470f-c8a3-4a1a-8821-c8be63805cad",
          },
          name: { type: "text", value: "時事議題" },
          content: {
            type: "textarea",
            value:
              "每月以大數據抓取網絡流行的時事議題，結合社群玩法加大擴散的效益，使熱度持續延燒且加大聲量。",
          },
        },
        {
          img_url: {
            type: "img@155x131",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2Ffd05f17d-c658-4ec7-841e-2842a83f9649.png?alt=media&token=acfdb3f7-9631-4650-af75-273305cd3943",
          },
          name: { type: "text", value: "品牌形象" },
          content: {
            type: "textarea",
            value:
              "找出各項商品的品牌優勢及市場差異化為其目標受眾打造出需求並搭配其社群活動，確立品牌的定位。",
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