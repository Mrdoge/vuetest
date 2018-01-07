<template>
  <div class="g-layout">
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(items,index) in banner" :key="items">
        <img :src="items">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
    <button @click="layerq">qwe</button>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'home',
  data () {
    return {
      banner:[],
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
    }
  },
  created(){
    this.getdata()

  },
  components:{
    swiper,
    swiperSlide
  },
  methods:{
    getdata:function(){
      const vm = this;
      vm.$http.get('https://www.easy-mock.com/mock/5a523f5ab63b3a62028f7649/khshop/index').then(function(data){
        //console.log(data)
        if (data.ok) {
          data = data.data;
          var bannerData = data.banner;
          for (let i = 0; i < bannerData.length; i++) {
            vm.banner.push(bannerData[i])
          }
        }
      }, function(data){ //错误
        console.log(data)
      });
    },
    layerq(){
      this.$layer.alert("123")
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-slide{height: 3.06rem;}
</style>
