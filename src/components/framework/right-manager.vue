<template>
    <div class="record-box">
    	<information-list></information-list>
        <speedy-reply v-if="speedyReply" @closeSpeedyReply="closeSpeedyReply"></speedy-reply>
        <chat-record v-if="msgRecordShow" @closeChatRecord="closeChatRecord"></chat-record>
    </div>
</template>

<script>
    import SpeedyReply from '../speedy-reply/speedy-reply'
	import informationList from '../Information-list/information-list'
    import chatRecord from '../chat-record/chat-record'
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        data () {
            return {
                show: {
                    speedyReply: false,
                    chatRecord: false
                }
            }
        },
        created() {
            //this.show.chatRecord = this.msgRecordShow
        },
        methods: {
            closeSpeedyReply() {
                this.setSpeedyReply(false)
            },
            closeChatRecord() {
                this.setMsgRecordShow(false)
            },
            ...mapMutations({
                setMsgRecordShow: 'SETMSGRECORDSHOW',
                setSpeedyReply: 'SETSPEEDYREPLY'
            })
        },
        computed: {
            ...mapGetters(['msgRecordShow', 'speedyReply'])
        },
        components: {
            SpeedyReply,
            informationList,
            chatRecord
        }
    }
</script>

<style lang="scss">
    .record-box {
        position: relative;
        float: right;
        height: calc(100% - 60px);
        width: 310px;
        border-left: 1px solid #D8D8D8;
        .reply-box {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            background: #fdfdfd;
        }
        .title-list {
            height: 40px;
            width: 100%;
            border-bottom: 1px solid #D8D8D8;
            background: #EFFCF9;
            .title {
                background: #FDFDFD;
                height: 100%;
                width: 50%;
                text-align: center;
                line-height: 40px;
                position: relative;
                cursor: default;
                .close {
                    position: absolute;
                    top: 6px;
                    right: 6px;
                    line-height: 14px;
                    font-size: 14px;
                    cursor: default;
                }
            }
        }
    }
</style>