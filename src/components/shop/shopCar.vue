<template>
  <div>
    <footer class="cartview">
      <transition name="fold">
        <div @click="showShopCar" v-show="showShopCarDetail" class="cartmask fold" style="z-index: 10;"></div>
      </transition>
      <transition name="fold">
        <div v-show="showShopCarDetail" class="cartbody fold" style="z-index: 11;">
          <div class="cartheader">
            <span class="cartheader-text">购物车</span>
            <a @click="emptyCart(shop.id)" href="javascript:" class="cartheader-remove">
              <svg>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-remove"></use>
              </svg>
              <span>清空</span>
            </a>
          </div>
          <div class="cartbody-scroller">
            <ul v-if="shopCar" class="cartlist">
              <li v-for="food in shopCar[0].entities" class="entityrow">
            <span class="entityname">
              <em class="name">{{ food.name }}</em>
              <p class="entityspecs"></p>
            </span>
                <span class="entitytotal">{{ (food.price * food.quantity).toFixed(1) }}</span>
            <span class="entitycartbutton">
              <span class="entitybutton">
                <a @click="minus(food.id)" href="javascript:">
                  <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use></svg>
                </a>
                <span class="entityquantity">{{ food.quantity }}</span>
                <a @click="add(food.id)" href="javascript:">
                  <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use></svg>
                </a>
              </span>
            </span>
              </li>
            </ul>
            <!--  餐盒费用  -->
            <div v-show="packingFee !== 0" class="entityrow packingfee">
              <span class="entityname">餐盒</span>
              <span class="entitytotal">{{ packingFee }}</span>
              <span class="entitycartbutton"></span>
            </div>
          </div>
        </div>
      </transition>
      <div v-if="shopCar" class="cartfooter" style="z-index: 11;">
        <span @click="showShopCar" class="carticon" :class="{'empty': shopCar[0].entities.length === 0, 'shake': shopCarAnimate}" :attr-quantity="count"></span>
        <div><p class="carttotal">¥{{ payCount + packingFee }}</p>
          <p v-if="shop.piecewise_agent_fee" class="cartdelivery">{{ shop.piecewise_agent_fee.tips }}</p></div>
        <a v-if="lack > 0" href="javascript:" class="submitbutton disabled">还差¥{{ lack }}起送</a>
        <a v-else href="javascript:" class="submitbutton" :class="{'disabled': payCount === 0}">去结算</a>
      </div>
    </footer>
  </div>
