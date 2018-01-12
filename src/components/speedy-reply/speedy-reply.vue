<template>
    <div class="reply-box">
        <div class="title-list">
            <div class="title">
                快捷回复
                <i class="m-icon close" @click="close()">&#xe62e;</i>
            </div>
        </div>
        <div class="group-box">
            <div v-for="(grouping,index) in allGrouping" :key="index" class="grouping">
                <div class="grouping-name" @click="openGroup(index)">
                    <i class="m-icon" :class="{transition:grouping.hidden,transition2:!grouping.hidden}">&#xe635;</i>{{grouping.name}}
                </div>
                <div v-show="!grouping.hidden">
                    <div v-for="(reply,index) in grouping.replyList" :key="index" class="reply" :title="reply">
                        <p>
                            {{index + 1 > 9 ? index + 1 : `0${index + 1}`}}. {{reply}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="operation">
            <div class="change" @click="addReply()"><i class="m-icon">&#xe625;</i> 新建</div>
            <div class="change" @click="addImportant()"><i class="m-icon">&#xe626;</i> 导入<input type="file" style="display: none;" ref="file" @change="importFile"></div>
            <div class="change"><i class="m-icon">&#xe627;</i> 导出</div>
            <div class="refresh"><i class="m-icon">&#xe628;</i> 刷新</div>
        </div>
    </div>
</template>

<script>
    // let BrowserWindow = require('electron').remote.BrowserWindow

    // import { ipcRenderer } from 'electron'
    import Bus from '@/common/bus.js'
    
    export default {
        name: 'speedy-reply',
        data () {
            return {
                allGrouping: [
                    {
                        name: '默认分组',
                        replyList: [
                            '秦时明月汉时关',
                            '万里长征人未还',
                            '但使龙城飞将在',
                            '不教胡马度阴山',
                            '秦时明月汉时关',
                            '万里长征人未还',
                            '但使龙城飞将在',
                            '不教胡马度阴山',
                            '秦时明月汉时关',
                            '万里长征人未还',
                            '但使龙城飞将在',
                            '不教胡马度阴山不教胡马度阴山不教胡马度阴山不教胡马度阴山'
                        ],
                        hidden: true
                    },
                    {
                        name: '我的小可爱',
                        replyList: [
                            '狼烟千里乱葬岗',
                            '乱世孤魂无人访',
                            '无言苍天笔墨寒',
                            '笔刀春秋以血偿'
                        ],
                        hidden: true
                    },
                    {
                        name: '默认分组',
                        replyList: [
                            '秦时明月汉时关',
                            '万里长征人未还',
                            '但使龙城飞将在',
                            '不教胡马度阴山',
                            '秦时明月汉时关',
                            '万里长征人未还',
                            '但使龙城飞将在',
                            '不教胡马度阴山',
                            '秦时明月汉时关',
                            '万里长征人未还',
                            '但使龙城飞将在',
                            '不教胡马度阴山不教胡马度阴山不教胡马度阴山不教胡马度阴山'
                        ],
                        hidden: true
                    },
                    {
                        name: '我的小可爱',
                        replyList: [
                            '狼烟千里乱葬岗',
                            '乱世孤魂无人访',
                            '无言苍天笔墨寒',
                            '笔刀春秋以血偿'
                        ],
                        hidden: true
                    },
                    {
                        name: '默认分组',
                        replyList: [
                            '秦时明月汉时关',
                            '万里长征人未还',
                            '但使龙城飞将在',
                            '不教胡马度阴山',
                            '秦时明月汉时关',
                            '万里长征人未还',
                            '但使龙城飞将在',
                            '不教胡马度阴山',
                            '秦时明月汉时关',
                            '万里长征人未还',
                            '但使龙城飞将在',
                            '不教胡马度阴山不教胡马度阴山不教胡马度阴山不教胡马度阴山'
                        ],
                        hidden: true
                    },
                    {
                        name: '我的小可爱',
                        replyList: [
                            '狼烟千里乱葬岗',
                            '乱世孤魂无人访',
                            '无言苍天笔墨寒',
                            '笔刀春秋以血偿'
                        ],
                        hidden: true
                    }
                ]
            }
        },
        methods: {
            close() {
                this.$emit('closeSpeedyReply')
            },
            openGroup(index) {
                this.allGrouping[index].hidden = !this.allGrouping[index].hidden
            },
            addReply() {
                Bus.$emit('showAddReply', true)
            },
            addImportant() {
                this.$refs.file.click()
            },
            importFile(e) {
                console.log(e.target.files[0])
            }
        }
    }
</script>

<style lang="scss" scoped>
    .reply-box {
        .group-box {
            max-height: calc(100% - 86px);
            overflow: auto;
            .grouping {
                line-height: 30px;
                .grouping-name {
                    height: 30px;
                    background: #F5F8FB;
                    color: #333;
                    padding-left: 8px;
                    cursor: default;
                }
                .reply {
                    height: 30px;
                    color: #666;
                    padding-left: 19px;
                    background: #F5F8FB;
                    border-bottom: 1px solid #D8D8D8;
                    cursor: default;
                    &:nth-of-type(even) {
                        background: #FAFAFA;
                    }
                    p { 
                        max-width: calc(100% - 20px);
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap
                    }
                }
            }
            
        }
        .operation {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 44px;
            line-height: 44px;
            border-top: 1px solid #D8D8D8;
            div {
                display: inline-block;
                text-align: center;
                color: #459AE9;
                cursor: default;
            }
            .change {
                width: 20%
            }
            .refresh {
                width: 30%
            }
            .m-icon {
                color: #ccc;
            }
        }
        .transition {
            transform: rotate(-90deg);
            transition: all 0.5s;
            -webkit-transition: all 0.3s;
        }
        .transition2 {
            transform: rotate(0deg);
            transition: all 0.5s;
            -webkit-transition: all 0.3s;
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