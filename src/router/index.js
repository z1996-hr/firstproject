import Vue from 'vue'
import Router from 'vue-router'


// 定义变量，用于懒加载
const weather = () => import ('../components/weather.vue')
const mp3 = () => import ('../components/mp3.vue')
// const mp3 = () => import ('../components/mp3.vue')
Vue.use(Router)


 const routes= [
    {
      path: '/weather',
      component: weather
    },
    {
      path: '/mp3',
      component: mp3
    }
  ]


const router = new Router({
  // 配置路由和组件之间的应用关系
 routes,
 mode:'history'
})


//3 将router对象传入到vue实例
export default router 