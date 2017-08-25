<template>
	<div class="m-prinav"> <i class="i-back f-fl p-back" onclick="history.go(-1)">&#xe626;</i>
		<div class="p-title f-txtof">qwewq</div>
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
		//console.log("头部加载完成")
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
.m-prinav{height: 0.58rem; line-height: 0.58rem; padding-top: 0.1rem; padding-bottom: 0.1rem; font-size: 0.3rem; background-color: #0f2a48;color: #fff; position: relative; position: fixed; width: 100%; max-width: 6.4rem; top: 0;}
.m-prinav .p-title{position: absolute; right: 0; box-sizing: border-box; /*padding-left: 0.32rem; padding-right: 0.62rem;*/ left: 0; text-align: center;}
.m-prinav .p-back{margin-left: 0.1rem; position: relative; z-index: 1;}
.m-prinav .p-more{width: 0.56rem; height: 0.56rem; color: #fff; text-align: center; line-height: 0.56rem; border: 1px solid #fff; border-radius: 50%; margin-right: 0.1rem; background-color: #3b6797; cursor: pointer; position: relative; z-index: 1;}
</style>