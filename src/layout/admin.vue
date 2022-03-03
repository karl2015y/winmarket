<template>
  <div class="flex items-center shadow">
    <button
      v-if="hasHistoryStatus"
      @click="routerBack()"
      class="p-2 hover:shadow rounded-full m-2 inline-block"
    >
      <svg
        class="w-6 h-6 text-blue-500 hover:text-blue-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </button>
    <h2>後臺管理</h2>
  </div>

  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const hasHistoryStatus = ref(true);
    const hasHistoryHandler = () => {
      hasHistoryStatus.value = window.history.length > 2;
    };
    const routerBack = () => {
      router.back();
    };

    return {
      hasHistoryStatus,
      routerBack,
    };
  },
};
</script>