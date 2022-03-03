<template>
  <div>
    <!-- 新增元件 -->

    <!-- 打開新增元件列表 -->
    <transition
      enter-active-class="animate__animated animate__fadeInRight animate__faster"
      leave-active-class="animate__animated animate__fadeOutRight animate__faster"
    >
      <div
        class="fixed z-10 bg-gray-100 top-20 right-0 p-1"
        v-if="!showAddComponentsForm"
        @click="showAddComponentsFormHandler()"
      >
        <el-tooltip
          class="box-item"
          effect="dark"
          content="新增元件"
          placement="left"
        >
          <div>
            <svg
              class="
                cursor-pointer
                w-10
                h-10
                border-solid border
                shadow
                rounded
                text-gray-300
                hover:text-gray-500 hover:shadow-xl
              "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </div>
        </el-tooltip>
      </div>
    </transition>
    <el-dialog
      v-model="showAddComponentsForm"
      :title="`新增元件 id:${component_base.id}`"
      :fullscreen="fullscreenComponentsForm"
    >
      <!-- 選擇元件類別 -->
      <div class="p-1.5">
        <h2 class="mb-2">元件類別</h2>

        <el-select
          v-model="component_base.type"
          class="m-2"
          placeholder="請選擇新增的元件類別"
        >
          <el-option
            v-for="item in components"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-switch
          v-if="component_base.type"
          v-model="fullscreenComponentsForm"
          class="mb-2"
          active-text="全螢幕預覽"
          inactive-text="視窗預覽"
        />
        <div v-if="component_base.type" class="border-solid border"></div>
        <component v-if="component_base.type" :is="component_base.type" />
      </div>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="hiddenAddComponentsFormHandler()">取消</el-button>
          <el-button type="primary" @click="addComponentsHandler()"
            >新增</el-button
          >
        </span>
      </template>
    </el-dialog>
    <!-- 元件列表(編輯 設定) -->
    <div>
      <transition
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutRight"
      >
        <div
          v-if="components_list.length > 0 && showComponentsListStatus"
          class="fixed z-[3000] bg-gray-100 px-4 pt-4 pb-8 top-5 right-0 shadow"
        >
          <div class="w-full flex justify-between items-end mb-4">
            <div @click="showComponentsListStatus = false">
              <svg
                class="
                  cursor-pointer
                  w-6
                  h-6
                  border-solid border
                  shadow
                  rounded
                  text-gray-300
                  hover:text-gray-500 hover:shadow-xl
                "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
            <div>
              <span class="text-xs text-gray-500 mr-1"
                >最後更新時間：2022/1/26 16:28</span
              >
              <el-button @click="updateComponentsDataHandler()" type="primary"
                >儲存</el-button
              >
            </div>
          </div>
          <ul>
            <draggable
              v-model="components_list"
              item-key="index"
              handle=".handle"
            >
              <template #item="{ element, index }">
                <li
                  class="
                    flex
                    justify-start
                    items-center
                    hover:bg-white
                    rounded-sm
                  "
                >
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
                    class="mx-3 cursor-pointer"
                    @click="scroll2ViewHandler(element.id)"
                  >
                    {{ (element.sort = index + 1) }}. {{ element.type }} ({{
                      element.id
                    }})
                  </div>
                  <div class="ml-auto flex gap-1">
                    <!-- 編輯的按鈕 -->
                    <el-tooltip effect="dark" content="編 輯" placement="top">
                      <router-link
                        :to="{
                          name: 'pageEditor',
                          params: {
                            page_id: page_id,
                            component_type: element.type,
                            component_id: element.id,
                          },
                        }"
                      >
                        <button
                          class="
                            bg-blue-500
                            text-white
                            rounded-full
                            p-1
                            hover:bg-blue-700
                            flex
                            items-center
                          "
                        >
                          <svg
                            class="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            ></path>
                          </svg>
                        </button>
                      </router-link>
                    </el-tooltip>

                    <!-- 刪除的按鈕 -->
                    <el-tooltip effect="dark" content="刪 除" placement="top">
                      <button
                        class="
                          bg-red-500
                          text-white
                          rounded-full
                          p-1
                          hover:bg-red-700
                          flex
                          items-center
                        "
                        @click="deleteComponentHandler(index)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </el-tooltip>
                  </div>
                </li>
              </template>
            </draggable>
          </ul>
        </div>
      </transition>

      <!-- 打開元件列表 -->
      <transition
        enter-active-class="animate__animated animate__fadeInLeftBig animate__fast"
        leave-active-class="animate__animated animate__fadeOutLeftBig animate__slow"
      >
        <div
          class="fixed z-10 bg-gray-100 top-5 right-0 p-1"
          v-if="!showComponentsListStatus"
          @click="showComponentsListStatus = true"
        >
          <el-tooltip
            class="box-item"
            effect="dark"
            content="展開元件列表"
            placement="left"
          >
            <div>
              <svg
                class="
                  cursor-pointer
                  w-10
                  h-10
                  border-solid border
                  shadow
                  rounded
                  text-gray-300
                  hover:text-gray-500 hover:shadow-xl
                "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </div>
          </el-tooltip>
        </div>
      </transition>
    </div>

    <!-- 元件列表 -->

    <template v-for="(component, index) in components_list" :key="index">
      <component
        :id="component.id"
        :is="component.type"
        :data="component.data"
      />
    </template>
  </div>
