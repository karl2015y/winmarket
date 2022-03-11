<template>
  <section class="w-full bg-white">
    <div class="w-3/5 mx-auto">
      <h1 class="text-main text-xl text-center md:text-left">
        {{ loc_data.main.title.value }}
      </h1>
    </div>
    <div class="w-3/5 mx-auto flex flex-col-reverse md:flex-row">
      <div class="mt-5 md:mt-10 md:w-4/5">
        <p
          v-text="loc_data.main.content.value"
          class="leading-10 text-gray-500"
        />
        {{}}
      </div>
      <div
        class="md:-mt-5 mt-5 md:w-2/3 xl:w-1/2 flex justify-center items-center"
      >
        <img
          :src="loc_data.main.img_url.value"
          :alt="loc_data.main.title.value"
        />
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
        title: { type: "text", value: "社群貼文主題" },
        content: {
          type: "textarea",
          value:
            "　我們會針對以下題材及內容結合每月不同的節慶以及發燒話題延伸成不同的主題相呼應目標受眾，並以知識學堂、投票或心理測驗等互動遊戲帶出消費者心聲，得以讓話題延伸使其社群擴散達到最佳曝光率，新增潛在客戶為目的。",
        },
        img_url: {
          type: "img@400x450",
          value:
            "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F74e22880-ae05-486d-ada2-c30da5d36df7.png?alt=media&token=15580cf6-ae04-4ddd-81b4-8f2ff152de4e",
        },
      },
      sec: [],
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