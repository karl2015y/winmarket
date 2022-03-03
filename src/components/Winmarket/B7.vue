<template>
  <PicText3
    class="px-16 md:px-48 pt-5 md:pt-28 pb-12 md:pb-32"
    chtTitle="經紀團隊"
    engTitle="AGENT TEAM"
    _class="!w-full justify-center"
  >
    
      <Card2
        data-wow-delay="0.1s"
        data-wow-duration="0.55s"
        src="/pic/member/10.jpg"
        jobTitle="經紀部經理人"
        chtName="施智仁 Tiger"
        description=""
        class="wow animate__fadeIn animate__slower w-28 md:w-24 lg:w-24 xl:w-40 2xl:w-56"
      />
 
  </PicText3>
</template>
<script>
import PicText3 from "@/components/PicText/PicText_3.vue";
import Card1 from "@/components/Card/Card_1.vue";
import Card2 from "@/components/Card/Card_2.vue";

export default {
  components: {
    PicText3,
    Card1,
    Card2,
  },
  setup() {},
};
</script>