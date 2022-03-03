<template>
  <section>
    <ProductDetailCard
      v-if="product"
      :product="product"
      :key="`${$route.fullPath}_ProductDetailCard`"
    />
  </section>
  <section class="pt-10">
    <h1 class="text-3xl font-bold text-center">相關商品</h1>
    <div
      class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5 mb-13"
    >
      <ProductListByCategory
        :key="`${$route.fullPath}_ProductListByCategory`"
        v-if="product && product.category"
        :product_category="product.category"
        :product_id="product.id"
        :max="8"
      />
    </div>
  </section>
</template>
<script>
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
import ProductDetailCard from "../components/ProductDetailCard.vue";
import { useRoute } from "vue-router";
import { onMounted, ref, inject } from "vue";
import ProductListByCategory from "../components/ProductListByCategory.vue";
export default {
  components: { ProductDetailCard, ProductListByCategory },
  setup() {
    const { chageLoadingStatusHandler, setHistory, state } = inject("mapStore");
    const historyHandler = () => {
      // console.log("history", 1, state.history);
      const history_count = state.history.length ?? null;
      if (
        history_count != null &&
        history_count >= 2 &&
        state.history[1].link.indexOf("product") == -1
      ) {
        setHistory([
          ...state.history,
          {
            link: `/shop/product/${product.value.id}`,
            name: `${product.value.name}`,
          },
        ]);
      } else {
        // console.log("history", 2);

        setHistory([
          { link: "/shop", name: "商店" },
          {
            link: `/shop/product/${product.value.id}`,
            name: `${product.value.name}`,
          },
        ]);
      }
    };

    const product_id = ref(useRoute().params.product_id);
    const product = ref(null);
    const getProductHandler = () => {
      chageLoadingStatusHandler("Product_getProductHandler", true);
      getDocWithInsideCollection(["products", product_id.value], ["spec"]).then(
        (data) => {
          product.value = data;
          chageLoadingStatusHandler("Product_getProductHandler", false);
          historyHandler();
        }
      );
    };
    onMounted(() => {
      getProductHandler();
    });
    return {
      product_id,
      product,
    };
  },
};
</script>