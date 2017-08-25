// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import '../static/css/style.css'
import '../static/js/rem.js'
import '../static/js/fakedata.js'

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = true

/* eslint-disable no-new */
window.VueApp = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
