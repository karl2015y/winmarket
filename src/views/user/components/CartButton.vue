<template>
  <div @click="drawer = true" class="relative cursor-pointer" id="cart-button">
    <transition
      enter-active-class="animate__animated animate__fadeInRight"
      leave-active-class="animate__animated animate__fadeOutRight"
    >
      <div v-if="!adding" class="relative">
        <div
          v-if="total_price"
          class="
            absolute
            top-0
            -left-0.5
            bg-red-500
            w-3
            h-3
            rounded-full
            animate__animated animate__infinite animate__slow animate__pulse
          "
        ></div>
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          ></path>
        </svg>
      </div>
      <lottie-player
        v-else
        class="h-10 w-20 absolute -top-2 right-0 md:-right-5"
        src="https://assets10.lottiefiles.com/packages/lf20_qrviefux.json"
        speed="3"
        autoplay
      />
    </transition>
  </div>

  <el-drawer v-if="drawer" v-model="drawer" :size="350">
    <template #title>
      <h4>購物車</h4>
    </template>
    <template #default>
      <div v-if="total_price">
        <template
          v-for="(product_item, product_id) in cart_list"
          :key="product_item"
        >
          <template
            v-for="(spec_item, spec_id) in product_item"
            :key="spec_item"
          >
            <!-- {{product_item}} -->

            <van-swipe-cell v-if="spec_item.product_spec">
              <van-card
                currency="NT$ "
                :origin-price="spec_item.product_spec.origin_price"
                :price="spec_item.product_spec.price"
                :title="spec_item.product_spec.name"
                class="!m-0 !bg-white !p-0"
                :thumb="spec_item.product_spec.image_url"
              >
                <template #desc>
                  <span>{{ `存量：${spec_item.product_spec.count} ` }}</span>
                  <span v-if="spec_item.product_spec.sold_count">{{
                    `/ 銷售數：${spec_item.product_spec.sold_count}`
                  }}</span>
                </template>
                <template #num>
                  <van-stepper
                    :default-value="spec_item.count"
                    min="1"
                    :max="spec_item.product_spec.count"
                    integer
                    @change="
                      (count) => {
                        updateCountHandler(product_id, spec_id, count);
                      }
                    "
                  />
                </template>
                <template #footer>
                  <el-button
                    @click="deleteCartItemHandler(product_id, spec_id)"
                    class="!mt-2 !mr-auto"
                    size="small"
                    type="danger"
                    >刪除</el-button
                  >
                </template>
              </van-card>
            </van-swipe-cell>
            <div
              class="w-full border-solid border-b my-2"
              v-if="spec_item.product_spec"
            />
          </template>
        </template>
      </div>
      <div v-else>
        <van-empty description="購物車目前沒有商品" />
      </div>
      <div class="w-full h-20"></div>
      <div class="absolute w-full bottom-0 left-0 mb-2">
        <van-submit-bar
          currency="NT$ "
          class="!absolute"
          :decimal-length="0"
          :price="total_price * 100"
          button-text="立即結帳"
          label="總計："
          button-type=" bg-skin-500 text-white"
          @submit="
            () => {
              dialogConfirmVisible = true;
              drawer = false;
            }
          "
        />
      </div>
    </template>
  </el-drawer>

  <el-dialog
    v-model="dialogConfirmVisible"
    title="訂單確定"
    :width="350"
    @close="couponInitHandler()"
  >
    <h1 class="font-bold">商品明細</h1>
    <template v-for="product_item in cart_list" :key="product_item">
      <template v-for="spec_item in product_item" :key="spec_item">
        <div
          v-if="spec_item.product_spec"
          class="flex justify-between font-thin ml-0.5 mt-0.5"
        >
          <div>{{ spec_item.product_spec.name }} x {{ spec_item.count }}</div>
          <div>
            {{ $filters.money(spec_item.product_spec.price * spec_item.count) }}
          </div>
        </div>
      </template>
    </template>
    <h1 class="font-bold mt-1.5">小記</h1>
    <div class="flex justify-end font-thin pl-0.5">
      <div>
        {{ $filters.money(total_price) }}
      </div>
    </div>
    <h1 class="font-bold mt-1">優惠券</h1>
    <div v-if="choose_coupon" class="flex justify-between font-thin pl-0.5">
      <div>
        {{ choose_coupon.title }}

        <span
          @click="couponInitHandler()"
          class="ml-1 cursor-pointer text-xs text-red-500 underline"
          >取消</span
        >
      </div>
      <div class="">{{ $filters.money(discount_price * -1) }}</div>
    </div>
    <div v-else class="flex gap-2 pt-1">
      <el-input v-model="coupon_code" placeholder="請輸入優惠券代碼" />
      <button
        @click="findCouponHandler()"
        class="
          text-white
          bg-skin-600
          border-0
          py-0.5
          px-1
          focus:outline-none
          hover:bg-skin-700
          rounded
          text-xs
          w-10
        "
      >
        套用
      </button>
    </div>
    <el-divider></el-divider>
    <div class="flex justify-between font-thin pl-0.5">
      <h1 class="font-bold mt-1">總記</h1>
      <div>
        {{ $filters.money(total_price - discount_price) }}
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogConfirmVisible = false">繼續購物</el-button>

        <button
          class="
            ml-1
            text-white
            bg-skin-500
            border-0
            py-1
            px-2
            focus:outline-none
            hover:bg-skin-600
            rounded
            text-sm
          "
        >
          下一步，填寫資訊
        </button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { onMounted, ref, inject, computed, watch } from "vue";
