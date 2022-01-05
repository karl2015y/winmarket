import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import './plugin/wow'
const VUE = createApp(App)
VUE.use(router);
// VUE.prototype.WOW = window.wow;
VUE.mount('#app');
