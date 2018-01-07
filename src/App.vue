<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link to="hello">hello</router-link>
    <router-link to="Page">Page</router-link> -->
	<transition name="no-mode-translate-fade" mode="out-in">
		<keep-alive v-if="$route.meta.keepAlive">
			<router-view></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
	</transition>
    <Mmenu v-bind:menu-show="menuShow"></Mmenu>
    <Mshade v-bind:menu-show="menuShow"></Mshade>
    <Backtotop></Backtotop>
  </div>
</template>

<script>
import Mmenu from './components/menu'
import Mshade from './components/shade'
import Backtotop from '@/components/backtotop'
export default {
	name: 'app',
	data(){
		return{
			menuShow:false
		}
	},
	created:function(){
		//console.log(this);
	},
	components:{
	    Mmenu,
	    Mshade,
	    Backtotop
	},
	methods:{

	}
}
</script>

<style>
	#app{position: relative; height: 100%; width: 100%;}
</style>
