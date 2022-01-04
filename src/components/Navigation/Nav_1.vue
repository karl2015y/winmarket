<template>
    <nav class="z-10 h-16 w-full bg-main flex items-center justify-between px-8 md:px-14 shadow-lg">
        <img class="h-auto w-28 md:hidden" src="/icon/logo1.png" alt="穩盈logo" />
        <img class="h-auto w-10 hidden md:block" src="/icon/logo2.png" alt="穩盈logo" />

        <button
            @click="menuStatus = !menuStatus"
            class="menu-btn cursor-pointer relative h-28 w-7 md:hidden"
        >
            <div
                class="transition-all bg-white w-full h-0.5"
                :class="{ 'translate-y-2 -rotate-45': menuStatus }"
            ></div>
            <div
                class="transition-all bg-white w-full h-0.5 my-1.5"
                :class="{ 'opacity-0': menuStatus }"
            ></div>
            <div
                class="transition-all bg-white w-full h-0.5"
                :class="{ '-translate-y-2 rotate-45': menuStatus }"
            ></div>
        </button>
        <ul
            :class="{ 'w-0 overflow-hidden': !menuStatus , 'w-1/2':menuStatus}"
            class="z-10 bg-white md:bg-main text-sec md:text-white md:text-xl transition-all shadow-lg fixed h-screen right-0 top-16 flex flex-col md:w-auto md:h-auto md:static md:flex-row md:shadow-none md:gap-7"
        >
            <li class="h-12 md:block hover:bg-main hover:text-white hover:shadow-lg">
                <router-link active-class="bg-main text-white shadow-inner md:shadow-none" class="w-full h-full flex justify-center items-center" to="/">首頁</router-link>
            </li>
            <!-- <li class="h-12 md:block hover:bg-main hover:text-white hover:shadow-lg">
                <a class="w-full h-full flex justify-center items-center">服務項目</a>
            </li> -->
        </ul>
    </nav>
</template>
<script>
import { ref } from "vue";

export default {
    setup() {
        const menuStatus = ref(false);
        return {
            menuStatus
        }
    },
};
</script>

<style scoped>
</style>