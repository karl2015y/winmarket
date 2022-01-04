<template>
  <div>
    <img
      class="
        object-cover object-center
        w-24
        md:w-28
        lg:w-24
        xl:w-40
        2xl:w-48
        h-24
        md:h-28
        lg:h-24
        xl:h-40
        2xl:h-48
        shadow-lg
      "
      :src="src"
      alt
    />
    <h1
      class="
        mt-3
        md:mt-6
        tracking-widest
        leading-4
        text-sm text-main text-left
        md:text-xl
        font-bold
      "
    >
      {{jobTitle}}
    </h1>

    <h1
      class="
        mt-1.5
        md:mt-3
        tracking-widest
        leading-4
        text-sm text-sec text-left
        md:text-xl
        font-bold
      "
    >
      {{chtName}}
    </h1>

    <p class="mt-3 text-left text-sm md:text-base text-third font-light whitespace-pre-wrap">
     {{description}}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    src: String,
    jobTitle: String,
    chtName: String,
    description: String,
  },
  setup() {},
};
</script>
<style scoped>
</style>