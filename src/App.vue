
<template>
  <div class="font-NST bg-gray-50 overflow-x-hidden">
    <router-view />
  </div>
  <transition
    enter-active-class="animate__animated animate__fadeIn animate__slower"
    leave-active-class="animate__animated animate__fadeOut animate__delay-1s"
  >
    <div
      v-if="loading_status"
      class="
        fixed
        top-0
        left-0
        w-full
        h-full
        bg-white bg-opacity-90
        z-[3000]
        flex
        justify-center
        items-center
      "
    >
      <!-- {{ state }} -->
      <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://assets9.lottiefiles.com/datafiles/Hhw0wgYmETDTkxW/data.json"
        style="width: 320px"
      >
      </lottie-player>
    </div>
  </transition>
</template>

<script>
import { computed, provide } from "vue";
import store from "@/store";
import "@lottiefiles/lottie-player";

function reportWindowSize() {
  const DesktopSize = 1441;
  const PhoneSize = 768;
  let currentSize = window.innerWidth;
  let fs = 16;
  if (currentSize < PhoneSize) {
    fs = 3.4;
  } else if (currentSize > DesktopSize) {
    fs = 1.1;
  } else {
    fs = -0.00357 * currentSize + 6.14;
    fs = fs > 2 ? 2 : fs;
  }

  document.querySelector("html").style.fontSize = `${fs}vw`;
  console.log("reportWindowSize");
}
window.onresize = reportWindowSize;

export default {
  setup() {
    provide("mapStore", store);
    console.log(store.state.loading_status);
    const state = computed(() => store.state);
    const loading_status = computed(
      () => JSON.stringify(store.state.loading_status).indexOf(":true") > -1
    );
    return {
      state,
      loading_status,
    };
  },
  mounted() {
    this.$nextTick(function () {
      reportWindowSize();
    });
  },
};
</script>
