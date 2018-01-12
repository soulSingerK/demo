<template>
    <div style="height:100%;">
        <div class="friend-box">
            <div class="searchInput">
                <a href="###"><i class="m-icon">&#xe62f;</i></a>
                <input type="text" placeholder="请输入搜索的内容" v-model="searchName" @input="searchWay(searchName)">
            </div>
            <ul>
                <li v-for="item in showFriends">
                    <div class="remove">
                        <a href="###"><i class="m-icon">&#xe62e;</i></a>
                    </div>
                    <div class="contbox">
                        <div class="headimg">
                            <img :src="item.headimg">
                        </div>
                        <span class="fname">{{item.name}}</span>
                        <span class="fcontent">{{item.content}}</span>
                        <span class="ftime">{{item.time}}</span>
                        <span class="fnum" v-if="item.num>0">{{item.num}}</span>
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
              showFriends: [], // 展示的数据
              friends: [{headimg:'',name:'紫月微笑', content: '请问现在还有什么活动吗？我哈哈哈哈哈', time:'10:17', num:6}, {headimg:'',name:'我是珊珊来迟', content: '请问现在还有什么', time:'10:17', num:6},{headimg:'',name:'林香华0801', content: '明天还有给我消息号码？', time:'10:17', num:6},{headimg:'',name:'悟空催化', content: '请帮查看下东西！', time:'10:17', num:0},{headimg:'',name:'qinxiaoyan', content: '请问现在还有什么吗？我哈哈哈哈', time:'10:17', num:6},{headimg:'',name:'楚楚546', content: '请问现在还有什么', time:'10:17', num:0},{headimg:'',name:'紫月微笑', content: '请问现在还有什么活动吗？我哈哈哈哈哈', time:'10:17', num:6}, {headimg:'',name:'我是珊珊来迟', content: '请问现在还有什么', time:'10:17', num:0},{headimg:'',name:'林香华0801', content: '明天还有给我消息号码？', time:'10:17', num:6},{headimg:'',name:'悟空催化', content: '请帮查看下东西！', time:'10:17', num:0},{headimg:'',name:'qinxiaoyan', content: '请问现在还有什么吗？我哈哈哈哈', time:'10:17', num:6},{headimg:'',name:'楚楚546', content: '请问现在还有什么', time:'10:17', num:6},{headimg:'',name:'紫月微笑', content: '请问现在还有什么活动吗？我哈哈哈哈哈', time:'10:17', num:6}, {headimg:'',name:'我是珊珊来迟', content: '请问现在还有什么', time:'10:17', num:6},{headimg:'',name:'林香华0801', content: '明天还有给我消息号码？', time:'10:17', num:0},{headimg:'',name:'悟空催化', content: '请帮查看下东西！', time:'10:17', num:0},{headimg:'',name:'qinxiaoyan', content: '请问现在还有什么吗？我哈哈哈哈', time:'10:17', num:0},{headimg:'',name:'楚楚546', content: '请问现在还有什么', time:'10:17', num:6}] //全部数据
          }
      },
      created() {
          this.showFriends = this.friends
      },
      methods: {
          searchWay(str) {
              this.showFriends = []
              for (var i = 0; i < this.friends.length; i ++) {
                  if (this.friends[i].name.indexOf(str)>=0) {
                      this.showFriends.push(this.friends[i])
                  }
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
                height: 48px;
                cursor: default;
                &:hover {
                    // background-color: #F5F5F5;
                    .remove a {
                        display: block;
                    }
                }
                .remove {
                    float: left;
                    width: 12px;
                    height: 100%;
                    line-height: 48px;
                    a {
                        display: none;
                        font-size: 10px;
                        color: #5F887E;
                    }
                }
                .contbox {
                    position: relative;
                    float: left;
                    height: calc(100% - 1px);
                    width: calc(100% - 12px);
                    border-bottom: 1px solid #D8D8D8;
                    > * {
                        position: absolute;
                    }
                    .headimg {
                        top: 10px;
                        height: 28px;
                        width: 28px;
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
                    .fcontent {
                        top: 25px;
                        left: 33px;
                        font-size: 12px;
                        color: #999;
                        width: 166px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    .ftime {
                        top: 10px;
                        left: 133px;
                        font-size: 12px;
                        color: #999;
                    }
                    .fnum {
                        top: 4px;
                        left: 167px;
                        height: 18px;
                        line-height: 18px;
                        min-width: 18px;
                        border-radius: 9px;
                        text-align: center;
                        background-color: #F44141;
                        font-size: 12px;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>
