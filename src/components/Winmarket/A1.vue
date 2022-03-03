<template>
  <nav
    class="
      z-10
      h-16
      w-full
      bg-main
      flex
      items-center
      justify-between
      px-8
      md:px-14
      shadow-lg
    "
  >
    <img
      class="h-auto w-28 md:hidden"
      :src="loc_data.main.pic_phone.value"
      alt="穩盈logo"
    />
    <img
      class="h-auto w-10 hidden md:block"
      :src="loc_data.main.pic_desktop.value"
      alt="穩盈logo"
    />

    <button
      @click="menuStatus = !menuStatus"
      class="menu-btn cursor-pointer relative h-28 w-7 md:hidden"
    >
      <div
        class="transition-all bg-white w-full h-0.5"
        :class="{ 'translate-y-2 -rotate-45': menuStatus }"
      ></div>
      <div
        class="transition-all bg-white w-full h-0.5 my-1.5"
        :class="{ 'opacity-0': menuStatus }"
      ></div>
      <div
        class="transition-all bg-white w-full h-0.5"
        :class="{ '-translate-y-2 rotate-45': menuStatus }"
      ></div>
    </button>
    <ul
      :class="{ 'w-0 overflow-hidden': !menuStatus, 'w-1/2': menuStatus }"
      class="
        z-10
        bg-white
        md:bg-main
        text-sec
        md:text-white md:text-xl
        transition-all
        shadow-lg
        fixed
        h-screen
        right-0
        top-16
        flex flex-col
        md:w-auto md:h-auto md:static md:flex-row md:shadow-none md:gap-7
      "
    >
      <li
        v-for="item in loc_data.sec"
        :key="item"
        class="h-12 md:block hover:bg-main hover:text-white hover:shadow-lg"
      >
        <a
          v-if="item.link.value.indexOf('http') > -1"
          :href="item.link.value"
          target="_blank"
          class="w-full h-full flex justify-center items-center"
          >服務項目</a
        >

        <router-link
          v-else
          active-class="bg-main text-white shadow-inner md:shadow-none"
          class="w-full h-full flex justify-center items-center"
          :to="item.link.value"
          >{{ item.title.value }}</router-link
        >
      </li>
      <!-- <li class="h-12 md:block hover:bg-main hover:text-white hover:shadow-lg">
                <a class="w-full h-full flex justify-center items-center">服務項目</a>
            </li> -->
    </ul>
  </nav>
</template>
<script>
import { ref, watch } from "vue";

export default {
  props: ["data"],
  setup(props) {
    const menuStatus = ref(false);

    const loc_data = ref({
      main: {
        pic_phone: {
          type: "img@100x45",
          value:
            "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F26350638-1ce7-4ab1-9fba-bc155186d2e9.png?alt=media&token=36a0b1d1-5d94-4efa-876e-c818ea9ab399",
        },
        pic_desktop: {
          type: "img@60x60",
          value:
            "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2Fd3be6fad-8617-4476-85cb-82f9679f0625.png?alt=media&token=fd633a72-5aa5-49b9-8d9c-1fd77a990089",
        },
      },
      sec: [
        {
          title: { type: "text", value: "首頁" },
          link: { type: "text", value: "win" },
        },
      ],
    });

    if (props.data) {
      loc_data.value = JSON.parse(props.data);
      watch(
        () => props.data,
        (val) => {
          loc_data.value = JSON.parse(val);
        }
      );
    }
    return {
      loc_data,
      menuStatus,
    };
  },
};
</script>

