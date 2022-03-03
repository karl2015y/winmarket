<template>
  <!-- {{ product_list }} -->
  <el-table
    :data="product_list"
    :default-sort="{ prop: 'sort', order: 'ascending' }"
  >
    <!-- 排序順位 -->
    <el-table-column prop="sort" align="center" width="180">
      <template #header>
        <div class="flex justify-center items-center">
          <div class="cursor-pointer">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
          </div>
          <div class="!whitespace-nowrap">排序順位</div>
        </div>
      </template>
    </el-table-column>
    <!-- 縮圖 -->
    <el-table-column label="縮圖" width="150">
      <template #default="scope">
        <el-image
          class="cursor-pointer"
          v-if="scope.row.image_url && scope.row.image_url.length > 0"
          :src="
            typeof scope.row.image_url === typeof ''
              ? scope.row.image_url
              : scope.row.image_url[0]
          "
          style="width: 100px; height: 100px"
          @click="preview_image_url = scope.row.image_url"
        />
        <p v-else>沒有圖片</p>
      </template>
    </el-table-column>
    <!-- 商品名稱 -->
    <el-table-column label="商品名稱" width="180">
      <template #default="scope">
        {{ scope.row.name }}
      </template>
    </el-table-column>
    <!-- 商品分類 -->
    <el-table-column label="商品分類" width="180">
      <template #default="scope">
        <template v-for="(item, index) in scope.row.category" :key="item">
          <router-link
            :to="{
              name: 'productList',
              params: { category_name: item },
            }"
            class="text-blue-500 hover:text-blue-300"
          >
            {{ item }}
          </router-link>
          <span v-if="index != scope.row.category.length - 1">, </span>
        </template>
      </template>
    </el-table-column>

    <!-- 啟用狀態 -->
    <el-table-column label="是否啟用" width="100">
      <template #default="scope">
        <el-switch v-model="scope.row.is_enabled" disabled />
      </template>
    </el-table-column>
    <!-- 商品簡述 -->
    <el-table-column label="價位區間" width="180">
      <template #default="scope">
        <span v-if="scope.row.min_price < scope.row.max_price">
          {{ $filters.money(scope.row.min_price) }} ~
          {{ $filters.money(scope.row.max_price) }}
        </span>
        <span v-else>
          {{ $filters.money(scope.row.min_price) }}
        </span>
      </template>
    </el-table-column>
    <!-- 商品簡述 -->
    <el-table-column label="商品簡述" width="180">
      <template #default="scope">
        <p v-text="scope.row.description" class="whitespace-pre-line" />
      </template>
    </el-table-column>

    <!-- 操作 -->
    <el-table-column align="right">
      <template #header>
        <el-button @click="addProductHandler()" type="primary"
          >新增商品</el-button
        >
      </template>
      <template #default="scope">
        <router-link
          :to="{
            name: 'productPage',
            params: { product_id: scope.row.id },
          }"
        >
          <el-button class="!my-1 !mr-2" size="small">設定商品規格</el-button>
        </router-link>

        <el-button
          class="!my-1"
          size="small"
          @click="
            () => {
              editing_product_index = findIndexHandler(scope.row);
              edit_product_status = true;
            }
          "
          >編輯基本資料</el-button
        >
        <br />
        <el-button
          class="!my-1"
          size="small"
          @click="
            () => {
              editing_product_index = findIndexHandler(scope.row);
              edit_product_content_status = true;
            }
          "
          >編輯文案</el-button
        >

        <el-button
          @click="deleteProductHandler(findIndexHandler(scope.row))"
          class="!my-1"
          size="small"
          type="danger"
          >刪除</el-button
        >
      </template>
    </el-table-column>
  </el-table>

  <!-- 預覽圖片 -->
  <el-image-viewer
    v-if="preview_image_url"
    @close="preview_image_url = ''"
    :url-list="preview_image_url"
    :hide-on-click-modal="true"
  />

  <!-- 編輯視窗 -->
  <el-dialog
    v-model="edit_product_status"
    title="編輯商品"
    @close="editing_product_index = null"
  >
    <editProduct
      v-if="product_list[editing_product_index]"
      v-model="product_list[editing_product_index]"
      :product_category_list="product_category_list"
    />
  </el-dialog>

  <!-- 富文本 -->
  <el-dialog
    :fullscreen="true"
    v-model="edit_product_content_status"
    title="編輯商品"
    @close="editing_product_index = null"
  >
    <editProductContentVue
      v-if="product_list[editing_product_index]"
      v-model="product_list[editing_product_index]"
    />
  </el-dialog>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import {
  getCollectionList,
  deleteDocument,
  getDocumentObject,
  setDocument2Collection,
  pushDocument2Collection,
  batchSetDocument2Collection,
  deleteFile,
  getDocWithInsideCollection,
} from "@/db.js";
import draggable from "vuedraggable";
import { useRoute } from "vue-router";
import editProduct from "./editProduct.vue";
import editProductContentVue from "./editProductContent.vue";

