import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


Vue.config.productionTip = false;

import BootstrapVue from 'bootstrap-vue';
import Bootstrap from 'bootstrap';
import Mint from 'mint-ui';
import "mint-ui/lib/style.css";
// window.$ = require("jquery");

Vue.use(BootstrapVue, Bootstrap);
Vue.use(Mint);
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
