/**
 * Created by guojingfeng on 2016/12/30.
 */
//  全局过滤器
const baseUrl = 'https://fuss10.elemecdn.com'
var transformImgUrl = (path, type) => {
  //  转换首页食物分类的图片路径
  if (type == 0){
    return baseUrl + path
  } else if (type == 1){
    //  商家缩略图
    try {
      //  忽略传入undefined引发的错误
      let reg = /gif|jpe?g|png$/i; // 匹配图片后缀
      let extension = path.match(reg)[0];
      let restfulUrl = '/' + path.substring(0, 1) + '/' + path.substring(1, 3) + '/' + path.substring(3)
      return baseUrl + restfulUrl + '.' + extension
    } catch (e) {
      return ''
    }
  }
}
var transformDistance = (distance) => {
  //  转换首页食物分类的图片路径
  return (distance/1000).toFixed(2) + 'km'
}

export default {
  transformDistance,
  transformImgUrl
}
