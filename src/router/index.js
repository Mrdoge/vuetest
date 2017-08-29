//工具
import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper' //swiper
require('swiper/dist/css/swiper.css') //swiper

//组件
import Hello from '@/components/Hello'
import mdcdata from '@/components/mdcdata'
import header from '@/components/header'
import home from '@/page/home/home'

Vue.use(Router)
Vue.use(Resource)
Vue.use(home)
Vue.use(VueAwesomeSwiper)

export default new Router({
  routes: [
    {
    	path: '/hello',
        //redirect:'/hello',
    	name: 'hello',
    	component: Hello
    },
    {
    	path: '/mdcdata', //获取药店名字数据
    	name: 'mdcdata',
    	component: mdcdata
    },
    {
        path: '/',
        name: 'home',
        component: home
    },
    // {
    //     path: '/Page', //page组件
    //     name: 'Page',
    //     component: Page
    // }
  ]
})
