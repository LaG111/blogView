/* eslint-disable */
import axios from 'axios'
import Vue from 'vue'

function getCookie(cName) {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(`${cName}=`);
    if (cStart !== -1) {
      cStart = cStart + cName.length + 1;
      let cEnd = document.cookie.indexOf(';', cStart);
      if (cEnd === -1) {
        cEnd = document.cookie.length;
      }
      return unescape(document.cookie.substring(cStart, cEnd));
    }
  }
  return '';
}

// 这里获取token逻辑

// TODO:提交前注释此行代码，调试时打开
axios.interceptors.request.use(config => {
  let token =  localStorage.getItem('token')
  console.log(`携带的token是${token}`)
  if(token) {
    config.headers['authorization'] = token
  } else {
    config.headers['authorization'] = ''
  }

  return config;
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
// axios.interceptors.response.use(
//   (response) => {
//     // 兼容vue-resource响应，将body值设置为data值
//     response.body = response.data;
//     // 统一返回码处理
//     const { code } = response.data;
//     let { message } = response.data;

//     if (!message) {
//       if (response.data.msg) {
//         message = response.data.msg;
//       }
//     }
//     // 200和1000表述数据正常
//     if (code === 200 || code === 1000) { 
//       return response.data;
//     } else {
//       let isShowNormalError = true;
//       // 用于关闭默认错误提示
//       const hideNormalError = () => { isShowNormalError = false; };
//       // 等待业务代码判断是否关闭默认错误提示
//       const timer = setTimeout(() => {
//         if (isShowNormalError) {
//           Vue.prototype.$msg.error(message || '后台接口错误');
//         }
//         clearTimeout(timer)
//       });
//       return Promise.reject({ ...response, hideNormalError });
//     }
//   }, (error) => {
//     let { response } = error;
//     // 不再由后端决定跳转，改为前端进行跳转
//     // if (response.status === 401) {
//     //     // // 401 需要重新登陆
//     //     // if (response.body.data.loginUrl) {
//     //       window.location.href = window.location.origin+'/#/login'
//     //     // }
//     //     // Vue.$router.push('/login')
//     // }
//     const isCancel = axios.isCancel(error);
//     let isShowNormalError = true;
//     // 可以选择是否采用后端报错信息还是自定义
//     const hideNormalError = () => { isShowNormalError = false; };
//     // 对于被取消的请求，不进行弹窗提示
//     if (!isCancel) {
//       setTimeout(() => {
//         if (isShowNormalError) {
//           const message = (response && response.data && response.data.message && response.data.msg) || '后台接口错误'
//           Vue.prototype.$msg.error(message)
//         }
//       });
//     } else { // 被取消的请求采取如下方式取消promise。让业务代码中不执行.then和.catch。这里可能会导致内存不能释放，不过目前没有更好的方式。
//       return new Promise(() => {});
//     }
//     if (!response) response = { data: {} };
//     return Promise.reject({ ...response, hideNormalError });
//   }
// );



export default axios