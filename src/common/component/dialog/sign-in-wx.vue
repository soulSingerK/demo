<template>
    <div class="sign-in-box">
        <div class="title">选择登录的微信号</div>
        <i class="m-icon close" @click="close()">&#xe62e;</i>
        <div class="wx-list">
            <div v-for="(wx, index) in wxList" :key="index" class="every-wx">
                <input type="checkbox">
                <img src="/src/renderer/assets/luffy2.jpg" alt="">
                <span>{{wx.name}}</span>
            </div>
        </div>
        <div class="btn"><p class="btn-success">确定</p></div>
    </div>
</template>

<script>
    import Bus from '@/common/bus.js'
    export default {
        data () {
            return {
                wxList: [
                    {
                        name: '葬爱家族',
                        img: ''
                    },
                    {
                        name: '葬爱家族',
                        img: ''
                    },
                    {
                        name: '葬爱家族',
                        img: ''
                    },
                    {
                        name: '葬爱家族',
                        img: ''
                    },
                    {
                        name: '葬爱家族',
                        img: ''
                    },
                    {
                        name: '葬爱家族',
                        img: ''
                    },
                ]
            }
        },
        methods: {
            close() {
                Bus.$emit('closeSignInWx', false)
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
            .sign-in-box {
                border-radius: 3px;
                position: relative;
                font-size: 12px;
                background: #FFFFFF;
                border: 1px solid #E7E7E7;
                width: 478px;
                padding: 0 14px;
                .close {
                    position: absolute;
                    right: 4px;
                    top: 4px;
                    cursor: default;
                }
                .title {
                    line-height: 36px;
                }
                .wx-list {
                    .every-wx {
                        display: inline-block;
                        width: 150px;
                        line-height: 28px;
                        margin: 10px 0;
                        img {
                            width: 28px;
                            height: 28px;
                            border-radius: 14px;
                            vertical-align: bottom;
                        }
                    }
                }
                .btn {
                    text-align: center;
                    margin: 40px 0 20px;
                }
                .btn-success {
                    display: inline-block;
                    background: #00BF8F;
                    color: #fff;
                    padding: 6px 28px;
                    border-radius: 3px;
                    cursor: pointer;
                }
            }
		}
	}
</style>