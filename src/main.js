// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import infiniteScroll from 'vue-infinite-scroll'

//  引入vuex.Store配置
import storeConfig from './global/store'
//  路由配置
import routes from './global/routes'
//  引入全局过滤器
import filter from './global/filter'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(infiniteScroll)

// 混入全局过滤器
Vue.mixin({filters: filter})

//  创建store
const store = new Vuex.Store(storeConfig)
//  创建路由实例
const router = new VueRouter({
  routes: routes
})

// 获取缓存地理位置信息
var location = window.localStorage.getItem('location')
if (location != null) {
  store.commit('setLocation', JSON.parse(location))
}

//  resource配置项
//  模拟表单提交
Vue.http.options.emulateJSON = true
//  增加默认请求前缀
Vue.http.options.root = process.env.NODE_ENV !== 'production' ? '/api' : '/api'
//  中断器
Vue.http.interceptors.push((request, next) => {
  // continue to next interceptor
  next((response) => {
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
