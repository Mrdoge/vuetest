<template>
  <div class="mdcdata">
<!--     <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
    <div v-show="ing">获取中。。。</div>
    <div v-for="(items,index) in data" v-if="data">
      {{items.name}}&nbsp;&nbsp;&nbsp;&nbsp;
      分数：{{items.point}}&nbsp;&nbsp;&nbsp;&nbsp;
      地址：<a :href="items.url" target="_blank">点击查看</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mdcdata',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Appppp',
      data:[],
      count:0,
      ing:true
    }
  },
  created:function(){
    var vm = this;
    var auto = setInterval(function(fn){
      if (vm.count >= 20) {
        clearInterval(auto);
        vm.ing = false;
        return;
      }
      vm.getdata();
    },4600);
  },
  methods:{
    getdata:function(){
      this.$http.get('/test').then(function(data){
        if (data.data.point >= 80) {
          this.data.push(data.data);
          this.count ++;
        }
      }, function(data){ //错误
        console.log('连接超时');
      });
    },
    getdata2:function(){
      this.$http.post('/test3',{body:1231232131231}).then(function(data){
        console.log(data);
      }, function(data){ //错误
        console.log('连接超时');
      });
    }
  }//method
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
