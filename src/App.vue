<template>
	<div id="app" style="height:100vh;" class="no">
		<top-manager></top-manager>
		<left-menu :type="leftMenuType" @typeChange="typeChange"></left-menu>
		<div class="friendsbox">
			<friends-normal v-if="leftMenuType == 'new-message' || leftMenuType == 'tody-reception'"></friends-normal>
			<friends-all v-if="leftMenuType == 'my-friends'"></friends-all>
			<friends-tag v-if="leftMenuType == 'my-tag'"></friends-tag>
		</div>
		 <div class="chart">
            <chart @show="maskIsShow=true" @hidden="maskIsShow=false"></chart>
        </div>
        <div class="mask" v-show="maskIsShow"></div>
		<right-manager></right-manager>
		<Add-tags></Add-tags>
		<dia-log></dia-log>
	</div>
</template>

<script>
	import TopManager from '@/components/framework/top-manager'
	import LeftMenu from '@/components/framework/left-menu'
	import RightManager from '@/components/framework/right-manager'
	import Chart from '@/components/chart/chart'
	import FriendsNormal from '@/components/friendbox/friends-normal' // 最新聊天表 今日接待表
	import FriendsAll from '@/components/friendbox/friends-all' // 我的好友表
	import FriendsTag from '@/components/friendbox/friends-tag' // 我的标签表
	import AddTags from '@/common/component/AddTags/AddTags' //添加标签的弹窗
	import diaLog from '@/common/component/dialog/dialog'

	export default {
		name: 'juke-chat',
		components: {
			TopManager,
			LeftMenu,
			RightManager,
			AddTags,
			Chart,
			FriendsNormal,
			FriendsAll,
			FriendsTag,
			diaLog
		},
		data() {
			return {
                leftMenuType: 'new-message' ,// 左边菜单栏选中类型
                maskIsShow: false
			}
		},
		methods: {
			typeChange(str) {
				this.leftMenuType = str
			}

		}
	}
</script>

<style lang="scss" scoped>
    .router-view {
        float: left;
        width: 219px;
        height: calc(100% - 60px);
    }
    .chart {
        width: calc(100% - 607px);
        height: calc(100% - 61px);
        float: left;
    }
    .mask {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .6);
        z-index: 99;
    }
    .no {
		moz-user-select: -moz-none;
		-moz-user-select: none;
		-o-user-select: none;
		-khtml-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	
	.friendsbox {
		float: left;
		width: 219px;
		height: calc(100% - 60px);
	}
</style>
