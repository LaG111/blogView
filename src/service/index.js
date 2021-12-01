import * as user from './user'
import * as article from './article'
import * as setting from './setting'
import * as file from './file'
// import * as home from './home'


import axios from 'axios'
// let baseUrl = '/blog'
// if (process.env.NODE_ENV === 'development') {
//   baseUrl = '/blog'
// } else if (process.env.NODE_ENV === 'production') {
//   baseUrl = 'https://qcjqle.app.cloudendpoint.cn'
// } else {
//   baseUrl = 'https://qcjqle.app.cloudendpoint.cn'
// }
// axios.defaults.baseURL = baseUrl

export default {
  user,
  article,
  setting,
  file
//   home
  // 这里记得补上
}
