<template>
  <!-- 元件列表 -->
  <template v-for="component in components_list" :key="component.id">
    <component :id="component.id" :is="component.type" :data="component.data" />
  </template>
</template>
<script>
import { useRoute } from "vue-router";
import { onMounted, ref, watch, inject } from "vue";
import _components from "@/components/list.js";
import {
  getDocWithInsideCollection,
  batchSetDocument2Collection,
  getCollectionList,
  deleteDocument,
} from "@/db.js";

export default {
  components: { ..._components },
  setup() {
    const route = useRoute();
    const page_id = ref(route.params.page_id);
    const components_list = ref([]);

    const { chageLoadingStatusHandler } = inject("mapStore");

    // 取得firebase資料
    const getComponentsDataHandler = () => {
      console.log("getComponentsDataHandler", 1, page_id.value);
      chageLoadingStatusHandler("Page_getComponentsDataHandler", true);
      components_list.value = [];
      getCollectionList(["pages", page_id.value, "components_list"]).then(
        (datas) => {
          components_list.value = datas.sort((a, b) => a.sort - b.sort);
          console.log("getComponentsDataHandler", 2);
          chageLoadingStatusHandler("Page_getComponentsDataHandler", false);
        }
      );
    };

    onMounted(() => {
      getComponentsDataHandler();
    });

    watch(
      () => route.fullPath,
      async () => {
        console.log(route.fullPath);
        page_id.value = route.params.page_id;
        getComponentsDataHandler();
      }
    );
    return {
      components_list,
    };
  },
};
</script>