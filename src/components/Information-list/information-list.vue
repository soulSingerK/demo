<template>
	<section class="app">
		<div class="main">
			<div class="customer" @click="select(1)" :class="{select:selecting==1}">客户信息</div>
			<div class="line" @click="select(2)" :class="{select:selecting==2}">订单详情</div>
		</div>
		<customerInfo v-if='selecting==1'></customerInfo>
		<lineItem v-if='selecting==2'></lineItem>
	</section>
</template>

<script>
	import customerInfo from './customer-info'
	import lineItem from './line-item'
	export default {
		data() {
			return {
				selecting:1
			}
		},
		components: {
			customerInfo,
			lineItem
		},
		methods: {
			select(index) {
				this.selecting = index
				console.log('asds')
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.app {
		width: 100%;
		/*height: 80vh;*/
		height: 100%;
		background-color: #FAFAFA;
		text-align: center;
		line-height: 35px;
		.main {
			
			overflow: hidden;
			.customer {
				box-sizing: border-box;
				float: left;
				width: 50%;
				height: 39px;
				background-color: #EFFCF9;
				border: 1px solid #E0E0E0;
			}
			.line {
				box-sizing: border-box;
				float: left;
				width: 50%;
				height: 39px;
				background-color: #EFFCF9;
				border: 1px solid #E0E0E0;
			}
		}
	}
	
	.select {
		background-color: #FAFAFA !important;
		border:none !important; 
		/*color: red;*/
	}
</style>