import { SwipeCell, Button, Cell, Card, Stepper, SubmitBar, Empty } from "vant";
import { getCollectionListWithQuery } from "@/db.js";
export default {
  components: {
    [Button.name]: Button,
    [SwipeCell.name]: SwipeCell,
    [Cell.name]: Cell,
    [Card.name]: Card,
    [Stepper.name]: Stepper,
    [SubmitBar.name]: SubmitBar,
    [Empty.name]: Empty,
  },
  setup() {
    // 移動過去
    const smoothScroll = inject("smoothScroll");
    const scroll2ViewHandler = (dom_id) => {
      const dom = document.getElementById(`${dom_id}`);
      smoothScroll({
        scrollTo: dom,
        updateHistory: false,
        offset: -10,
      });
      addHandler();
    };
    // 加入購物車時的動畫
    const adding = ref(false);
    const addHandler = () => {
      adding.value = true;
      setTimeout(() => {
        adding.value = false;
      }, 1500);
    };
    const {
      state,
      setCartId,
      getCartList,
      editCart,
      deleteCartItem,
      chageLoadingStatusHandler,
    } = inject("mapStore");

    const cart_list = computed(() => state.cart_list);
    const drawer = ref(false);

    const updateCountHandler = (product_id, spec_id, count) => {
      editCart(product_id, spec_id, count);
    };

    const deleteCartItemHandler = (product_id, spec_id) => {
      if (!confirm("現在要刪除了喔，是否繼續？")) {
        return false;
      }
      deleteCartItem(product_id, spec_id);
    };
    const total_price = computed(() => {
      let price = 0;
      try {
        for (const [key, product_item] of Object.entries(cart_list.value)) {
          for (const [key, spec_item] of Object.entries(product_item)) {
            if (!spec_item.product_spec) {
              continue;
            }
            price += spec_item.product_spec.price * spec_item.count;
          }
        }
      } catch (error) {
        return 0;
      }

      return price;
    });

    // 訂單確定
    const dialogConfirmVisible = ref(false);
    const coupon_code = ref("");
    const choose_coupon = ref(null);
    const discount_price = ref(0);
    const couponInitHandler = () => {
      coupon_code.value = "";
      choose_coupon.value = null;
      discount_price.value = 0;
    };
    const findBestCouponHandler = (coupon_list) => {
      let best_index = null;
      let best_Price = 0;
      coupon_list.forEach((coupon, index) => {
        if (coupon.least_buy_price <= total_price.value) {
          let price = 0;
          price = ((100 - Number(coupon.percent)) / 100) * total_price.value;
          if (price > Number(coupon.max_discount)) {
            price = Number(coupon.max_discount);
          }
          if (price > best_Price) {
            best_Price = price;
            best_index = index;
          }
        }
      });
      discount_price.value = best_Price;
      return coupon_list[best_index] ?? null;
    };
    const findCouponHandler = () => {
      chageLoadingStatusHandler(coupon_code.value, true);
      getCollectionListWithQuery(
        ["coupon"],
        [
          ["code", "==", coupon_code.value],
          ["is_enabled", "==", true],
          ["due_date", ">=", new Date()],
        ],
        null,
        null,
        50
      ).then((data) => {
        if (data.current) {
          chageLoadingStatusHandler(coupon_code.value, false);

          if (data.current.length == 0) {
            alert("查無此折扣碼，再試試吧");
            return false;
          }
          choose_coupon.value = findBestCouponHandler(data.current);
          if (!choose_coupon.value) {
            alert("無法達成此折扣碼的條件");
          }
        }
      });
    };
    watch(
      () => state.cart_list,
      () => {
        scroll2ViewHandler("cart-button");
      },
      {
        deep: true,
      }
    );

    onMounted(() => {
      const cart_id = window.localStorage.getItem("cart_id");
      if (!state.cart_id && cart_id) {
        setCartId(cart_id);
      }
      if (state.cart_id && state.cart_list == null) {
        getCartList();
      }
    });
    return {
      adding,
      addHandler,
      scroll2ViewHandler,
      getCartList,
      drawer,
      cart_list,
      updateCountHandler,
      deleteCartItemHandler,
      total_price,
      dialogConfirmVisible,
      coupon_code,
      findCouponHandler,
      choose_coupon,
      discount_price,
      couponInitHandler,
    };
  },
};
</script>