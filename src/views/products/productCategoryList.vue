<template>
  <div class="flex mt-3">
    <div
      class="w-full transition-all duration-500"
      :style="$route.name ? 'width: 180px;' : ''"
    >
      <el-table
        :data="product_category_list"
        :default-sort="{ prop: 'sort_index', order: 'ascending' }"
        :row-class-name="
          (scope) =>
            scope.row.name == $route.params.category_name ? 'current-row' : ''
        "
      >
        <!-- 排序順位 -->
        <el-table-column
          v-if="!$route.name"
          prop="sort_index"
          align="center"
          width="180"
        >
          <template #header>
            <div class="flex justify-center items-center">
              <div
                @click="openSortDialog(product_category_list)"
                class="cursor-pointer"
              >
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
        <!-- 類別名稱 -->
        <el-table-column label="類別名稱" width="180">
          <template #default="scope">
            <router-link
              :to="{
                name: 'productList',
                params: { category_name: scope.row.name },
              }"
              class="text-blue-500 hover:text-blue-300"
            >
              {{ scope.row.name }}
            </router-link>
          </template>
        </el-table-column>
        <!-- 啟用狀態 -->
        <el-table-column v-if="!$route.name" label="是否啟用" width="180">
          <template #default="scope">
            <el-switch v-model="scope.row.is_enabled" disabled />
          </template>
        </el-table-column>
        <!-- 描述 -->
        <el-table-column v-if="!$route.name" label="描述" width="180">
          <template #default="scope">
            <p v-text="scope.row.description" class="whitespace-pre-line" />
          </template>
        </el-table-column>
        <!-- 縮圖 -->
        <el-table-column v-if="!$route.name" label="縮圖">
          <template #default="scope">
            <el-image
              class="cursor-pointer"
              v-if="scope.row.image_url"
              :src="scope.row.image_url"
              style="width: 100px; height: 100px"
              @click="preview_image_url = scope.row.image_url"
            />
            <p v-else>沒有圖片</p>
          </template>
        </el-table-column>
        <!-- 操作 -->
        <el-table-column v-if="!$route.name" align="right" width="200">
          <template #header>
            <el-button size="small" type="primary">新增分類</el-button>
          </template>
          <template #default="scope">
            {{ scope.data }}
            <el-button size="small">Edit</el-button>
            <el-button size="small" type="danger">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-if="$route.name" class="border-solid border-l-2 w-full">
      <router-view></router-view>
    </div>
  </div>

  <!-- 排序 -->
  <el-dialog v-model="sort_dialog_status" title="商品類別更改排序">
    <el-button @click="saveSortTempList()" type="primary">儲存</el-button>
    <ul>
      <draggable v-model="sort_temp_list" item-key="index" handle=".handle">
        <template #item="{ element, index }">
          <li class="flex justify-start items-center hover:bg-white rounded-sm">
            <!-- 可以移動的按鈕 -->
            <button class="handle cursor-move ml-3">
              <svg
                class="h-auto w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <div
              class="mx-3 cursor-pointer border-solid border p-3 rounded m-1"
            >
              {{ (element.sort_index = index) }}. {{ element.name }}
              <br />
              <el-image
                v-if="element.image_url"
                :src="element.image_url"
                style="width: 100px; height: 100px"
              />
            </div>
          </li>
        </template>
      </draggable>
    </ul>
  </el-dialog>

  <!-- 預覽圖片 -->
  <el-image-viewer
    v-if="preview_image_url"
    @close="preview_image_url = ''"
    :url-list="[preview_image_url]"
    :hide-on-click-modal="true"
  />
</template>

<script>
import { computed, onMounted, ref } from "vue";
import {
  getCollectionList,
  deleteDocument,
  getDocumentObject,
  setDocument2Collection,
} from "@/db.js";
import draggable from "vuedraggable";
import { useRoute } from "vue-router";

export default {
  components: { draggable },
  name: "productList",
  setup() {
    //   商品列表
    // const product_list = ref([]);
    // const getProductListHandler = () => {
    //   getCollectionList(["products"]).then((data) => {
    //     product_list.value = data;
    //   });
    // };

    // ref(useRoute().params.category_name ?? null);

    // 商品分類
    const product_category_list = ref([]);
    const getProductCategoryHandler = () => {
      getDocumentObject(["products/category"]).then((data) => {
        product_category_list.value = data.datas;
      });
    };

    // 類別排序調整
    const sort_dialog_status = ref(false);
    const sort_temp_list = ref([]);
    const openSortDialog = (pre_sort_list) => {
      sort_temp_list.value = JSON.parse(JSON.stringify(pre_sort_list));
      sort_dialog_status.value = true;
    };
    const saveSortTempList = () => {
      product_category_list.value = JSON.parse(
        JSON.stringify(sort_temp_list.value)
      );

      updateProductCategoryListHandler(() => {
        sort_dialog_status.value = false;
      });
    };

    // 更新商品類別
    const updateProductCategoryListHandler = (callbackFunction) => {
      setDocument2Collection(["products"], {
        id: "category",
        datas: product_category_list.value,
      }).then(() => {
        alert("更新成功");
        if (callbackFunction) {
          callbackFunction();
        }
      });
    };

    // 預覽圖片
    const preview_image_url = ref("");

    onMounted(() => {
      getProductCategoryHandler();
    });
    return {
      // 商品列表
      // product_list,
      // 商品分類
      product_category_list,
      // 預覽圖片
      preview_image_url,
      // 類別排序調整
      sort_dialog_status,
      sort_temp_list,
      openSortDialog,
      saveSortTempList,
    };
  },
};
</script>

