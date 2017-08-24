<template>
  <div class="g-layout">
    <head-top>
        
    </head-top>
    {{msg}}
  </div>
</template>

<script>
import headTop from '../../components/header'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Appppp',
      data:[],
      count:0,
      ing:true,
    }
  },
  created:function(){
    console.log(123);
  },
  methods:{

  },//method
  components:{
    headTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
