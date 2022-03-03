<template>
  <header class="text-gray-600 body-font">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        p-5
        flex-col
        md:flex-row
        items-center
      "
    >
      <a
        class="
          flex
          title-font
          font-medium
          items-center
          text-gray-900
          mb-4
          md:mb-0
        "
      >
        <img
          v-if="data"
          :src="data.main.pic.value"
          alt=""
          class="w-12 h-12 rounded-full"
        />
        <span
          v-text="data ? data.main.title.value : 'Tailblocks'"
          class="ml-3 text-xl"
        />
      </a>
      <nav
        v-if="data && data.sec"
        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        <a
          v-for="item in data.sec"
          :key="item"
          :href="item.link.value"
          class="mr-5 hover:text-gray-900"
          >{{ item.title.value }}</a
        >
      </nav>
      <!-- <button
        class="
          inline-flex
          items-center
          bg-gray-100
          border-0
          py-1
          px-3
          focus:outline-none
          hover:bg-gray-200
          rounded
          text-base
          mt-4
          md:mt-0
        "
      >
        Button
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button> -->
    </div>
  </header>
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