<template>
  <PicText4 class="wow animate__fadeInUp" data-wow-duration="0.5s" />
  <Footer1 />
</template>
<script>
import PicText4 from "@/components/PicText/PicText_4.vue";
import Footer1 from "@/components/Footer/Footer_1.vue";
import { ref, watch } from "vue";
export default {
  components: {
    PicText4,
    Footer1,
  },
   props: ["data"],
  setup(props) {
    const loc_data = ref({
    
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