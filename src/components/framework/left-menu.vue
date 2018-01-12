<template>
    <div id="leftbox" class="leftbox">
        <a href="###" @click="choseType('new-message')"><i class="m-icon" v-html="type=='new-message'?'&#xe616;':'&#xe615;'"></i><span class="btntip">最近聊天</span></a>
        <a href="###" @click="choseType('tody-reception')"><i class="m-icon" v-html="type=='tody-reception'?'&#xe618;':'&#xe617;'"></i><span class="btntip">今日接待</span></a>
        <a href="###" @click="choseType('my-friends')"><i class="m-icon" v-html="type=='my-friends'?'&#xe61a;':'&#xe619;'"></i><span class="btntip">我的好友</span></a>
        <a href="###" @click="choseType('my-tag')"><i class="m-icon" v-html="type=='my-tag'?'&#xe61c;':'&#xe61b;'"></i><span class="btntip">我的表情</span></a>
        <a href="###" @click="choseType('new-friends')"><i class="m-icon" v-html="type=='new-friends'?'&#xe638;':'&#xe637;'"></i><span class="btntip">新的朋友</span></a>
        <div class="bottomBox">
            <a href="###"><i class="m-icon">&#xe61d;</i><span class="btntip" style="width:30px;">群发</span></a>
            <a href="###"><i class="m-icon">&#xe61e;</i><span class="btntip">自动回复</span></a>
            <a href="###"><i class="m-icon">&#xe61f;</i><span class="btntip" style="width:75px;">发布朋友圈</span></a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['type'],
        data() {
            return {
            }
        },
        methods: {
            choseType(str) {
                this.$emit('typeChange', str)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .leftbox {
        position: relative;
        float: left;
        height: calc(100% - 60px);;
        width: 76px;
        background-color: #EEF7F4;
        border-right: 1px solid #D8D8D8;
        >a {
            position: relative;
            display: block;
            width: 100%;
            font-size: 28px;
            margin-top: 40px;
            text-align: center;
            >i {
                color: #00BF8F;
            }
            .btntip {
                display: none;
                position: absolute;
                background: #333;
                color: #fff;
                width: 60px;
                height: 20px;
                line-height: 20px;
                font-size: 12px;
                padding: 5 8px;
                border-radius: 3px;
                top: 5px;
                left: 60px;
                z-index: 55;
            }
            &:hover {
                .btntip {
                    display: block;
                }
            }
        }
        .bottomBox {
            position: absolute;
            bottom: 0px;
            height: 160px;
            width: 100%;
            >a {
                position: relative;
                display: block;
                width: 100%;
                font-size: 25px;
                text-align: center;
                margin-top: 20px;
                >i {
                    color: #00BF8F;
                }
                .btntip {
                    display: none;
                    position: absolute;
                    background: #333;
                    color: #fff;
                    width: 60px;
                    height: 20px;
                    line-height: 20px;
                    font-size: 12px;
                    padding: 5 8px;
                    border-radius: 3px;
                    top: 5px;
                    left: 60px;
                    z-index: 55;
                }
                &:hover {
                    .btntip {
                        display: block;
                    }
                }
            }
        }
    }
</style>
