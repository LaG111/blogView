import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Writer from '../views/Writer.vue'
import Secret from '../views/Secret.vue'
import Article from '../views/Article.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import MyArticle from '../views/MyArticle.vue'
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
    path: '/',
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
  {
    path: '/article',
    name: 'Article',
    component: Article,
    // 包含换页搜索功能
  },
  {
    path: '/myArticle',
    name: 'MyArticle',
    component: MyArticle,
    // 包含换页搜索功能
  },
  // {
  //   path: '/secret',
  //   name: 'secret',
  //   component:Secret
  // },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/register',
    name:'Register',
    component:Register
  }

]

const router = new VueRouter({
  routes
})

export default router
