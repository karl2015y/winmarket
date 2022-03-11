<template>
  <PicText3
    class="px-16 md:px-48 pt-5 md:pt-28 pb-12 md:pb-32"
    :chtTitle="loc_data.main.title_cht.value"
    :engTitle="loc_data.main.title_eng.value"
    _class="md:flex-wrap"
  >
    <Card2
      v-for="(item, index) in loc_data.sec"
      :key="item.name.value"
      :data-wow-delay="`${index * 0.1}s`"
      data-wow-duration="0.55s"
      :src="item.img_url.value"
      :jobTitle="item.title.value"
      :chtName="item.name.value"
      :description="item.content.value"
      class="wow animate__fadeInLeft w-28 md:w-24 lg:w-24 xl:w-40 2xl:w-56"
      :class="{
        'mx-auto': loc_data.sec.length == 1,
        'ml-auto': loc_data.sec.length >= 3 && (index + 1) % 3 == 1,
        'mr-auto': loc_data.sec.length >= 3 && (index + 1) % 3 == 0,
      }"
    />
  </PicText3>
</template>
<script>
import PicText3 from "@/components/PicText/PicText_3.vue";
import Card2 from "@/components/Card/Card_2.vue";
import { ref, watch } from "vue";

export default {
  components: {
    PicText3,
    Card2,
  },
  props: ["data"],
  setup(props) {
    const loc_data = ref({
      main: {
        title_cht: { type: "text", value: "影像製作團隊" },
        title_eng: { type: "text", value: "FILM and PRODUCTION TEAM" },
      },
      sec: [
        {
          img_url: {
            type: "img@300x300",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2Fe4a6136f-955c-4b4f-99e1-b4eb2e952490.png?alt=media&token=60899a6c-3576-4400-bd32-1f234b204906",
          },
          title: { type: "text", value: "導演" },
          name: { type: "text", value: "馬菘駿(進達)" },
          content: {
            type: "textarea",
            value:
              "\n\n\n\n〈我的青春沒在怕〉 導演&製作人、〈麥密花園〉、〈歡喜玉玲瓏〉、〈紅白勝利〉綜藝節目等",
          },
        },
        {
          img_url: {
            type: "img@300x300",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F8d902dd6-c731-446e-997d-0bbec9fd626e.png?alt=media&token=de107403-9b9e-4ef5-b9dc-ed62e0384c34",
          },
          title: { type: "text", value: "導演" },
          name: { type: "text", value: "陳戎暉" },
          content: {
            type: "textarea",
            value:
              "執導多部台灣當紅\n愛情偶像劇\n\n\n〈女王的誕生〉、〈大紅帽與小野狼〉、〈妹妹〉、〈愛上哥們〉、〈聽見幸福〉等",
          },
        },
        {
          img_url: {
            type: "img@300x300",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2Ff862fa37-b5b5-4fc7-9fb4-84d6a0ab4e02.png?alt=media&token=111a201d-14c7-4e55-8b28-fda61f28f0d3",
          },
          title: { type: "text", value: "執行製片人" },
          name: { type: "text", value: "張中平" },
          content: {
            type: "textarea",
            value:
              "從事影視行業20年\n以上的豐富經驗\n\n〈廢財闖天關〉 製片主任、〈三明治女孩的逆襲〉執行製片人、〈廉政英雄〉執行製片、〈家和萬事興〉、〈天下父母心〉執行製片等",
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

