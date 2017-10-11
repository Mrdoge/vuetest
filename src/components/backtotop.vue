<template>
  <div class="m-backtotop" v-show="is_show" @click="backtotop">
    <span class="p-angel"></span>
  </div>
</template>

<script>
export default {
  name: 'backtotop',
  data () {
    return {
      is_show:false
    }
  },
  created:function(){
    var vm = this;
    window.addEventListener('scroll',function(){
      vm.is_show = window.scrollY > 600; //这句有点高级
    })
  },
  methods:{
    backtotop:function(){
      document.body.scrollTop = 0;
    }
  }//method
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m-backtotop{position: fixed; right: 0.2rem; bottom: 0.2rem; width: 0.6rem; height: 0.6rem; border-radius: 0.04rem; text-align: center; line-height: 0.6rem; background-color: #7497fd; color: #fff; transition: all ease 0.4s; animation:fadeIntop 0.4s;}
.m-backtotop > .p-angel{border-bottom: 0.14rem solid #fff; border-left: 0.1rem solid transparent; border-right: 0.1rem solid transparent; border-top: none; display: inline-block;}
@keyframes fadeIntop{
  from{transform:translateY(0.2rem); opacity: 0;}
  to{transform:translateY(0rem); opacity: 1;}
}
</style>
