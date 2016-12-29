/**
 * Created by guojingfeng on 2016/12/29.
 */
var routes = [
  {//  首页
    path: '/',
    component: require('../components/index.vue')
  },
  {//  所有未定义路由跳转到首页
    path: '*',
    redirect: '/'
  }
]
export default routes