export default {
  components: { draggable, editProduct, editProductContentVue },
  name: "productList",
  setup() {
    //   商品列表
    const product_list = ref([]);
    const getProductListHandler = () => {
      getCollectionList(["products"]).then((data) => {
        product_list.value = data;
        getProductCategoryHandler();
      });
    };
    // 商品分類
    const product_category_list = ref([]);
    const getProductCategoryHandler = () => {
      product_category_list.value = product_list.value.find((item, index) => {
        if (item.id == "setting") {
          product_list.value.splice(index, 1);

          return true;
        }
      });
      product_category_list.value = product_category_list.value
        ? product_category_list.value.category
        : [];
    };
    // 預覽圖片
    const preview_image_url = ref("");

    // 編輯商品
    const editing_product_index = ref(null);
    const edit_product_status = ref(false);
    // 編輯商品文案
    const edit_product_content_status = ref(false);

    // 排序商品
    const sortProductHandler = () => {
      for (let index = 0; index < product_list.value.length; index++) {
        const item = product_list.value[index];
        item.sort = index + 1;
      }
      batchSetDocument2Collection(["products"], product_list.value);
    };

    /**
     * 新增商品
     */
    const addProductHandler = () => {
      const _product = {
        is_enabled: true,
        name: "",
        description: "",
        option: [],
        sort: 0,
        min_price: 0,
        max_price: 0,
        content: "",
        image_url: [],
        category: [],
      };

      pushDocument2Collection(["products"], _product).then((id) => {
        _product["id"] = id;
        product_list.value.unshift(_product);
        editing_product_index.value = 0;
        edit_product_status.value = true;

        sortProductHandler();
      });
    };

    // 刪除商品

    /**
     * 找出所有img的src
     */
    const getImageSrc = (text) => {
      const imgReg = /http(s)?:\/\/firebasestorage.*?.images.*?(?:"|')/gi;
      const arr = text.match(imgReg);
      const imgs = arr ? arr.toString().replace('"', "").split(",") : [];
      return imgs;
    };

    const deleteProductHandler = (index) => {
      // deleteDocument
      if (!confirm("刪除後，所有資料將被清空，是否繼續？")) {
        return false;
      }
      const array = product_list.value;
      const id = array[index].id;
      getCollectionList(["products", id, "spec"]).then((data) => {
        array[index].spec_list = data;
        const text = JSON.stringify(array[index]);
        const imgs = getImageSrc(text);
        imgs.forEach((item) => {
          deleteFile(item);
        });

        array[index].spec_list.forEach((item) => {
          deleteDocument([`products`, id, "spec", item.id]);
        });

        deleteDocument([`products/${id}`]).then(() => {
          array.splice(index, 1);
          alert("已更新");
          sortProductHandler();
        });
      });
    };

    const findIndexHandler = (data) => {
      const id = data.id;
      let index = null;
      for (let i = 0; i < product_list.value.length; i++) {
        const item = product_list.value[i];
        if (item.id == id) {
          index = i;
          break;
        }
      }

      return index;
      // return "null";
    };
    onMounted(() => {
      getProductListHandler();
    });
    return {
      // 商品列表
      product_list,
      // 預覽圖片
      preview_image_url,
      // 編輯商品
      editing_product_index,
      edit_product_status,
      // 編輯商品文案
      edit_product_content_status,
      // 商品分類
      product_category_list,
      // 新增商品
      addProductHandler,
      // 刪除商品
      deleteProductHandler,
      findIndexHandler,
    };
  },
};
</script>

