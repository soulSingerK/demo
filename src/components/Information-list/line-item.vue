<template>
	<section>
		<div class="main" v-for="(item,index) in 3">
			<div class="title" @click="packUp(index)" >
				<i class="m-icon leftFloat" :class="{transition2:change==index,transition:(change==null&&!admin)}">&#xe635;</i>
				<span class="fontBlue leftFloat">交易中（待付款）</span><span class="rightFloat">1.10 15:30</span>
			</div>
			<transition name='fade'>
				<div v-if='change==index'>
					<ul>
						<li>
							<img src="" alt="" />
							<div class="li-cont">
								<div class="cont-text">Sakun专柜正品 韩国潮牌韩国潮牌韩国...</div>
								<div style="text-align: end;">
									<span style="color:#CCCCCC; text-decoration:line-through;margin-right: 10px;">¥355:00 </span>
									<span style="color:#FF6557;margin-right: 10px;"> ¥255:00</span>
								</div>
							</div>
						</li>
					</ul>
					<div class="info">
						<div>
							<p>实付款：¥710（含7元邮费）</p>
							<p>收货人：李文杰 15051211421</p>
							<p>收货地址：浙江省杭州市拱墅区祥园路28号乐富智汇园12号楼1502室</p>
						</div>
						<p style="border-bottom: 1px solid #F0F0F0;">买家备注：</p>
						<p style="border-bottom: 1px solid #F0F0F0;">买家备注：</p>
					</div>
				</div>
			</transition>
		</div>
		<div></div>
		<div></div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				change: 0,
				admin:false
			}
		},
		methods: {
			packUp(i) {
				if(this.change == i){
					this.admin = true
					this.change = null
				}else {
					this.change = i
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .2s
	}
	.fade-enter,
	.fade-leave-to
	{
		opacity: 0
	}
	.transition2 {
		transform: rotate(-180deg);
		transition: all 0.2s;
		-webkit-transition: all 0.2s;
	}
	
	.transition {
		transform: rotate(-360deg);
		transition: all 0.2s;
		-webkit-transition: all 0.2s;
	}
	
	.leftFloat {
		float: left;
		margin-right: 10px;
	}
	
	.rightFloat {
		float: right;
		padding-right: 20px;
		font-size: 12px;
		color: #999999;
	}
	
	.fontBlue {
		color: #459AE9
	}
	
	section {
		text-align: start;
		.main {
			.title {
				background-color: #F5F8FB;
				padding-left: 20px;
				overflow: hidden;
			}
		}
		.info {
			line-height: 28px;
			p {
				padding-left: 53px;
				margin: 0 10px 0 10px;
			}
			div {
				margin: 0 10px 0 10px;
				border-bottom: 1px solid #F0F0F0;
				p {
					padding-left: 43px;
				}
			}
		}
		ul {
			li {
				margin-top: 23px;
				padding-left: 14px;
				padding-bottom: 22px;
				border-bottom: 1px dashed #C8C8C8;
				overflow: hidden;
				line-height: 18px;
				img {
					width: 35px;
					height: 35px;
					float: left;
				}
				.li-cont {
					float: left;
					padding: 0 0 0 10px;
					.cont-text {
						width: 210px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						display: inline-block;
					}
				}
			}
		}
	}
</style>