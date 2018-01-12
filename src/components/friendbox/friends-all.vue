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
            <!-- 微信账号列表 -->
            <ul v-if="searchName==''&&choseid==''">
                <li v-for="item in friends" @click="choseWxid()">
                    <div class="allcontbox">
                        <div class="mgbox">
                            <div class="headimg">
                                <img :src="item.headimg">
                            </div>
                            <span class="fname">{{item.name}}</span>
                            <span class="faccount">{{item.account}}</span>
                            <span class="fnum">{{item.num}}</span>
                        </div>
                    </div>
                </li>
            </ul>
            <!-- 微信下的好友列表 -->
            <ul v-if="searchName==''&&choseid!=''">
                <li @click="choseWxid()">
                    <div class="selfhead">
                        <div class="headimg">
                            <img src="">
                        </div>
                        <span class="fname">紫月微笑11</span>
                        <span class="faccount">klas;df</span>
                        <span class="fnum">123</span>
                    </div>
                </li>
                <li v-for="item in ['A', 'B', 'C']">
                    <div class="firstletter">{{item}}</div>
                    <div class="selfcontbox" v-for="item in [1, 2, 3]">
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
                showFriends: [], // 展示的数据
                friends: [{headimg:'', name:'紫月微笑11', account:'jklas;df', num: 157},{headimg:'', name:'紫月微笑11', account:'jklas;df', num: 157},{headimg:'', name:'紫月微笑11', account:'jklas;df', num: 157}] //全部数据
            }
        },
        created() {
            this.showFriends = this.friends
        },
        methods: {
            searchWay(str) {
            },
            choseWxid() {
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
        ul {
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
                .allcontbox {
                    width: 100%;
                    height: 49px;
                    .mgbox {
                        position: relative;
                        margin-left: 14px;
                        width: calc(100% - 14px);
                        height: 49px;
                        border-bottom: 1px solid #E0E0E0;
                        > * {
                            position: absolute;
                        }
                        .headimg {
                            top: 10px;
                            height: 28px;
                            width: 28px;
                            border-radius: 14px;
                            background-color: #333;
                        }
                        .fname {
                            top: 10px;
                            left: 33px;
                            font-size: 12px;
                            color: #333;
                            width: 70px;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                        }
                        .faccount {
                            top: 25px;
                            left: 33px;
                            font-size: 12px;
                            color: #999;
                            width: 166px;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                        }
                        .fnum {
                            top: 12px;
                            right: 13px;
                            font-size: 12px;
                            color: #999;
                        }
                    }
                    &:hover {
                        background-color: #F5F5F5;
                        .mgbox {
                            border-bottom: 1px solid #F5F5F5;
                        }
                    }
                }
                .selfhead {
                    position: relative;
                    padding-left: 14px;
                    height: 47px;
                    width: calc(100% - 14px);
                    border-bottom: 1px solid #D8D8D8;
                    > * {
                        position: absolute;
                    }
                    .headimg {
                        top: 10px;
                        height: 28px;
                        width: 28px;
                        border-radius: 14px;
                        background-color: #333;
                    }
                    .fname {
                        top: 10px;
                        left: 47px;
                        font-size: 12px;
                        color: #333;
                        width: 70px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    .faccount {
                        top: 25px;
                        left: 47px;
                        font-size: 12px;
                        color: #999;
                        width: 166px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    .fnum {
                        top: 12px;
                        right: 13px;
                        font-size: 12px;
                        color: #999;
                    }
                    &:hover {
                        background-color: #F5F5F5;
                        border-bottom: 1px solid #F5F5F5;
                    }
                }
                .firstletter {
                    padding-left: 14px;
                    width: calc(100% - 14px);
                    height: 24px;
                    line-height: 24px;
                    background-color: #F5F8FB;
                    color: #333;
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
