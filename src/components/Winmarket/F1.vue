<template>
  <PicText3
    class="px-16 md:px-44 xl:px-72 pt-5 md:pt-28 pb-12 md:pb-32  bg-white"
    chtTitle="穩盈的優勢"
    engTitle=""
    _class="!w-full flex-col"
  >
    <p class="whitespace-pre-line text-left leading-8 text-gray-500">
      　　為台灣地區KOC簽約量體第一的公司,近年來更專注在落實人人均可成為KOC這件事情上,一年至少可打造出300名以上的KOC,涵蓋各個年齡層、各種職業,替話題或產品提供信任感擴散、商品提高聲量。
      <br />
      　　同時優質影音製作團隊,具備電影、戲劇製作經驗,腳本、拍攝、後製一條龍完成,協助客戶用最低的預算完成心目中最期待的作品。
    </p>
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
        name: "廣告投放操作",
        content:
          "分析市場現況並針對產品瞄準其目標受眾做廣告投放,後續提供數據追蹤及優化分析。",
        image_url: "/pic/About/icon-01.png",
      },
      {
        name: "社群媒體整合",
        content:
          "代營運Facebook、Instagram、Youtube、TikTok項目,運用貼文、圖像及影音素材為您打造量身方案創造高流量。",
        image_url: "/pic/About/icon-02.png",
      },
      {
        name: "影音圖文素材",
        content:
          "專業攝影製作團隊協助您拍攝圖像影音等素材,再幫您後製提供社群使用。",
        image_url: "/pic/About/icon-03.png",
      },
    ]);
    return {
      _data,
    };
  },
};
</script>