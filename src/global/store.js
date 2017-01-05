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
    shopCarAnimate: false, // 购物车动画
    shop: {}, //  商家信息
    count: 0, //  在该商家购买的食物总数
    menuList: [], //  商家食物菜单
    foodsState: [], //  食物列表状态树
    flyBallPos: {}, //  小球动画结束位置
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
    myShopCar(state, shopId){ //  创建当前商家的购物车以及检查是否购物车中有未结算的商品
      if (state.shopCar[shopId] === undefined){
        state.shopCar[shopId] = [
          {
            entities: []
          }
        ]
      }
    },
    setShop(state, object){
      state.shop = object
    },
    setFlyBallPos(state, object){ //  object为getBoundingClientRect方法获得的对象
      state.flyBallPos = object
    },
    setShopCarAnimate(state, status){ //  开始小球动画
      state.shopCarAnimate = status
    },
    setCount(state, restaurantId){
      if (state.shopCar[restaurantId][0].entities.length === 0){
        state.count = 0
        return
      }
      var count = 0;
      for (var i = 0; i < state.shopCar[restaurantId][0].entities.length; i++){
        count += state.shopCar[restaurantId][0].entities[i].quantity
      }
      state.count = count
    },
  },
  actions: {
    addFood({commit, state}, food){ //  购买食物，更改食物的当前列表状态
      state.foodsState.forEach(value => {
        value.forEach(val => {
          if (val.item_id == food.item_id && val.quantity < val.stock){
            val.isBuy = true;
            val.quantity ++;
          }
        })
      })
      var newAdd = true;
      if (state.shopCar[food.restaurant_id][0].entities.length !== 0){
        state.shopCar[food.restaurant_id][0].entities.forEach(val => {
          if (val.id === food.specfoods[0].food_id && val.quantity < val.stock){
            newAdd = false
            val.quantity ++;
          }
        })
        commit('setCount', food.restaurant_id)
        if (!newAdd){
          return
        }
      }
      state.shopCar[food.restaurant_id][0].entities.push({
        'id': food.specfoods[0].food_id, // 食物ID
        'sku_id': food.specfoods[0].sku_id,
        'quantity': 1, // 购买数量
        'name': food.name,
        'price': food.specfoods[0].price,
        'packing_fee': food.specfoods[0].packing_fee,
        'stock': food.specfoods[0].stock,
        'specs': food.specfoods[0].specs,
        'attrs': food.attrs,
        'extra': {}
      })
      commit('setCount', food.restaurant_id)
    },
    minusFood({commit, state}, food){ // 减少购买的食物数量或者取消购买
      state.foodsState.forEach(value => {
        value.forEach((val, index) => {
          if (val.item_id == food.item_id){
            val.quantity --;
            if (val.quantity == 0){
              val.isBuy = false
            }
          }
        })
      })
      state.shopCar[food.restaurant_id][0].entities.forEach((val, index) => {
        if (val.id === food.specfoods[0].food_id && val.quantity > 0){
          val.quantity --;
          if (val.quantity === 0){
            state.shopCar[food.restaurant_id][0].entities.splice(index, 1)
          }
          commit('setCount', food.restaurant_id)
        }
      })
    },
  },
}
export default storeConfig
