<template>
  <div>
    <div class="menuview" :style="{'height': menuHeight + 'px'}">
      <div class="menuview-nodata" style="display: none;">
        <img src="//github.elemecdn.com/eleme/fe-static/1cb05f59/media/empty/no-food.png">
        <p>没有商品</p>
        <p>该商家还未上传商品</p></div>
      <div class="menuview-main">
        <main>
          <ul class="menu-nav">
            <template v-for="(item, index) in list">
              <li :class="{'noicon': index !== activeMenu, 'active': index === activeMenu}" @click="scrollIntoView(index)">
                <img v-if="item.icon_url != ''" class="category-icon" :src="item.icon_url | transformImgUrl(1)">
                <span v-if="foodList[index].quantity !== 0" class="category-quantity">{{ foodList[index].quantity }}</span>
                <span class="category-name">{{ item.name }}</span>
              </li>
            </template>
          </ul>
          <section class="container menu-list">
            <div class="scroller">
              <template v-for="(item, index) in list">
                <dl>
                  <dt>
                    <div class="category-title">
                      <strong class="category-name">{{ item.name }}</strong>
                      <span class="category-description">{{ item.description }}</span>
                    </div>
                    <div class="category-more">
                      <span @click="showPopup(index)" class="icon"></span>
                      <transition name="popup">
                        <p @click="hidePopup" v-show="popup == index" class="popup">
                          <span>{{ item.name }}</span>
                          <span>{{ item.description }}</span>
                        </p>
                      </transition>
                    </div>
                  </dt>
                  <template v-for="(food, secIndex) in item.foods">
                    <dd :class="{'new': food.attributes != false}">
                    <span v-if="food.image_path !== null" class="foodimg">
                      <img :src="food.image_path | transformImgUrl(1) + '?imageMogr/thumbnail/140x140/format/webp/quality/85'">
                    </span>
                      <section class="foodinfo">
                        <header class="foodtitle">
                          <span>{{ food.name }}</span>
                          <aside v-if="food.attributes.length > 1" class="foodattributes">
                            <span :style="{'color': '#' + food.attributes[0].icon_color}">{{ food.attributes[0].icon_name }}</span>
                          </aside>
                        </header>
                        <p class="fooddescription">{{ food.description }}</p>
                        <p class="foodsales">
                          <span v-if="food.month_sales != 0">月售{{ food.month_sales }}份</span>
                          <span v-if="food.satisfy_rate != 0">好评率{{ food.satisfy_rate }}%</span></p>
                        <p v-if="food.activity != null" class="foodactivity">
                          <span :style="{'color': '#' + food.activity.image_text_color}">{{ food.activity.image_text }}</span>
                          <span></span>
                        </p>
                        <strong class="foodprice">
                          <span>{{ food.specfoods[0].price }}</span>
                          <del v-if="food.specfoods[0].original_price != null" class="foodprice-origin">¥{{ food.specfoods[0].original_price }}</del>
                        </strong>
                        <div class="cartbutton">
                          <span>
                            <span v-if="food.specfoods[0].stock == 0" class="entitybutton soldout">已售完</span>
                            <span v-else class="entitybutton">
                              <template v-if="foodList[index].foods[secIndex].quantity !== 0">
                                <a @click="minusFood(food)" href="javascript:">
                                <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use></svg>
                              </a>
                              <span class="entityquantity">{{ foodList[index].foods[secIndex].quantity }}</span>
                              </template>
                              <a @click="addFood(food, $event)" href="javascript:">
                                <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use></svg>
                              </a>
                            </span>
                          </span>
                        </div>
                      </section>
                    </dd>
                  </template>
                </dl>
              </template>
            </div>
            <div>
              <div></div>
            </div>
          </section>
        </main>
        <shop-car></shop-car>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .ui-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  /*  前置样式-start  */
  .menuview {
    color: #333;
    height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    /* For some Androids */
    font: 0.186667rem/1.2 "Helvetica Neue","Microsoft Yahei",sans-serif;
  }
  .menuview *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }
  .menuview,
  .menuview ul,
  .menuview h3,
  .menuview p {
    margin: 0;
  }
  .menuview ul {
    padding: 0;
  }
  .menuview img {
    max-width: 100%;
  }
  .menuview ul {
    list-style: none;
  }
  /*  前置样式-end  */
  .menuview {
    height: 100%;
  }
  .menuview-main {
    height: 100%;
    padding-bottom: 1.28rem;
    background-color: #fff;
  }
  .menuview-main.nocart {
    padding-bottom: 0;
  }
  .menuview-main.nocartview {
    padding-bottom: 0;
  }
  .menuview-nodata {
    padding: 0.666667rem 0;
    text-align: center;
    font-size: 0.426667rem;
    color: #333;
    background-color: #eee;
  }
  .menuview-nodata img {
    width: 40%;
  }
  .menuview-nodata p {
    padding: 0;
    margin: 0;
    line-height: 0.853333rem;
  }
  main {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
  }
  .menu-nav {
    width: 2.266667rem;
    height: 100%;
  }
  .menu-list {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    height: 100%;
  }
  .menu-statustip {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    line-height: 1.333333rem;
    font-size: 0.48rem;
    background-color: rgba(0,0,0,.7);
    color: #ccc;
    text-align: center;
  }
  /*  category-start  */
  ul {
    overflow-y: auto;
    height: 100%;
    background-color: #f8f8f8;
    -webkit-overflow-scrolling: touch;
  }
  li {
    position: relative;
    padding: 0.466667rem 0.2rem;
    border-bottom: 1px solid #ededed;
    font-size: 0.346667rem;
    color: #666;
  }
  li.active {
    background-color: #fff;
    border-right-color: #fff;
    font-weight: bolder;
  }
  li.active::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0.08rem;
    background-color: #3190e8;
  }
  .category-quantity {
    position: absolute;
    right: 0.08rem;
    top: 0.08rem;
    color: #fff;
    background-color: #ff461d;
    -webkit-border-radius: 0.2rem;
    border-radius: 0.2rem;
    font-size: 0.266667rem;
    font-weight: bold;
    text-align: center;
    min-width: 0.373333rem;
    padding: 0 0.106667rem;
    line-height: 0.373333rem;
  }
  .category-icon {
    width: 0.24rem;
    height: 0.333333rem;
  }
  /*  category-end  */
  /*  menuentities-start  */
  .container {
    position: relative;
    height: 100%;
  }
  .container .scroller {
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  dl.onlyddst dd {
    margin-left: 0;
    -webkit-box-shadow: 0 0.013333rem 0 0 #ddd;
    box-shadow: 0 1px 0 0 #ddd;
  }
  dl.onlylist .foodprice {
    font-size: 0.533333rem;
  }
  dl.onlylist .foodimg {
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    width: 2.133333rem;
    height: 2.133333rem;
  }
  dl.onlylist .foodtitle {
    font-size: 0.48rem;
  }
  dl.onlylist dd {
    padding: 0.333333rem;
    min-height: none;
  }
  dl {
    margin: 0;
  }
  dd {
    position: relative;
    background-color: #fff;
    margin: 0;
    padding: 0.4rem 0.266667rem;
    margin-bottom: 1px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-height: 2.933333rem;
  }
  dd.new::after {
    content: "新品";
    z-index: 2;
    position: absolute;
    left: 0.013333rem;
    top: 0.12rem;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    color: #fff;
    font-size: 0.226667rem;
  }
  dd.new::before {
    content: "";
    background-image: -webkit-linear-gradient(315deg, #4cd964 50%, transparent 50%);
    background-image: linear-gradient(135deg, #4cd964 50%, transparent 50%);
    position: absolute;
    width: 0.746667rem;
    height: 0.746667rem;
    z-index: 1;
    left: 0;
    top: -1px;
    font-weight: bold;
    font-size: 0.24rem;
  }
  dd:not(:last-child) {
    -webkit-box-shadow: .4rem 0.013333rem 0 0 #ddd;
    box-shadow: .4rem 1px 0 0 #ddd;
  }
  dt {
    position: relative;
    padding: 0.2rem 0.266667rem;
    background-color: #f1f1f1;
  }
  .category-title {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    overflow: hidden;
  }
  .category-title span {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    color: #999;
    font-size: 0.266667rem;
    white-space: nowrap;
    overflow: hidden;
  }
  .category-title strong {
    margin-right: 0.133333rem;
    font-weight: bold;
    font-size: 0.373333rem;
    color: #666;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
  }
  .category-more::after {
    content: "";
    position: absolute;
  }
  .category-more .popup-enter-active,
  .category-more .popup-leave-active {
    opacity: 0 !important;
    -webkit-transform: scale(.5) !important;
    transform: scale(.5) !important;
  }
  .category-more .popup {
    position: absolute;
    background-color: #39373a;
    opacity: .97;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: top right;
    transform-origin: top right;
    width: 63%;
    right: 0.133333rem;
    z-index: 3;
    color: #eee;
    font-size: 0.32rem;
    -webkit-border-radius: 0.106667rem;
    border-radius: 0.106667rem;
    padding: 0.24rem 0.266667rem;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    cursor: pointer;
  }
  .category-more .popup span:first-child {
    color: #fff;
  }
  .category-more .popup::before {
    content: "";
    position: absolute;
    top: 0;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    right: 0.266667rem;
    border: 0.133333rem solid transparent;
    border-bottom-color: #39373a;
  }
  .category-more .icon {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 0.933333rem;
    z-index: 2;
    background: #f1f1f1 url(../../assets/icon-more.png) center no-repeat;
    -webkit-background-size: 0.32rem auto;
    background-size: 0.32rem auto;
  }
  .cartbutton {
    position: absolute;
    right: 0;
    bottom: -0.066667rem;
  }
  .foodimg {
    margin-right: 4%;
    -webkit-box-flex: 2;
    -webkit-flex: 2;
    -ms-flex: 2;
    flex: 2;
    display: block;
    width: 0;
    vertical-align: top;
  }
  .foodimg img {
    width: 100%;
    -webkit-border-radius: 0.053333rem;
    border-radius: 0.053333rem;
  }
  .foodinfo {
    position: relative;
    -webkit-box-flex: 8;
    -webkit-flex: 8;
    -ms-flex: 8;
    flex: 8;
    display: block;
    width: 0;
    padding-bottom: 0.666667rem;
  }
  .foodtitle {
    font-size: 0.4rem;
    font-weight: bold;
    line-height: 1.1;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .foodtitle span {
    vertical-align: middle;
  }
  .foodattributes {
    line-height: 0.32rem;
    margin-left: 0.24rem;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
  }
  .foodattributes span:not(:last-child) {
    margin-right: 0.08rem;
  }
  .foodattributes span {
    display: inline-block;
    vertical-align: middle;
    padding: 0.04rem 0.066667rem;
    line-height: 100%;
    text-align: center;
    border: 1px solid currentColor;
    color: #fff;
    font-size: 0.213333rem;
    -webkit-border-radius: 0.266667rem;
    border-radius: 0.266667rem;
  }
  .quantity-tip {
    background-color: #ff461d;
    -webkit-border-radius: 0.053333rem;
    border-radius: 0.053333rem;
    font-size: 0.266667rem;
    color: #fff;
    padding: 0.026667rem 0.066667rem;
    vertical-align: middle;
  }
  .fooddescription {
    margin: 0.133333rem 0;
    font-size: 0.253333rem;
    color: #999;
  }
  .foodsales {
    margin: 0.173333rem 0;
    color: #666;
    font-size: 0.293333rem;
    line-height: 1;
  }
  .foodsales > span:not(:first-child) {
    margin-left: 0.106667rem;
    vertical-align: middle;
  }
  .foodsales span {
    vertical-align: middle;
  }
  .foodsales p {
    margin-right: 0.106667rem;
  }
  .foodactivity {
    font-size: 0.32rem;
    -webkit-transform: scale(.8);
    transform: scale(.8);
    -webkit-transform-origin: left;
    transform-origin: left;
    white-space: nowrap;
  }
  .foodactivity span {
    display: inline-block;
  }
  .foodactivity span:first-child {
    border: 1px solid currentColor;
  }
  .foodactivity span:nth-of-type(2) {
    color: #fff;
    border: 1px solid currentColor;
  }
  .foodprice {
    position: absolute;
    left: 0;
    bottom: 0;
    font-weight: bold;
    font-size: 0.426667rem;
    line-height: 0.426667rem;
    color: #f60;
  }
  .foodprice::before {
    font-weight: normal;
    content: '\00a5';
    font-size: 0.293333rem;
    display: inline-block;
  }
  .foodprice-lowest {
    margin-left: 0.053333rem;
    font-size: 0.32rem;
    color: #666;
    font-weight: normal;
  }
  .foodprice-origin {
    font-size: 0.32rem;
    color: #999;
    font-weight: normal;
    vertical-align: top;
  }
  /*  menuentities-end  */
</style>
<style>
  /*  carbutton-start  */
  .cartbutton {
    position: absolute;
    right: 0;
    bottom: -.066667rem;
  }
  .entitybutton {
    display: inline-block;
    font-size: .356164rem;
  }
  .entitybutton a {
    display: inline-block;
    padding: .09589rem;
    vertical-align: middle;
    text-decoration: none;
  }
  .entitybutton svg {
    width: 22px;
    height: 22px;
    vertical-align: middle;
    fill: #3190e8;
  }
  /*  商家休息时按钮小时效果  */
  .entitybutton a[disabled] svg {
    fill: #ddd;
  }
  /*  dpr大于1的显示效果 */
  [data-dpr="2"] .entitybutton svg {
    width: 44px;
    height: 44px;
  }
  [data-dpr="3"] .entitybutton svg {
    width: 66px;
    height: 66px;
  }
  /*  carbutton-end  */
</style>
<script>
  import shopCar from './shopCar.vue'
  export default{
    data () {
      return {
        activeMenu: 0, //  默认激活菜单
        scroller: '', //  可滚动容器对象
        popup: -1, //  设置显示菜单的描述
        isMenuControl: false, //  当前滚动是否由菜单操作
        menuHeight: 0, //  浏览器视口高度
        timer: '', // 购物车动画定时器
      }
    },
    computed: {
      foodList(){ //  该商店的食物列表，对应list的排列方式
        return this.$store.state.foodsState
      },
      list(){
        return this.$store.state.menuList
      },
      flyBallPos(){
        return this.$store.state.flyBallPos
      },
    },
    methods: {
      scrollIntoView(index){ //  滚动到指定菜单食物列表
        this.isMenuControl = true
        if (index == this.activeMenu){
          return
        }
        if (index == 0){
          this.scroller.scrollTop = 0
          this.activeMenu = index;
          return
        }
        this.activeMenu = index;
        this.scroller.scrollTop = this.scroller.children[index].offsetTop
      },
      addFood(food, event){ // 向购物车中添加食物, 并执行小球动画
        this.createBall(event)
        this.$store.dispatch('addFood', food)
      },
      minusFood(food){ // 减少购买的食物数量或者取消购买
        this.$store.dispatch('minusFood', food)
      },
      createBall(event){
        //  获得页面缩放比例
        let scale = 1
        const viewport = document.querySelector('meta[name="viewport"]')
        if (viewport) {
          let match = viewport.content.match(/initial-scale=(\d+\.?\d*)/)
          if (match) scale = match[1]
        }
        //  根据页面的缩放获得小球的半径大小，缩放比例为1时为9px
        const r = 9 / parseFloat(scale)
        //  获得小球开始动画位置
        let startPosition = event.target.getBoundingClientRect()
        //  结束位置为购物车的位置
        let endPosition = {
          top: this.flyBallPos.top + this.flyBallPos.height/2,
          left: this.flyBallPos.left + this.flyBallPos.width/2
        }
        //  创建小球
        let ball = document.createElement('div')
        let inner = document.createElement('div')
        ball.className = 'flyball'
        inner.className = 'inner'
        inner.style.width = r * 2 + 'px'
        inner.style.height = r * 2 + 'px'
        /* top, left 为小球开始位置,通过getBoundingClientRect方法获得 */
        ball.style.top = startPosition.top + 'px'
        ball.style.left = startPosition.left + 'px'
        //  显示小球
        ball.appendChild(inner)
        document.body.appendChild(ball)
        //  小球动画的差值对象
        let delta = {
          top: endPosition.top - startPosition.top,
          left: endPosition.left - startPosition.left,
        }
        //  抛物线动画拆分为水平方向和垂直方向，水平匀速，垂直具有加速度，由CSS样式控制
        // 外层ball对象专注水平方向，内层inner对象专注垂直方向
        //  CSS兼容性
        const prefixes = [
          '-webkit-',
          '-moz-',
          '-ms-',
          '-o-',
          '',
        ]
        /*
         饿了么官方代码
         猜测这句代码是为了防止DOM还没应用CSS样式，就已经生成了translate3d属性了
         处理过快导致无法产生动画效果,使用setTimeout可以体会出来，不得不说饿了么前端666
         除此之外，还可以是clientLeft, clientWidth，clientTop
         */
        void ball.clientHeight // NextTick
        prefixes.forEach(prefix => {
          ball.style.setProperty(prefix + 'transform', 'translate3d('+ delta.left +'px, 0, 0)')
          inner.style.setProperty(prefix + 'transform', 'translate3d(0, '+ delta.top +'px, 0)')
        })
        var self = this;
        inner.addEventListener('transitionend', function () {
          document.body.removeChild(ball)
          self.$store.commit('setShopCarAnimate', true)
        })
      },
      showPopup(index){ //  显示菜单的描述信息
        if (this.popup == index){
          return
        }
        this.popup = index
      },
      hidePopup(){ //  隐藏菜单的描述信息
        this.popup = -1
      },
    },
    mounted () {
      //  获取浏览器视口高度
      this.menuHeight = document.getElementsByClassName('shopbody')[0].offsetHeight - document.getElementsByClassName('shopnav')[0].offsetHeight
      //  注册滑动事件
      this.scroller = document.getElementsByClassName('scroller')[0];
      this.scroller.onscroll = function () {
        //  滚动时关闭菜单描述（如果打开的话）
        this.popup = -1
        //  滚动位置判断
        if (this.isMenuControl){ // 菜单操作的滚动
          this.isMenuControl = !this.isMenuControl
          return
        }
        if (this.activeMenu != this.scroller.children.length - 1){
          if (this.scroller.scrollTop > this.scroller.children[this.activeMenu + 1].offsetTop){
            this.activeMenu ++;
          } else if (this.scroller.scrollTop < this.scroller.children[this.activeMenu].offsetTop){
            this.activeMenu --;
          }
        }
      }.bind(this)
    },
    components: {
      shopCar
    }
  }
</script>
