<template>
  <section class="text-gray-600 body-font">
    <div
      class="
        container
        mx-auto
        flex
        px-5
        py-24
        md:flex-row
        flex-col
        items-center
      "
    >
      <div
        class="
          lg:flex-grow
          md:w-1/2
          lg:pr-24
          md:pr-16
          flex flex-col
          md:items-start md:text-left
          mb-16
          md:mb-0
          items-center
          text-center
        "
      >
        <h1
          class="
            title-font
            sm:text-4xl
            text-3xl
            mb-4
            font-medium
            text-gray-900
            whitespace-pre-line
          "
          v-html="data ? data.main.title.value : '主標題'"
        />

        <p
          class="mb-8 leading-relaxed whitespace-pre-line"
          v-text="data ? data.main.content.value : '內容'"
        />

        <div class="flex justify-center">
          <a
             v-if="!data || data.main.button1.value"
            class="
              text-white
              bg-skin-500
              border-0
              py-2
              px-6
              focus:outline-none
              hover:bg-skin-600
              rounded
              text-lg
              inline-flex
            "
            :href="data ? data.main.button1_link.value : ''"
          >
            <button v-if="data && data.main.button1 && data.main.button1.value">
              {{ data.main.button1.value }}
            </button>
            <button v-else>主按鈕</button>
          </a>
          <a
            v-if="!data || data.main.button2.value"
            class="
              ml-4
              inline-flex
              text-gray-700
              bg-gray-100
              border-0
              py-2
              px-6
              focus:outline-none
              hover:bg-gray-200
              rounded
              text-lg
            "
            :href="data ? data.main.button2_link.value : ''"
          >
            <button v-if="data && data.main.button2 && data.main.button2.value">
              {{ data.main.button2.value }}
            </button>
            <button v-else>副按鈕</button>
          </a>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          :src="data ? data.main.pic.value : `https://dummyimage.com/720x600`"
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
    const data = ref(null);
    if (props.data) {
      data.value = JSON.parse(props.data);
      watch(
        () => props.data,
        (val) => {
          data.value = JSON.parse(val);
        }
      );
    }
    return {
      data,
    };
  },
};
</script>
<style scoped>
</style>