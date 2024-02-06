import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '@/views/Films'
import Nowplaying from '@/views/films/Nowplaying'
import Comingsoon from '@/views/films/Comingsoon'
import Cinemas from '@/views/Cinemas'
/* import Center from '@/views/Center'// 如果是懒加载则需要删除此行 */
import Search from '@/views/Search'
import Order from '@/views/Order'
import Login from '@/views/Login'
import Detail from '@/views/Detail'
Vue.use(VueRouter)// 注册插件,全局：rounter-view router-link
// 配置表
const routes = [
  {
    path: '/films',
    component: Films,
    // 嵌套路由
    children: [
      {
        path: '/films/nowplaying',
        component: Nowplaying
      },
      {
        path: '/films/comingsoon',
        component: Comingsoon
      },
      {
        path: '/films',
        redirect: '/films/nowplaying'
      }
    ]
  },
  {
    name: 'wuhu', // 给路由命名
    path: '/detail/:id', // 动态二级路由
    component: Detail
  },
  {
    path: '/cinemas',
    component: Cinemas
  },
  {
    path: '/cinemas/search',
    component: Search
  },
  {
    path: '/center',
    // component: Center,
    component: () => import('@/views/Center'), // 懒加载
    meta: {
      // 需要授权就添加meta
      isWuhuRequired: true
    }/*,
    // 单独设置路由拦截
     beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    } */
  },
  {
    path: '/order',
    component: Order,
    meta: {
      // 需要授权就添加meta
      isWuhuRequired: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    // 重定向
    path: '*',
    redirect: '/films/nowplaying'
  }
]

const router = new VueRouter({
  mode: 'history', // 消除＃？？
  routes
})
// 全局拦截
router.beforeEach((to, from, next) => {
  console.log(to)

  if (to.meta.isWuhuRequired) {
    // 判断本地储存中是否token
    /* 当登录过以后Application(应用程序)里就会包含token密钥
    ，需要删除后才可以重进入login页面
    */
    if (localStorage.getItem('token')) {
      next()
    } else {
      // next('/login')
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})
export default router
