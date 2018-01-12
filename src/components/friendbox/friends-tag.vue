<template>
    <div style="height:100%;">
        <div class="friend-box">
            <div class="searchInput">
                <a href="###"><i class="m-icon">&#xe62f;</i></a>
                <input type="text" placeholder="请输入搜索的内容" v-model="searchName" @input="searchWay(searchName)">
            </div>
            <!-- 搜索结果展示 -->
            <ul v-if="searchName!=''">
                <li v-for="item in showFriends">
                    <div class="selfcontbox">
                        <div class="headimg">
                            <img :src="item.headimg">
                        </div>
                        <span class="fname">{{item.name}}</span>
                    </div>
                </li>
            </ul>
            <!-- 选择标签列表 -->
            <ul v-if="searchName==''&&choseid==''">
                <li v-for="item in [1, 2, 3]">
                    <div class="firstTag" @click="moreTagShow=!moreTagShow">手动标签</div>
                    <ul class="itemUL" v-if="moreTagShow">
                        <li @click="choseCusid()">新客户</li>
                        <li>老客户</li>
                        <li>在联系的</li>
                    </ul>
                </li>
            </ul>
            <!-- 标签下的好友列表 -->
            <ul v-if="searchName==''&&choseid!=''">
                <li>
                    <div class="topTag" @click="choseCusid()">
                        <span class="flname">新客户</span>
                        <span class="frnum">500</span>
                    </div>
                </li>
                <li v-for="item in [1, 2, 3]">
                    <div class="selfcontbox">
                        <div class="headimg">
                            <img src="">
                        </div>
                        <span class="fname">哈哈哈 </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchName: '',
                choseid: '',
                showFriends: [], // 搜索的数据
                friends: [{headimg:'', name:'紫月微笑11', account:'jklas;df', num: 157},{headimg:'', name:'紫月微笑11', account:'jklas;df', num: 157},{headimg:'', name:'紫月微笑11', account:'jklas;df', num: 157}], //全部数据
                moreTagShow: false
            }
        },
        created() {
            this.showFriends = this.friends
        },
        methods: {
            searchWay(str) {
            },
            choseCusid() {
                if (this.choseid == '') {
                    this.choseid = '1'
                } else {
                    this.choseid = ''
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .friend-box {
        width: 218px;
        height: 100%;
        border-right: 1px solid #D8D8D8;
        overflow: hidden;
        background-color: #fff;
        .searchInput {
            width: 100%;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #D8D8D8;
            i {
                margin-left: 13px;
                font-size: 13px;
                color: #646464;
            }
            >input {
                width: calc(100% - 45px);
                height: 30px;
                line-height: 30px;
                padding: 5px 5px;
                border: none;
                &::-webkit-input-placeholder {
                    color: #999;
                }
            }
        }
        >ul {
            height: calc(100% - 40px);
            overflow-y: auto;
            &:hover {
                &::-webkit-scrollbar {
                    display: block;
                }
            }
            &::-webkit-scrollbar {
                display: none;
                width: 5px;
                height: 5px;
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 5px;
                background-color: #999;
            }
            li {
                cursor: default;
                .firstTag {
                    position: relative;
                    padding-left: 28px;
                    height: 30px;
                    line-height: 30px;
                    background-color: #F5F8FB;
                    color: #333;
                    font-size: 12px;
                    &:before {
                        position: absolute;
                        content: "";
                        top: 8px;
                        left: 12px;
                        width: 5px;
                        height: 5px;
                        background: #F5F8FB;
                        border: 2px solid #C8C8C8;
                        border-top-color: #F5F8FB;
                        border-right-color: #F5F8FB;
                        transform: rotate(-45deg);
                    }
                }
                .itemUL {
                    li {
                        height: 30px;
                        line-height: 30px;
                        margin-left: 28px;
                        border-bottom: 1px solid #e7e7e7;
                    }
                }
                .topTag {
                    padding-left: 28px;
                    padding-right: 10px;
                    height: 30px;
                    line-height: 30px;
                    background-color: #F5F8FB;
                    font-size: 12px;
                    .flname {
                        float: left;
                        color: #333;
                    }
                    .frnum {
                        float: right;
                        color: #999;
                    }
                }
                .selfcontbox {
                    position: relative;
                    height: 47px;
                    margin-left: 12px;
                    width: calc(100% - 12px);
                    border-bottom: 1px solid #D8D8D8;
                    > * {
                        position: absolute;
                    }
                    .headimg {
                        top: 11px;
                        height: 28px;
                        width: 28px;
                        background-color: #333;
                    }
                    .fname {
                        top: 19px;
                        left: 33px;
                        font-size: 12px;
                        color: #333;
                        width: 70px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
</style>
