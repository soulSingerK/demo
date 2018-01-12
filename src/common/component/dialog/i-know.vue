<template>
    <div>
        <div class="i-know-box" v-if="0">
            <p>客服号（小橙子）正在进行其他任务，请稍后再试！</p>
            <p class="mr34"><i class="btn-success" @click="close()">我知道了</i></p>
        </div>
        <div class="i-know-img" v-if="1">
            <div class="img-box">
                <img src="/src/renderer/assets/luffy2.jpg" alt="">
                <p>紫月微笑11</p>
                <p class="state">已离线</p>
            </div>
            <div class="content-box">
                <i class="m-icon close" @click="close()">&#xe62e;</i>
                <p class="content">链接失败，请保证手机在开机且联网的情况下重试</p>
                <div class="btn">
                    <p class="btn-success">重新登录</p>
                    <p class="btn-success" @click="close()">我知道了</p>
                    <p class="btn-default" @click="close()">我知道了</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Bus from '@/common/bus.js'
    export default {
        data () {
            return {
                
            }
        },
        methods: {
            close() {
                Bus.$emit('closeIKnow', false)
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
            .i-know-box {
                // width: 318px;
                // height: 120px;
                font-size: 12px;
                padding: 39px 18px 15px;
                text-align: center;
                .mr34 {
                    margin-top: 34px;
                }
                i {
                    // display: inline-block;
                    // background: #00BF8F;
                    // color: #fff;
                    // padding: 4px 18px;
                    // border-radius: 1px;
                    // cursor: pointer;
                }
            }
            .i-know-img {
                width: 445px;
                .img-box {
                    padding: 45px 12px 48px 15px;
                    border-right: 1px solid #e7e7e7;
                    position: relative;
                    width: 100px;
                    img {
                        width: 28px;
                        height: 28px;
                        position: absolute;
                        border-radius: 14px;
                    }
                    p {
                        line-height: 20px;
                        // position: absolute;
                        // left: 60px;
                        margin-left: 35px;
                        font-size: 12px;
                        line-height: 14px;
                    }
                    .state {
                        color: #999;
                    }
                }
                .content-box {
                    position: absolute;
                    padding-right: 20px;
                    right: 0;
                    top:0;
                    font-size: 12px;
                    .close {
                        position: absolute;
                        right: 4px;
                        top: 4px;
                        cursor: default;
                    }
                    .content {
                        margin-top: 45px;
                    }
                    .btn {
                        margin-top: 19px;
                        // p {
                        //     display: inline-block;
                        //     background: #00BF8F;
                        //     color: #fff;
                        //     padding: 4px 18px;
                        //     border-radius: 1px;
                        //     cursor: pointer;
                        // }
                        .ml10{
                            margin-left: 10px;
                        }
                    }
                }
            }
            .btn-success {
                display: inline-block;
                background: #00BF8F;
                color: #fff;
                padding: 4px 18px;
                border-radius: 1px;
                cursor: pointer;
            }
            .btn-default {
                display: inline-block;
                background: #fff;
                color: #999999;
                padding: 4px 18px;
                border-radius: 1px;
                border: 1px solid #C8C8C8;
                cursor: pointer;
            }
		}
	}
</style>