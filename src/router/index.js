import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import mdcdata from '@/components/mdcdata'
import Resource from 'vue-resource'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'Hello',
    	component: Hello
    },
    {
    	path: '/mdcdata', //获取药店名字数据
    	name: 'mdcdata',
    	component: mdcdata
    }
  ]
})
