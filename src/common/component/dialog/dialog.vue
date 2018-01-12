<template>
	<div id="app" v-if="closeWin">
		<div class="contentRoot" v-drag="greet">
			<binding-dailog v-if="show.binding"></binding-dailog> 
			<add-speedy-reply v-if="show.addSpeedyReply"></add-speedy-reply>
			<sign-in v-if="show.signIn"></sign-in>
			<i-know v-if="show.iKnow" :content="dataObj"></i-know>
			<sign-in-wx v-if="show.signInWx"></sign-in-wx>
		</div>
	</div>
</template>

<script>
	import Bus from '@/common/bus.js'
	import bindingDailog from './BindingDailog'
	import addSpeedyReply from './add-speedy-reply'
	import signIn from './sign-in'
	import iKnow from './i-know'
	import signInWx from './sign-in-wx'
	export default {
		data() {
			return {
				val: '123',
				selected: 1,
				closeWin: false,
				show: {
					binding: false,
					addSpeedyReply: false,
					signIn: false,
					iKnow: false,
					signInWx: false
				},
				dataObj: {}
			}
		},
		mounted() {
       		Bus.$on('dialog', (e) => {
				this.closeWin = e
				this.show.binding = e
       		}),
       		Bus.$on('closeWin', (e) => {
				this.closeWin = e
				this.show.binding = e
			}),
			Bus.$on('showAddReply', (e) => {
				this.closeWin = e
				this.show.addSpeedyReply = e
			}),
			Bus.$on('closeAddReply', (e) => {
				this.closeWin = e
				this.show.addSpeedyReply = e
			}),
			Bus.$on('showSignIn', (e) => {
				this.closeWin = e
				this.show.signIn = e
			}),
			Bus.$on('closeSignIn', (e) => {
				this.closeWin = e
				this.show.signIn = e
			}),
			Bus.$on('showSignInWx', (e) => {
				this.closeWin = e
				this.show.signInWx = e
			}),
			Bus.$on('closeIKnow', (e) => {
				this.closeWin = e
				this.show.iKnow = e
			}),
			Bus.$on('closeSignInWx', (e) => {
				this.closeWin = e
				this.show.signInWx = e
       		})
     	},
     	components:{
			bindingDailog,
			addSpeedyReply,
			signIn,
			iKnow,
			signInWx
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
			close() {
				this.closeWin = false
				Bus.$emit('inputShow', false)
			}

		}
	}
</script>

<style lang="scss" scoped>
	#app {
		width: 100%;
		height: calc(100% - 60px);
		position: absolute;
		z-index: 100;
		display: flex;
		justify-content: center;
		align-items: center;
		.contentRoot {
			// width: 250px;
			overflow: auto;
			overflow-x: hidden;
			max-height: 400px;
			position: absolute;
			background-color: #FFFFFF;
			border-radius: 6px;
			box-shadow:0px 3px 4px 2px #C8C8C8; 
		
		}
	}
</style>