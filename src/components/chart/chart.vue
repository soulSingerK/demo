<template>
  <div class="wrapper" @click="hiddeEmotion">
    <p class="g-header">
      {{chartData.remack}}
      <span class="g-nick">[{{chartData.nickname}}]</span>
    </p>
    <div class="g-content" ref="content">
      <ul class="chart-items">
        <li class="chart-item" v-for="(item, index) in chartData.charts" :key="index">
          <p class="time" v-if="item.user===2">{{item.time}}</p>
          <div class="chart-wrapper" v-else-if="item.user === 0">
            <img :src="chartData.customImg" alt="" class="photo">
            <span v-if='item.type==="img"' class="img-message">
              <img :src="item.text" alt="">
            </span>
            <span class="text" v-emotion="item.text" v-else></span>
          </div>
          <div class="chart-user-wrapper" v-else>
            <span v-if='item.type==="img"' class="img-message">
              <img :src="item.text" alt="">
            </span>
            <span class="text" v-else>{{item.text}}</span>
            <img :src="chartData.masterImg" alt="" class="photo">
          </div>
        </li>
      </ul>
    </div>
    <div class="g-send">
      <div class="send-header">
        <div class="icon-left">
          <a href="javascript: void 0" class="expression icon-btn" @click="emotionShow=!emotionShow"><span class="hover-text">表情</span><i class="m-icon" ref="expression">&#xe620;</i></a>
          <a href="javascript: void 0" class="cut icon-btn" @click="capture"><span class="hover-text">截图</span><i class="m-icon">&#xe621;</i></a>
          <a href="javascript: void 0" class="send-img icon-btn" @click="selFile"><span class="hover-text">图片</span><i class="m-icon">&#xe622;</i>
            <form action="" enctype="multipart/form-data">
            </form>
            <input type="file" class="sel-file" accept="image/*" ref="file" @change="readySend" multiple="true">
          </a>
        </div>
        <div class="icon-right">
          <a href="javascript: void 0" class="message icon-btn" @click="recordMsg"><span class="hover-text long-txt">聊天记录</span><i class="m-icon">&#xe623;</i></a>
          <a href="javascript: void 0" class="quick icon-btn" @click="speedyReply"><span class="hover-text long-txt">快捷回复</span><i class="m-icon">&#xe624;</i></a>
        </div>
        <emotion class="emotions" :show="emotionShow" ref="emotion" @emotion="selectEmotion"></emotion>
      </div>
      <!-- <div class="g-text" ref="smessage" @click.stop="setClickPos" contenteditable="true" @keyup="setKeyUpPos"></div> -->
      <div class="g-text" ref="smessage" contenteditable="true" @keydown="showQuickReply"></div>
      <button class="send-btn">发送</button>
    </div>
    <convenient-reply v-show="quickReply" @selectReply="acceptReply"></convenient-reply>
    
    <div class="dialog" v-show="dialogIsShow">
      <p class="title">发送图片<i class="m-icon close" @click="close">&#xe62e;</i></p>
      <div class="img-wrapper">
        <img :src="sendImg.path" alt="" v-if="sendImg.path" class="send-img">
        <p class="img-name">{{sendImg.name}}</p>
        <p class="img-size">{{sendImg.size | filterSize}}</p>
      </div>
      <div class="btn-send">
        <button @click="send">发送</button>
      </div>  
    </div>
  </div>
</template>

