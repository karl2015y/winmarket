<template>
  <el-input v-model="mvalue" placeholder="請輸入" />
</template>
<script>
import { ref, watch } from "vue";

export default {
  props: ["modelValue"],
  setup(props, content) {
    //   雙向value
    const mvalue = ref(props.modelValue);
    watch(
      () => props.modelValue,
      (val) => {
        mvalue.value = val;
      }
    );
    watch(mvalue, (val) => {
      content.emit("update:modelValue", val);
    });
    return { mvalue };
  },
};
</script>
<style scoped>
</style>