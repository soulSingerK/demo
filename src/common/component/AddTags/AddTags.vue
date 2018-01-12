<template>
	<div id="app" v-if="closeWin">
		<div class="contentRoot" v-drag="greet" >
			<div class="title">
				<span class="addtag">添加标签</span><span class="m-icon dele" @click="close">&#xe62e;</span>
			</div>
			<div class="select">
				<div class="select-title">
					<span class="tags" @click="switchover(1)" :class="{selectTag:selected==1}">已有标签</span>
					<span class="newtag" @click="switchover(2)" :class="{selectTag:selected==2}">新建标签</span>
				</div>
				<div class="tagInputs" v-if="selected==2">
					<div class="tagName"><span>标签名称 </span><input type="text" /></div>
					<div class="addGroup">
						<span>新建/选择分组  </span> 
						<!--<input type="text" placeholder="默认分组" />-->
						<select name="">
							<option value="">默认分组</option>
							<!--<option value="">默认分组</option>
							<option value="">默认分组</option>
							<option value="">默认分组</option>-->
						</select>
					</div>
					<div class="btn"><span class="cancel">取消</span><span class="confirm">确认</span></div>
				</div>
				<div class="yetTag" v-if="selected==1">
					<div class="content">
						<div v-for="item in 1">
							<div class="titleTag">
								<span class="text">标签分类一</span><span class="getUp">收起 <i class="m-icon">&#xe635;</i></span>
							</div>
							<div class="Tags">
								<label v-for="i in 6">
								<input type="checkbox"/>
								<span>标签</span>
							</label>
							</div>
						</div>
						<div class="btn"><span class="cancel">取消</span><span class="confirm">确认</span></div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Bus from '@/common/bus.js'
	export default {
		data() {
			return {
				val: '123',
				selected: 1,
				closeWin: false
			}
		},
		mounted() {
       		Bus.$on('msg', (e) => {
        		this.closeWin = e
       		})
     	},
		directives: {
			drag: {
				bind: function(el, binding) {
					let oDiv = el; //当前元素
					let self = this; //上下文
					oDiv.onmousedown = function(e) {
						//鼠标按下，计算当前元素距离可视区的距离
						let disX = e.clientX - oDiv.offsetLeft;
						let disY = e.clientY - oDiv.offsetTop;
						document.onmousemove = function(e) {
							//通过事件委托，计算移动的距离 
							let l = e.clientX - disX;
							let t = e.clientY - disY;
							if(l < 0) {
								l = 0;
							} else if(l > document.documentElement.clientWidth - oDiv.offsetWidth) {
								l = document.documentElement.clientWidth - oDiv.offsetWidth;
							}
							if(t < 0) {
								t = 0;
							} else if(t + 80 > document.documentElement.clientHeight - oDiv.offsetHeight) {
								t = document.documentElement.clientHeight - oDiv.offsetHeight - 80;
							}
							//移动当前元素  
							oDiv.style.left = l + 'px';
							oDiv.style.top = t + 'px';

							//将此时的位置传出去
							binding.value({
								x: e.pageX,
								y: e.pageY
							})

						};
						document.onmouseup = function(e) {
							document.onmousemove = null;
							document.onmouseup = null;
						};
					};
				}
			}
		},
		methods: {
			//配合拖拽的方法
			greet(val) {
				this.val = val;
			},
			switchover(i) {
				this.selected = i
			},
			close() {
				this.closeWin = false
			}

		}
	}
</script>

<style lang="scss" scoped>
	.selectTag {
		color: #333333;
		box-sizing: border-box;
		border-bottom: 2px solid #00bf8f;
	}
	
	.btn {
		margin-bottom: 12px;
		overflow: hidden;
		color: #FFFFFF;
		font-size: 12px;
		line-height: 24px;
		margin-right: 47px;
		margin-top: 30px;
		.confirm {
			cursor: pointer;
			width: 60px;
			height: 24px;
			text-align: center;
			float: right;
			background-color: #00BF8F;
			margin-right: 17px;
			display: inline-block;
			border-radius: 2px;
		}
		.cancel {
			cursor: pointer;
			text-align: center;
			color: #CCCCCC;
			width: 60px;
			height: 24px;
			border: 1px solid #CCCCCC;
			border-radius: 2px;
			display: inline-block;
			float: right;
			margin-right: 17px;
		}
	}
	
	#app {
		width: 100%;
		height: calc(100% - 60px);
		position: absolute;
		z-index: 100;
		display: flex;
		justify-content: center;
		align-items: center;
		.contentRoot {
			width: 432px;
			overflow: auto;
			overflow-x: hidden;
			max-height: 400px;
			position: absolute;
			background-color: #FFFFFF;
			border-radius: 6px;
			box-shadow:0px 3px 4px 2px #C8C8C8; 
			.title {
				height: 30px;
				overflow: hidden;
				font-size: 12px;
				color: #FFFFFF;
				background: #00BF8F;
				border-bottom: 1px solid #e7e7e7;
				.addtag {
					float: left;
					margin-left: 14px;
					margin-top: 8px;
				}
				.dele {
					cursor: pointer;
					margin-top: 8px;
					float: right;
					margin-right: 14px;
				}
			}
			.select {
				font-size: 12px;
				.select-title {
					height: 30px;
					overflow: hidden;
					color: #999999;
					border-bottom: 1px solid #e7e7e7;
					margin-bottom: 10px;
					text-align: center;
					line-height: 30px;
					.tags {
						display: inline-block;
						float: left;
						height: 30px;
						width: 108px;
					}
					.newtag {
						display: inline-block;
						float: left;
						height: 30px;
						width: 120px;
					}
				}
				.yetTag {
					height: 300px;
					.content {
						.titleTag {
							width: 374px;
							height: 28px;
							margin: 10px auto;
							line-height: 28px;
							background: #F5F9FB;
							overflow: hidden;
							.text {
								float: left;
								margin-left: 10px;
							}
							.getUp {
								float: right;
								margin-right: 10px;
							}
						}
						.Tags {
							margin: 0 auto;
							width: 374px;
							min-height:60px;
							overflow: auto;
							label {
								display: inline-block;
								padding-left: 9px;
								/*margin-right: 75px;*/
								padding-bottom: 10px;
								span {
									display: inline-block;
									width: 99px;
									position: relative;
									top: -2px;
									text-overflow: ellipsis;
									overflow: hidden;
									white-space: nowrap;
								}
							}
						}
					}
				}
				.tagInputs {
					.tagName {
						margin: 25px 60px;
						height: 30px;
						line-height: 30px;
						display: flex;
						span {
							color: #333333;
							margin-right: 8px;
						}
						input {
							border: 1px solid #C8C8C8;
							height: 30px;
							width: 250px;
						}
					}
					.addGroup {
						text-align: center;
						span {
							color: #333333;
							margin-left: -33px;
						}
						select {
							outline: none;
							margin-left: 5px;
							border: 1px solid #CCCCCC;
							height: 30px;
							width: 251px;
							padding-left: 10px;
							color: #CCC;
						}
					}
				}
			}
		}
	}
</style>