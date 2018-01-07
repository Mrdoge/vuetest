// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import '../static/css/style.css'
import '../static/js/rem.js'
import '../static/js/fakedata.js'
import '../static/js/main.js'

import Vue from 'vue'
import App from './App'
import router from './router'
import layer from 'vue-layer'

import AV from 'leancloud-storage'
import lr from 'leancloud-realtime'

Vue.config.productionTip = true
/* eslint-disable no-new */
var APP_ID = '4RdFuGsl8DNtM0JIN6Lqzn3D-gzGzoHsz';
var APP_KEY = 'ftl7zrVsaKXIWmuJQMiOK4oO';
//var Master_Key = 'PXfC9JTSWenG8ArKYLmPqDaW';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
  //masterKey:Master_Key,
});
var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   //alert('LeanCloud Rocks!');
// })


Vue.prototype.$layer = layer(Vue); //使用layer

window.VueApp = new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App },
	created:function(){
		console.log(layer)
		router.beforeEach((to, from, next) => {
			next(); //执行加载页面
			setTimeout(function(){
				document.body.scrollTop = 0; //每次加载页面都返回顶部
			},400);
		})
	}
})
