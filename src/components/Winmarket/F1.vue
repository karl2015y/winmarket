<template>
  <PicText3
    class="px-16 md:px-44 xl:px-72 pt-5 md:pt-28 pb-12 md:pb-32 bg-white"
    :chtTitle="loc_data.main.title_cht.value"
    :engTitle="loc_data.main.title_eng.value"
    _class="!w-full flex-col"
  >
    <p class="whitespace-pre-line text-left leading-8 text-gray-500">
      {{ loc_data.main.content.value }}
    </p>
    <div class="!w-full flex flex-col md:flex-row gap-16 justify-center">
      <div
        v-for="item in loc_data.sec"
        :key="item.name.value"
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
        content: {
          type: "textarea",
          value:
            "　　為台灣地區KOC簽約量體第一的公司,近年來更專注在落實人人均可成為KOC這件事情上,一年至少可打造出300名以上的KOC,涵蓋各個年齡層、各種職業,替話題或產品提供信任感擴散、商品提高聲量。\n　　同時優質影音製作團隊,具備電影、戲劇製作經驗,腳本、拍攝、後製一條龍完成,協助客戶用最低的預算完成心目中最期待的作品。",
        },
      },
      sec: [
        {
          img_url: {
            type: "img@155x131",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F549f69ec-72b3-4f11-8712-8af7d769ba08.png?alt=media&token=fce1b122-f180-49ec-b125-bc082978cfd3",
          },
          name: { type: "text", value: "廣告投放操作" },
          content: {
            type: "textarea",
            value:
              "分析市場現況並針對產品瞄準其目標受眾做廣告投放,後續提供數據追蹤及優化分析。",
          },
        },
        {
          img_url: {
            type: "img@155x131",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F270a9d63-6034-4c16-8156-6960a76062b3.png?alt=media&token=35f35d0c-b290-4f08-a335-c52a4d89deed",
          },
          name: { type: "text", value: "社群媒體整合" },
          content: {
            type: "textarea",
            value:
              "代營運Facebook、Instagram、Youtube、TikTok項目,運用貼文、圖像及影音素材為您打造量身方案創造高流量。",
          },
        },
        {
          img_url: {
            type: "img@155x131",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2Fce8fb116-e8d9-4297-b7e7-48ce5f72a34f.png?alt=media&token=0131890e-c48a-40d4-a5f8-be2e6c95b1a4",
          },
          name: { type: "text", value: "影音圖文素材" },
          content: {
            type: "textarea",
            value:
              "專業攝影製作團隊協助您拍攝圖像影音等素材,再幫您後製提供社群使用。",
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