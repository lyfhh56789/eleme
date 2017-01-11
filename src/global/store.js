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
         "price": 24.5, //  商品原价
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
    ratingScores: {}, //  商家评分信息
    count: 0, //  在该商家购买的食物总数
    payCount: 0, //  在该商家购买的食物总价
    packingFee: 0, //  餐盒费用，如果有的话
    menuList: [], //  商家食物菜单
    foodsState: [], //  食物列表状态树
    flyBallPos: {}, //  小球动画结束位置
    showActive: false, // 显示活动公告
    showRate: false, // 显示评价页
    license: false, //  是否查看商家营业执照或者餐饮服务许可证
  },
  mutations: {
    initShopCar(state){ //  初始化购物车，检查是否有本地存储的数据
      if (window.localStorage.getItem('shopCar') !== null){
        state.shopCar = JSON.parse(window.localStorage.getItem('shopCar'))
      }
    },
    setShop(state, object){
      state.shop = object
    },
    setFlyBallPos(state, object){ //  object为getBoundingClientRect方法获得的对象
      state.flyBallPos = object
    },
    setShowActive(state, boolean){ // 显示活动信息页
      state.showActive = boolean
    },
    setShowRate(state, boolean){ //  显示评价页
      state.showRate = boolean
    },
    setLicense(state, boolean){
      state.license = boolean
    },
    setShopCarAnimate(state, status){ //  开始小球动画
      state.shopCarAnimate = status
    },
    setRatingScores(state, object){
      state.ratingScores = object
    },
    setCount(state, restaurantId){
      if (state.shopCar[restaurantId][0].entities.length === 0){
        state.count = 0
        state.payCount = 0
        state.packingFee = 0
        //  本地存储购物车数据
        window.localStorage.setItem('shopCar', JSON.stringify(state.shopCar))
        return
      }
      var count = 0;
      var payCount = 0;
      var packingFee = 0;
      for (var i = 0; i < state.shopCar[restaurantId][0].entities.length; i++){
        count += state.shopCar[restaurantId][0].entities[i].quantity
        payCount += +(state.shopCar[restaurantId][0].entities[i].quantity * state.shopCar[restaurantId][0].entities[i].price).toFixed(1)
        packingFee += state.shopCar[restaurantId][0].entities[i].packing_fee
      }
      state.count = count
      //  浮点的精度计算有问题
      state.payCount = +(payCount.toFixed(1))
      state.packingFee = packingFee
      //  本地存储购物车数据
      window.localStorage.setItem('shopCar', JSON.stringify(state.shopCar))
    },
    emptyFoodsState(state){ // 重置状态树
      state.foodsState.forEach(value => {
        value.foods.forEach(val => {
          val.quantity = 0;
        })
        value.quantity = 0
      })
    }
  },
  actions: {
    shopMenuList({commit, state}, item){ // 获取商家食物菜单和食物列表状态树
      var list = item.list;
      state.menuList = list
      state.foodsState = []
      for (var i = 0; i < list.length; i++) {
        state.foodsState.push({
          foods: [],
          quantity: 0, // 分类菜单中的数量
          type: list[i].type, //  分类的类型
        })
        for (var j = 0; j < list[i].foods.length; j++) {
          state.foodsState[i].foods.push({
            quantity: 0,
            stock: list[i].foods[j].specfoods[0].stock,
            food_id: list[i].foods[j].specfoods[0].food_id,
          })
        }
      }
      //  创建当前商家的购物车以及检查是否购物车中有未结算的商品
      if (state.shopCar[item.shopId] === undefined){
        state.shopCar[item.shopId] = [
          {
            entities: []
          }
        ]
      } else {
        //  遍历本地存储的购物车数据(三重forEach，自己看着都恶心o(╯□╰)o)
        state.shopCar[item.shopId][0].entities.forEach(value1 => {
          state.foodsState.forEach(value2 => {
            if (value2.type === 1){
              value2.foods.forEach(value3 => {
                if (value1.id === value3.food_id){
                  value3.quantity = value1.quantity
                  value2.quantity += value1.quantity
                }
              })
            }
          })
        })
      }
      commit('setCount', item.shopId)
    },
    addFood({commit, state}, food){ //  购买食物，更改食物的当前列表状态
      state.foodsState.forEach(value => {
        value.foods.forEach(val => {
          if (val.food_id == food.specfoods[0].food_id && val.quantity < val.stock){
            val.quantity ++;
            if (value.type === 1){
              value.quantity ++;
            }
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
        'price': (food.specfoods[0].original_price === null ? food.specfoods[0].price : food.specfoods[0].original_price),
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
        value.foods.forEach(val => {
          if (val.food_id == food.specfoods[0].food_id){
            val.quantity --;
            if (value.type === 1) {
              value.quantity--;
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
    emptyCart({commit, state}, restaurantId){ // 清空购物车
      state.shopCar[restaurantId][0].entities = []
      commit('setCount', restaurantId)
      commit('emptyFoodsState')
    },
  },
}
export default storeConfig
