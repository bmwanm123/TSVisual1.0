// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 阿里图标库
import "@/assets/emotionicon/icon/iconfont.css"


import axios from 'axios'

import * as d3 from 'd3'

Vue.prototype.$d3 = d3

Vue.prototype.axios = axios
Vue.use(ElementUI)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
