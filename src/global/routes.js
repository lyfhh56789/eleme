/**
 * Created by guojingfeng on 2016/12/29.
 */
const Shop = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['../components/shop/shop.vue'], () => {
    resolve(require('../components/shop/shop.vue'))
  })
}
const City = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['../components/city/selectCity.vue'], () => {
    resolve(require('../components/city/selectCity.vue'))
  })
}
const Search = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['../components/search/search.vue'], () => {
    resolve(require('../components/search/search.vue'))
  })
}
const SearchPlace = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['../components/city/searchPlace.vue'], () => {
    resolve(require('../components/city/searchPlace.vue'))
  })
}

const Discover = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['../components/discover/Discover.vue'], () => {
    resolve(require('../components/discover/Discover.vue'))
  })
}

const Order = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['../components/order/Order.vue'], () => {
    resolve(require('../components/order/Order.vue'))
  })
}

const Profile = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['../components/profile/Profile.vue'], () => {
    resolve(require('../components/profile/Profile.vue'))
  })
}

var routes = [
  {//  首页
    path: '/',
    name: 'index',
    component: require('../components/index.vue')
  },
  {//  商家详情
    path: '/shop/:shopId',
    name: 'shop',
    component: Shop
  },
  {//  分类商家
    path: '/category/:categoryId',
    name: 'category',
    component: require('../components/category/category.vue')
  },
  {//  搜索页面
    path: '/search/:geohash',
    name: 'search',
    component: Search
  },
  {//  选择城市
    path: '/city',
    name: 'city',
    component: City
  },
  {//  在城市中搜索具体地点
    path: '/city/:cityId/search',
    name: 'searchPlace',
    component: SearchPlace
  },
  {//  发现
    path: '/discover',
    name: 'discover',
    component: Discover
  },
  {//  订单
    path: '/order',
    name: 'order',
    component: Order
  },
  {//  我的
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {//  所有未定义路由跳转到首页
    path: '*',
    redirect: '/'
  }
]
export default routes
