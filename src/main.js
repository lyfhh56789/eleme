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
//  resource配置项
//  模拟表单提交
Vue.http.options.emulateJSON = true
//  增加默认请求前缀
Vue.http.options.root = 'http://www.kittyjs.com/static/api'
//  中断器
Vue.http.interceptors.push((request, next) => {
  // continue to next interceptor
  next((response) => {
    // 预解析数据
    response.data = JSON.parse(response.data)
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

//  全局过滤器
const baseUrl = 'https://fuss10.elemecdn.com'
Vue.filter('transformImgUrl', (path) => {
  //  转换首页食物分类的图片路径
  return baseUrl + path
})
