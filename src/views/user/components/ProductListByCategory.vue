<template>
  <template v-for="item in product_list" :key="item.id">
    <ProductCard :product="item" />
  </template>
  <div v-if="need_more && next_product_shot" class="p-3">
    <button id="more_data" @click="getProductsHandler()">載入中...</button>
    <!-- <span v-else>沒了沒了這是最後一頁</span> -->
  </div>
</template>
<script>
import { getCollectionListWithQuery, lazyGetCollectionList } from "@/db.js";
import { onMounted, ref, inject } from "vue";
import ProductCard from "./ProductCard.vue";

export default {
  props: ["product_category", "max", "product_id", "need_more"],
  components: { ProductCard },
  setup(props) {
    const { chageLoadingStatusHandler } = inject("mapStore");
    const product_list = ref([]);
    const next_product_shot = ref(null);
    const getProductsHandler = () => {
      chageLoadingStatusHandler(
        "ProductListByCategory_getProductsHandler",
        true
      );
      getCollectionListWithQuery(
        ["products"],
        props.product_category
          ? [
              ["category", "array-contains-any", props.product_category],
              // ["name", "!=", props.product.name],
            ]
          : null,
        "sort",
        next_product_shot.value,
        props.max
      ).then((data) => {
        product_list.value.push(...data.current);
        next_product_shot.value = data.next;
        // chageLoadingStatusHandler(false);
        chageLoadingStatusHandler(
          "ProductListByCategory_getProductsHandler",
          false
        );
        if (props.product_id) {
          removeMyselfProduct();
        }
      });
    };
    // lazy load 其他產品

    const isElementXPercentInViewport = (el, percentVisible) => {
      let rect = el.getBoundingClientRect(),
        windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

      return !(
        Math.floor(
          100 - ((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100
        ) < percentVisible ||
        Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) <
          percentVisible
      );
    };

    const lazyLoadProductHandler = (element) => {
      if (props.need_more) {
        const x = setInterval(() => {
          // console.log("lazyLoadProductHandler");
          const el = document.querySelector("#more_data");
          if (el && isElementXPercentInViewport(el, 1)) {
            getProductsHandler();
          }
          if (next_product_shot.value === undefined) {
            // console.log("stop lazyLoadProductHandler", next_product_shot.value);

            clearInterval(x);
          }
        }, 300);
      }
    };

    // const getProductListHandler = () => {
    //   lazyGetCollectionList(
    //     ["products"],
    //     "sort",
    //     10,
    //     next_product_shot.value
    //   ).then((data) => {
    //     product_list.value.push(...data.current);
    //     next_product_shot.value = data.next;
    //   });
    // };

    const removeMyselfProduct = () => {
      const array = product_list.value;
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.id == props.product_id) {
          array.splice(index, 1);
          break;
        }
      }
    };
    onMounted(() => {
      getProductsHandler();
      lazyLoadProductHandler();
    });
    return {
      getProductsHandler,
      product_list,
      next_product_shot,
    };
  },
};
</script>