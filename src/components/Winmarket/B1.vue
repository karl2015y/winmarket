<template>
  <section
    ref="root"
    class="
      border-b border-solid border-main
      flex flex-col
      justify-center
      items-center
      bg-cover bg-no-repeat bg-left
      w-full
      h-[110vw]
      md:h-[56.25vw]
      c-bg-img
    "
  >
    <p class="wow animate__fadeInUp w-80 md:w-[34vw] mb-11 text-sec text-xl">
      {{ loc_data.main.content.value }}
    </p>
    <ul class="wow animate__fadeInUp w-80 text-third">
      <li
        v-for="item in loc_data.sec"
        :key="item.title.value"
        class="whitespace-nowrap"
      >
        {{ item.title.value }}
      </li>
    </ul>
  </section>
</template>
<script>
import { onMounted, ref, nextTick, watch } from "vue";

export default {
  props: ["data"],
  setup(props) {
    const root = ref(null);
    const loc_data = ref({
      main: {
        pic_phone: {
          type: "img@768x845",
          value:
            "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F606cac7d-ac70-4af5-b190-b7f525cd348b.png?alt=media&token=24ca7a49-8b70-48d3-82a1-8af967749c19",
        },
        pic_desktop: {
          type: "img@1920x1080",
          value:
            "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2Ff50e849a-d302-4333-9d71-579b4a1d7537.png?alt=media&token=291b9377-028d-48e0-8a10-7218df3c544c",
        },
        content: {
          type: "textarea",
          value:
            "『以領先洞察力佐以完備的行銷資源，撥轉市場的脈絡，帶領客戶群開創下一個黃金世代。』",
        },
      },
      sec: [
        {
          title: {
            type: "text",
            value: "‧ 大數據分析，頂尖團隊客定您的行銷方案",
          },
        },
        {
          title: {
            type: "text",
            value: "‧ 全方位電商世代，最懂您的多元化行銷",
          },
        },
        { title: { type: "text", value: "‧ 專業影視拍攝，掀起熱潮刺激銷售" } },
        { title: { type: "text", value: "‧ 特約網紅直播導購，流量帶動銷量" } },
        {
          title: {
            type: "text",
            value: "‧ 自有影視團隊企劃電視台節目，跟著收視齊長紅",
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
          setRootBackground(
            loc_data.value.main.pic_phone.value,
            loc_data.value.main.pic_desktop.value
          );
        }
      );
    }
    const setRootBackground = async (phone_img, desk_img) => {
      console.log(root.value);
      const el = root.value;
      await nextTick();
      el.style.setProperty("--background-md-img", `url(${desk_img})`);
      el.style.setProperty("--background-img", `url(${phone_img})`);
    };

    onMounted(() => {
      setRootBackground(
        loc_data.value.main.pic_phone.value,
        loc_data.value.main.pic_desktop.value
      );
    });
    return {
      root,
      loc_data,
    };
  },
};
</script>
<style scoped>
.c-bg-img {
  background-image: var(--background-img);
}

@media (min-width: 768px) {
  .c-bg-img {
    background-image: var(--background-md-img);
  }
}
</style>