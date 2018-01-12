<template>
    <div class="topbox">
        <div class="logo">logo</div>
        <div class="loginbox">
            <span>已登陆（6）</span>
            <span class="line"></span>
            <span>离线未登录(3)</span>
        </div>
        <div class="loginwx" @click="signInWx()">
            <i class="m-icon">&#xe629;</i>
            <span>登陆微信号</span>
        </div>
        <div class="righticon rightclose" @click.stop="close()"><i class="m-icon">&#xe62e;</i></div>
        <div class="righticon" @click.stop="boxmax($event)"><i id="maxWindow" class="m-icon">&#xe62d;</i></div>
        <div class="righticon" @click.stop="boxmin()"><i class="m-icon">&#xe62c;</i></div>
    </div>
</template>

<script>
  //import { ipcRenderer } from 'electron'
  import Bus from '@/common/bus.js'

  export default {
    data() {
        return {
            isbigger: false
        }
    },
    mounted() {
        // 最大化还原按钮变化
        let blowupBtn = document.getElementById('maxWindow')
        window.onresize = () => {
            if (window.outerWidth == window.screen.availWidth && window.outerHeight == window.screen.availHeight) {
                blowupBtn.innerHTML = '&#xe631;'
                blowupBtn.style.fontSize = '12px'
                this.isbigger = true
            } else {
                blowupBtn.innerHTML = '&#xe62d;'
                blowupBtn.style.fontSize = '14px'
                this.isbigger = false
            }
        }
    },
    methods: {
        close () {
            //ipcRenderer.send('window-all-closed')
        },
        boxmax (event) {
            if (this.isbigger === false) {
               // ipcRenderer.send('show-window')
            } else {
               // ipcRenderer.send('orignal-window')
            }
        },
        boxmin () {
           // ipcRenderer.send('hide-window')
        },
        signInWx() {
            Bus.$emit('showSignInWx', true)
        }
    }
  }
</script>

<style lang="scss" scoped>
    .topbox {
        -webkit-app-region: drag;
        height: 60px;
        line-height: 60px;
        width: 100%;
        background-color: #00BF8F;
        .logo {
            float: left;
            height: 100%;
            width: 80px;
        }
        .loginbox {
            float: left;
            text-align: center;
            width: 214px;
            height: 100%;
            color: #fff;
            font-size: 12px;
            .line {
                display: inline-block;
                height: 12px;
                width: 1px;
                margin: 0 5px;
                background: #fff;
            }
        }
        .loginwx {
            -webkit-app-region: no-drag;
            float: left;
            height: 100%;
            margin-left: 10px;
            font-size: 12px;
            color: #fff;
            cursor: pointer;
            > i {
                font-size: 20px;
            }
            > span {
                vertical-align: top;
            }
        }
        .righticon {
            -webkit-app-region: no-drag;
            float: right;
            width: 21px;
            height: 21px;
            line-height: 21px;
            color: #fff;
            font-size: 14px;
            text-align: center;
            cursor: pointer;
            &:hover {
                background-color: #0DAB83;
            }
        }
        .rightclose {
            &:hover {
                background-color: #FF5B4C;
            }
        }
    }
</style>
