<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link to="hello">hello</router-link>
    <router-link to="Page">Page</router-link> -->
    <router-view></router-view>
    <Mmenu v-bind:menu-show="menuShow"></Mmenu>
  </div>
</template>

<script>
import Mmenu from './components/menu'
export default {
	name: 'app',
	data(){
		return{
			menuShow:false
		}
	},
	components:{
	    Mmenu
	},
}
</script>

<style>
#app{position: relative; height: 100%; width: 100%;}
</style>
