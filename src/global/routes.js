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
  {//  搜索页面
    path: '/search/:geohash',
    name: 'search',
    component: require('../components/search/search.vue')
  },
  {//  选择城市
    path: '/city',
    component: require('../components/city/selectCity.vue')
  },
  {//  在城市中搜索具体地点
    path: '/city/:cityId/search',
    name: 'searchPlace',
    component: require('../components/city/searchPlace.vue')
  },
  {//  所有未定义路由跳转到首页
    path: '*',
    redirect: '/'
  }
]
export default routes
