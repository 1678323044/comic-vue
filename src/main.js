// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 按需引入mint-ui
import {Tabbar,TabItem,Popup} from 'mint-ui'
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Popup.name, Popup)

// 引入swiper
import 'swiper/dist/css/swiper.min.css'

// 引入vuex
import store from './store/index'

// 引入过滤器
import './filters'

//引入qs
import qs from 'qs'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  qs
})
