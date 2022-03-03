<template>
  <PicText3
    class="px-8 md:px-24 xl:px-36 2xl:px-52 pt-5 md:pt-28 pb-12 md:pb-32"
    chtTitle="關於網紅"
    engTitle=""
    _class="!w-full flex-col"
  >
    <div class="!w-full grid grid-cols-3 md:grid-cols-5 gap-3">
      <a href="#" v-for="item in 15" :key="item">
        <div
          class="
            bg-gray-300
            w-full
            h-40
            md:h-36
            lg:h-44
            xl:h-52
            2xl:h-60
            relative
          "
        >
          {{ item }}
          <div
            class="
              w-full
              h-full
              bg-main bg-opacity-75
              absolute
              top-0
              left-0
              opacity-0
              hover:opacity-100
              flex flex-col
              text-xs text-white
              justify-center
              items-center
            "
          >
            <h1 class="text-base mb-1">姓名 / NAME</h1>
            <p>
              資訊簡介資訊簡介 <br />
              資訊簡介資訊簡介 <br />
              資訊簡介資訊簡介 <br />
              資訊簡介資訊簡介 <br />
              資訊簡介資訊簡介 <br />
              資訊簡介資訊簡介 <br />
            </p>
          </div>
        </div>
      </a>
    </div>

    <nav aria-label="Page navigation example">
      <ul class="inline-flex items-center -space-x-px">
        <li>
          <a
            href="#"
            class="
              block
              py-2
              px-3
              ml-0
              leading-tight
              text-gray-500
              bg-white
              rounded-l-lg
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
            "
          >
            <span class="sr-only">Previous</span>
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="
              py-1.5
              px-3
              leading-tight
              text-gray-500
              bg-white
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
            "
            >1</a
          >
        </li>
        <li>
          <a
            href="#"
            class="
              py-1.5
              px-3
              leading-tight
              text-gray-500
              bg-white
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
            "
            >2</a
          >
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            class="
              z-10
              py-1.5
              px-3
              leading-tight
              text-blue-600
              bg-blue-50
              border border-blue-300
              hover:bg-blue-100 hover:text-blue-700
              dark:border-gray-700 dark:bg-gray-700 dark:text-white
            "
            >3</a
          >
        </li>
        <li>
          <a
            href="#"
            class="
              py-1.5
              px-3
              leading-tight
              text-gray-500
              bg-white
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
            "
            >4</a
          >
        </li>
        <li>
          <a
            href="#"
            class="
              py-1.5
              px-3
              leading-tight
              text-gray-500
              bg-white
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
            "
            >5</a
          >
        </li>
        <li>
          <a
            href="#"
            class="
              block
              py-2
              px-3
              leading-tight
              text-gray-500
              bg-white
              rounded-r-lg
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
            "
          >
            <span class="sr-only">Next</span>
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
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