<template>
  <PicText3
    class="w-full pt-5 md:pt-28 pb-12 md:pb-32 bg-white"
    chtTitle="穩盈的優勢"
    engTitle=""
    _class="!w-full flex-col"
  >
    <div class="!w-3/5 mx-auto gap-3 grid grid-cols-2 md:grid-cols-4">
      <div v-for="item in _data" :key="item" class="w-full flex flex-col">
        <h1 class="text-left ml-5 font-bold">{{ item.name }}</h1>
        <p
          class="
            border-solid border-l-8 border-skin-500
            pl-3
            mt-4
            text-left text-gray-400
            whitespace-pre-line
          "
        >
          {{ item.content }}
        </p>
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
        name: "行銷設計",
        content: "品牌定位分析\n網站數位行銷\n前台UI/UX規劃",
      },
      {
        name: "社群企劃",
        content: "精準瞄準受眾\n架構社群規劃\n執行媒體預算",
      },
      {
        name: "數據企劃",
        content: "數據優化追蹤\n廣告投放代操\n再行銷服務",
      },
      {
        name: "視覺設計",
        content: "社群素材產出\n形象設計輸出\n企業CIS設計",
      },
    ]);
    return {
      _data,
    };
  },
};
</script>