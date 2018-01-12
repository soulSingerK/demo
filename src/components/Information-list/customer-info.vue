<template>
	<section class="clearfix ">
		<div class="personal-info">
			<ul>
				<li class="number">
					<span>购物账号 : </span>
					<span class="fontGary" v-if="!TextField">卡卡西</span>
					<input type="text" v-if="TextField" @keydown="show($event)" @blur="blurshow"/>
					<span class="fontBlue" @click='openTip'>换绑</span>
				</li>
				<li class="name">
					<span>微信昵称 : </span>
					<span class="fontGary">卡罗拉 <i class="m-icon">&#xe62b;</i></span>
					<span></span>
				</li>
				<li class="address">
					<span>地区 : </span>
					<span class="fontGary">浙江杭州</span>
				</li>
			</ul>
		</div>
		<div class="personal-info">
			<ul>
				<li>最近交易<span class="fontGary">:1笔订单正在交易中</span></li>
				<li>合计：¥12000 &nbsp; 共成交10笔 &nbsp; 12件宝贝</li>
				<li>客单价：¥120</li>
				<li>上次交易时间：2017-11-21 15:00</li>
			</ul>
		</div>
		<div class="customer-tags">
			<p>客户标签</p>
			<div><span class="fontGary">我是标签</span><span class="fontGary">我是标签</span><span class="fontBlue" @click="addTags">+新增标签</span></div>
		</div>
	</section>
</template>

<script>
	import Bus from '@/common/bus.js'
	// const electron = require('electron')
	// const app = electron.app
	// const BrowserWindow = electron.remote.BrowserWindow
	// const ipc = require('electron').ipcMain;
	export default {
		data() {
			return {
				 TextField:false 
			}
		},
		mounted() {
       		Bus.$on('inputShow', (e) => {
        		this.TextField = e
       		})
     	},
		components: {
//			dialogTip
		},
		methods: {
			openTip() {
				this.TextField = true
			},
			addTags() {
				Bus.$emit('msg', true)
			},
			show(ev) {
				  if(ev.keyCode==13){
             		 Bus.$emit('dialog', true)
            	  }
			},
			blurshow() {
				 Bus.$emit('dialog', true)
			},
			open() {
				
			}
		}

	}
</script>

<style lang="scss" scoped>
	.clearfix:after {
		content: '';
		display: block;
		visibility: hidden;
		clear: both;
		height: 0;
	}
	
	.fontGary {
		color: #ccc !important
	}
	
	.fontBlue {
		color: #56A3EB;
		padding-left: 10px;
	}
	
	.left {
		float: left;
	}
	
	section {
		text-align: start;
		.personal-info {
			margin-left: 10px;
			margin-right: 10px;
			ul {
				padding: 20px;
				border-bottom: 1px solid #E0E0E0;
				.number {
					input {
						width: 85px;
						height: 14px;
						border:  1px solid #ccc;
						padding: 5px 5px;
					}
				}
				li {
					
					font-size: 13px;
					color: #333333;
					span {
						margin-right: 5px;
					}
					
				}
			}
		}
		.customer-tags {
			margin-left: 23px;
			margin-right: 23px;
			font-size: 13px;
			box-sizing: border-box;
			padding: 20px;
			div {
				span {
					margin-right: 17px;
				}
				;
			}
		}
	}
</style>