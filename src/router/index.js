import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const bookshelf = () => import('../views/bookshelf/bookshelf')
const classify = () => import('../views/classify/classify')
const chapter = () => import('../views/chapter/chapter')
const chapterList = () => import('../views/chapterList/chapterList')

import home from '../views/home/home'
import mine from '../views/mine/mine'
import ranking from '../views/ranking/ranking'
import memberCenter from "../views/memberCenter/memberCenter"
import endingWorks from "../views/endingWorks/endingWorks"
import memberArea from "../views/memberArea/memberArea"
import recharge from '../views/recharge/recharge'
import search from '../views/search/search'
import demo from '../views/demo/demo'

export default new Router({
  routes: [
    {
      path: '/demo',
      component: demo
    },
    {
      path: '/home',
      component: home,
      meta: {
        showFooter: true,
        keepAlive: true
      }
    },
    {
      path: '/bookshelf',
      component: bookshelf,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/classify',
      component: classify,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/ranking',
      component: ranking,
      meta: {
        showFooter: true,
      }
    },
    {
      path: '/mine',
      component: mine,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/memberCenter',
      component: memberCenter
    },
    {
      path: '/chapterList',
      component: chapterList
    },
    {
      path: '/chapter',
      component: chapter
    },
    {
      path: '/endingWorks',
      component: endingWorks
    },
    {
      path: '/memberArea',
      component: memberArea
    },
    {
      path: '/recharge',
      component: recharge
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/',
      redirect: '/home',
    }
  ]
})
