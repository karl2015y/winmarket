<template>
  <div class="bg-white bg-opacity-60 w-screen -ml-5 md:-ml-10">
    <div class="md:py-10 md:flex">
      <div class="md:w-1/2 w-full">
        <div class="md:max-w-xs xl:max-w-sm md:ml-auto 2xl:mr-20">
          <ProductDetailImgSwiper
            v-if="product_images && product_images[0]"
            :images="product_images"
            :choose_spec_obj="choose_spec_obj"
          />
        </div>
      </div>
      <div
        class="
          mt-10
          ml-5
          pr-8
          md:ml-0
          2xl:-ml-9
          md:pr-0 md:mt-0 md:w-1/2
          w-full
        "
      >
        <div class="md:w-2/3 md:mx-auto 2xl:mx-0">
          <h1 class="text-3xl md:text-2xl font-bold md:font-normal">
            {{ product.name }}
          </h1>
          <div class="mt-1 text-base md:text-xs">
            <router-link
              v-for="item in product.category"
              :key="item"
              :to="{
                name: 'shop',
                query: { category: item },
              }"
              class="text-blue-500 hover:text-blue-300"
            >
              #{{ item }}
            </router-link>
          </div>
          <p
            class="
              text-xl
              md:text-sm md:font-light
              whitespace-pre-line
              mt-5
              pb-5
              border-solid border-b
            "
          >
            {{ product.description }}
          </p>

          <h2 class="mt-5 font-bold text-xl">
            <span v-if="choose_spec_obj">
              <span
                :class="{
                  'line-through':
                    choose_spec_obj.price != choose_spec_obj.origin_price,
                }"
              >
                {{ $filters.money(choose_spec_obj.origin_price) }}
              </span>
              <span
                class="ml-2 text-red-500"
                v-if="choose_spec_obj.price != choose_spec_obj.origin_price"
              >
                {{ $filters.money(choose_spec_obj.price) }}
              </span>
            </span>
            <span v-else>
              {{ $filters.money(product.min_price) }}
              <span v-if="product.min_price != product.max_price">
                ~ {{ $filters.money(product.max_price) }}
              </span>
            </span>
          </h2>
          <!-- 規格 -->
          <div class="flex">
            <div
              class="w-full transform-gpu transition-all duration-700"
              :class="{
                '!w-1/2 md:!w-full':
                  choose_spec_obj && choose_spec_obj.image_url,
              }"
            >
              <div v-for="(item, index) in product.option" :key="item">
                <span class="mt-2 text-gray-500 text-xs">{{ item.name }}</span>
                <br />
                <el-select
                  v-model="choose_spec_list[index]"
                  class="w-full"
                  :placeholder="`請選擇${item.name}`"
                >
                  <el-option
                    v-for="op in item.value"
                    :key="op"
                    :label="op"
                    :value="op"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <div
              v-if="choose_spec_obj && choose_spec_obj.image_url"
              class="md:hidden w-1/2 ml-7 mr-3"
            >
              <img class="shadow" :src="choose_spec_obj.image_url" />
            </div>
          </div>

          <!-- 數量 -->
          <div v-if="choose_spec_obj" class="mt-3">
            <span class="text-gray-500 text-xs"
              >購買數量 (最多：{{
                choose_spec_obj.count - choose_spec_obj.sold_count
              }})</span
            >
            <br />
            <el-input-number
              class="mt-1"
              v-model="buy_spec_count"
              :min="1"
              :max="choose_spec_obj.count - choose_spec_obj.sold_count"
            />
          </div>
          <!-- 立即購買與加入購物車 -->
          <div class="mt-5 text-right">
            <button
              @click="addToCartHandler()"
              class="
                text-white
                bg-skin-500
                border-0
                py-1
                px-3
                2xl:py-2 2xl:px-6
                focus:outline-none
                hover:bg-skin-600
                rounded
                2xl:text-lg
              "
            >
              <svg
                class="w-5 h-5 inline -mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              加入購物車
            </button>
            <button
              class="
                ml-3
                text-skin-500
                border-solid border border-skin-500
                py-1
                px-3
                2xl:py-2 2xl:px-6
                focus:outline-none
                hover:bg-skin-600 hover:text-white
                rounded
                text-sm
                2xl:text-base
              "
            >
              立即結帳
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-html="product.content"
      class="mt-5 w-full md:w-2/3 px-5 md:px-0 mx-auto"
    />
  </div>

  <!-- {{ product }} -->
</template>
<script>
import { computed, onMounted, ref, inject } from "vue";
import ProductDetailImgSwiper from "./ProductDetailImgSwiper.vue";

export default {
  props: ["product"],
  components: { ProductDetailImgSwiper },
  setup(props) {
    const product = ref(props.product);
    // 商品圖片
    const product_images = ref({});
    const getProductImages = () => {
      product.value.image_url.forEach((item, index) => {
        product_images.value[index] = item;
      });
      product.value.collection.forEach((item) => {
        if (item.image_url) {
          product_images.value[decodeURIComponent(item.id)] = item.image_url;
        }
      });
    };

    // 選擇的品項
    const spec_obj = ref({});
    const specObjHandler = () => {
      product.value.collection.forEach((item) => {
        spec_obj.value[item.id] = item;
      });
    };
    const choose_spec_list = ref([]);

    const choose_spec_obj = computed(() => {
      if (product.value.option.length > 0) {
        const key = encodeURIComponent(
          choose_spec_list.value.toString().replace(",", "/")
        );
        return spec_obj.value[key];
      } else {
        return product.value.collection[0];
      }
    });
    const buy_spec_count = ref(1);

    // 加入購物車
    const { state, pushCart, deleteCartItme } = inject("mapStore");
    const addToCartHandler = () => {
      if (!choose_spec_obj.value) {
        alert("請先選擇品項");
        return false;
      }
      const cart_item = {
        product_id: product.value.id,
        product_spec: JSON.parse(JSON.stringify(choose_spec_obj.value)),
        count: buy_spec_count.value,
      };
      if (!cart_item.product_spec.image_url) {
        cart_item.product_spec.image_url = product.value.image_url[0];
      }
      pushCart(cart_item);
    };
    onMounted(() => {
      // 商品圖片
      getProductImages();
      specObjHandler();
    });
    return {
      product,
      product_images,

      // 選擇的品項
      choose_spec_list,
      choose_spec_obj,
      buy_spec_count,
      // 加入購物車
      addToCartHandler,
    };
  },
};
</script>