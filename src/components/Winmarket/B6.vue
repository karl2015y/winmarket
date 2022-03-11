<template>
  <PicText3
    class="px-16 md:px-48 pt-5 md:pt-28 pb-12 md:pb-32"
    :chtTitle="loc_data.main.title_cht.value"
    :engTitle="loc_data.main.title_eng.value"
    _class="!w-full"
  >
    <div class="!w-full grid grid-cols-3 gap-3">
      <div
        v-for="item in loc_data.sec"
        :key="item.img_url.value"
        class="bg-gray-300 w-24 h-24 md:w-full md:h-32 xl:h-48"
      >
        <img class="w-full h-full object-cover" :src="item.img_url.value" alt="">
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
        title_cht: { type: "text", value: "OUR CASES" },
        title_eng: { type: "text", value: "OUR CASES" },
      },
      sec: [
        {
          img_url: {
            type: "img@460x250",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F59738b8c-0190-4b20-8568-009e61d393d9.png?alt=media&token=c1e91da9-213c-4269-b0f5-365ad3fb3ad9",
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