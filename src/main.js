import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import Service from './service'


Vue.config.productionTip = false
// axios引入
import axios from 'axios'
import VueAxios from 'vue-axios'

// api层(不知道为何出错)
// import ApiPlugin from './plugins/api/src/api'

// md5加密
import md5 from 'js-md5'

import VueHtml5Editor from 'vue-html5-editor'

// 引入font-awesome
import 'font-awesome/css/font-awesome.css'

// 引入moment库
import moment from 'moment'

import 'vuetify/dist/vuetify.min.css'

import Msg from './util/msgStore'
Vue.prototype.$Msg = Msg

// 全局引入富文本编辑器，并配置
Vue.use(VueHtml5Editor, {
  name: 'vue-html5-editor',
  showModuleName: true,
  icons: {
    text: 'fa fa-pencil',
    color: 'fa fa-paint-brush',
    font: 'fa fa-font',
    align: 'fa fa-align-justify',
    list: 'fa fa-list',
    link: 'fa fa-chain',
    unlink: 'fa fa-chain-broken',
    tabulation: 'fa fa-table',
    image: 'fa fa-file-image-o',
    hr: 'fa fa-minus',
    eraser: 'fa fa-eraser',
    undo: 'fa-undo fa',
    // "full-screen": "fa fa-arrows-alt",
    info: 'fa fa-info'
  },
  image: {
    sizeLimit: 512 * 1024,
    upload: {
      url: null,
      headers: {},
      params: {},
      fieldName: {}
    },

    compress: {
      width: 1000,
      height: 1000,
      quality: 80
    },

    uploadHandler (responseText) {
      var json = JSON.parse(responseText)
      if (json.status === 200) {
        return json.image
      } else {
        this.$dialog({ message: json.msg })
      }
    }
  },
  language: 'zh-cn',
  i18n: {
    "zh-cn": {
      "align": "对齐方式",
      "image": "图片",
      "list": "列表",
      "link": "链接",
      "unlink": "去除链接",
      "table": "表格",
      "font": "文字",
      "full screen": "全屏",
      "text": "排版",
      "eraser": "格式清除",
      "info": "关于",
      "color": "颜色",
      "please enter a url": "请输入地址",
      "create link": "创建链接",
      "bold": "加粗",
      "italic": "倾斜",
      "underline": "下划线",
      "strike through": "删除线",
      "subscript": "上标",
      "superscript": "下标",
      "heading": "标题",
      "font name": "字体",
      "font size": "文字大小",
      "left justify": "左对齐",
      "center justify": "居中",
      "right justify": "右对齐",
      "ordered list": "有序列表",
      "unordered list": "无序列表",
      "fore color": "前景色",
      "background color": "背景色",
      "row count": "行数",
      "column count": "列数",
      "save": "确定",
      "upload": "上传",
      "progress": "进度",
      "unknown": "未知",
      "please wait": "请稍等",
      "error": "错误",
      "abort": "中断",
      "reset": "重置"
    }
  },
  hiddenModules: [],
  visibleModules: [
    "text",
    "color",
    "font",
    "align",
    "list",
    "link",
    "unlink",
    "tabulation",
    "image",
    "hr",
    "eraser",
    "undo",
    "full-screen",
    "info",
  ],
  modules: {}
})

Vue.prototype.$moment = moment
// Vue.use(ApiPlugin, { $default: axios });
Vue.prototype.$md5 = md5
Vue.prototype.$service =Service
Vue.use(VueAxios, axios)

Vue.use(Vuetify)

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')
