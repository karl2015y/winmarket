<template>
  <!-- 商品規格選項 -->
  <div
    class="m-5 border-solid border rounded p-2 shadow"
    v-if="product_data && product_data.option"
  >
    <div class="flex justify-between">
      <div class="flex items-center gap-2">
        <h1 class="font-bold text-xl">商品規格選項</h1>
        <button class="text-green-500" @click="addOptionHandler">
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
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <el-button v-if="saved_status" class="!my-1" size="small"
          >已儲存</el-button
        >
        <el-button
          @click="updateDataHandler()"
          v-else
          class="!my-1"
          size="small"
          type="success"
          >儲存</el-button
        >
      </div>
    </div>

    <div
      v-if="product_data.option.length == 0"
      class="text-center text-gray-400 text-sm"
    >
      無商品規格選項《此時商品為單一品項》
    </div>
    <div
      class="lg:text-sm px-2 py-1 hover:shadow hover:bg-gray-50"
      v-for="(item, id) in product_data.option"
      :key="item"
    >
      <template v-if="!editing_option[id]">
        {{ item.name }}：

        <span v-for="(val, index) in item.value" :key="val">
          {{ val }}
          <template v-if="item.value.length - 1 != index"> | </template>
        </span>

        <el-button
          class="!my-1 !ml-2"
          size="small"
          @click="editOptionTarget(item.name)"
          >編輯</el-button
        >

        <el-button
          class="!my-1 !ml-1"
          size="small"
          type="danger"
          @click="deleteOptionHandler(item.name)"
          >刪除</el-button
        >
      </template>

      <div v-else class="gap-2 my-1">
        <input
          type="text"
          v-model="item.name"
          placeholder="Please input"
          class="
            w-24
            bg-opacity-50
            rounded
            border border-gray-300
            focus:border-indigo-500
            focus:bg-white
            focus:ring-2
            focus:ring-indigo-200
            text-xs
            outline-none
            text-gray-700
            py-0.5
            px-1.5
            leading-1
            transition-colors
            duration-200
            ease-in-out
          "
        />

        ：
        <el-select
          v-model="item.value"
          multiple
          filterable
          allow-create
          default-first-option
          :reserve-keyword="false"
          placeholder="請輸入商品規格選項"
        >
          <el-option
            v-for="option in item.value"
            :key="option"
            :label="option"
            :value="option"
          >
          </el-option>
        </el-select>
        <el-button
          class="!my-1 !ml-2"
          size="small"
          @click="editOptionTarget(item.name)"
          >完成編輯</el-button
        >
        <el-button
          class="!my-1 !ml-1"
          size="small"
          type="danger"
          @click="deleteOptionHandler(item.name)"
          >刪除</el-button
        >
      </div>
    </div>
  </div>
  <!-- 商品品項 -->
  <div class="m-5 border-solid border rounded p-2 shadow">
    <h1 class="font-bold text-xl">商品品項</h1>

    <el-table :data="product_spec" style="width: 100%">
      <!-- 縮圖 -->
      <el-table-column label="縮圖" width="150">
        <template #default="scope">
          <el-image
            v-if="scope.row.image_url && scope.row.image_url.length > 0"
            :src="scope.row.image_url"
            style="width: 100px; height: 100px"
          />
          <p v-else>沒有圖片</p>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="品項名稱" width="180" />

      <el-table-column label="價錢" width="230">
        <template #default="scope">
          <span>
            {{ $filters.money(scope.row.price) }}
            <span v-if="scope.row.price != scope.row.origin_price"
              >(原：{{ $filters.money(scope.row.origin_price) }})</span
            >
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="count" label="數量(賣數/原數)" width="180">
        <template #default="scope">
          {{ scope.row.sold_count }}/ {{ scope.row.count }}
        </template>
      </el-table-column>
      <!-- 操作 -->
      <el-table-column align="right">
        <template #default="scope">
          <el-button
            class="!my-1"
            size="small"
            @click="
              () => {
                editing_spec_index = scope.$index;
                edit_spec_status = true;
              }
            "
            >編輯</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>

  <!-- 編輯視窗 -->
  <el-dialog
    v-model="edit_spec_status"
    title="編輯品項"
    :destroy-on-close="true"
    @close="getPriceRangeHandler()"
  >
    <editProductSpec v-model="product_spec[editing_spec_index]" />
  </el-dialog>
</template>
<script>
import {
  getDocumentObject,
  setDocument2Collection,
  getCollectionList,
  batchSetDocument2Collection,
  deleteDocument,
} from "@/db.js";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import editProductSpec from "./editProductSpec.vue";

