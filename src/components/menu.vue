<template>
<!-- 导航栏弹窗 -->
 <div class="m-menu j-menu s-linear" :class="{'z-open':menuShow}">
        <div class="m-status g-pt40">
            <div class="p-child f-clear s-false" v-show="!user.is_login">
                <div class="p-left">
                    <div class="p-head"><i class="i-user">&#xe606;</i></div>
                </div>
                <div class="p-right">
                    <div class="p-nick">您还未登录</div>
                    <div class="u-btn g-mr45">登录</div>
                    <div class="u-btn j-reg_special">注册</div>
                </div>
            </div>
            <div class="p-child f-clear s-true" v-show="user.is_login">
                <div class="p-left">
                <div class="p-head"><img :src="user.avatar"></div>
                </div>
                <div class="p-right">
                    <div class="p-nick f-txtof">{{user.nickname}}</div>
                    <div class="font f-txtof">
                        可用余额：{{user.available}}
                    </div>
                    <div class="u-btn j-logout" @click="logout">退出登录</div>
                </div>
            </div>
        </div>
            <ul class="m-bar g-mt40 s-bt1">
            <li class="p-item" v-for="(items,index) in list" @click="items.showsub = !items.showsub" :class="{'z-active':items.showsub}">
                <template v-if="!items.subnav">
                    <router-link :to="items.link" class="p-link" @click.native="hideeverything">
                        <i class="i-ico" v-html="items.i"></i>{{items.name}}
                        <i class="i-right" v-show="items.subnav">&#xe622;</i>
                    </router-link>
                </template>
                <template v-if="items.subnav">
                    <router-link :to="items.link" class="p-link">
                        <i class="i-ico" v-html="items.i"></i>{{items.name}}
                        <i class="i-right" v-show="items.subnav">&#xe622;</i>
                    </router-link>
                </template>
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
                关于我们
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
            user:D['user']
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
            for (var i = 0; i < D['nav'].length; i++) {
                D['nav'][i].showsub = false;
            }
        },
        logout:function(){
            this.user.is_login = false;
            this.hideeverything();
        }
    }
}
</script>

<style>

</style>