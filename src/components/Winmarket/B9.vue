<template>
  <PicText3
    class="px-16 md:px-48 pt-5 md:pt-28 pb-12 md:pb-32"
    chtTitle="聯絡我們"
    engTitle="CONTACT US"
    _class="!w-full"
  >
    <div class="!w-full text-left text-xs text-gray-500">
      <p>
        攜手穩盈，開創黃金時代 <br /><br />
        預約諮詢，讓更多人看見品牌的商品與服務，開拓商機從現在開始！<br /><br /><br />
        請留下相關基本資料，我們將盡速與您聯繫！<br />
      </p>
      <div class="mt-6 flex flex-col md:flex-row gap-3 w-full">
        <div class="w-full">
          <div class="flex md:flex-col gap-3">
            <input
              type="LastName"
              id="LastName"
              class="
                shadow-sm
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded
                focus:ring-skin-500 focus:border-skin-500
                block
                w-full
                p-2.5
              "
              placeholder="* 姓氏"
              required
            />
            <input
              type="FirstName"
              id="FirstName"
              class="
                shadow-sm
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded
                focus:ring-skin-500 focus:border-skin-500
                block
                w-full
                p-2.5
              "
              placeholder="* 名字"
              required
            />
          </div>
          <div class="flex md:flex-col gap-3 mt-3">
            <input
              type="LastName"
              id="LastName"
              class="
                shadow-sm
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded
                focus:ring-skin-500 focus:border-skin-500
                block
                w-full
                p-2.5
              "
              placeholder="* 公司名稱"
              required
            />
            <input
              type="LastName"
              id="LastName"
              class="
                shadow-sm
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded
                focus:ring-skin-500 focus:border-skin-500
                block
                w-full
                p-2.5
              "
              placeholder="* 電話"
              required
            />
          </div>
          <div class="flex md:flex-col mt-3">
            <input
              type="LastName"
              id="LastName"
              class="
                shadow-sm
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded
                focus:ring-skin-500 focus:border-skin-500
                block
                w-full
                p-2.5
              "
              placeholder="* 電子信箱"
              required
            />
          </div>
        </div>
        <div class="w-full">
          <textarea
            rows="8"
            class="
              block
              p-2.5
              w-full
              h-full
              text-sm text-gray-900
              bg-gray-50
              rounded-lg
              border border-gray-300
              focus:ring-skin-500 focus:border-skin-500
            "
            placeholder="* 留下您想諮詢的問題"
          ></textarea>
        </div>
      </div>
      <div class="text-center">
        <button
          class="
            mt-3
            md:mt-6
            w-28
            text-white
            rounded-full
            bg-main
            font-bold
            text-xs
            py-1
            md:py-1.5
          "
        >
          送出
        </button>
      </div>
    </div>
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