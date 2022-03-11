<template>

  <el-table :data="list" style="width: 100%">
    <el-table-column prop="date" label="建立日期" width="180">
      <template #default="scope">
        <p class="whitespace-pre-line">
          {{ new Date(scope.row.date).toLocaleString() }}
        </p>
      </template>
    </el-table-column>

    <el-table-column prop="contactWay" label="詢問人資料" width="180">
      <template #default="scope">
        <p class="whitespace-pre-line">{{ scope.row.contactWay }}</p>
      </template>
    </el-table-column>
    <el-table-column prop="Note" label="問題">
      <template #default="scope">
        <p class="whitespace-pre-line">{{ scope.row.Note }}</p>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { getCollectionList } from "@/db.js";
import { onMounted, ref } from "vue";

export default {
  name: "FormList",
  setup() {
    const list = ref([]);
    const getListHandler = () => {
      getCollectionList(["form", "XeM0DqNM96oRIxeRfRou", "response"]).then(
        (data) => {
          console.log(data);
          list.value = data;
        }
      );
    };
    onMounted(() => {
      getListHandler();
    });
    return {
      list,
    };
  },
};
</script>