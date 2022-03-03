<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col">
        <div class="h-1 bg-gray-200 rounded overflow-hidden">
          <div class="w-24 h-full bg-skin-500"></div>
        </div>
        <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1
            class="
              sm:w-2/5
              text-gray-900
              font-medium
              title-font
              text-2xl
              mb-2
              sm:mb-0
            "
            v-text="data ? data.main.title.value : 'Space The Final Frontier'"
          />

          <p
            v-text="
              data
                ? data.main.content.value
                : 'Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.'
            "
            class="
              sm:w-3/5
              leading-relaxed
              text-base
              sm:pl-10
              pl-0
              whitespace-pre-line
            "
          />
        </div>
      </div>
      <div
        v-if="data.sec.length > 0"
        class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4"
      >
        <a class="md:w-1/3 sm:mb-0"
          v-for="item in data.sec"
          :key="item"
          :href="item.learn_more_url ? item.learn_more_url.value : ''"
        >
          <div class="p-4  mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="
                  object-cover object-center
                  h-full
                  w-full
                  hover:scale-125
                  transform-gpu
                  transition-transform
                  duration-1000
                "
                :src="item.pic.value"
              />
            </div>
            <h2
              v-text="item.title ? item.title.value : 'Shooting Stars'"
              class="text-xl font-medium title-font text-gray-900 mt-5"
            />
            <p
              class="text-base leading-relaxed mt-2 whitespace-pre-line"
              v-text="
                item.content
                  ? item.content.value
                  : 'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.'
              "
            />

            <span class="text-skin-500 inline-flex items-center mt-3"
              >{{ item.learn_more ? item.learn_more.value : "Learn More" }}
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import { ref, watch } from "vue";

export default {
  props: ["data"],

  setup(props) {
    const data = ref(null);
    if (props.data) {
      data.value = JSON.parse(props.data);
      watch(
        () => props.data,
        (val) => {
          data.value = JSON.parse(val);
        }
      );
    }
    return {
      data,
    };
  },
};
</script>
<style scoped>
</style>