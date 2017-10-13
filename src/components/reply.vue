<template>
	<div class="m-reply">
		<input type="text" name="reply" placeholder="评论一下吧" @focus="calPosition" @keydown.enter="sendMsg" v-model="sendData">
		<a href="javascript:;" class="send" @click="sendMsg">发送</a>
	</div>
</template>

<script>
export default {
	name: 'reply',
	data () {
		return {
			sendData:"",
			sending:false
		}
	},
	created:function(){

	},
	methods:{
		calPosition:function(){
			setTimeout(function(){
				document.body.scrollTop = 10000;
			},300);
		},
		sendMsg:function(){
			var data = {
							avatar:"http://otdna08z0.bkt.clouddn.com/avatar/597700302e13d.jpg?imageView2/1/w/24/h/24",
							name:"我",
							like:98,
							ct:this.sendData,
							reply:[],
							showall:true
						}
			D['comments'].push(data);
			this.sendData = "";
			setTimeout(function(){
				document.body.scrollTop = 10000;
			},300);
		}
	}//method
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m-reply{position: fixed; height: 0.8rem; background-color: #fff; border-top: 1px solid #dbdbdb; box-shadow: 0 0.02rem 0.04rem 0.02rem #ccc; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; max-width: 640px; box-sizing: border-box; padding: 0.1rem;}
.m-reply input{display: inline-block; width: 80%; height: 0.6rem; font-size: 0.24rem; border-radius: 0.06rem; border: 1px solid #dbdbdb; padding: 0.1rem; box-sizing: border-box;}
.m-reply .send{display: inline-block; width: 15%; height: 0.6rem; text-align: center; line-height: 0.6rem; color: #fff; font-size: 0.24rem; border-radius: 0.04rem; background-color: #7497fd; float: right;}
</style>
