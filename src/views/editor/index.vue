<template>
  <!-- 儲存按鈕 -->
  <div class="fixed z-10 bg-gray-100 top-5 right-0 px-1 py-2">
    <div
      @click="updateDataHandler()"
      v-if="!data_saved_status"
      class="cursor-pointer text-gray-300 hover:text-gray-500"
    >
      <svg
        class="w-10 h-10 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        ></path>
      </svg>
      <small class="text-xs">尚未存檔</small>
    </div>
    <div
      v-if="data_saved_status"
      class="cursor-pointer text-green-500 hover:text-green-600"
    >
      <svg
        class="w-10 h-10 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        ></path>
      </svg>
      <small class="text-xs">已存檔</small>
    </div>
  </div>
  <!-- 預覽元件 -->
  <transition
    enter-active-class="animate__animated animate__fadeInRight animate__faster"
    leave-active-class="animate__animated animate__fadeOutRight animate__faster"
  >
    <div
      class="fixed z-10 bg-gray-100 top-28 right-0 p-1"
      v-if="!showPreviewComponents"
      @click="showPreviewComponents = true"
    >
      <el-tooltip
        class="box-item"
        effect="dark"
        content="預覽元件"
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
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            ></path>
          </svg>
        </div>
      </el-tooltip>
    </div>
  </transition>
  <el-dialog
    v-model="showPreviewComponents"
    :title="`預覽元件`"
    :fullscreen="true"
  >
    <!-- 選擇元件類別 -->
    <div>
      <component :id="component_id" :is="component_type" :data="data_temp" />
    </div>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showPreviewComponents = false">關閉</el-button>
      </span>
    </template>
  </el-dialog>
  <!-- 編輯器 -->
  <div class="m-4">
    <template v-if="main">
      <h1 class="text-xl font-bold">外元件</h1>
      <div class="border border-solid m-3 p-2 shadow">
        <div class="p-1.5" v-for="(item, key_name) in main" :key="key_name">
          <h2 class="mb-2">{{ lan["main_" + key_name] }}: {{ item.value }}</h2>
          <component
            v-model="item.value"
            :updateDataHandler="updateDataHandler"
            :is="`editor-${item.type.split('@')[0]}`"
            :option="`${item.type.split('@')[1] ?? ''}`"
          />
        </div>
      </div>

      <div class="border-b-2 border-solid" />
    </template>

    <template v-if="sec">
      <div class="flex mt-2">
        <h1 class="text-xl font-bold">內元件</h1>
        <button
          @click="addSecHandler()"
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
          新增內元件
        </button>
      </div>

      <draggable v-model="sec" item-key="index" handle=".handle">
        <template #item="{ element, index }">
          <div class="border border-solid m-3 py-2 px-3 shadow relative">
            <!-- 可以移動的按鈕 -->
            <button class="handle cursor-move absolute -left-2.5 top-1/2 -mt-3">
              <svg
                class="h-6 w-4 text-gray-400"
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
            <!-- 刪除的按鈕 -->
            <button
              class="
                absolute
                -left-3.5
                -top-1
                bg-red-500
                text-white
                rounded-full
                p-1
                hover:bg-red-700
              "
              @click="deleteSecHandler(index)"
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
            <div
              class="p-1.5"
              v-for="(item, key_name) in element"
              :key="key_name"
            >
              <h2 class="mb-2">
                {{ lan["sec_" + key_name] + (index + 1) }}: {{ item.value }}
              </h2>
              <component
                v-model="item.value"
                :updateDataHandler="updateDataHandler"
                :is="`editor-${item.type.split('@')[0]}`"
                :option="`${item.type.split('@')[1] ?? ''}`"
              />
            </div>
          </div>
        </template>
      </draggable>

      <div class="border-b-2 border-solid" />
    </template>
  </div>
</template>


<script>
import { computed, onBeforeMount, onMounted, reactive, ref } from "vue";
import axios from "axios";
import draggable from "vuedraggable";

import editorText from "./editorText.vue";
import editorTextarea from "./editorTextarea.vue";
import editorImg from "./editorImg.vue";

import { useRoute } from "vue-router";
import { getDocumentObject, setDocument2Collection } from "@/db.js";

import _components from "@/components/list.js";

export default {
  name: "editor",
  components: {
    draggable,
    editorText,
    editorTextarea,
    editorImg,
    ..._components,
  },
  setup() {
    // firebase
    const page_id = ref(useRoute().params.page_id);
    const component_type = ref(useRoute().params.component_type);
    const component_id = ref(useRoute().params.component_id);
    const server_data = ref("");
    const getComponentsDataHandler = () => {
      getDocumentObject([
        "pages",
        page_id.value,
        "components_list",
        component_id.value,
      ]).then((data) => {
        console.log(data);
        if (data.type != component_type.value) {
          alert("參數錯誤");
          history.back();
        }
        if (data.data) {
          server_data.value = data.data;
          const _data = JSON.parse(data.data);
          console.log(data, _data);
          main.value = _data.main;
          sec.value = _data.sec;
        } else {
          getConfigHandler();
        }
      });
    };
    // 存檔
    const data_temp = computed(() => {
      return JSON.stringify({
        main: main.value ?? {},
        sec: sec.value,
      });
    });
    const updateDataHandler = () => {
      setDocument2Collection(["pages", page_id.value, "components_list"], {
        id: component_id.value,
        data: data_temp.value,
      }).then(() => {
        alert("存檔成功");
        server_data.value = data_temp.value;
      });
    };
    // 存檔狀態
    const data_saved_status = computed(() => {
      return (
        server_data.value &&
        data_temp.value &&
        server_data.value.length == data_temp.value.length &&
        server_data.value == data_temp.value
      );
    });

    const config = ref(null);
    const main = ref({});
    const sec = ref([]);
    const lan = ref({});
    const moveSecDomStatus = ref(true);
    // 處理元件參數
    const configHandler = (_config) => {
      let _main = {};
      for (const key_name in _config) {
        _main[key_name] = { type: "", value: "" };
        _main[key_name].type = _config[key_name];
        _main[key_name].value = "";
      }
      return _main;
    };
    // 翻譯本地化
    const localHandler = () => {
      if (config.value.chi) {
        lan.value = config.value.chi;
      }
    };
    // 初始化外元件
    const mainHandler = () => {
      if (config.value.main) {
        main.value = configHandler(config.value.main);
      }
    };
    // 初始化內元件
    const secHandler = () => {
      if (config.value.sec) {
        sec.value.push(configHandler(config.value.sec));
      }
    };
    // 新增內元件
    const addSecHandler = secHandler; //兩個是做一樣的事
    // 刪除內元件
    const deleteSecHandler = (index) => {
      sec.value.splice(index, 1);
    };
    // 取得編輯器參數
    const getConfigHandler = () => {
      axios
        .get(`/editor/${component_type.value}.json`)
        .then((response) => {
          console.log(response.data);
          config.value = response.data;
          mainHandler();
          secHandler();
          localHandler();
        })
        .catch(() => {
          alert("尚未開放編輯，請聯絡可憐的工程師QQ");
          history.back();
        });
    };

    // 預覽元件
    const showPreviewComponents = ref(false);

    onBeforeMount(() => {
      getComponentsDataHandler();
      getConfigHandler();
    });
    return {
      config,
      main,
      sec,
      lan,
      addSecHandler,
      deleteSecHandler,
      moveSecDomStatus,
      updateDataHandler,
      data_saved_status,

      component_type,
      component_id,

      showPreviewComponents,
      data_temp,
    };
  },
};
</script>
<style scoped>
</style>