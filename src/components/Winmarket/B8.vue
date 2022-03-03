<template>
  <PicText3
    class="
      border-y-[3.4vw] border-solid border-main
      bg-[url('/icon/bg05-02.jpg')] bg-repeat-y
      md:bg-cover
      bg-contain
      px-16
      md:px-8
      xl:px-32
      2xl:px-48
      pt-5
      md:pt-28
      pb-12
      md:pb-56
    "
    chtTitle="行銷企劃團隊"
    _chtTitleClass="text-white md:mt-5"
    engTitle="MARKETING PLANNING TEAM"
    _engTitleClass="text-[#FCD44D] mt-2.5 mb:mb-5 md:mt-0 md:mb-32"
    _class="flex-wrap md:flex-nowrap md:!gap-3 !mt-4"
  >
    <Card3
      data-wow-delay="0.25s"
      data-wow-duration="0.5s"
      src="/pic/member/4.jpg"
      class="wow animate__fadeInRight w-[28%]"
      chtName="鄭洛喬"
      engName="Elie"
      jobTitle="品牌行銷企劃經理"
    />
    <Card3
      data-wow-delay="0.15s"
      data-wow-duration="0.5s"
      src="/pic/member/5.jpg"
      class="wow animate__fadeInRight w-[28%]"
      chtName="李佩芬"
      engName="Joanne"
      jobTitle="特助/IT支援"
    />
    <Card3
      data-wow-duration="0.5s"
      src="/pic/member/6.png"
      class="wow animate__fadeInRight w-[28%]"
      chtName="王彥君"
      engName="Amber"
      jobTitle="品牌行銷企劃主任"
    />
    <Card3
      data-wow-duration="0.5s"
      src="/pic/member/7.PNG"
      class="wow animate__fadeInLeft w-[28%] mt-10 md:mt-0"
      chtName="徐小玲"
      engName="Shelly"
      jobTitle="品牌行銷企劃副理"
    />
    <Card3
      data-wow-delay="0.15"
      data-wow-duration="0.5s"
      src="/pic/member/8.png"
      class="wow animate__fadeInLeft w-[28%] mt-10 md:mt-0"
      chtName="黃貞菱"
      engName="Daisy"
      jobTitle="社群行銷企劃"
    />
    <Card3
      data-wow-delay="0.25s"
      data-wow-duration="0.5s"
      src="/pic/member/9.png"
      class="wow animate__fadeInLeft w-[28%] mt-10 md:mt-0"
      chtName="袁薏如"
      engName="Elu"
      jobTitle="視覺設計企劃"
    />
  </PicText3>
</template>
<script>
import PicText3 from "@/components/PicText/PicText_3.vue";
import Card3 from "@/components/Card/Card_3.vue";

export default {
  components: {
    PicText3,
    Card3,
  },
  setup() {},
};
</script>