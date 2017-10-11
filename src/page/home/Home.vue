<template>
  <div class="g-layout g-dnav">
    <head-top></head-top>
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(items,index) in banner" :key="items.url">
        <img :src="items.url">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
    <ul class="m-list">
      <li class="p-ct" v-for="(items,index) in list" key="index">
        <router-link :to="'/airticle'+'#'+index">
          <h2>{{index+1}}{{items.title}}</h2>
          <div class="disc">
            {{items.disc}}
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import headTop from '../../components/header'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'home',
  data () {
    return {
      banner:D['banner'],
      // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
      // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
      notNextTick: true,
      swiperOption: {
        // swiper optionss 所有的配置同swiper官方api配置
        autoplay: 3000,
        loop:true,
        direction : 'horizontal',
        grabCursor : true,
        //setWrapperSize :true,
        //autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        //prevButton:'.swiper-button-prev',
        //nextButton:'.swiper-button-next',
        //scrollbar:'.swiper-scrollbar',
        //mousewheelControl : true,
        observeParents:true,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onTransitionStart(swiper){
          //console.log(swiper)
        },
        // more Swiper configs and callbacks...
        // ...
      },
      list:D['list'] //列表数据
    }
  },
  created:function(){
    var vm = this;
    window.onscroll =  function(){
      //lazyload();
      //debounce(lazyload,window);
      if (window.location.href.indexOf('index') > -1) {
        throttle2(lazyload,100,100)
      }
    };
    // function debounce(method,context){ //节流方案一
    //   clearTimeout(method.timeout);
    //   method.timeout = setTimeout(function(){
    //         method.call(context);
    //   },500);
    // }
    function throttle2(method, delay, time) { //节流方案2
         var timeout,startTime = new Date();
             var context = this,
             args = arguments,
             curTime = new Date();
             clearTimeout(timeout);
             // 如果达到了规定的触发时间间隔，触发 handler
             //console.log(curTime,startTime,time)
             if (curTime - startTime >= time) {
               method.apply(context, args);
               startTime = curTime;
             // 没达到触发间隔，重新设定定时器
               } else {
                   timeout = setTimeout(method, delay);
             }
    }
    function lazyload(){
      //console.log("scroll执行了");
      var wScrollY = window.scrollY; // 当前滚动条位置
      var wInnerH = window.innerHeight; // 设备窗口的高度（不会变）
      var bScrollH = document.body.scrollHeight; // 滚动条总高度
      if (wScrollY + wInnerH >= bScrollH) {
         //alert(123);
         vm.copy_list()
      }
    }
  },
  components:{
    headTop,
  },
  methods:{
    swiper,
    swiperSlide,
    copy_list:function(){
      for (var i = 0; i < 10; i++) {
        var obj = {
          title:"赵薇青涩学生照",
          href:"javascript:;",
          disc:"一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述"
        }
        this.list.push(obj)
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-slide{height: 3rem;}

.m-list{}
.m-list > .p-ct{border-bottom: 1px solid #ccc; background-color: #fff;}
.m-list > .p-ct h2{color: #666; padding-left: 0.1rem; display: block; font-size: 0.26rem;}
.m-list > .p-ct a{display: block; padding: 0.2rem; box-sizing: border-box;}
.m-list > .p-ct a:active{background-color: #dbdbdb;}
.m-list > .p-ct .disc{font-size: 0.22rem; line-height: 1.4; margin-top: 0.1rem; padding-left: 0.4rem;}
</style>
