<template>
  <PicText3
    class="
      border-y-[3.4vw] border-solid border-main
      bg-[url('/icon/bg05-02.jpg')] bg-repeat-y
      md:bg-cover
      bg-contain
      px-16
      md:px-8
      xl:px-32
      2xl:px-48
      pt-5
      md:pt-28
      pb-12
      md:pb-56
    "
    :chtTitle="loc_data.main.title_cht.value"
    :engTitle="loc_data.main.title_eng.value"
    _chtTitleClass="text-white md:mt-5"
    _engTitleClass="text-[#FCD44D] mt-2.5 mb:mb-5 md:mt-0 md:mb-32"
    _class="flex-wrap md:flex-nowrap md:!gap-3 !mt-4"
  >
    <Card3
      v-for="item in loc_data.sec"
      :key="item.name_cht.value"
      :data-wow-delay="`${item.delay.value}s`"
      data-wow-duration="0.5s"
      :src="item.img_url.value"
      class="wow animate__fadeInRight w-[28%]"
      :chtName="item.name_cht.value"
      :engName="item.name_eng.value"
      :jobTitle="item.title.value"
    />
  </PicText3>
</template>
<script>
import PicText3 from "@/components/PicText/PicText_3.vue";
import Card3 from "@/components/Card/Card_3.vue";
import { ref, watch } from "vue";

export default {
  components: {
    PicText3,
    Card3,
  },
  props: ["data"],
  setup(props) {
    const loc_data = ref({
      main: {
        title_cht: { type: "text", value: "行銷企劃團隊" },
        title_eng: { type: "text", value: "MARKETING PLANNING TEAM" },
      },
      sec: [
        {
          img_url: {
            type: "img@300x300",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2Feb8cc515-b3b7-4a57-b2b3-182b7491e4ff.png?alt=media&token=24759e41-69f6-4a2b-babc-22d26a5bd3f2",
          },
          title: { type: "text", value: "品牌行銷企劃經理" },
          name_cht: { type: "text", value: "鄭洛喬" },
          name_eng: { type: "text", value: "Elie" },
          delay: { type: "text", value: "0.25" },
        },
        {
          img_url: {
            type: "img@300x300",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F7c4da530-330c-48aa-9fec-cfb12829b4c7.png?alt=media&token=307f137e-d5a3-48c5-9c61-e0634c982969",
          },
          title: { type: "text", value: "特助/IT支援" },
          name_cht: { type: "text", value: "李佩芬" },
          name_eng: { type: "text", value: "Joanne" },
          delay: { type: "text", value: "0.15" },
        },
        {
          img_url: {
            type: "img@300x300",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F3e9e9046-2903-40ac-ac07-f08ac5e67226.png?alt=media&token=f5191938-0db1-4647-b342-902f199a6026",
          },
          title: { type: "text", value: "品牌行銷企劃主任" },
          name_cht: { type: "text", value: "王彥君" },
          name_eng: { type: "text", value: "Amber" },
          delay: { type: "text", value: "0.5" },
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