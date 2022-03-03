<template>
  <div v-for="(component, index) in components" :key="index">
    <h1
      :id="component.key + index"
      class="py-5 text-center text-3xl font-bold font-NST"
    >
      {{ component.key }}
    </h1>
    <div></div>
    <component
      :show="component.show"
      :is="component.key"
      class="container mx-auto"
    ></component>

    <hr />
  </div>
</template>
<script>
import { onMounted, ref, defineAsyncComponent, defineExpose, h } from "vue";

const _components = {
  Blog1: defineAsyncComponent(() => import("../components/Blog/Blog_1.vue")),
  Blog2: defineAsyncComponent(() => import("../components/Blog/Blog_2.vue")),
  Blog3: defineAsyncComponent(() => import("../components/Blog/Blog_3.vue")),
  Blog4: defineAsyncComponent(() => import("../components/Blog/Blog_4.vue")),
  Blog5: defineAsyncComponent(() => import("../components/Blog/Blog_5.vue")),

  Contact1: defineAsyncComponent(() =>
    import("../components/Contact/Contact_1.vue")
  ),
  Contact2: defineAsyncComponent(() =>
    import("../components/Contact/Contact_2.vue")
  ),
  Contact3: defineAsyncComponent(() =>
    import("../components/Contact/Contact_3.vue")
  ),

  Content1: defineAsyncComponent(() =>
    import("../components/Content/Content_1.vue")
  ),
  Content2: defineAsyncComponent(() =>
    import("../components/Content/Content_2.vue")
  ),
  Content3: defineAsyncComponent(() =>
    import("../components/Content/Content_3.vue")
  ),
  Content4: defineAsyncComponent(() =>
    import("../components/Content/Content_4.vue")
  ),
  Content5: defineAsyncComponent(() =>
    import("../components/Content/Content_5.vue")
  ),
  Content6: defineAsyncComponent(() =>
    import("../components/Content/Content_6.vue")
  ),
  Content7: defineAsyncComponent(() =>
    import("../components/Content/Content_7.vue")
  ),
  Content8: defineAsyncComponent(() =>
    import("../components/Content/Content_8.vue")
  ),

  Cta1: defineAsyncComponent(() => import("../components/Cta/Cta_1.vue")),
  Cta2: defineAsyncComponent(() => import("../components/Cta/Cta_2.vue")),
  Cta3: defineAsyncComponent(() => import("../components/Cta/Cta_3.vue")),

  Ecommerce1: defineAsyncComponent(() =>
    import("../components/Ecommerce/Ecommerce_1.vue")
  ),

  Feature1: defineAsyncComponent(() =>
    import("../components/Feature/Feature_1.vue")
  ),
  Feature2: defineAsyncComponent(() =>
    import("../components/Feature/Feature_2.vue")
  ),
  Feature3: defineAsyncComponent(() =>
    import("../components/Feature/Feature_3.vue")
  ),
  Feature4: defineAsyncComponent(() =>
    import("../components/Feature/Feature_4.vue")
  ),
  Feature5: defineAsyncComponent(() =>
    import("../components/Feature/Feature_5.vue")
  ),
  Feature6: defineAsyncComponent(() =>
    import("../components/Feature/Feature_6.vue")
  ),
  Feature7: defineAsyncComponent(() =>
    import("../components/Feature/Feature_7.vue")
  ),
  Feature8: defineAsyncComponent(() =>
    import("../components/Feature/Feature_8.vue")
  ),

  Footer1: defineAsyncComponent(() =>
    import("../components/Footer/Footer_1.vue")
  ),
  Footer2: defineAsyncComponent(() =>
    import("../components/Footer/Footer_2.vue")
  ),
  Footer3: defineAsyncComponent(() =>
    import("../components/Footer/Footer_3.vue")
  ),
  Footer4: defineAsyncComponent(() =>
    import("../components/Footer/Footer_4.vue")
  ),
  Footer5: defineAsyncComponent(() =>
    import("../components/Footer/Footer_5.vue")
  ),
  Footer6: defineAsyncComponent(() =>
    import("../components/Footer/Footer_6.vue")
  ),

  Gallery1: defineAsyncComponent(() =>
    import("../components/Gallery/Gallery_1.vue")
  ),
  Gallery2: defineAsyncComponent(() =>
    import("../components/Gallery/Gallery_2.vue")
  ),
  Gallery3: defineAsyncComponent(() =>
    import("../components/Gallery/Gallery_3.vue")
  ),

  Header1: defineAsyncComponent(() =>
    import("../components/Header/Header_1.vue")
  ),
  Header2: defineAsyncComponent(() =>
    import("../components/Header/Header_2.vue")
  ),
  Header3: defineAsyncComponent(() =>
    import("../components/Header/Header_3.vue")
  ),
  Header4: defineAsyncComponent(() =>
    import("../components/Header/Header_4.vue")
  ),

  Hero1: defineAsyncComponent(() => import("../components/Hero/Hero_1.vue")),
  Hero2: defineAsyncComponent(() => import("../components/Hero/Hero_2.vue")),
  Hero3: defineAsyncComponent(() => import("../components/Hero/Hero_3.vue")),
  Hero4: defineAsyncComponent(() => import("../components/Hero/Hero_4.vue")),
  Hero5: defineAsyncComponent(() => import("../components/Hero/Hero_5.vue")),
  Hero6: defineAsyncComponent(() => import("../components/Hero/Hero_6.vue")),

  Pricing1: defineAsyncComponent(() =>
    import("../components/Pricing/Pricing_1.vue")
  ),
  Pricing2: defineAsyncComponent(() =>
    import("../components/Pricing/Pricing_2.vue")
  ),

  Statistic1: defineAsyncComponent(() =>
    import("../components/Statistic/Statistic_1.vue")
  ),
  Statistic2: defineAsyncComponent(() =>
    import("../components/Statistic/Statistic_2.vue")
  ),
  Statistic3: defineAsyncComponent(() =>
    import("../components/Statistic/Statistic_3.vue")
  ),

  Step1: defineAsyncComponent(() => import("../components/Step/Step_1.vue")),
  Step2: defineAsyncComponent(() => import("../components/Step/Step_2.vue")),
  Step3: defineAsyncComponent(() => import("../components/Step/Step_3.vue")),

  Team1: defineAsyncComponent(() => import("../components/Team/Team_1.vue")),
  Team2: defineAsyncComponent(() => import("../components/Team/Team_2.vue")),
  Team3: defineAsyncComponent(() => import("../components/Team/Team_3.vue")),

  Testimonial1: defineAsyncComponent(() =>
    import("../components/Testimonial/Testimonial_1.vue")
  ),
  Testimonial2: defineAsyncComponent(() =>
    import("../components/Testimonial/Testimonial_2.vue")
  ),
  Testimonial3: defineAsyncComponent(() =>
    import("../components/Testimonial/Testimonial_3.vue")
  ),
};

export default {
  components: _components,
  setup() {
    const components = ref(
      Object.keys(_components).map((key) => ({
        key,
        show: true,
      }))
    );

    // const isFullyVisible = (el) => {
    //   var position = el.getBoundingClientRect();
    //   return position.top >= 0 && position.bottom <= window.innerHeight;
    // };
    // const isPartialVisible = (el) => {
    //   console.log(( el.target ));
    //   var position = el.getBoundingClientRect();
    //   // return position.top < window.innerHeight && position.bottom >= 0;
    // };
    // const showHandler = () => {
    //   components.value.forEach((item) => {
    //     item.show = isPartialVisible(item.el);
    //   });
    // };
    // window.addEventListener("scroll", showHandler);
    return {
      components,
    };
  },
};
</script>