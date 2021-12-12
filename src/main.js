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


// 引入font-awesome
import 'font-awesome/css/font-awesome.css'

// 引入moment库
import moment from 'moment'

import 'vuetify/dist/vuetify.min.css'

import Message from './utils/msgStore'

import './axiosInit'
Vue.prototype.$msg = Message

// 全局引入富文本编辑器，并配置

Vue.prototype.$moment = moment
// Vue.use(ApiPlugin, { $default: axios });
Vue.prototype.$md5 = md5
Vue.prototype.$service =Service
Vue.use(VueAxios, axios)

Vue.use(Vuetify)

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#00695C',
      },
    },
  },
})
export default vuetify


new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')
