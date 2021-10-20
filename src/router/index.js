import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Writer from '../views/Writer.vue'
Vue.use(VueRouter)

const routes = [
  //todoList:
  // 单独页面写博客
  // 博客缓存功能以后再做
  // 登录功能（鉴权）以后再做
  // 博客展示在首页
  // 首页有搜索功能
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // 包含换页搜索功能
  },
  {
    path: '/writer',
    name: 'Writer',
    component: Writer
    // 写文章页面
  },

]

const router = new VueRouter({
  routes
})

export default router
