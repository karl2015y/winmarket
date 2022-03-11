<template>
  <section
    class="
      flex
      bg-[url('/icon/bg02-04.jpg')] bg-contain bg-no-repeat bg-center
      w-full
      h-72
      md:h-[56.25vw]
    "
  >
    <div
      class="
        wow
        animate__fadeInLeft
        w-3/4
        md:w-1/2
        h-full
        flex
        items-center
        pl-20
        md:pl-64
      "
    >
      <p class="text-lg text-sec whitespace-pre-line">
        {{ loc_data.main.slogan.value }}
      </p>
    </div>
    <div
      class="w-1/4 md:w-1/2 h-full flex justify-end items-center mr-12 md:mr-28"
    >
      <img
        data-aos-duration="0.6s"
        class="
          wow
          animate__zoomIn
          w-24
          h-36
          object-cover object-center
          rounded-tr-3xl rounded-bl-3xl
          shadow-2xl
          md:w-[25.4vw]
          md:h-[38.2vw]
          md:mb-32
          md:rounded-tr-[75px]
          md:rounded-bl-[75px]
        "
        :src="loc_data.main.pic_slogan.value"
        :alt="loc_data.main.slogan.value"
      />
    </div>
  </section>
</template>
<script>
import { ref, watch } from "vue";

export default {
  props: ["data"],
  setup(props) {
    const loc_data = ref({
      main: {
        slogan: {
          type: "textarea",
          value:
            "自有影視媒體，整合行銷巨擘\n精準投放，盡在穩盈\n唯有穩盈，締造多贏",
        },
        pic_slogan: {
          type: "img@500x750",
          value:
            "https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F8c576d0c-15a6-46c7-b0bd-afeae4e7f2b7.png?alt=media&token=53b911f0-e302-4923-8e6d-f60b241776c0",
        },
      },
      sec: [],
    });
    if (props.data) {
      loc_data.value = JSON.parse(props.data);

      watch(
        () => props.data,
        (val) => {
          loc_data.value = JSON.parse(val);
        }
      );
    }

    return {
      loc_data,
    };
  },
};
</script>
