import Vue from 'vue'
import Router from 'vue-router'
import HellowWzw from '@/components/HelloWzw'
import index from '@/views/home/index'
import test from '@/views/test/test'
import careerPlan from '@/views/careerPlan/careerPlan'
import messageBoard from '@/views/messageBoard/messageBoard'
import myblogs from '@/views/myblogs/myblogs'
import mylife from '@/views/mylife/mylife'
import cover from '@/views/home/cover'
import dayily from '@/views/mylife/others/dayily'
import growth from '@/views/mylife/others/growth'
import unilife from '@/views/mylife/others/unilife'
import myInfo from '@/views/myinfo/myInfo'
import login from '@/views/login/login'


Vue.use(Router)

export default new Router({
  //mode: 'history',//跳转时不带#号
  routes: [
    {
      path: '/',
      name: 'cover',
      component: cover
    },
    {
      path: '/hello',
      name: 'HelloWzw',
      component: HellowWzw
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/careerPlan',
      name: 'careerPlan',
      component: careerPlan
    },
    {
      path: '/mylife',
      name: 'mylife',
      component: mylife
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: myInfo
    },
    {
      path: '/myblogs',
      name: 'myblogs',
      component: myblogs
    },
    {
      path: '/messageBoard',
      name: 'messageBoard',
      component: messageBoard
    },
    {
      path: '/dayily',
      name: 'dayily',
      component: dayily
    },
    {
      path: '/unilife',
      name: 'unilife',
      component: unilife
    },
    {
      path: '/growth',
      name: 'growth',
      component: growth
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
