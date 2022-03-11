<template>
  <div>
    <img
      class="h-auto w-[97%] mx-auto"
      :src="loc_data.img_url.value"
      :alt="loc_data.title.value"
    />
    <h1
      class="
        mt-3
        md:mt-6
        tracking-widest
        leading-4
        text-sm text-sec text-left
        md:text-xl
        font-bold
        italic
        font-['Open_Sans']
      "
    >
      {{ loc_data.title.value }}
    </h1>

    <p
      class="
        mt-3
        line-clamp-6
        md:line-clamp-5
        text-left text-sm
        md:text-base
        text-third
        font-light
      "
    >
      {{ loc_data.content.value }}
    </p>
    <a :href="loc_data.button_link.value">
      <button
        class="
          mt-3
          md:mt-6
          w-[90%]
          text-white
          rounded-full
          bg-main
          font-bold
          text-xs
          pt-1
          md:py-1.5
        "
      >
        {{ loc_data.button_text.value }}
      </button>
    </a>
  </div>
</template>
<script>
import { ref, watch } from "vue";

export default {
  props: ["data"],
  setup(props) {
    const loc_data = ref({
      img_url: {
        type: "img@400x300",
        value:
          "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F1254f839-8378-482e-b028-d553421f9ce3.png?alt=media&token=d568d875-9085-4579-ad14-c2f28b83be09",
      },
      title: { type: "text", value: "WIN MARKET CHANNEL" },
      content: {
        type: "textarea",
        value:
          " 「老實說，血拼一場完勝心理治療。花同樣的錢，血拼完你還有漂亮衣服穿哩。」 — 《購物狂的異想世界》BUT !~ 來WIN MARKET CHANNEL購物，才可以說是「完全勝利」！12月購物官網正式上架，還搭配各種折扣優惠、驚喜好禮、限時活動要送給你與妳喔！HEY~別等了，趕快來逛逛吧 ",
      },
      button_text: { type: "text", value: "閱讀更多" },
      button_link: { type: "text", value: "#123" },
    });
    if (props.data) {
      loc_data.value = JSON.parse(JSON.stringify(props.data));
      watch(
        () => props.data,
        (val) => {
          loc_data.value = JSON.parse(JSON.stringify(val));
        }
      );
    }
    return {
      loc_data,
    };
  },
};
</script>
<style scoped>
</style>