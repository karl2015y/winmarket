<template>
  <section
    class="
      px-5
      md:px-48
      lg:px-64
      2xl:px-72
      pt-5
      md:pt-24
      pb-12
      md:pb-28
      bg-skin-500
    "
  >
    <div class="w-full flex justify-center flex-col items-center">
      <img class="h-auto w-14" :src="loc_data.main.icon.value" :alt="loc_data.main.title.value" />
      <h2 class="text-white my-3.5">{{ loc_data.main.title.value }}</h2>
    </div>
    <div class="mt-6 grid grid-cols-3 xl:grid-cols-6 gap-10 xl:gap-0">
      <div v-for="icon in loc_data.sec" :key="icon">
        <div
          class="
            mx-auto
            w-20
            h-20
            border-solid border-4 border-white
            rounded-full
            flex
            justify-center
            items-center
          "
        >
          <img
            class="h-14 w-14"
            :src="icon.icon_url.value"
            :alt="icon.title.value"
          />
        </div>
        <div class="mt-6 text-[#FCD44D] text-center">
          <div class="-mt-3 text-xs" v-if="icon.subTitle.value">
            {{ icon.subTitle.value }}
          </div>
          <h3>
            {{ icon.title.value }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ref, watch } from "vue";

export default {
  props: ["data"],

  setup(props) {
    const loc_data = ref({
      main: {
        icon: {
          type: "img@75x75",
          value:
            "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F1e133e01-dd48-4634-8df9-61f707ad006d.png?alt=media&token=72ad29a7-7ee9-4b8d-9512-cd64fbb9f594",
        },
        title: { type: "text", value: "『 憑什麼 』懶人包" },
      },
      sec: [
        {
          title: { type: "text", value: "廣告投放操作" },
          subTitle: { type: "text", value: "" },
          icon_url: {
            type: "img@75x75",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F0b32aad9-22d9-4546-bb2c-7b14a5707ee2.png?alt=media&token=c2a509fc-fe45-4545-99d9-a88bddee1de2",
          },
        },
        {
          title: { type: "text", value: "社群媒體整合" },
          subTitle: { type: "text", value: "" },
          icon_url: {
            type: "img@75x75",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F1986fb54-fd73-4f48-83f0-626c2c9af711.png?alt=media&token=8730d91b-97db-4340-9788-d7d9915fc668",
          },
        },
        {
          title: { type: "text", value: "影音圖文素材" },
          subTitle: { type: "text", value: "" },
          icon_url: {
            type: "img@75x75",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F5ef0a90f-a0fe-4d7e-b5d2-53cc252ed91a.png?alt=media&token=2be9988a-6366-406c-aca5-506972b10714",
          },
        },
        {
          title: { type: "text", value: "電商平台" },
          subTitle: { type: "text", value: "Win Market Channel" },
          icon_url: {
            type: "img@75x75",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F8d3ee5ec-2c35-40d1-8e93-13115956d0e5.png?alt=media&token=5aa95712-057c-49c3-ac2b-90a58e473970",
          },
        },
        {
          title: { type: "text", value: "自媒體電視台" },
          subTitle: { type: "text", value: "Win Market Channel" },
          icon_url: {
            type: "img@75x75",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F78202d10-9850-4bad-9ca1-012224213191.png?alt=media&token=8338b69d-4d59-4c8f-8c3d-84f993e538f4",
          },
        },
        {
          title: { type: "text", value: "網紅宅經濟" },
          subTitle: { type: "text", value: "" },
          icon_url: {
            type: "img@75x75",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2Fab787e7a-926a-4b07-8481-030c767aa16b.png?alt=media&token=7afd7331-8a22-4197-9c58-75cbb1caaba9",
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

    return {
      loc_data,
    };
  },
};
</script>