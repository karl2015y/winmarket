<template>
  <div>
    <img class="object-cover object-center shadow-xl rounded-full mx-auto w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 2xl:w-36 2xl:h-36 mb-3 md:mb-7" :src="src" alt />
    <h1 class="text-white text-xs md:text-sm whitespace-nowrap">
      {{ chtName }}
    </h1>

    <h1 class="text-white my-1 md:my-3 text-xs md:text-sm whitespace-nowrap">
      {{ engName }}
    </h1>
        <h1 class="text-white text-xs md:text-sm ">
      {{ jobTitle }}
    </h1>
  </div>
</template>
<script>
export default {
  props: {
    src: String,
    chtName: String,
    engName: String,
    jobTitle: String,
  },
  setup() {},
};
</script>
<style scoped>
</style>