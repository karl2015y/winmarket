<template>
  <div class="flex">
    <div
      v-if="product_category_list.length > 0"
      class="md:w-1/3 w-0 overflow-hidden"
    >
      <div>
        <router-link
          :to="{
            name: 'shop',
          }"
          class="text-blue-500 hover:text-blue-300"
        >
          全部商品
        </router-link>
      </div>
      <div v-for="item in product_category_list" :key="item">
        <router-link
          :to="{
            name: 'shop',
            query: { category: item.name },
          }"
          class="text-blue-500 hover:text-blue-300"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
    <div class="w-full">
      <div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mb-13">
        <ProductListByCategory
          :product_category="
            $route.query && $route.query.category
              ? [$route.query.category]
              : null
          "
          :max="16"
          :need_more="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { watch, onMounted, ref, inject } from "vue";
import {
  lazyGetCollectionList,
  deleteDocument,
  getDocumentObject,
  setDocument2Collection,
  pushDocument2Collection,
  batchSetDocument2Collection,
  deleteFile,
  getDocWithInsideCollection,
} from "@/db.js";
import { useRoute } from "vue-router";
import ProductCard from "../components/ProductCard.vue";
import ProductListByCategory from "../components/ProductListByCategory.vue";

export default {
  components: { ProductCard, ProductListByCategory },
  props: ["category"],
  setup(props) {
    const { chageLoadingStatusHandler, setHistory } = inject("mapStore");
    // setHistory([{ link: "/shop", name: "商店" }]);
    const historyHandler = () => {
      if ((route.name == "shop")) {
        if (route.query.category ?? false) {
          setHistory([
            { link: "/shop", name: "商店" },
            {
              link: `/shop?category=${route.query.category}`,
              name: `${route.query.category}`,
            },
          ]);
        } else {
          setHistory([{ link: "/shop", name: "商店" }]);
        }
      }
    };
    const route = useRoute();

    // 商品分類
    const product_category_list = ref([]);
    const getProductCategoryHandler = () => {
      if (route.params.setting && route.params.setting.category) {
        product_category_list.value = route.params.setting.category;
      } else {
        chageLoadingStatusHandler("Shop_getProductCategoryHandler", true);
        getDocumentObject(["products/setting"]).then((data) => {
          product_category_list.value = data.category;
          chageLoadingStatusHandler("Shop_getProductCategoryHandler", false);
        });
      }
    };

    onMounted(() => {
      getProductCategoryHandler();
      historyHandler();
    });

    watch(
      () => route.fullPath,
      async () => {
        historyHandler();
      }
    );

    return {
      // 商品分類
      product_category_list,
    };
  },
};
</script>