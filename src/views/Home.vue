<template >
  <Navigation />
  <Carousel />
  <PicText1 />
  <PicText2 />
  <PicText3
    class="px-16 md:px-48 pt-5 md:pt-28 pb-12 md:pb-32"
    chtTitle="公司動態"
    engTitle="FILM and TELEVISION"
    :base-width="33"
    _class="2xl:flex-wrap"
  >
    <Card1 data-wow-duration="0.55s" class="wow animate__fadeInRight w-32 md:w-80" />
    <Card1 data-wow-delay="0.1s" data-wow-duration="0.55s" class="wow animate__fadeInRight w-32 md:w-80" />
    <Card1 data-wow-delay="0.2s" data-wow-duration="0.55s" class="wow animate__fadeInRight w-32 md:w-80" />
  </PicText3>

  <PicText3
    class="
      border-t border-solid border-main
      px-16
      md:px-48
      pt-5
      md:pt-28
      pb-12
      md:pb-32
    "
    chtTitle="影像製作團隊"
    engTitle="FILM and PRODUCTION TEAM"
    _class="md:flex-wrap"
  >
    <Card2
    
      data-wow-duration="0.55s"
      src="/pic/member/1.png"
      jobTitle="執行製片人"
      chtName="張中平"
      :description="'從事影視行業20年\n以上的豐富經驗\n\n〈廢財闖天關〉 製片主任、〈三明治女孩的逆襲〉執行製片人、〈廉政英雄〉執行製片、〈家和萬事興〉、〈天下父母心〉執行製片等'"
      class="wow animate__fadeInLeft w-28 md:w-24 lg:w-24 xl:w-40 2xl:w-56 ml-auto"
    />
    <Card2
      data-wow-delay="0.1s"
      data-wow-duration="0.55s"
      src="/pic/member/2.jpg"
      jobTitle="導演"
      chtName="馬菘駿(進達)"
      :description="'〈我的青春沒在怕〉 導演&製作人、〈麥密花園〉、〈歡喜玉玲瓏〉、〈紅白勝利〉綜藝節目等'"
      class="wow animate__fadeInLeft w-28 md:w-24 lg:w-24 xl:w-40 2xl:w-56"
    />
    <Card2
      data-wow-delay="0.2s"
      data-wow-duration="0.55s"
      src="/pic/member/3.png"
      jobTitle="導演"
      chtName="陳戎暉"
      :description="'執導多部台灣當紅\n愛情偶像劇\n\n〈女王的誕生〉、〈大紅帽與小野狼〉、〈妹妹〉、〈愛上哥們〉、〈聽見幸福〉等'"
      class="wow animate__fadeInLeft w-28 md:w-24 lg:w-24 xl:w-40 2xl:w-56 mr-auto"
    />
  </PicText3>

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
  <PicText4 class="wow animate__fadeInUp" data-wow-duration="0.5s" />
  <Footer1  />
</template>

<script>
import Navigation from "../components/Navigation/Nav_1.vue";
import Carousel from "../components/Carousel/Carousel_1.vue";
import PicText1 from "../components/PicText/PicText_1.vue";
import PicText2 from "../components/PicText/PicText_2.vue";
import PicText3 from "../components/PicText/PicText_3.vue";
import Card1 from "../components/Card/Card_1.vue";
import Card2 from "../components/Card/Card_2.vue";
import Card3 from "../components/Card/Card_3.vue";
import PicText4 from "../components/PicText/PicText_4.vue";
import Footer1 from "../components/Footer/Footer_1.vue";

export default {
  components: {
    Navigation,
    Carousel,
    PicText1,
    PicText2,
    PicText3,
    Card1,
    Card2,
    Card3,
    PicText4,
    Footer1,
  },
  setup(props) {},
};
</script>

<style scoped>
</style>