<script>
  import {chartData} from './config'
  import {registerEmotion} from './message'
  import Emotion from './../emotion/emotion'
  //import electron from 'electron'
  import convenientReply from '@/common/component/convenient-reply'

  import {mapMutations} from 'vuex'
  export default {
    name: 'chart',
    data () {
      return {
        chartData: null,
        emotionShow: false,
        selectionStart: 0,
        msg: '',
        dialogIsShow: false,
        sendImgSrc: '',
        sendImg: {},
        quickReply: false
      }
    },
    created() {
      this.chartData = chartData.data
      this.textPos = 0
      this.nextPos = 0
      registerEmotion()
      this.initText()    
    },
    mounted() {
      setTimeout(() => {
        this.$refs.content.scrollTop = this.$refs.content.scrollHeight
        // let range = document.createRange()
        // range.selectNodeContents(this.$refs.smessage)
        // this.lastRange = range
      }, 20)
    },
    
    methods: {
      recordMsg() {
        this.setMsgRecordShow(true)
        this.setSpeedyReply(false)
      },
      speedyReply() {
        this.setSpeedyReply(true)
        this.setMsgRecordShow(false)
      },
      acceptReply(reply) {
        this.quickReply = false
        let str = this.$refs.smessage.innerText.substr(0, this.$refs.smessage.innerText.length - 1)
        this.$refs.smessage.innerText = str + reply
      },
      showQuickReply(e){
        if (e.keyCode === 191 && e.key === '/') {
          this.quickReply = true
        }
      },
      initText() {
        document.onselectionchange = this.getPos
      },
      getPos(e) {
        if (e.srcElement.activeElement !== this.$refs.smessage) {
          return
        }
        this.textPos = document.getSelection().focusOffset
        // this.lastRange = document.getSelection().getRangeAt(0)
        // console.log(document.getSelection().focusOffset)
        // console.log(this.$refs.smessage.childNodes, document.getSelection().getRangeAt(0))
        // if (document.getSelection().anchorNode.nodeName !== ) 
      },
      selFile() {
        this.$refs.file.click()
      },
      readySend(e) {
        if(e.target.files && e.target.files[0]) {
          // this.$emit('show')
          // this.dialogIsShow = true
          // this.sendImg = e.target.files[0]
          // this.sendImgSrc = e.target.files[0].path
          for (let i = 0 , len = e.target.files.length; i < len ; i++) {
            console.log(e.target.files[i])
            this.chartData.charts.push({
              user: 1,
              type: 'img',
              text: e.target.files[i].path
            })   
          }
          setTimeout(() => {
            this.$refs.content.scrollTop = this.$refs.content.scrollHeight
          }, 20)
        }
      },
      send() {
        this.chartData.charts.push({
          user: 1,
          type: 'img',
          text: `${this.sendImg.path}`
        })
        // 滚动条滑到底部
        setTimeout(() => {
          this.$refs.content.scrollTop = this.$refs.content.scrollHeight
        }, 20)
        this.close()
      },
      close() {
        this.dialogIsShow = false
        this.$emit('hidden')
        this.$refs.file.value = ''
      },
      capture () {
        // electron.ipcRenderer.send('short-from-render')
      },   
      hiddeEmotion(e) {  // 显示隐藏表情库
        if(e.target != this.$refs.emotion && e.target != this.$refs.expression) {
          this.emotionShow = false
        }
      },
      recordPos() {  // 聚焦并且记录光标的位置
        this.$refs.smessage.focus()
        
      },
      // setClickPos() {
      //   if (document.activeElement !== this.$refs.smessage) {
      //     return
      //   }
      //   this.textPos = document.activeElement.selectionStart
      // },
      // setKeyUpPos (e) {
      //   if(e.keyCode !== 37 && e.keyCode !== 39) {
      //     return
      //   }
      //   this.textPos = document.activeElement.selectionStart
      //   console.log(this.textPos)
      // },
      selectEmotion1(item, index) {
        this.emotionShow = false
        let selection = document.getSelection()
        if (this.lastRange) {
          selection.removeAllRanges()
          selection.addRange(this.lastRange)
        }
        // 创建图片对象
        let image = document.createElement('img')
        image.src = `https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif`
        console.log(selection.anchorNode.nodeName)
        let flagIndex = -1
        if (selection.anchorNode.nodeName !== '#text') {
          if (this.$refs.smessage.childNodes.length > 0) {
            this.$refs.smessage.childNodes.forEach((item, index) => {
              if (index + 1 === selection.anchorOffset) {
                  if (index + 1 === this.$refs.smessage.childNodes.length) {
                      this.$refs.smessage.appendChild(image)
                  } else {
                    this.$refs.smessage.insertBefore(image, this.$refs.smessage.childNodes[index + 1])
                  }
                  flagIndex = index
              }
            })
          } else {
            this.$refs.smessage.appendChild(image)
            flagIndex = this.$refs.smessage.length
          }
          let range = document.createRange()
          range.selectNodeContents(this.$refs.smessage)
          range.collapse(true)
          range.setStart(this.$refs.smessage, 1)
          selection.removeAllRanges()
          selection.addRange(range)
          console.log(selection)
          //this.recordPos()
          document.getSelection().modify("move", "forward", "line")
        } else {
          let range = selection.getRangeAt(0)
          let textNode = range.startContainer
          let str = textNode.nodeValue
          let turnArr = str.split('')        
          let splitArr = turnArr.splice(this.selection.anchorOffset)

        }
      },
      selectEmotion(item, index) {  // 插入表情到发送的文本中
        this.emotionShow = false
        let str = this.$refs.smessage.innerHTML
        this.textPos = this.textPos !== undefined ? this.textPos : turnArr.length
        // str.replace(/<img[\S\s]*\/?>/gi, function(m) {
          
        // })
        let turnArr = str.split('')        
        let splitArr = turnArr.splice(this.textPos)
        //this.nextPos = this.textPos + item.length + 2
        //this.msg = `${turnArr.join('')}[${item}]${splitArr.join('')}`
        //this.$refs.smessage.setSelectionRange(this.nextPos, this.nextPos)
        this.$refs.smessage.innerText = `${turnArr.join('')}[${item}]${splitArr.join('')}`
        
        //this.$refs.smessage.innerHTML = turnArr.join('') + `<img width=20 height=20 src='https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif' style="vertical-align: middle;margin: 0 2px;"/>` + splitArr.join('')
        this.recordPos()
        document.getSelection().modify("move", "forward", "line")
        //this.$refs.smessage.setSelectionRange(this.nextPos, this.nextPos)
      },
      ...mapMutations({
        setMsgRecordShow: 'SETMSGRECORDSHOW',
        setSpeedyReply: 'SETSPEEDYREPLY'
      })
    },
    filters: {
      filterSize(val) {
        if (val < 1024) {
          return `${val} B`
        }
        let temp = val / 1024
        if (temp >= 1024) {
          temp = (temp / 1024).toFixed(2)
          return `${temp} MB`
        } else {
          return `${temp.toFixed(2)} KB`
        }
      }
    },
    watch: {
      msg() {
        this.textPos =  this.msg.length
      }
    },
    components: {
      Emotion,
      convenientReply
    }
  }
