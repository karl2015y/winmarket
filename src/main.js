import './index.css'
import '@/plugin/wow/wow2.js'
import './theme/color';


import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import router from './router'
app.use(router);
import VueSmoothScroll from 'vue3-smooth-scroll/dist/vue-smooth-scroll.min.js'
app.use(VueSmoothScroll)





// const VueSmoothScroll = require('vue3-smooth-scroll/dist/vue-smooth-scroll.min.js');





app.config.globalProperties.$filters = {
  money(value) {

    return 'NT$' + Number(value).toLocaleString()
  }
}

// app.prototype.WOW = window.wow;
app.mount('#app');