</template>
<script>
import {
  getDocWithInsideCollection,
  batchSetDocument2Collection,
  getCollectionList,
  deleteDocument,
} from "@/db.js";

import { onMounted, ref, inject } from "vue";
import _components from "@/components/list.js";
import draggable from "vuedraggable";
import { useRoute } from "vue-router";

export default {
  name: "pageSet",
  components: { draggable, ..._components },
  setup() {
    const page_id = ref(useRoute().params.page_id);
    const components_list = ref([]);
    // 新增元件
    const component_base = ref({
      type: "",
      id: "",
      data: null,
      sort: 0,
    });
    const addComponentsHandler = () => {
      const temp = JSON.parse(JSON.stringify(component_base.value));
      temp.sort = components_list.value.length + 1;
      components_list.value.push(temp);
      updateComponentsDataHandler();
      showAddComponentsForm.value = false;
    };
    // 全螢幕預覽
    const fullscreenComponentsForm = ref(false);
    const showAddComponentsForm = ref(false);
    const _uuid = () => {
      let d = Date.now();
      if (
        typeof performance !== "undefined" &&
        typeof performance.now === "function"
      ) {
        d += performance.now(); //use high-precision timer if available
      }
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          let r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
      );
    };
    const components = ref(
      Object.keys(_components).map((key) => ({
        label: key,
        value: key,
      }))
    );
    const showAddComponentsFormHandler = () => {
      showAddComponentsForm.value = true;
      component_base.value = JSON.parse(
        JSON.stringify({
          type: "",
          id: _uuid(),
          data: null,
          sort: 0,
        })
      );
    };
    const hiddenAddComponentsFormHandler = () => {
      showAddComponentsForm.value = false;
    };
    //刪除firebase資料
    const deleteComponentHandler = (index) => {
      deleteDocument([
        "pages",
        page_id.value,
        "components_list",
        components_list.value[index].id,
      ]).then(() => {
        components_list.value.splice(index, 1);
      });
    };
    //元件列表(排序刪除跟編輯的地方)
    const showComponentsListStatus = ref(true);

    // 移動過去
    const smoothScroll = inject("smoothScroll");
    const scroll2ViewHandler = (dom_id) => {
      const dom = document.getElementById(`${dom_id}`);
      smoothScroll({
        scrollTo: dom,
        hash: `#${dom_id}`, // required if updateHistory is true
      });
      //   animate__animated animate__pulse
      setTimeout(() => {
        dom.classList.add(
          "animate__animated",
          "animate__headShake",
          "animate__fast"
        );
      }, 600);
      setTimeout(() => {
        dom.classList.remove(
          "animate__animated",
          "animate__headShake",
          "animate__fast"
        );
      }, 1600);
    };
    // 更新firebase資料
    const updateComponentsDataHandler = () => {
      batchSetDocument2Collection(
        ["pages", page_id.value, "components_list"],
        components_list.value
      ).then(() => {
        alert("更新成功");
      });
    };
    // 取得firebase資料
    const getComponentsDataHandler = () => {
      getCollectionList(["pages", page_id.value, "components_list"]).then(
        (datas) => {
          components_list.value = datas.sort((a, b) => a.sort - b.sort);
        }
      );
    };

    onMounted(() => {
      getComponentsDataHandler();
    });

    return {
      components_list,
      showAddComponentsForm,
      component_base,
      fullscreenComponentsForm,
      showAddComponentsFormHandler,
      hiddenAddComponentsFormHandler,
      addComponentsHandler,
      components,
      deleteComponentHandler,
      updateComponentsDataHandler,
      scroll2ViewHandler,
      showComponentsListStatus,
      page_id,
    };
  },
};
</script>
<style scoped>
</style>