</script>

<style lang="sass" scoped>
  .wrapper
    background-color: #FDFDFD;
    height: 100%;
    position: relative;
    *
      box-sizing: border-box;
    .g-header
      border-bottom: 1px solid #e0e0e0;
      font-family: MicrosoftYaHei;
      font-size: 14px;
      color: #333333;
      letter-spacing: 0;
      line-height: 40px;
      padding-left: 20px;
      .g-nick 
        color: #999;
        font-size: 12px;
  .g-content
    height: calc(100% - 180px);
    overflow: auto;
  .chart-items
    padding: 0 20px;
    width: 100%;
  .chart-item
    padding-bottom: 20px;
    .time
      color: #999;
      text-align: center;
      line-height: 25px;
      padding-bottom: 10px;
      font-size: 12px;
    .img-message
      padding: 10px;
      img
        max-width: 100px;
        max-height: 100px;
    .chart-wrapper
      display: flex
      justify-content: flex-start;
      .photo
        width: 25px;
        height: 25px;
        margin-right: 10px;
      .text
        display: inline-block;
        line-height: 25px;
        padding: 0 5px;
        background: #DFF8F2;
        border-radius: 3px;
      .img-message
        background-color: #DFF8F2;
    .chart-user-wrapper
      display: flex
      justify-content: flex-end;
      .photo
        width: 25px;
        height: 25px;
        margin-left: 10px;
      .text
        display: inline-block;
        line-height: 25px;
        padding: 0 5px;
        background: #8EEBD3;
        border-radius: 3px;
      .img-message
        background-color: #8EEBD3;
  .g-send
    height: 140px;
    width: 100%;
    padding: 0 10px;
    border-top: 1px solid #e0e0e0;
    position: relative;
    .emotions
      width: 242px;
      height: 200px;
      background-color: #fff;
      position: absolute;
      left: 0;
      top: -201px;
    .send-header
      height: 30px;
      width: 100%;
      .icon-btn
        font-size: 16px;
        line-height: 30px;
        cursor: pointer;
        position: relative;
        &:hover
          .hover-text
            display: block;
        .hover-text
          display: none;
          position: absolute;
          background: #333;
          color: #fff;
          min-width: 40px;
          height: 30px;
          line-height: 20px;
          font-size: 12px;
          padding: 5px 8px;
          border-radius: 3px;
          top: 100%;
          left: -50%;
          z-index: 55;
          &.long-txt
            width: 64px;
        &.expression
          color: #00BF8F;
      .icon-left
        float: left;
        height: 100%;
        .send-img
          position: relative;
        .sel-file
          display: none;
        .icon-btn
          margin-right: 10px;
      .icon-right
        float: right;
        .icon-btn
          margin-left: 10px;
    .g-text
      outline: none;
      line-height: 1.5;
      margin-top: 10px;
      word-break: break-all;
      height: 50px;
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      border: none;
      -webkit-user-modify: read-write-plaintext-only;
    .send-btn
      width: 80px;
      background: #00BF8F;
      border-radius: 3px;
      line-height: 24px;
      border: none;
      color: #fff;
      position: absolute;
      bottom: 10px;
      right: 10px;
  .dialog
    position: absolute;
    width: 80%;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    border: 1px solid #e2e2e2;
    background-color: #fff;
    border-radius: 5px;
    z-index: 100;
    .title
      line-height: 50px;
      text-align: center;
      position: relative;
      .close 
        position: absolute;
        right: 6px;
        top: 6px;
        line-height: 1;
        cursor: pointer;
    .img-wrapper
      padding: 20px 0;
      background-color: #F5F8FB;
    .send-img
      max-width: 20vw;
      max-height: 20vh;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: 20px;
    .img-name
      text-align: center;
    .img-size
      text-align: center;
      margin-top: 6px;
      color: #999;
    .btn-send
      height: 50px;
      position: relative;
      button
        background: #00BF8F;
        border-radius: 5px;
        width: 136px;
        height: 34px;
        border: none;
        color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
  ::-webkit-scrollbar-track-piece
    border-radius: 0;
  ::-webkit-scrollbar
    width: 8px;
    height: 8px;
  ::-webkit-scrollbar-thumb
    height: 20px;
    background-color: #e2e2e2;
    -webkit-border-radius: 4px;
    outline-offset: -2px;
    border: 2px solid #e0e0e0;
  ::-webkit-scrollbar-thumb:hover
    height: 50px;
    background-color: #999;
    border-radius: 4px;
</style>

