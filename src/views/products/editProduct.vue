<template>
  <span class="py-1 px-3" v-if="savedStatus"> 已儲存 </span>
  <button
    v-else
    @click="updateDataHandler()"
    class="
      ml-4
      inline-flex
      text-white
      bg-skin-500
      border-0
      py-1
      px-3
      focus:outline-none
      hover:bg-skin-600
      rounded
    "
  >
    儲存
  </button>
  <div class="border border-solid m-3 p-2 shadow">
    <!-- 商品狀態 -->
    <div class="p-1.5">
      <h2 class="mr-2 inline">商品狀態</h2>
      <el-switch
        v-model="mvalue.is_enabled"
        size="small"
        active-text="啟用"
        inactive-text="關閉"
      />
    </div>
    <!-- 商品分類 -->
    <div class="p-1.5">
      <h2 class="mb-2">商品分類</h2>
      <el-select
        v-model="mvalue.category"
        multiple
        placeholder="請選擇商品分類"
      >
        <el-option
          v-for="item in product_category_list"
          :key="item.value"
          :label="item.name"
          :value="item.name"
        >
        </el-option>
      </el-select>
    </div>
    <!-- 商品名稱 -->
    <div class="p-1.5">
      <h2 class="mb-2">商品名稱</h2>
      <component
        v-model="mvalue.name"
        :updateDataHandler="updateDataHandler"
        :is="`editor-text`"
        :option="``"
      />
    </div>
    <!-- 商品簡述 -->
    <div class="p-1.5">
      <h2 class="mb-2">商品簡述</h2>
      <component
        v-model="mvalue.description"
        :updateDataHandler="updateDataHandler"
        :is="`editor-textarea`"
        :option="``"
      />
    </div>
    <!-- 商品圖片 -->
    <div class="p-1.5">
      <h2 class="inline">商品圖片 600x600</h2>

      <button
        @click="addProductImage()"
        class="
          ml-4
          inline-flex
          text-white
          bg-skin-500
          border-0
          py-1
          px-3
          focus:outline-none
          hover:bg-skin-600
          rounded
          text-xs
        "
      >
        新增圖片
      </button>

      <draggable
        class="flex gap-3 overflow-auto"
        v-model="mvalue.image_url"
        item-key="index"
        handle=".handle"
      >
        <template #item="{ index }">
          <div class="shadow p-1">
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
            <component
              v-model="mvalue.image_url[index]"
              :updateDataHandler="updateDataHandler"
              :is="`editor-img`"
              :option="`600x600`"
            />
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, ref, watch } from "vue";
import editorText from "../editor/editorText.vue";
import editorTextarea from "../editor/editorTextarea.vue";
import editorImg from "../editor/editorImg.vue";
import draggable from "vuedraggable";

import { getDocumentObject, setDocument2Collection } from "@/db.js";
export default {
  components: { editorText, editorTextarea, editorImg, draggable },
  props: ["modelValue", "product_category_list"],
  setup(props, content) {
    // 雙向value
    const mvalue = ref(JSON.parse(JSON.stringify(props.modelValue)));
    // 商品分類
    const product_category_list = ref(props.product_category_list);
    const getProductCategoryHandler = () => {
      if (props.product_category_list) {
        return false;
      }
      console.log("沒給選像自己抓");
      getDocumentObject(["products/category"]).then((data) => {
        product_category_list.value = data.datas;
      });
    };
    // 新增圖片
    const addProductImage = () => {
      const len = mvalue.value.image_url.length;
      if (len > 0 && mvalue.value.image_url[0] === 0) {
        alert("請先將圖片上傳完後再新增！");
        return false;
      }
      mvalue.value.image_url.unshift(0);
    };

    // 更新
    const updateDataHandler = () => {
      for (let index = 0; index < mvalue.value.image_url.length; index++) {
        const item = mvalue.value.image_url[index];
        if (!item || item.length === 0 || item === 0) {
          mvalue.value.image_url.splice(index, 1);
          index--;
        }
      }
      const id = mvalue.value.id;
      setDocument2Collection(["products"], mvalue.value).then(() => {
        mvalue.value = { id, ...mvalue.value };
        content.emit(
          "update:modelValue",
          JSON.parse(JSON.stringify(mvalue.value))
        );
        alert("更新成功");
      });
    };

    // 檢查有沒有動過
    const savedStatus = computed(
      () => JSON.stringify(props.modelValue) == JSON.stringify(mvalue.value)
    );

    onMounted(() => {
      getProductCategoryHandler();
    });
    return {
      mvalue,
      // 更新
      updateDataHandler,
      //新增圖片
      addProductImage,
      // 商品備註
      product_category_list,
      // 檢查有沒有動過
      savedStatus,
    };
  },
};
</script>