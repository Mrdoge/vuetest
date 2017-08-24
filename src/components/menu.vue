<template>
<!-- 导航栏弹窗 -->
 <div class="m-menu j-menu" v-show="menuShow">
        <div class="m-status g-pt40 s-false">
            <div class="p-child f-clear s-false">
                <div class="p-left">
                    <div class="p-head"><i class="i-user">&#xe606;</i></div>
                </div>
                <div class="p-right">
                    <div class="p-nick">您还未登录</div>
                    <div class="u-FU_btn g-mr45" data-url="/wap/member/login.html">登录</div>
                    <div class="u-FU_btn j-reg_special" data-url="/wap/member/register.html">注册</div>
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
            <li class="p-item">
                <a class="p-link" href="javascript:;">
                    <i class="i-ico">&#xe608;</i>易产品
                    <i class="i-right">&#xe622;</i>
                </a>
                   <ul class="m-barlist">
                       <li class="p-list_item" data-url="/wap/product/oil.html">碳氢化合物</li>
                       <li class="p-list_item" data-url="/wap/product/silver.html">现货银锭</li>
                       <li class="p-list_item" data-url="/wap/product/copper.html">再生铜</li>
                   </ul>
            </li>
            <li class="p-item">
                <a class="p-link" href="javascript:;">
                    <i class="i-ico">&#xe607;</i>易投资
                    <i class="i-right">&#xe622;</i>
                </a>
                <ul class="m-barlist">
                    <li class="p-list_item" data-url="/wap/article/page_weipan.html">体验微宝</li>
                    <!-- <li class="p-list_item" data-url="/wap/account/add.html">开设实盘</li> -->
                    <li class="p-list_item" data-url="/wap/article/page_rule.html">交易细则</li>
                    <!-- <li class="p-list_item" data-url="/wap/article/page_problem.html">常见问题</li> -->
                </ul>
            </li>
            <li class="p-item">
                <a class="p-link" href="javascript:;">
                    <i class="i-ico">&#xe60a;</i>易资讯
                    <i class="i-right">&#xe622;</i>
                </a>
                <ul class="m-barlist">
                    <li class="p-list_item" data-url="/wap/article/lists/catid/3.html">专家分析</li>
                    <li class="p-list_item" data-url="/wap/article/lists/catid/2.html">市场资讯</li>
                    <li class="p-list_item" data-url="/wap/article/lists/catid/20.html">热点专题</li>
                    <li class="p-list_item" data-url="/wap/article/page_cal.html">财经日历</li>
                    <!-- <li class="p-list_item" data-url="/wap/product/nonfarm.html">聚焦非农</li> -->
                </ul>
            </li>
            <li class="p-item">
                  <a class="p-link" href="/wap/article/softdown.html"> <i class="i-ico">&#xe635;</i>易软件
                  </a>
            </li>
            <li class="p-item">
                  <a class="p-link" href="/live/index/index.html">
                      <i class="i-ico">&#xe636;</i>易直播
                  </a>
            </li>
            <li class="p-item">
                  <a class="p-link" href="/wap/article/lists/catid/32.html">
                      <i class="i-ico">&#xe649;</i>易优惠
                  </a>
            </li>
            <li class="p-item">
                  <a class="p-link" href="/wap/article/lists/catid/22.html">
                      <i class="i-ico">&#xe649;</i>易代理
                  </a>
            </li>
            <li class="p-item">
                <a class="p-link" href="javascript:;">
                    <i class="i-ico">&#xe609;</i>关于我们
                    <i class="i-right">&#xe622;</i>
                </a>
                 <ul class="m-barlist">

                    <li class="p-list_item" data-url="/wap/article/about.html">品牌故事</li>
                    <!-- <li class="p-list_item" data-url="/wap/article/webpr.html">网站公告</li> -->
                    <li class="p-list_item" data-url="/wap/article/lists/catid/21.html">网站公告</li>
                    <li class="p-list_item" data-url="/wap/article/lists/catid/31.html">集团新闻</li>
                    <li class="p-list_item" data-url="/wap/article/contact.html">联系我们</li>
                </ul>
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

		}
	},
	props:['menuShow'],
	mounted(){
		console.log("菜单加载完成")
	},
}
</script>

<style>

</style>