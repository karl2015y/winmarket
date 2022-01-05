import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './plugin/wow/wow.js'
import './index.css'

const VUE = createApp(App)
VUE.use(router);
// VUE.prototype.WOW = window.wow;
VUE.mount('#app');
