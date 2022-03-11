<template>
  <PicText3
    class="px-16 xl:px-72 pt-5 md:pt-28 pb-12 md:pb-32"
    :chtTitle="loc_data.main.title_cht.value"
    :engTitle="loc_data.main.title_eng.value"
    _class="!w-full flex-col"
  >
    <div class="!w-full grid grid-cols-1 md:grid-cols-2 gap-3">
      <a
        v-for="item in show_list"
        :key="item.title.value"
        :href="item.link.value"
        class="w-full text-left"
      >
        <div
          class="
            w-full
            mb-7
            md:mb-1.5 md:pb-1.5
            flex
            gap-5
            md:block md:hover:shadow-2xl
            hover:shadow
          "
        >
          <div class="w-32 h-32 md:w-auto md:h-auto" style="min-width: 8rem">
            <img class="h-full w-full" :src="item.img_url.value" />
          </div>
          <div class="lg:px-4 md:px-2 px-1">
            <h2 class="md:mt-4 text-lg text-main font-medium">
              {{ item.title.value }}
            </h2>
            <div class="mt-1 md:mt-3 md:w-auto text-xs">
              <p class="line-clamp-3 whitespace-pre-line">
                {{ item.content.value }}
              </p>
            </div>

            <div
              class="
                whitespace-nowrap
                my-3
                pb-1.5
                border-b
                text-gray-80
                w-16
                border-gray-80
              "
            >
              {{ item.date.value }}
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="text-center">
      <button
        v-if="show_more_button"
        @click="showMoreHandler()"
        class="
          mt-3
          md:mt-6
          w-28
          text-gray-600
          border-solid border-gray-600 border
          rounded-full
          font-bold
          text-xs
          py-1
          md:py-1.5
        "
      >
        了解更多
      </button>
    </div>
  </PicText3>
</template>
<script>
import PicText3 from "@/components/PicText/PicText_3.vue";
import { computed, ref, watch } from "vue";

export default {
  components: {
    PicText3,
  },
  props: ["data"],
  setup(props) {
    const loc_data = ref({
      main: {
        show_count: { type: "text", value: "1" },
        title_cht: { type: "text", value: "社會公益" },
        title_eng: { type: "text", value: "" },
      },
      sec: [
        {
          img_url: {
            type: "img@600x600",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2Fff89a00d-ce83-471a-8350-4e2a317c8e37.png?alt=media&token=394e6985-1aae-4b3a-bbce-268c7a3970f8",
          },
          title: { type: "text", value: "文章示範標題1" },
          content: {
            type: "textarea",
            value:
              " 內文重點示範文字 ， 字數限制如敘述內可容納之內文重點示範文字 ， 字數限制如敘述內可容納之內文重點示範文字 ， 字數限制如敘述內可容納之內文重點示範文字 ， 字數限制如敘述內可容納之 \n",
          },
          date: { type: "text", value: "2022/03/09" },
          link: { type: "text", value: "https://www.google.com" },
        },
        {
          img_url: {
            type: "img@600x600",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2Fcb5c77f4-b8ad-4f7c-93e1-948dbe8d1a0c.png?alt=media&token=03da2c36-f41d-42ee-93f2-d588ada5d836",
          },
          title: { type: "text", value: "文章示範標題2" },
          content: {
            type: "textarea",
            value:
              " 內文重點示範文字 ， 字數限制如敘述內可容納之內文重點示範文字 ， 字數限制如敘述內可容納之內文重點示範文字 ， 字數限制如敘述內可容納之內文重點示範文字 ， 字數限制如敘述內可容納之 \n",
          },
          date: { type: "text", value: "2022/03/10" },
          link: { type: "text", value: "https://www.google.com" },
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
    const show_more_button = computed(() => {
      return show_list.value.length < loc_data.value.sec.length;
    });

    const show_page = ref(1);
    const showMoreHandler = () => {
      show_page.value++;
    };
    const show_list = computed(() => {
      if (loc_data.value.main.show_count.value == "All") {
        return loc_data.value.sec;
      }
      return loc_data.value.sec.slice(
        0,
        show_page.value * loc_data.value.main.show_count.value
      );
    });
    return {
      loc_data,
      show_more_button,
      showMoreHandler,
      show_list,
    };
  },
};
</script>