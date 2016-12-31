/**
 * Created by guojingfeng on 2016/12/29.
 */
var storeConfig = {
  state: {
    /*
     饿了么官方localStorage存储购物车食物方式
     "1248757": [{
       "entities": [{
         "id": 505834307, // 食物ID
         "sku_id": "118334330516",
         "quantity": 2, // 购买数量
         "name": "香辣鸡腿堡+墨西哥鸡肉卷+蜂蜜绿茶",
         "price": 24.5,
         "packing_fee": 0,
         "stock": 9994,
         "specs": [],
         "attrs": [],
         "extra": {}
        }]
     }]
     */
    shopCar: {}, // 购物车
    menuList: [], //  商家食物菜单
    foodsState: [], //  食物列表状态树
  },
  mutations: {
    shopMenuList(state, list){ // 获取商家食物菜单和食物列表状态树
      state.menuList = list
      for (var i = 0; i < list.length; i++) {
        state.foodsState.push([])
        for (var j = 0; j < list[i].foods.length; j++) {
          state.foodsState[i].push({
            item_id: list[i].foods[j].item_id,
            quantity: 0,
            stock: list[i].foods[j].specfoods[0].stock,
            isBuy: false
          })
        }
      }
    },
    addFood(state, itemId){ //  购买食物，更改食物的当前列表状态
      state.foodsState.forEach(value => {
        value.forEach(val => {
          if (val.item_id == itemId && val.quantity < val.stock){
            val.isBuy = true;
            val.quantity ++;
          }
        })
      })
    },
    minusFood(state, itemId){ // 减少购买的食物数量或者取消购买
      state.foodsState.forEach(value => {
        value.forEach((val, index) => {
          if (val.item_id == itemId){
            val.quantity --;
            if (val.quantity == 0){
              val.isBuy = false
            }
          }
        })
      })
    },
  }
}
export default storeConfig
