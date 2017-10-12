<template>
	<div class="m-comments">
		<div class="p-title">评论({{comments.length}})</div>
		<ul class="p-ct">
			<li v-for="(items,index) in comments">
				<div class="top f-clear">
					<img :src="items.avatar" class="f-fl">
					<div class="name f-txtof">{{items.name}}</div>
					<div class="like f-fr">
						<i>&#xe620;</i>({{items.like}})
					</div>
				</div>
				<div class="ct">
					{{items.ct}}
				</div>
				<div class="reply" v-if="items.reply.length">
					<div class="wrap" v-for="(items2,index2) in items.reply" v-show="index2 < 2" :class="{'s-showall':items.showall}">
						<div class="replyer f-txtof">回复 {{items2.name}}</div>
						<div class="ct f-txtof_3">
							{{items2.ct}}
						</div>
					</div>
					<div class="more" v-show="items.reply.length >= 3" @click="items.showall = !items.showall">{{items.showall?'收起':'展开全部'}}回复({{items.reply.length}})
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'comments',
	data () {
		return {

		}
	},
	created:function(){

	},
	props:[
		'comments'
	],
	methods:{

	}//method
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m-comments{padding: 0.2rem; font-size: 0.3rem; margin-bottom: 0.8rem;}
.m-comments > .p-title{color: #7497fd; box-sizing: border-box; padding-left: 0.2rem; border-left: 0.04rem solid #7497fd;}
.m-comments > .p-ct{}
.m-comments > .p-ct > li{box-sizing: border-box; padding: 0.1rem 0; border-bottom: 1px solid #dbdbdb;}
.m-comments > .p-ct > li > .top{line-height: 0.5rem; position: relative;}
.m-comments > .p-ct > li > .top > img{width: 0.5rem; height: 0.5rem; border-radius: 50%; border:1px solid #dbdbdb;}
.m-comments > .p-ct > li > .top > .name{display: block; position: absolute; font-size: 0.2rem; top: -0.12rem; left: 0.65rem; right: 0.8rem; color: #666;}
.m-comments > .p-ct > li > .top > .like{display: inline-block; font-size: 0.24rem; color: #7497fd;}
.m-comments > .p-ct > li > .ct{font-size: 0.24rem; padding-left: 0.65rem; margin-top: 0.1rem; line-height: 1.4; color: #333;}
.m-comments > .p-ct > li > .reply{margin-left: 0.7rem; border: 1px solid #dbdbdb; margin-top: 0.1rem; background-color: #ffffe8; box-sizing: border-box; padding: 0.1rem; font-size: 0.22rem;}
.m-comments > .p-ct > li > .reply > .wrap{margin-top: 0.16rem;}
.m-comments > .p-ct > li > .reply > .wrap.s-showall{display: block !important;}
.m-comments > .p-ct > li > .reply > .wrap:first-child{margin-top: 0;}
.m-comments > .p-ct > li > .reply > .wrap .replyer{font-size: 0.2rem;}
.m-comments > .p-ct > li > .reply > .wrap .ct{margin-top: 0.08rem; line-height: 1.4; color: #333;}
.m-comments > .p-ct > li > .reply > .more{text-align: center; color: #7497fd; margin-top: 0.1rem;}
</style>
