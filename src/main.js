import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// style
import "@/assets/css/tailwind.css";
import "@/assets/css/styles.css";

import api from "./services/api"
import Carousel3d from 'vue-carousel-3d';



Vue.prototype.$http = api
Vue.config.productionTip = false;
Vue.use(Carousel3d);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
