import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

// 引入axios 
import axios from 'axios';
Vue.prototype.$http=axios;

// 导入api模块并注册到vue的原型中， 以后再项目中可以使用this.$api
import * as api from './api'
Vue.prototype.$api = api


// 将js-cookie模块注册 Vue原型
import jsCookie from 'js-cookie'
Vue.prototype.$jsCookie = jsCookie

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
