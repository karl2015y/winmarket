<template>
  <PicText3
    class="px-16 md:px-48 pt-5 md:pt-28 pb-12 md:pb-32"
    chtTitle="OUR CASES"
    engTitle=""
    _class="!w-full"
  >
    <div class="!w-full grid grid-cols-3 gap-3">
      <div
        v-for="item in 9"
        :key="item"
        class="bg-gray-300 w-24 h-24 md:w-full md:h-32 xl:h-48"
      >
        {{ item }}
      </div>
    </div>
  </PicText3>
</template>
<script>
import PicText3 from "@/components/PicText/PicText_3.vue";

export default {
  components: {
    PicText3,
  },
  setup() {},
};
</script>