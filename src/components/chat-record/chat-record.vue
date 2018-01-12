<template>
    <div class="reply-box">
        <div class="title-list">
            <div class="title">
                聊天记录
                <i class="m-icon close" @click="close()">&#xe62e;</i>
            </div>
        </div>
        <div class="record-box">
            <div v-for="(record, index) in recordList" :key="index">
                <div class="day">{{record.day}}</div>
                <div v-for="(item, idx) in record.allRecord" :key="idx" class="record" :class="{ 'my-record': item.type=='me' }">
                    <p>{{item.name}} &nbsp; {{item.time}}</p>
                    <p class="content">{{item.content}}</p>
                </div>
            </div>
        </div>
        <div class="search">
            <span class="ml17">日期</span>
             <div class="search-time" id="startTime" @click="chooseStartTime()">{{search.startTime}}</div> -
            <div class="search-time" id="endTime" @click="chooseEndTime()">{{search.endTime}}</div>
            <div class="search-input">
                <a href="###"><i class="m-icon">&#xe62f;</i></a>
                <input type="text" @keydown="searchKey($event)">
            </div> 
        </div>
    </div>
</template>

<script>

    // import { ipcRenderer } from 'electron'
    import 'static/lib/laydate/laydate'

    //定义基础参数
    let vm, start, end;
    start = {
        elem: '#startTime',
        format: 'YYYY-MM-DD',
        max: laydate.now(), //最大日期
        istime: false,
        isclear: false,
        istoday: false,
		isclear: true,
        start: laydate.now(),
        choose: function(datas) {
            vm.search.startTime = datas;
            end.min = datas; //开始日选好后，重置结束日的最小日期
            end.start = datas //将结束日的初始值设定为开始日
        },
        clear() {
			end.min = '1900-1-1'
			vm.search.startTime = ''
		}
    };
    end = {
        elem: '#endTime',
        format: 'YYYY-MM-DD',
        isclear: false,
        max: laydate.now(), //最大日期
        istime: false,
        istoday: false,
		isclear: true,
        start: laydate.now(+7),
        choose: function(datas) {
            vm.search.endTime = datas;
            start.max = datas; //结束日选好后，重置开始日的最大日期
        },
        clear() {
			start.max = laydate.now()
			vm.search.endTime = ''
		}
    };

    export default {
        data () {
            return {
                recordList: [
                    {
                        day: '2018.01.01',
                        allRecord: [
                            {
                                name: '容嬷嬷',
                                type: 'others',
                                content: '在吗？',
                                time: '2018-01-01 10:38:38'
                            },
                            {
                                name: '乾隆',
                                type: 'me',
                                content: '在的，亲 ',
                                time: '2018-01-01 10:38:50'
                            },
                            {
                                name: '容嬷嬷',
                                type: 'others',
                                content: '你还记得大明湖畔的夏雨荷吗？',
                                time: '2018-01-01 10:40:06'
                            },
                            {
                                name: '乾隆',
                                type: 'me',
                                content: '咋了？有事吗？',
                                time: '2018-01-01 11:12:25'
                            },
                            {
                                name: '容嬷嬷',
                                type: 'others',
                                content: '皇上，奴婢就是当年大明湖畔的夏雨荷啊！皇上，奴婢就是当年大明湖畔的夏雨荷啊！皇上，奴婢就是当年大明湖畔的夏雨荷啊！',
                                time: '2018-01-01 11:15:40'
                            },
                            {
                                name: '乾隆',
                                type: 'me',
                                content: '我屮艸芔茻！！！！！',
                                time: '2018-01-01 11:20:55'
                            },
                        ]
                    },
                    {
                        day: '2018.01.02',
                        allRecord: [
                            {
                                name: '容嬷嬷',
                                type: 'others',
                                content: '在吗？',
                                time: '2018-01-01 10:38:38'
                            },
                            {
                                name: '乾隆',
                                type: 'me',
                                content: '在的，亲 ',
                                time: '2018-01-01 10:38:50'
                            },
                            {
                                name: '容嬷嬷',
                                type: 'others',
                                content: '你还记得大明湖畔的夏雨荷吗？',
                                time: '2018-01-01 10:40:06'
                            },
                            {
                                name: '乾隆',
                                type: 'me',
                                content: '咋了？有事吗？',
                                time: '2018-01-01 11:12:25'
                            },
                            {
                                name: '容嬷嬷',
                                type: 'others',
                                content: '皇上，奴婢就是当年大明湖畔的夏雨荷啊！皇上，奴婢就是当年大明湖畔的夏雨荷啊！皇上，奴婢就是当年大明湖畔的夏雨荷啊！',
                                time: '2018-01-01 11:15:40'
                            },
                            {
                                name: '乾隆',
                                type: 'me',
                                content: '我屮艸芔茻！！！！！',
                                time: '2018-01-01 11:20:55'
                            },
                        ]
                    }
                ],
                search: {
                    startTime: '',
                    endTime: '',
                    content: ''
                }
            }
        },
        created () {
            vm = this
        },
        methods: {
            close() {
                this.$emit('closeChatRecord')
            },
            searchKey(e) {
                if (e.keyCode == 13) {
                    console.log(132)
                }
            },
            chooseStartTime() {
                laydate(start)
            },
            chooseEndTime() {
                laydate(end)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .reply-box {
        .record-box {
            max-height: calc(100% - 86px);
            overflow: auto;
            .day {
                margin-left: 16px;
                margin-bottom: 19px;
                font-size: 13px;
                color: #B7B7B7;
                line-height: 13px;
            }
            .record {
                color: #00BF8F;
                font-size: 13px;
                padding: 0 16px;
                line-height: 20px;
                margin-bottom: 15px;
                .content {
                    color: #333;
                }
            }
            .my-record{
                color: #4E9FEA;
            }
        }
        .search {
            position: absolute;
            bottom: 0;
            width: 100%;
            line-height: 22px;
            color: #333;
            border-top: 1px solid #e6e6e6;
            font-size: 12px;
            padding: 11px 0;
            .search-time {
                display: inline-block;
                background: #fff;
                border: 1px solid #e6e6e6;
                height: 20px;
                width: 67px;
                padding: 0 5px;
                line-height: 20px;
                vertical-align: bottom;
            }
            .search-input {
                height: 20px;
                display: inline-block;
                border: 1px solid #e6e6e6;
                line-height: 20px;
                // margin-top: 11px;
                i {
                    font-size: 12px;
                    color: #646464;
                    // margin-left: 5px;
                }
                >input {
                    width: 66px;
                    height: 20px;
                    border: none;
                    line-height: 20px;
                    font-size: 12px;
                    &::-webkit-input-placeholder {
                        color: #999;
                    }
                }
            }
        }
        .ml17 {margin-left: 17px;}
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
    .laydate_box {
        transform: translateX(-100px);
    }
</style>