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
    <!-- 品項名稱 -->
    <div class="p-1.5">
      <h2 class="mb-2">品項名稱</h2>
      <component
        v-model="mvalue.name"
        :updateDataHandler="updateDataHandler"
        :is="`editor-text`"
        :option="``"
      />
    </div>
    <!-- 品項數量 -->
    <div class="p-1.5">
      <h2 class="mb-2">品項數量</h2>
      <component
        v-model="mvalue.count"
        :updateDataHandler="updateDataHandler"
        :is="`editor-text`"
        :option="``"
      />
    </div>
    <!-- 品項價錢 -->
    <div class="p-1.5">
      <h2 class="mb-2">品項價錢(原始)</h2>
      <component
        v-model="mvalue.origin_price"
        :updateDataHandler="updateDataHandler"
        :is="`editor-text`"
        :option="``"
      />
    </div>

    <!-- 品項價錢 -->
    <div class="p-1.5">
      <h2 class="mb-2">品項價錢(銷售)</h2>
      <component
        v-model="mvalue.price"
        :updateDataHandler="updateDataHandler"
        :is="`editor-text`"
        :option="``"
      />
    </div>

    <!-- 商品圖片 -->
    <div class="p-1.5">
      <h2 class="inline">商品圖片 600x600</h2>

      <component
        v-model="mvalue.image_url"
        :updateDataHandler="updateDataHandler"
        :is="`editor-img`"
        :option="`600x600`"
      />
    </div>
  </div>
</template>
<script>
import { computed, onMounted, ref, watch } from "vue";
import editorText from "../editor/editorText.vue";
import editorTextarea from "../editor/editorTextarea.vue";
import editorImg from "../editor/editorImg.vue";
import draggable from "vuedraggable";

import { useRoute } from "vue-router";
import { setDocument2Collection } from "@/db.js";
export default {
  components: { editorText, editorTextarea, editorImg, draggable },
  props: ["modelValue"],
  setup(props, content) {
    const route = useRoute();
    const product_id = ref(route.params.product_id);
    // 雙向value
    const mvalue = ref(JSON.parse(JSON.stringify(props.modelValue)));
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
      const id = mvalue.value.id;
      setDocument2Collection(
        ["products", product_id.value, "spec"],
        mvalue.value
      ).then(() => {
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

    onMounted(() => {});
    return {
      mvalue,
      // 更新
      updateDataHandler,
      //新增圖片
      addProductImage,
      // 檢查有沒有動過
      savedStatus,
    };
  },
};
</script>