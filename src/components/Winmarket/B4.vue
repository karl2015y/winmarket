<template>
  <PicText3
    class="px-16 md:px-48 pt-5 md:pt-28 pb-12 md:pb-32"
    chtTitle="公司動態"
    engTitle="FILM and TELEVISION"
    :base-width="33"
    _class="2xl:flex-wrap"
  >
    <Card1
      data-wow-duration="0.55s"
      class="wow animate__fadeInRight w-32 md:w-80"
    />
    <Card1
      data-wow-delay="0.1s"
      data-wow-duration="0.55s"
      class="wow animate__fadeInRight w-32 md:w-80"
    />
    <Card1
      data-wow-delay="0.2s"
      data-wow-duration="0.55s"
      class="wow animate__fadeInRight w-32 md:w-80"
    />
  </PicText3>
</template>
<script>
import PicText3 from "@/components/PicText/PicText_3.vue";
import Card1 from "@/components/Card/Card_1.vue";

export default {
  components: {
    PicText3,
    Card1,
  },
  setup() {},
};
</script>