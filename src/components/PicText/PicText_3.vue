<template>
  <section>
    <div class="w-full text-center">
      <h1 :class="_chtTitleClass ?? 'text-main text-xl'">{{ chtTitle }}</h1>
      <h2 :class="_engTitleClass ?? 'text-third'">{{ engTitle }}</h2>
      <div class="overflow-x-auto overflow-y-hidden">
        <div
          ref="cards"
          class="mt-8 flex gap-6 md:!w-full md:gap-10"
          :style="`width:${cards_count * baseWidth}vw`"
          :class="_class"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { onMounted, ref } from "vue";
export default {
  props: {
    chtTitle: String,
    engTitle: String,
    baseWidth: Number,
    _class: String,
    _chtTitleClass: String,
    _engTitleClass: String,
  },
  setup() {
    const cards_count = ref(0);
    const cards = ref(null);

    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      cards_count.value = cards.value.childElementCount; // <div>This is a root element</div>
    });
    return {
      cards_count,
      cards,
    };
  },
};
</script>
<style scoped>
</style>