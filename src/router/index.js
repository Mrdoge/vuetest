//工具
import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper' //swiper
require('swiper/dist/css/swiper.css') //swiper

//组件
import Hello from '@/components/Hello'
import mdcdata from '@/components/mdcdata'
//import header from '@/components/header'

//页面
import home from '@/page/home/home'
import index from '@/page/index/index'
import airticle from '@/page/airticle/airticle'

Vue.use(Router)
Vue.use(Resource)
Vue.use(VueAwesomeSwiper)

export default new Router({
    routes: [
    // {
    // 	path: '/hello',
    //     //redirect:'/hello',
    // 	name: 'hello',
    // 	component: Hello
    // },
    {
    	path: '/mdcdata', //获取药店名字数据
    	name: 'mdcdata',
    	component: mdcdata
    },
    {
        path: '/',
        redirect: '/index' //默认到主页
    },
    {
        path: '/index',
        name: 'index',
        component: index, //首页
        meta:{
            keepAlive:true //缓存
        }
    },
    {
        path: '/home',
        name: 'home',
        component: home, //首页
        meta:{
            keepAlive:true //缓存
        }
    },
    {
        path: '/airticle',
        name: 'airticle',
        component: airticle
    },
    // {
    //     path: '/Page', //page组件
    //     name: 'Page',
    //     component: Page
    // }
    ]
})
