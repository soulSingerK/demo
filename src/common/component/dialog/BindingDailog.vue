<template>
	<div class="select">
		<div class="text">
			未查找到该用户的订单信息，是否确认绑定？
		</div>
		<div class="btn"><span class="confirm">是</span><span class="cancel" @click="close">否</span></div>
	</div>
</template>

<script>
	import Bus from '@/common/bus.js'
	export default {
		data() {
			return {
				closeWin: false
			}
		},
		mounted() {
       		Bus.$on('dialog', (e) => {
        		this.closeWin = e
       		})
     	},
		methods: {
			close() {
				Bus.$emit('closeWin', false)
				Bus.$emit('inputShow', false)
			}
		}
	}
</script>

<style lang="scss" scoped="">
	.btn {
		margin-bottom: 12px;
		/*overflow: hidden;*/
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		font-size: 12px;
		line-height: 24px;
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
			width: 250px;
			overflow: auto;
			overflow-x: hidden;
			max-height: 400px;
			position: absolute;
			background-color: #FFFFFF;
			border-radius: 6px;
			box-shadow: 0px 3px 4px 2px #C8C8C8;
			.select {
				font-size: 12px;
				width: 250px;
				.text {
					width: 179px;
					height: 32px;
					margin: 30px auto;
				}
			}
		}
	}
</style>