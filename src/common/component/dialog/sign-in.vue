<template>
    <div class="sign-in-box">
        <i class="m-icon close">&#xe62e;</i>
        <div class="logo w300"><i class="m-icon">&#xe636;</i></div>
        <div class="w300 h40 user">
            <i class="m-icon">&#xe633;</i>
            <input type="text" placeholder="请输入聚客通帐号">
        </div>
        <div class="w300 h40 password">
            <i class="m-icon">&#xe630;</i>
            <input type="text" placeholder="请输入密码">
        </div>
        <div class="w300 operation">
            <div class="save-password">
                <input type="checkbox">
                <span class="tr-2">记住密码</span>
            </div>
            <div class="auto-sign-in">
                <input type="checkbox">
                <span class="tr-2">自动登录</span>
            </div>
        </div>
        <div class="w300 btn">登录</div>
        <p class="w300 error" v-show="1"><i class="m-icon">&#xe632;</i> 用户密码不匹配，请重新输入密码登录</p>
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
                Bus.$emit('closeSignIn', false)
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
                box-shadow: 0 2px 4px 0;
                padding: 36px 44px 70px;
                .close {
                    position: absolute;
                    right: 4px;
                    top: 4px;
                    cursor: default;
                }
                .w300 {
                    width: 300px;
                }
                .logo {
                    font-size: 75px;
                    color: #00BF8F;
                    text-align: center;
                }
                .h40 {
                    height: 40px;
                    line-height: 40px;
                    border-bottom: 1px solid #E7E7E7;
                    color: #999;
                    i {
                        font-size: 18px;
                    }
                    input {
                        border: none;
                        width: 270px;
                    }
                }
                .operation {
                    position: relative;
                    height: 40px;
                    margin-top: 8px;
                    .save-password {
                        position: absolute;
                        left: 0;
                    }
                    .auto-sign-in {
                        position: absolute;
                        right: 0;
                    }
                    .tr-2 {
                        display: inline-block;
                        transform: translateY(-2px);
                    }
                }
                .btn {
                    text-align: center;
                    line-height: 40px;
                    background: #00BF8F;
                    border-radius: 5px;
                    color: #fff;
                    font-size: 14px;
                    cursor: default;
                }
                .error {
                    margin-top: 7px;
                    color: #F22512;
                    i {
                        font-size: 16px;
                        transform: translateY(1px);
                        cursor: default;
                    }
                }
            }
		}
	}
</style>