<template>
<!-- 导航栏弹窗 -->
 <div class="m-menu j-menu" :class="{'z-open':menuShow}">
        <div class="m-status g-pt40 s-false">
            <div class="p-child f-clear s-false">
                <div class="p-left">
                    <div class="p-head"><i class="i-user">&#xe606;</i></div>
                </div>
                <div class="p-right">
                    <div class="p-nick">您还未登录</div>
                    <div class="u-btn g-mr45">登录</div>
                    <div class="u-btn j-reg_special">注册</div>
                </div>
            </div>
            <div class="p-child f-clear s-true">
                <div class="p-left">
                <div class="p-head"><img src=""></div>
                </div>
                <div class="p-right">
                    <div class="p-nick f-txtof">易大宗会员</div>
                    <div class="u-conts g-mb18 s-f20 s-c_c3e0fe">
                        <span class="u-rank g-mr20"> <i class="i-rank">&#xe60d;</i>
                            等级：v1                        </span>
                        <span class="u-wealth"> <i class="i-sliver">&#xe60e;</i>
                            白银：                        </span>
                    </div>
                    <div class="u-FU_btn j-logout" >退出登录</div>
                </div>
            </div>
        </div>
            <ul class="m-bar g-mt40 s-bt1">
            <li class="p-item" v-for="(items,index) in list" @click="items.showsub = !items.showsub" :class="{'z-active':items.showsub}">
                <a class="p-link" href="javascript:;">
                    <i class="i-ico" v-html="items.i"></i>{{items.name}}
                    <i class="i-right" v-show="items.subnav">&#xe622;</i>
                </a>
                    <template v-if="items.subnav">
                        <ul class="m-barlist">
                           <li class="p-list_item" v-for="(items2,index2) in items.subnav">
                               <!-- <a :href="items2.link">{{items2.name}}</a> -->
                               <router-link :to="items2.link" @click.native="hideeverything">{{items2.name}}</router-link>
                           </li>
                       </ul>
                    </template>
            </li>
        </ul>
        <div class="m-footLink">
             <a href="javascript:" class="u-link" onclick="F['Hint']({ct:'敬请期待'})"> <i class="i-ico s-f26">&#xe60b;</i>
                个人中心
            </a>
            <a class="u-link" href="javascript:;" onclick="F['Hint']({ct:'敬请期待'})"> <i class="i-ico s-f26">&#xe60c;</i>
                常见问题
            </a>
        </div>
        <div class="m-fix_menufoot"></div>
    </div>
</template>

<script>
export default {
	//name:'headerTop',
	data(){
		return{
            list:D['nav'],
		}
	},
	props:['menuShow'],
    beforeCreate:function(){
        for (var i = 0; i < D['nav'].length; i++) {
            D['nav'][i].showsub = false;
        }
    },
	mounted(){
		//console.log("菜单加载完成")
	},
    methods:{
        hideeverything:function(){
            VueApp.$children[0].menuShow = false;
        }
    }
}
</script>

<style>

</style>