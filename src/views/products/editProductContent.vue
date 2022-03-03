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

    <!-- 商品文案 -->
    <div class="p-1.5">
      <h2 class="mb-2">商品文案</h2>
      <component
        v-model="mvalue.content"
        :updateDataHandler="updateDataHandler"
        :is="`editor-wangeditor`"
      />
    </div>

  </div>
</template>
<script>
import { computed, onMounted, ref, watch } from "vue";

import editorWangeditor from "../editor/editorWangeditor.vue";


import { getDocumentObject, setDocument2Collection } from "@/db.js";
export default {
  components: { editorWangeditor },
  props: ["modelValue", "product_category_list"],
  setup(props, content) {
    // 雙向value
    const mvalue = ref(JSON.parse(JSON.stringify(props.modelValue)));


    // 更新
    const updateDataHandler = () => {

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


    return {
      mvalue,
      // 更新
      updateDataHandler,

      // 檢查有沒有動過
      savedStatus,
    };
  },
};
</script>