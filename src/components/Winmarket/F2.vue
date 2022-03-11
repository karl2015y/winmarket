<template>
  <section
    class="
      md:bg-[url('/pic/About/bg03.jpg')] md:bg-contain
      xl:bg-cover
      bg-no-repeat bg-center
      w-full
      md:px-[10vw]
      py-14
      md:pt-52
      xl:pt-24
      md:pb-72
      text-center
      md:text-left
      wow
      animate__fadeInUp
    "
  >
    <div class="bg-main md:bg-inherit mx-28 -mt-20 mb-5 py-3 md:m-0 md:p-0">
      <h1 class="md:mt-9 md:ml-8 text-white font-bold">
        {{ loc_data.main.title.value }}
      </h1>
    </div>

    <div class="w-1/2 md:w-full mx-auto">
      <template v-for="(item, index) in loc_data.sec" :key="item">
        <h1
          v-if="index == 0"
          class="md:mt-8 xl:mt-20 text-skin-500 tracking-widest"
        >
          {{ item.title.value }}
        </h1>
        <h1 v-else class="mt-3 text-skin-500 tracking-widest">
          {{ item.title.value }}
        </h1>
        <div class="xl:mt-1 text-gray-500">
            {{ item.content.value }}
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import { ref, watch } from "vue";
export default {
  props: ["data"],
  setup(props) {
    const loc_data = ref({
      main: { title: { type: "text", value: "社群佈局打造流量變現服務" } },
      sec: [
        {
          title: { type: "text", value: "人設IP建置" },
          content: {
            type: "textarea",
            value: "運用人設IP使品牌社群人格化,能更貼近消費者使之產生連結。",
          },
        },
        {
          title: { type: "text", value: "高流量觸及率" },
          content: {
            type: "textarea",
            value: "設計專屬引流活動搭配貼文推廣讓粉絲數提升、提高專頁品質。",
          },
        },
        {
          title: { type: "text", value: "互動行為擴散" },
          content: {
            type: "textarea",
            value: "以多樣性內容吸引大批用戶按讚、留言及分享,達到高互動目的。",
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