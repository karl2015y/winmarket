<template>
  <PicText3
    class="px-16 md:px-48 pt-5 md:pt-28 pb-12 md:pb-32"
    :chtTitle="loc_data.main.title_cht.value"
    :engTitle="loc_data.main.title_eng.value"
    :base-width="33"
    _class="2xl:flex-wrap"
  >
    <Card1
      v-for="(item, index) in loc_data.sec"
      :key="item.title.value"
      :data="item"
      :data-wow-delay="`${index * 0.1}s`"
      data-wow-duration="0.55s"
      class="wow animate__fadeInRight w-32 md:w-80"
    />
  </PicText3>
</template>
<script>
import PicText3 from "@/components/PicText/PicText_3.vue";
import Card1 from "@/components/Card/Card_1.vue";
import { ref, watch } from "vue";

export default {
  components: {
    PicText3,
    Card1,
  },
  props: ["data"],
  setup(props) {
    const loc_data = ref({
      main: {
        title_cht: { type: "text", value: "公司動態" },
        title_eng: { type: "text", value: "FILM and TELEVISION" },
      },
      sec: [
        {
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