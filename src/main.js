import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import './common/scss/index.css'

// if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
const Bus = new Vue()
/* eslint-disable no-new */
// new Vue({
//     components: { App },
//     router,
//     store,
//     template: '<App/>'
// }).$mount('#app')

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

//Vue.directive('drag',//自定义指令                                      JS
//      {bind:function (el, binding) {
//              let oDiv = el;   //当前元素
//              let self = this;  //上下文
//              oDiv.onmousedown = function (e) {
//               //鼠标按下，计算当前元素距离可视区的距离
//                  let disX = e.clientX - oDiv.offsetLeft;
//                  let disY = e.clientY - oDiv.offsetTop;
//
//                  document.onmousemove = function (e) {
//                    //通过事件委托，计算移动的距离 
//                      let l = e.clientX - disX;
//                      let t = e.clientY - disY;
//                    //移动当前元素  
//                      oDiv.style.left = l + 'px';
//                      oDiv.style.top = t + 'px';
//                       //将此时的位置传出去
//                      binding.value({x:e.pageX,y:e.pageY})
//                  };
//                  document.onmouseup = function (e) {
//                  
//                      document.onmousemove = null;
//                      document.onmouseup = null;
//                   };
//              };
//          }
//      }
//  );