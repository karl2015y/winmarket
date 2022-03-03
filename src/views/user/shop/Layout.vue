<template  >
  <template v-if="setting">
    <!-- header -->
    <component :is="setting.header.type" :data="setting.header.data" />
    <div class="mx-5 md:mx-10">
      <ProductBreadcrumb
        class="bg-white px-5 py-2 rounded md:mb-5 w-screen -ml-5 md:-ml-10"
      />

      <router-view :key="$route.fullPath" />
    </div>
    <!-- footer -->
    <component :is="setting.footer.type" :data="setting.footer.data" />
  </template>
</template>



<script>
import { getDocumentObject } from "@/db.js";
import { onMounted, ref, watch, inject } from "vue";
import _components from "@/components/list.js";
import { useRoute } from "vue-router";
import ProductBreadcrumb from "../components/ProductBreadcrumb.vue";

export default {
  name: "ShopLayout",
  components: { ..._components, ProductBreadcrumb },

  setup() {
    const { chageLoadingStatusHandler } = inject("mapStore");

    const route = useRoute();

    const setting = ref(null);
    const getSettingHandler = () => {
      chageLoadingStatusHandler("Layout_getSettingHandler", true);

      getDocumentObject(["products/setting"]).then((data) => {
        setting.value = data;
        route.params.setting = setting.value;
        chageLoadingStatusHandler("Layout_getSettingHandler", false);
      });
    };

    watch(
      () => route.fullPath,
      async () => {
        route.params.setting = setting.value;
      }
    );

    onMounted(() => {
      getSettingHandler();
    });
    return {
      setting,
    };
  },
};
</script>