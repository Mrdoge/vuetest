<template>
	<div id="m-shade" :class="{'z-show':menuShow}" @click="hideeverything"></div>
</template>

<script>
export default {
	//name:'headerTop',
	data(){
		return{

		}
	},
	props:['menuShow'],
	mounted(){
		//console.log("菜单加载完成")
	},
	methods:{
		hideeverything:function(){
			VueApp.$children[0].menuShow = false;
			for (var i = 0; i < D['nav'].length; i++) {
	            D['nav'][i].showsub = false;
	        }
		}
	}
}
</script>