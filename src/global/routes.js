/**
 * Created by guojingfeng on 2016/12/29.
 */
var routes = [
  {//  首页
    path: '/',
    component: require('../components/index.vue')
  },
  {//  商家详情
    path: '/shop/:shopId',
    name: 'shop',
    component: require('../components/shop/shop.vue')
  },
  {//  分类商家
    path: '/category/:categoryId',
    name: 'category',
    component: require('../components/category/category.vue')
  },
  {//  所有未定义路由跳转到首页
    path: '*',
    redirect: '/'
  }
]
export default routes
