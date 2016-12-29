// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

//  引入vuex.Store配置
import storeConfig from './global/store'
//  路由配置
import routes from './global/routes'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)
//  创建store
const store = new Vuex.Store(storeConfig)
//  创建路由实例
const router = new VueRouter({
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
