<template>
    <div class="add-box">
        <div class="add-title">
            <p>新增快捷内容</p>
            <i class="m-icon close" @click="close()">&#xe62e;</i>
        </div>
        <div class="add-content">
            <div class="reply-content">
                <textarea></textarea>
            </div>
            <div class="reply-group">
                <span>快捷编码：</span>
                <input type="text">
                <span>选择分组：</span>
                <select>
                    <option v-for="(group,index) in groupList" :key="index" :value="index" v-html="group.name"></option>
                </select>
            </div>
            <div class="explain">
                用于快速输入快捷短语，只能为数字，字母，或中文，聊天输入窗口输入“/”可触发快捷短语搜索，结果可用Enter健确认。
            </div>
            <div class="btn">
                <button class="save">保存</button>
                <button class="cancel" @click="close()">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Bus from '@/common/bus.js'

    export default {
        data () {
            return {
                groupList: [
                    {
                        name: '默认分组'
                    },
                    {
                        name: '我的小可爱'
                    },
                ]
            }
        },
        methods: {
            close() {
                Bus.$emit('closeAddReply', false)
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
            .add-box {
                width: 366px;
                height: 283px;
                border-radius: 3px;
                background: #EDF6F4;
                position: relative;
                font-size: 12px;
                .add-title {
                    height: 30px;
                    width: 100%;
                    font-size: 12px;
                    background: #00BF8F;
                    border-radius: 3px 3px 0 0;
                    position: relative;
                    p {
                        margin-left: 14px;
                        line-height: 30px;
                    }
                    .close {
                        position: absolute;
                        right: 4px;
                        top: 4px;
                        cursor: default;
                    }
                }
                .add-content {
                    padding: 28px 9px 19px;
                    .reply-content {
                        textarea {
                            width: 338px;
                            height: 74px;
                            border: 1px solid #00BF8F;
                            padding: 5px;
                        }
                    }
                    .reply-group {
                        margin-top: 9px;
                        span {
                            line-height: 28px;
                        }
                        input, select {
                            width: 93px;
                            height: 28px;
                            border: 1px solid #00BF8F;
                            padding: 0 5px;
                            font-size: 12px;
                        }
                    }
                    .explain {
                        color: #999999;
                        margin-top: 7px;
                    }
                    .btn {
                        margin-top: 22px;
                        position: relative;
                        button {
                            height: 24px;
                            width: 60px;
                            line-height: 24px;
                            border: none;
                            border-radius: 1px;
                            position: absolute;
                            font-size: 12px;
                        }
                        .save {
                            background: #00BF8F;
                            color: #fff;
                            right: 80px;
                        }
                        .cancel {
                            background: #fff;
                            color: #999;
                            right: 0;
                        }
                    }
                }
            }
		}
	}
    
    ::-webkit-scrollbar-track-piece {
        border-radius: 0;
    }
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    ::-webkit-scrollbar-thumb {
        height: 20px;
        background-color: #e2e2e2;
        -webkit-border-radius: 4px;
        outline-offset: -2px;
        border: 2px solid #e0e0e0;
    }
    ::-webkit-scrollbar-thumb:hover {
        height: 50px;
        background-color: #999;
        border-radius: 4px;
    }
</style>