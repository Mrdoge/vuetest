<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link to="hello">hello</router-link>
    <router-link to="Page">Page</router-link> -->
	<transition name="fade">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</transition>
    <Mmenu v-bind:menu-show="menuShow"></Mmenu>
    <Mshade v-bind:menu-show="menuShow"></Mshade>
  </div>
</template>

<script>
import Mmenu from './components/menu'
import Mshade from './components/shade'
export default {
	name: 'app',
	data(){
		return{
			menuShow:false
		}
	},
	components:{
	    Mmenu,
	    Mshade
	},
	methods:{

	}
}
</script>

<style>
	#app{position: relative; height: 100%; width: 100%;}
</style>
