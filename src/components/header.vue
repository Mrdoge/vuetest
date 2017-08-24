<template>
	<div class="m-prinav"> <i class="i-back f-fl">&#xe626;</i>
		<div class="p-title f-txt_c s-f36"></div>
		<a class="p-more j-more g-mr27 f-fr" @click="menushow"> <i>&#xe606;</i></a>
	</div>
</template>

<script>

export default {
	//name:'headerTop',
	data(){
		return{
			//menuShow:false
		}
	},
	mounted(){
		console.log("头部加载完成")
	},
	//props:['menuShwow'],
	methods:{
		menushow:function(){
			//console.log(this);
			//console.log(VueApp.$children[0].menuShow);
			VueApp.$children[0].menuShow = !VueApp.$children[0].menuShow;
		}
	}
}
</script>

<style>
/*私有导航条*/
.m-prinav{height: 0.58rem; line-height: 0.58rem; padding-top: 0.1rem; padding-bottom: 0.1rem; font-size: 0.3rem; background-color: #0f2a48;color: #fff;}
.m-prinav .p-more{width: 0.56rem; height: 0.56rem; color: #fff; text-align: center; line-height: 0.56rem; border: 1px solid #fff; border-radius: 50%; margin-right: 0.1rem; background-color: #3b6797;}
</style>