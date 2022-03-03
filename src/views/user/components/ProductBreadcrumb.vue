<template>
  <nav v-if="history_url_list.length > 0" class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <template v-for="(item, index) in history_url_list" :key="item.link">
        <!-- 第一個 -->
        <li v-if="index == 0" class="inline-flex items-center">
          <router-link
            :to="item.link"
            class="inline-flex items-center text-sm font-medium text-gray-700"
            >{{ item.name }}</router-link
          >
        </li>
        <!-- 最後一個 -->
        <li
          v-else-if="index == history_url_list.length - 1"
          aria-current="page"
        >
          <div class="flex items-center">
            <svg
              class="w-6 h-6 text-gray-400"
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
            <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2">{{
              item.name
            }}</span>
          </div>
        </li>
        <!-- 中間的 -->
        <li v-else>
          <div class="flex items-center">
            <svg
              class="w-6 h-6 text-gray-400"
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
            <router-link
              :to="item.link"
              class="ml-1 text-sm font-medium text-gray-700 md:ml-2"
              >{{ item.name }}</router-link
            >
          </div>
        </li>
      </template>
    </ol>
    <div class="ml-auto md:mr-8">
      <CartButton />
    </div>
  </nav>
</template>
<script>
import { computed, ref, inject } from "vue";
import CartButton from "@/views/user/components/CartButton.vue";

export default {
  components: { CartButton },
  setup() {
    const { state } = inject("mapStore");
    const history_url_list = computed(() => state.history);
    // const history_url_list = ref([
    //   { link: "/shop", name: "商店" },
    //   { link: "/shop?category=熱門商品", name: "熱門商品" },
    //   { link: "/shop/product/X5JwTx43dog5fANhtXcW", name: "紅貓貓" },
    // ]);

    return {
      history_url_list,
    };
  },
};
</script>