<template>
  <el-table :data="pageList" style="width: 100%">
    <el-table-column prop="id" label="URL" width="180">
      <template #default="scope">
        <!-- name: "pageSet", -->

        <router-link
          :to="{ name: 'pageSet', params: { page_id: scope.row.id } }"
          class="text-blue-500 hover:text-blue-300"
        >
          {{ scope.row.id }}
        </router-link>
      </template>
    </el-table-column>
    <el-table-column prop="title" label="標題" width="180" />
    <el-table-column prop="description" label="簡介" />

    <el-table-column align="right">
      <template #header>
        <el-button size="small" type="primary" @click="pageAddHandler()"
          >新增頁面</el-button
        >
      </template>
      <template #default="scope">
        <el-button
          size="small"
          @click="pageEditHandler(scope.$index, scope.row)"
          >Edit</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="pageDeleteHandler(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <!-- 編輯視窗 -->
  <el-dialog
    v-model="openDialogStatus"
    title="頁面參數"
    :destroy-on-close="true"
  >
    <pageTitle
      :page_data="pageEditTemp"
      :editMode="pageEditStatus"
      :pageEditCallbackHandler="pageEditCallbackHandler"
      :pageAddCallbackHandler="pageAddCallbackHandler"
    />
  </el-dialog>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { getCollectionList, deleteDocument } from "@/db.js";
import pageTitle from "./pageTitle.vue";

export default {
  name: "pageList",
  components: { pageTitle },
  setup() {
    //   頁面列表
    const pageList = ref([]);
    const getPageListHandler = () => {
      getCollectionList(["pages"]).then((data) => {
        pageList.value = data;
      });
    };

    // 頁面編輯
    const pageEditStatus = ref(false);
    const pageEditIndex = ref(-1);
    const pageEditTemp = ref({});
    const pageEditHandler = (index, page_data) => {
      pageEditIndex.value = index;
      pageEditStatus.value = true;
      // 深拷貝頁面資料給暫存變數
      pageEditTemp.value = JSON.parse(JSON.stringify(page_data));
    };
    const pageEditCallbackHandler = (page_data) => {
      pageList.value[pageEditIndex.value] = {
        id: page_data.id,
        title: page_data.title,
        description: page_data.description,
      };
      pageEditStatus.value = false;
      pageEditIndex.value = -1;
      alert("更新成功！");
    };

    // 刪除頁面
    const pageDeleteHandler = (index, page_data) => {
      if (!confirm("頁面內所有數據即將刪除，是否繼續？")) {
        return false;
      }
      deleteDocument(["pages", page_data.id]).then(() => {
        pageList.value.splice(index, 1);
      });
    };

    // 建立頁面
    const pageAddStatus = ref(false);
    const pageAddHandler = () => {
      pageAddStatus.value = true;
    };
    const pageAddCallbackHandler = (page_data) => {
      pageList.value.push({
        id: page_data.id,
        title: page_data.title,
        description: page_data.description,
      });
      pageAddStatus.value = false;
      alert("新增成功！");
    };

    //開啟編輯/建立視窗
    const openDialogStatus = computed({
      get: () => pageEditStatus.value || pageAddStatus.value,
      set: (val) => {
        pageEditStatus.value = val;
        pageAddStatus.value = val;
      },
    });

    onMounted(() => {
      getPageListHandler();
    });
    return {
      //   頁面列表
      pageList,
      //開啟編輯/建立視窗
      openDialogStatus,
      // 頁面編輯
      pageEditStatus,
      pageEditHandler,
      pageEditTemp,
      pageEditCallbackHandler,
      // 刪除頁面
      pageDeleteHandler,
      // 建立頁面
      pageAddHandler,
      pageAddCallbackHandler,
    };
  },
};
</script>