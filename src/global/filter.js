/**
 * Created by guojingfeng on 2016/12/30.
 */
import Vue from 'vue'
//  全局过滤器
const baseUrl = 'https://fuss10.elemecdn.com'
Vue.filter('transformImgUrl', (path, type) => {
  //  转换首页食物分类的图片路径
  if (type == 0){
    return baseUrl + path
  } else if (type == 1){
    //  商家缩略图
    let reg = /gif|jpg|jpeg|png|GIF|JPG|PNG$/i; // 匹配图片后缀
    let extension = path.match(reg)[0];
    let restfulUrl = '/' + path.substring(0, 1) + '/' + path.substring(1, 3) + '/' + path.substring(3)
    //  增加截取的大小
    return baseUrl + restfulUrl + '.' + extension + '?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'
  }
})
Vue.filter('transformDistance', (distance) => {
  //  转换首页食物分类的图片路径
  return (distance/1000).toFixed(2) + 'km'
})
