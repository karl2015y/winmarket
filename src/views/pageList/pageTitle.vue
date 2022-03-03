<template>
  <div>
    <div class="flex justify-between">
      <h1 v-if="editMode" class="text-xl font-bold">更新頁面</h1>
      <h1 v-else class="text-xl font-bold">新增頁面</h1>
      <button
        v-if="editMode"
        @click="updatePageDataHandler()"
        class="
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
      <button
        v-if="!editMode"
        @click="createPageDataHandler()"
        class="
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
        建立
      </button>
    </div>
    <div class="border border-solid m-3 p-2 shadow">
      <!-- 路徑設定 -->
      <div v-if="!editMode" class="p-1.5">
        <h2 class="mb-2">路徑設定</h2>
        <el-input v-model="url" placeholder="請輸入路徑" />
      </div>
      <!-- 標題設定 -->
      <div class="p-1.5">
        <h2 class="mb-2">標題設定</h2>
        <el-input v-model="title" placeholder="請輸入頁面標題" />
      </div>

      <div class="p-1.5">
        <h2 class="mb-2">簡介設定</h2>
        <el-input
          v-model="description"
          :autosize="{ minRows: 2 }"
          type="textarea"
          placeholder="請輸入頁面簡介"
        />
      </div>
    </div>

    <div class="border-b-2 border-solid" />
  </div>
</template>
<script>
import { ref } from "vue";
import { setDocument2Collection } from "@/db.js";

export default {
  props: [
    "page_data",
    "editMode",
    "pageEditCallbackHandler",
    "pageAddCallbackHandler",
  ],

  setup(props) {
    const url = ref("");
    const title = ref(props.page_data.title??"");
    const description = ref(props.page_data.description??"");
    // 編輯模式狀態
    const editMode = ref(props.editMode);

    // 更新
    const updatePageDataHandler = () => {
      const updated_page_data = {
        id: props.page_data.id,
        title: title.value,
        description: description.value,
      };
      setDocument2Collection(["pages"], updated_page_data).then(() => {
        props.pageEditCallbackHandler({
          id: props.page_data.id,
          ...updated_page_data,
        });
      });
    };

    // 新增
    const createPageDataHandler = () => {
      if(url.value.length==0){
        alert('路徑為必填')
        return false;
      }
      const updated_page_data = {
        id: url.value,
        title: title.value,
        description: description.value,
      };
      setDocument2Collection(["pages"], updated_page_data).then(() => {
        props.pageAddCallbackHandler({
          id: url.value,
          ...updated_page_data,
        });
      });
    };
    return {
      url,
      title,
      description,
      // 編輯模式狀態
      editMode,
      // 更新
      updatePageDataHandler,
      // 新增
      createPageDataHandler,
    };
  },
};
</script>