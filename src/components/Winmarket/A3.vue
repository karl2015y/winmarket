<template>
  <PicText3
    class="px-16 xl:px-64 xl:px-72 pt-5 md:pt-28 pb-12 md:pb-32"
    chtTitle="社會公益"
    engTitle=""
    _class="!w-full flex-col"
  >
    <div class="!w-full grid grid-cols-1 md:grid-cols-2 gap-3">
      <a
        v-for="item in 6"
        :key="item"
        href="#精選故事"
        class="w-full text-left"
      >
        <div
          class="
            w-full
            mb-7
            md:mb-1.5 md:pb-1.5
            flex
            gap-5
            md:block md:hover:shadow-2xl
            hover:shadow
          "
        >
          <div class="w-32 h-32 md:w-auto md:h-auto" style="min-width: 8rem">
            <img class="h-full w-full" src="/pic/news/2.jpg" />
          </div>
          <div class="lg:px-4 md:px-2 px-1">
            <h2 class="md:mt-4 text-lg text-main font-medium">文章示範標題</h2>
            <div class="mt-1 md:mt-3 md:w-auto text-xs">
              <p class="line-clamp-3">
                內文重點示範文字 ， 字數限制如敘述內可容納之內文重點示範文字 ，
                字數限制如敘述內可容納之內文重點示範文字 ，
                字數限制如敘述內可容納之內文重點示範文字 ，
                字數限制如敘述內可容納之
              </p>
            </div>

            <div
              class="
                whitespace-nowrap
                my-3
                pb-1.5
                border-b
                text-gray-80
                w-16
                border-gray-80
              "
            >
              2021-12-30
            </div>
          </div>
        </div>
      </a>
    </div>
      <div class="text-center">
    <button
      class="
        mt-3
        md:mt-6
        w-28
        text-gray-600
        border-solid border-gray-600
        border
        rounded-full
        font-bold
        text-xs
        py-1
        md:py-1.5
      "
    >
      了解更多
    </button>
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