<template>
  <PicText3
    class="w-full pt-5 md:pt-28 pb-12 md:pb-32 bg-white"
    :chtTitle="loc_data.main.title.value"
    engTitle=""
    _class="!w-full flex-col"
  >
    <div class="!w-3/5 mx-auto gap-3 grid grid-cols-2 md:grid-cols-4">
      <div
        v-for="item in loc_data.sec"
        :key="item"
        class="w-full flex flex-col"
      >
        <h1 class="text-left ml-5 font-bold">{{ item.title.value }}</h1>
        <p
          class="
            border-solid border-l-8 border-skin-500
            pl-3
            mt-4
            text-left text-gray-400
            whitespace-pre-line
          "
        >
          {{ item.content.value }}
        </p>
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
      main: { title: { type: "text", value: "穩盈的優勢" } },
      sec: [
        {
          title: { type: "text", value: "行銷設計" },
          content: {
            type: "textarea",
            value: "品牌定位分析\n網站數位行銷\n前台UI/UX規劃",
          },
        },
        {
          title: { type: "text", value: "社群企劃" },
          content: {
            type: "textarea",
            value: "精準瞄準受眾\n架構社群規劃\n執行媒體預算",
          },
        },
        {
          title: { type: "text", value: "數據企劃" },
          content: {
            type: "textarea",
            value: "數據優化追蹤\n廣告投放代操\n再行銷服務",
          },
        },
        {
          title: { type: "text", value: "視覺設計" },
          content: {
            type: "textarea",
            value: "社群素材產出\n形象設計輸出\n企業CIS設計",
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