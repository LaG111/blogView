import Vue from 'vue'
import VueRouter from 'vue-router'
const Home =  ()=>import('../pages/Home.vue') 
const Writer = ()=>import('../pages/Writer.vue')
const Secret = ()=>import('../pages/Secret.vue') 
const Article = ()=>import('../pages/Article.vue') 
const Login = ()=>import('../pages/Login.vue') 
const Register = ()=>import('../pages/Register.vue') 
const MyArticle = ()=>import('../pages/MyArticle.vue') 
const Account = ()=>import('../pages/Account.vue') 
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
    meta:{
      title: '首页'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title: '首页'
    }
  },
  {
    path: '/writer',
    name: 'Writer',
    component: Writer,
    meta:{
      title: '写'
    }
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
    meta:{
      title: '读'
    }
  },
  {
    path: '/myArticle',
    name: 'MyArticle',
    component: MyArticle,
    meta:{
      title: '我的文章'
    }
  },
  {
    path: '/secret',
    name: 'secret',
    component:Secret
  },
  {
    path: '/account',
    name: 'Account',
    component:Account,
    meta:{
      title: '账号'
    }
  },
  {
    path:'/login',
    name:'login',
    component:Login,
    meta:{
      title: '登录'
    }
  },
  {
    path:'/register',
    name:'Register',
    component:Register,
    meta:{
      title: '注册'
    }
  }

]

const router = new VueRouter({
  routes
})

export default router