export default {
  name: "productPage",
  components: { editProductSpec },
  setup() {
    const route = useRoute();
    const router = useRouter();

    /**
     * 確定router內帶有商品Id
     */
    const checkProductIdHandler = () => {
      if (route.params && route.params.product_id) {
        product_id.value = route.params.product_id;
        return true;
      } else {
        alert("參數錯誤，沒有商品id");
        router.back();
      }
    };
    const product_id = ref("");
    const product_data = ref({});
    const product_data_server = ref("");
    /**
     * 取的商品資料
     */
    const getProductDataHandler = () => {
      getDocumentObject([`products/${product_id.value}`]).then((data) => {
        if (!data.id) {
          alert("參數錯誤，沒有商品id");
          router.back();
        }
        product_data.value = data;
        product_data_server.value = JSON.stringify(data);
      });
    };

    /**
     * 取得規格index
     */
    const getOptionIndex = (option_key) => {
      const array = product_data.value.option;
      for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.name == option_key) {
          return index;
        }
      }
    };

    // 編輯規格選項
    const editing_option = ref({});
    const editOptionTarget = (option_key) => {
      const index = getOptionIndex(option_key);
      editing_option.value[index] = !editing_option.value[index];

      const product = product_data.value.option[index];
      if (product && product.value.length == 0) {
        alert("規格選項請勿空白");
        editing_option.value[index] = true;
      }
    };

    // 新增規格選項
    const addOptionHandler = () => {
      const key = `新規格${product_data.value.option.length + 1}`;
      product_data.value.option.push({ value: [], name: key });
      const index = getOptionIndex(key);

      editing_option.value[index] = true;
    };

    // 刪除規格選項
    const deleteOptionHandler = (option_key) => {
      const index = getOptionIndex(option_key);
      editing_option.value[index] = false;

      if (product_data.value.option[index]) {
        product_data.value.option.splice(index, 1);
      } else {
        alert("刪除錯誤");
      }
    };

    // 確定是否需要儲存
    const saved_status = computed(
      () => product_data_server.value == JSON.stringify(product_data.value)
    );

    // 存到Firebase
    const updateDataHandler = () => {
      if (!confirm("儲存後，需要更新品項內容，是否繼續？")) {
        return false;
      }
      const _product_data = JSON.parse(JSON.stringify(product_data.value));
      setDocument2Collection([`products`], _product_data).then(() => {
        alert("更新成功！");
        product_data_server.value = JSON.stringify(product_data.value);
        deleteAllSpecHandler();
        alert("即將創建新的品項");
        createProductSpecHandler();
      });
    };

    const product_spec = ref([]);
    // 取得品項
    const getProductSpecHandler = () => {
      getCollectionList([`products`, product_id.value, "spec"]).then((data) => {
        product_spec.value = data;
        if (product_spec.value.length == 0) {
          createProductSpecHandler();
        }
      });
    };
    // 刪除所有品項
    const deleteAllSpecHandler = () => {
      //   console.log(product_spec.value);
      product_spec.value.forEach((item) => {
        deleteDocument(["products", product_id.value, "spec", item.id]);
      });
    };

    // 新增品項
    const createProductSpecHandler = () => {
      product_spec.value = [];

      console.log("product_data", product_data.value.option.length);
      if (product_data.value.option.length == 0) {
        product_spec.value[0] = {
          id: encodeURIComponent(product_data.value.name),
          name: product_data.value.name,
          count: 0,
          sold_count: 0,
          image_url: "",
          price: 0,
          origin_price: 0,
        };
      } else {
        //排列組合用的維度
        const dimensions = [];
        product_data.value.option.forEach((item) => {
          dimensions.push(item.value);
        });
        //用以存放結果的陣列
        var results = [];

        //使用遞迴方式排列出所有組合
        //共有兩個傳入參數，目前處理的維度、排列組合時已累積的字首
        function explore(curDim, prefix) {
          //取出下一層維度
          var nextDim = dimensions.shift();
          for (var i = 0; i < curDim.length; i++) {
            if (nextDim)
              //若仍有下一層維度，繼續展開
              //並將傳入字首加上目前維度選項成為下一層的字首
              explore(nextDim, prefix + curDim[i] + "/");
            //若已無下一層，則傳入字首加上目前維度選項成為結果
            else results.push(prefix + curDim[i]);
          }
          //將下層維度存回，供上層維度其他選項使用
          if (nextDim) dimensions.push(nextDim);
        }
        //傳入第一層維度開始演算
        explore(dimensions.shift(), "");

        results.forEach((item) => {
          product_spec.value.push({
            id: encodeURIComponent(item),
            name: item,
            count: 0,
            sold_count: 0,
            image_url: "",
            price: 0,
            origin_price: 0,
          });
        });
      }

      batchSetDocument2Collection(
        [`products`, product_id.value, `spec`],
        product_spec.value
      );
    };

    // 更新品項
    const edit_spec_status = ref(false);
    const editing_spec_index = ref(-1);

    // 取得商品價格區間
    const getPriceRangeHandler = () => {
      // 如果不存在或是長度不到1的就跳出去
      if (!product_spec.value || product_spec.value.length <= 0) {
        return 0;
      }

      let max_price = Number(product_spec.value[0].price);
      let min_price = Number(product_spec.value[0].price);

      product_spec.value.forEach((item) => {
        const price = Number(item.price);
        // console.log(price, max_price, price > max_price);
        if (price > max_price) {
          max_price = price;
        }
        if (price < min_price) {
          min_price = price;
        }
      });

      let need_update =
        product_data.value.min_price != min_price ||
        product_data.value.max_price != max_price;
      if (need_update) {
        product_data.value.min_price = min_price;
        product_data.value.max_price = max_price;
        const _product_data = JSON.parse(JSON.stringify(product_data.value));
        setDocument2Collection([`products`], _product_data).then(() => {
          product_data_server.value = JSON.stringify(product_data.value);
        });
      }
    };

    onMounted(() => {
      if (checkProductIdHandler()) {
        getProductDataHandler();
        getProductSpecHandler();
      }
    });

    return {
      // 商品規格
      product_data,
      // 商品伺服器資料
      product_data_server,

      //編輯商品
      editing_option,
      editOptionTarget,

      // 新增品項
      addOptionHandler,

      // 刪除品項
      deleteOptionHandler,

      // 儲存的狀態
      saved_status,

      // 存到Firebase
      updateDataHandler,

      // 商品品項
      product_spec,

      // 更新品項
      edit_spec_status,
      editing_spec_index,

      // 商品區間
      getPriceRangeHandler,
    };
  },
};
</script>
