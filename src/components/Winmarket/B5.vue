<template>
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
      src="/pic/member/2.jpg"
      jobTitle="導演"
      chtName="馬菘駿(進達)"
      :description="'\n\n\n\n〈我的青春沒在怕〉 導演&製作人、〈麥密花園〉、〈歡喜玉玲瓏〉、〈紅白勝利〉綜藝節目等'"
      class="
        wow
        animate__fadeInLeft
        w-28
        md:w-24
        lg:w-24
        xl:w-40
        2xl:w-56
        ml-auto
      "
    />
    <Card2
      data-wow-delay="0.1s"
      data-wow-duration="0.55s"
      src="/pic/member/3.png"
      jobTitle="導演"
      chtName="陳戎暉"
      :description="'執導多部台灣當紅\n愛情偶像劇\n\n\n〈女王的誕生〉、〈大紅帽與小野狼〉、〈妹妹〉、〈愛上哥們〉、〈聽見幸福〉等'"
      class="wow animate__fadeInLeft w-28 md:w-24 lg:w-24 xl:w-40 2xl:w-56"
    />
    <Card2
      data-wow-delay="0.2s"
      data-wow-duration="0.55s"
      src="/pic/member/1.png"
      jobTitle="執行製片人"
      chtName="張中平"
      :description="'從事影視行業20年\n以上的豐富經驗\n\n〈廢財闖天關〉 製片主任、〈三明治女孩的逆襲〉執行製片人、〈廉政英雄〉執行製片、〈家和萬事興〉、〈天下父母心〉執行製片等'"
      class="
        wow
        animate__fadeInLeft
        w-28
        md:w-24
        lg:w-24
        xl:w-40
        2xl:w-56
        mr-auto
      "
    />
  </PicText3>
</template>
<script>
import PicText3 from "@/components/PicText/PicText_3.vue";
import Card2 from "@/components/Card/Card_2.vue";

export default {
  components: {
    PicText3,
    Card2,
  },
  setup() {},
};
</script>