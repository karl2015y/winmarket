
<template>
  <div class="font-NST">
    <router-view />
  </div>
</template>

<script>
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
  mounted() {
    this.$nextTick(function () {
      reportWindowSize();
    });
  },
};
</script>