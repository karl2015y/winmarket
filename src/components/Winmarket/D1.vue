<template>
  <PicText3
    class="px-8 md:px-24 xl:px-36 2xl:px-52 pt-5 md:pt-28 pb-12 md:pb-32"
      :chtTitle="loc_data.main.title_cht.value"
    :engTitle="loc_data.main.title_eng.value"
    _class="!w-full flex-col"
  >
    <div class="!w-full grid grid-cols-3 md:grid-cols-5 gap-3">
      <a href="#" v-for="item in show_list" :key="item">
        <div
          class="
            bg-gray-300
            w-full
            h-40
            md:h-36
            lg:h-44
            xl:h-52
            2xl:h-60
            relative
          "
        >
          <img
            class="w-full h-full object-cover"
            :src="item.img_url.value"
            alt=""
          />
          <div
            class="
              w-full
              h-full
              bg-main bg-opacity-75
              absolute
              top-0
              left-0
              opacity-0
              hover:opacity-100
              flex flex-col
              text-xs text-white
              justify-center
              items-center
            "
          >
            <h1 class="text-base mb-1">
              {{ item.name_cht.value }} / {{ item.name_eng.value }}
            </h1>
            <p class="whitespace-pre-line">
              {{ item.content.value }}
            </p>
          </div>
        </div>
      </a>
    </div>

    <nav v-if="all_pages > 1" aria-label="Page navigation example">
      <ul class="inline-flex items-center -space-x-px">
        <li @click="changePageHandler(show_page - 1)">
          <a
            href="#"
            class="
              block
              py-2
              px-3
              ml-0
              leading-tight
              text-gray-500
              bg-white
              rounded-l-lg
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
            "
          >
            <span class="sr-only">Previous</span>
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
        <li
          v-for="page in all_pages"
          :key="page"
          @click="changePageHandler(page)"
        >
          <a
            v-if="page == show_page"
            href="#"
            aria-current="page"
            class="
              z-10
              py-1.5
              px-3
              leading-tight
              text-blue-600
              bg-blue-50
              border border-blue-300
              hover:bg-blue-100 hover:text-blue-700
            "
            >{{ page }}</a
          >
          <a
            v-else
            href="#"
            class="
              py-1.5
              px-3
              leading-tight
              text-gray-500
              bg-white
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
            "
            >{{ page }}</a
          >
        </li>

        <!-- <li>
         
        </li> -->

        <li @click="changePageHandler(show_page + 1)">
          <a
            href="#"
            class="
              block
              py-2
              px-3
              leading-tight
              text-gray-500
              bg-white
              rounded-r-lg
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
            "
          >
            <span class="sr-only">Next</span>
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
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
        title_cht: { type: "text", value: "關於網紅" },
        title_eng: { type: "text", value: "" },
      },
      sec: [
        {
          img_url: {
            type: "img@600x600",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F73d1f247-627d-4c06-a461-ecc67ba3cc63.png?alt=media&token=406d9f92-b17c-4591-823e-46ac50bd4315",
          },
          name_cht: { type: "text", value: "a" },
          name_eng: { type: "text", value: "A" },
          content: { type: "textarea", value: "aaaa\naaaa\naaaa" },
        },
        {
          img_url: {
            type: "img@600x600",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2Fe2b49027-c823-4d45-b4c1-fbcc98f81171.png?alt=media&token=e40d21a0-8064-4398-b2d7-91c18e7cdca3",
          },
          name_cht: { type: "text", value: "b" },
          name_eng: { type: "text", value: "B" },
          content: { type: "textarea", value: "bbbb\nbbbb\nbbbb\nbbbb" },
        },
        {
          img_url: {
            type: "img@600x600",
            value:
              "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2Fc6fe9c0e-1277-4813-b535-c5c464fda6fa.png?alt=media&token=3c8e8c3b-247e-408f-b8f8-3cc8779004b1",
          },
          name_cht: { type: "text", value: "c" },
          name_eng: { type: "text", value: "C" },
          content: { type: "textarea", value: "cccc\ncccc\ncccc" },
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
    const all_pages = computed(() => {
      if (loc_data.value.main.show_count.value == "All") {
        return 0;
      }
      return Math.ceil(
        loc_data.value.sec.length / Number(loc_data.value.main.show_count.value)
      );
    });
    const show_page = ref(1);
    const changePageHandler = (val) => {
      if (val > all_pages.value || val < 1) {
        return false;
      }
      show_page.value = val;
    };
    const show_list = computed(() => {
      if (loc_data.value.main.show_count.value == "All") {
        return loc_data.value.sec;
      }
      return loc_data.value.sec.slice(
        (show_page.value - 1) * loc_data.value.main.show_count.value,
        show_page.value * loc_data.value.main.show_count.value
      );
    });

    return {
      loc_data,
      show_list,
      all_pages,
      show_page,
      changePageHandler,
    };
  },
};
</script>