</template>
<style scoped>
  .cartmask {
    position: fixed!important;
  }
  .cartview {
    font-size: 0.438356rem;
  }
  .cartbody {
    position: fixed;
    bottom: 0;
    left: 0;
    padding-bottom: 1.315068rem;
    width: 100%;
    background-color: #fff;
  }
  .cartbody-scroller {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    max-height: 8.219178rem;
  }
  .fold.cartbody {
    -webkit-transition: all .35s ease;
    transition: all .35s ease;
  }
  .fold-enter-active.cartbody,
  .fold-leave-active.cartbody {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  .fold.cartmask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000;
    opacity: .4;
    -webkit-transition: opacity .35s ease;
    transition: opacity .35s ease;
  }
  .fold-enter-active.cartmask,
  .fold-leave-active.cartmask {
    opacity: 0;
  }
  .cartheader {
    padding: 0 0.342466rem;
    border-bottom: 1px solid #ddd;
    background-color: #eceff1;
    color: #666;
    line-height: 1.09589rem;
  }
  .cartheader-text {
    padding-left: 0.136986rem;
    border-left: 0.09589rem solid #3190e8;
  }
  .cartheader-remove {
    float: right;
    padding-left: 0.410959rem;
    -webkit-background-size: 0.273973rem 0.273973rem;
    background-size: 0.273973rem;
    color: #666;
    text-decoration: none;
    font-size: 0.356164rem;
  }
  .cartheader-remove svg {
    width: 0.315068rem;
    height: 0.356164rem;
    fill: #ddd;
  }
  .cartlist {
    margin: 0;
    padding: 0;
  }
  .entityrow {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0.205479rem 0.342466rem 0.205479rem 0;
    margin-left: 0.342466rem;
  }
  .entityrow a {
    display: inline-block;
    width: 0.684932rem;
    height: 0.684932rem;
    -webkit-background-size: cover;
    background-size: cover;
    vertical-align: middle;
  }
  .entityrow:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
  .entityrow.packingfee {
    border-top: 1px solid #eee;
  }
  .entityname {
    -webkit-box-flex: 7;
    -webkit-flex: 7;
    -ms-flex: 7;
    flex: 7;
    display: block;
    width: 0;
    line-height: normal;
  }
  .entityname.hasstocktip .name {
    max-width: 70%;
  }
  .entityname .name {
    display: inline-block;
    font-style: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    max-width: 100%;
  }
  .entityname .stocktip {
    font-style: normal;
    display: inline-block;
    vertical-align: middle;
    padding: 0 0.068493rem;
    background-color: #ff461d;
    -webkit-border-radius: 0.054795rem;
    border-radius: 0.054795rem;
    line-height: 0.383562rem;
    color: #fff;
    font-size: 0.287671rem;
  }
  .entityname .flashtip {
    display: block;
    margin-top: 0.068493rem;
    font-style: normal;
    color: #999;
    font-size: 0.273973rem;
  }
  .entityspecs {
    white-space: nowrap;
    line-height: 0.342466rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .entityspecs em {
    margin-right: 0.136986rem;
    vertical-align: middle;
    color: #999;
    font-size: 0.273973rem;
    font-style: normal;
  }
  .entitytotal {
    display: block;
    -webkit-box-flex: 1.6;
    -webkit-flex: 1.6;
    -ms-flex: 1.6;
    flex: 1.6;
    display: block;
    width: 0;
    width: 0;
    color: #f60;
    text-align: right;
    white-space: nowrap;
    font-weight: bold;
  }
  .entitytotal::before {
    content: '¥';
    font-size: 0.273973rem;
  }
  .entitycartbutton {
    -webkit-box-flex: 3.4;
    -webkit-flex: 3.4;
    -ms-flex: 3.4;
    flex: 3.4;
    display: block;
    width: 0;
    text-align: right;
  }
  .cartfooter {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 2.164384rem;
    background-color: #3d3d3f;
    height: 1.315068rem;
    opacity: .95;
  }
  .carticon {
    position: absolute;
    left: 0.328767rem;
    bottom: 0.136986rem;
    width: 1.534247rem;
    height: 1.534247rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-border-radius: 100%;
    border-radius: 100%;
    background-color: #3190e8;
    border: 0.123288rem solid #444;
    -webkit-box-shadow: 0 -0.082192rem 0.054795rem 0 rgba(0,0,0,0.10);
    box-shadow: 0 -0.082192rem 0.054795rem 0 rgba(0,0,0,0.10);
    will-change: transform;
  }
  .carticon::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(~assets/cart-full.svg) center no-repeat;
    -webkit-background-size: 0.753425rem 0.753425rem;
    background-size: 0.753425rem;
    content: "";
  }
  .carticon.empty {
    background-image: -webkit-radial-gradient(circle, #363636 0.643836rem, #444 0);
    background-image: radial-gradient(circle, #363636 0.643836rem, #444 0);
  }
  .carticon.empty::before {
    background-image: url(~assets/cart-empty.svg);
  }
  .carticon.empty::after {
    visibility: hidden;
  }
  .carticon::after {
    position: absolute;
    right: -0.123288rem;
    top: -0.136986rem;
    line-height: 1;
    background-color: #ff461d;
    color: #fff;
    -webkit-border-radius: 0.328767rem;
    border-radius: 0.328767rem;
    padding: 0.054795rem 0.136986rem;
    content: attr(attr-quantity);
    font-size: 0.273973rem;
  }
  .carticon.shake {
    -webkit-animation: shake .5s ease-in-out;
    animation: shake .5s ease-in-out;
  }
  @-webkit-keyframes shake {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    25% {
      -webkit-transform: scale(.8);
      transform: scale(.8);
    }
    50% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    75% {
      -webkit-transform: scale(.9);
      transform: scale(.9);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes shake {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    25% {
      -webkit-transform: scale(.8);
      transform: scale(.8);
    }
    50% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    75% {
      -webkit-transform: scale(.9);
      transform: scale(.9);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  .carttotal {
    font-size: 0.493151rem;
    line-height: normal;
    color: #fff;
  }
  .cartdelivery {
    color: #f5f5f5;
    font-size: 0.273973rem;
  }
  .piecewise-tips {
    padding: 0.136986rem 0;
    margin-left: 0.342466rem;
    font-size: 0.30137rem;
    color: #999;
    border-bottom: 0.013699rem solid #eee ;
  }
  .piecewise-tips b {
    display: inline-block;
    margin-right: 0.068493rem;
    padding: 0.041096rem 0.068493rem;
    font-weight: normal;
    color: #ff461d;
    border: 1px solid #ff461d;
    -webkit-border-radius: 0.054795rem;
    border-radius: 0.054795rem;
    font-size: 0.273973rem;
  }
  .cartextra {
    border-left: 1px solid #666;
    margin-left: 0.136986rem;
    padding-left: 0.136986rem;
    font-size: 0.328767rem;
    color: #999;
    display: table;
  }
  .cartextra em {
    font-style: normal;
  }
  .submitbutton {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 2.876712rem;
    background-color: #4cd964;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 0.410959rem;
    font-weight: bold;
    line-height: 1.315068rem;
  }
  .submitbutton.disabled {
    background-color: #535356;
  }
</style>
<script>
  export default{
    data () {
      return {
        showShopCarDetail: false, //  显示购物清单
      }
    },
    computed: {
      shop(){
        return this.$store.state.shop
      },
      shopCar(){ // 用户对于该商店的购物车
        return this.$store.state.shopCar[this.$route.params.shopId]
      },
      shopCarAnimate(){
        return this.$store.state.shopCarAnimate
      },
      lack(){ //  最低运送费差价，如果有运送费要求的话
        return this.shop.float_minimum_order_amount - this.payCount
      },
      count(){ // 购买计数
        return this.$store.state.count
      },
      payCount(){ // 购买计价
        return this.$store.state.payCount
      },
      packingFee(){ //  是否有餐盒费
        return this.$store.state.packingFee
      },
    },
    methods: {
      add(foodId){ // 购物车中的增加食物操作
        for (var i = 0; i < this.$store.state.menuList.length; i++){
          if (this.$store.state.menuList[i].type !== 1){ //  忽略优惠类型的食物与分类的重复
            continue
          }
          for (var j = 0; j < this.$store.state.menuList[i].foods.length; j++){
            if (this.$store.state.menuList[i].foods[j].specfoods[0].food_id === foodId){
              this.$store.dispatch('addFood', this.$store.state.menuList[i].foods[j])
              break;
            }
          }
        }
      },
      minus(foodId){
        for (var i = 0; i < this.$store.state.menuList.length; i++){
          if (this.$store.state.menuList[i].type !== 1){ //  忽略优惠类型的食物与分类的重复
            continue
          }
          for (var j = 0; j < this.$store.state.menuList[i].foods.length; j++){
            if (this.$store.state.menuList[i].foods[j].specfoods[0].food_id === foodId){
              this.$store.dispatch('minusFood', this.$store.state.menuList[i].foods[j])
              break;
            }
          }
        }
      },
      emptyCart(restaurantId){ // 清空购物车
        this.$store.dispatch('emptyCart', restaurantId)
        this.showShopCar()
      },
      showShopCar(){
        if (this.shopCar[0].entities.length === 0){
          this.showShopCarDetail = false
          return
        }
        this.showShopCarDetail = !this.showShopCarDetail
      },
    },
    beforeCreate () {
      this.$store.commit('createShop', this.$route.params.shopId)
    },
    mounted () {
      var self = this
      var cartIcon = document.getElementsByClassName('carticon')[0]
      cartIcon.addEventListener('animationend', function () {
        self.$store.commit('setShopCarAnimate', false)
      })
      this.$store.commit('setFlyBallPos', cartIcon.getBoundingClientRect())
    },
    components: {
    }
  }
</script>
