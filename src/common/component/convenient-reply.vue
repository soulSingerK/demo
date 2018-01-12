<template>
    <div class="convenient-box">
        <p v-for="(reply, index) in allReply" :key="index" :title="reply" @click="seleReply(reply)"><span class="num">{{index + 1}}. </span>{{reply}}</p>
    </div>
</template>

<script>
    import Bus from '@/common/bus.js'

    export default {
        data () {
            return {
                allReply: [
                    '你好，在吗？',
                    '秦时明月汉时关',
                    '万里长征人未还',
                    '但使龙城飞将在',
                    '不教胡马度阴山',
                    '秦时明月汉时关',
                    '万里长征人未还',
                    '但使龙城飞将在但使龙城飞将在但使龙城飞将在但使龙城飞将在但使龙城飞将在但使龙城飞将在但使龙城飞将在但使龙城飞将在但使龙城飞将在但使龙城飞将在但使龙城飞将在但使龙城飞将在',
                    '不教胡马度阴山',
                    '秦时明月汉时关',
                    '万里长征人未还',
                    '但使龙城飞将在',
                    '不教胡马度阴山',
                    '秦时明月汉时关',
                    '万里长征人未还',
                    '但使龙城飞将在',
                    '不教胡马度阴山',
                ]
            }
        },
        methods: {
            seleReply(reply) {
                this.$emit('selectReply', reply)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .convenient-box {
        position: absolute;
        bottom: 142px;
        left: 2px;
        background: #fff;
        font-size: 12px;
        color: #151515;
        height: 190px;
        border: 1px solid #00BF8F;
        box-shadow: 0 2px 2px 0;
        overflow: auto;
        p {
            line-height: 24px;
            padding-left: 8px;
            width: 460px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            cursor: default;
            .num {
                color: #19e3be;
            }
            &:hover {
                background: #B9EDE0;
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