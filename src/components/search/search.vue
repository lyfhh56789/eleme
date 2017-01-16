<template>
  <div>
    <!--  SVG start here  -->
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; visibility: hidden;"><defs><symbol xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" viewBox="0 0 547 987" id="arrow-right"><title>Shape</title> <desc>Created with Sketch.</desc> <defs></defs> <g id="arrow-right_Page-1" stroke="none" stroke-width="1" type="MSPage"><path d="M0,931.973 L51.2,986.586 L546.133,491.653 L51.2,0.133 L4.26325641e-14,51.333 L440.32,491.653 L0,931.973 Z" id="arrow-right_Shape" type="MSShapeGroup"></path></g></symbol></defs></svg>
    <!--  SVG end here  -->
    <wrapper :has-header="true">
      <span slot="title">搜索</span>
      <section slot="content">
        <section class="flex background-white geosearch-header">
          <input type="search" @keyup.enter="search" v-model="keyword" placeholder="请输入商家或美食名称" class="geosearch-header-input"/>
          <button @click="search" class="geosearch-header-button">搜索</button>
        </section>
        <section class="geosearch-content">
          <section v-if="histories.length !== 0 && !showResults">
            <h3 class="geosearch-title">搜索历史</h3>
            <ul class="background-white geosearch-history">
              <template v-for="(history, index) in histories">
                <li :key="index" class="flex geosearch-history-item">
                  <span @click="searchByHistory(history)" class="ng-binding">{{ history }}</span>
                  <i @click="removeHistory(index)" class="ui-x">×</i>
                </li>
              </template>
              <li @click="removeHistory(undefined)" class="geosearch-history-clear">清空搜索记录</li>
            </ul>
          </section>
          <section v-if="restaurants.length !== 0 && showResults">
            <h3 class="geosearch-title">商家</h3>
            <ul class="background-white">
              <template v-for="restaurant in restaurants">
                <li class="flex geosearch-restaurant">
                  <img class="geosearch-restaurant-img" :src="'https://fuss10.elemecdn.com'+ restaurant.image_path +'?imageMogr/thumbnail/'+ (42 * dpr) +'x'+ (42 * dpr) +'/format/webp/quality/75'">
                  <div class="geosearch-restaurant-content">
                    <div class="geosearch-restaurant-detail">
                      <div class="flex geosearch-restaurant-name">
                        <span class="restaurant-name">{{ restaurant.name }}</span>
                        <template v-for="support in restaurant.supports">
                          <span class="support-icon" :style="{'color': '#'+ support.icon_color, 'border-color': '#'+ support.icon_color}">{{ support.icon_name }}</span>
                        </template>
                      </div>
                      <div class="restaurant-rate">
                        <rating-star v-if="restaurant.rating_count !== 0"></rating-star>
                        <span v-if="restaurant.rating_count !== 0">({{ restaurant.rating_count }})</span>
                        <span v-if="restaurant.recent_order_num !== 0">月售 {{ restaurant.recent_order_num }} 单</span>
                      </div>
                      <div class="restaurant-sell">
                        <span>{{ restaurant.delivery_fee }} 元起送</span>
                        <span>{{ restaurant.distance | transformDistance }}</span>
                      </div>
                    </div>
                    <ul class="geosearch-restaurant-activity">
                      <li v-for="activity in restaurant.restaurant_activity">
                        <i class="activity-icon" style="color: rgb(255, 255, 255);"
                           :style="{'background-color': '#'+ activity.icon_color,'border-color': '#'+ activity.icon_color}">
                          {{ activity.icon_name }}</i>
                      <span class="activity-description">
                        <span>{{ activity.name }}</span>
                        <span style="color: #FF6000;">(手机客户端专享)</span>
                      </span>
                      </li>
                    </ul>
                  </div>
                </li>
              </template>
            </ul>
          </section>
          <section  v-if="foods.length !== 0 && showResults">
            <h3 class="geosearch-title">美食</h3>
            <ul class="background-white">
              <template v-for="food in foods">
                <li class="flex geosearch-foods-content">
                  <div class="flex geosearch-foods">
                    <img v-if="food.image_path !== ''" class="geosearch-foods-img"
                         :src="'https://fuss10.elemecdn.com'+ food.image_path +'?imageMogr/thumbnail/'+(40 * dpr)+'x'+(40 * dpr)+'/format/webp/quality/75'">
                    <img v-else class="geosearch-foods-img" src="~assets/food.svg">
                    <div class="geosearch-restaurant-content">
                      <p>{{ food.name }}</p>
                      <div class="rate">
                        <template v-for="index in 5">
                          <!--  只取有星的标记  -->
                          <rating-star v-if="food.ratings[index+1] === 1" :rating="index+1"></rating-star>
                        </template>
                        <!--  一颗星都没有的情况  -->
                        <template v-if="food.ratings[1] === 0 && food.ratings[2] === 0 && food.ratings[3] === 0 && food.ratings[4] === 0 && food.ratings[5] === 0">
                          <rating-star></rating-star>
                        </template>
                        <span>评价</span>
                        <span v-if="food.month_sales !== 0">月售{{ food.month_sales }}份</span>
                      </div>
                      <div class="price">
                        <span>&yen;{{ food.price.toFixed(2) }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex geosearch-foods geosearch-footer">
                    <img class="geosearch-foods-img geosearch-foods-img-small"
                         :src="'https://fuss10.elemecdn.com'+ food.restaurant.image_path +'?imageMogr/thumbnail/'+ (20 * dpr) +'x'+ (20 * dpr) +'/format/webp/quality/75'">
                    <div class="geosearch-restaurant-content geosearch-footer-content">
                      <span>{{ food.restaurant.name }}</span>
                    </div>
                  </div>
                </li>
              </template>
            </ul>
          </section>
        </section>
      </section>
    </wrapper>
  </div>
</template>
<style scoped>
  .flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }
  .background-white {
    background: #fff;
  }
  .geosearch-header {
    padding: 0.375rem;
  }
  .geosearch-header .geosearch-header-input {
    flex-grow: 1;
    padding: 0.03125rem;
    padding-left: 0.125rem;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 0.04rem;
    -webkit-appearance: none!important;
    outline: 0;
  }
  .geosearch-header .geosearch-header-button {
    border: none;
    border-radius: 4px;
    padding: 0.375rem 0.75rem;
    width: 2.5rem;
    color: #fff;
    background: #3199e8;
    margin-left: 0.3125rem;
    outline: 0;
  }
  /*  搜索结果样式  */
  .geosearch-title {
    font-weight: 400;
    padding: 0.46875rem 0 0.25rem 0.46875rem;
    color: #666;
  }
  /*  历史记录-start  */
  .geosearch-history .geosearch-history-item, .geosearch-history .geosearch-history-clear {
    padding: 0.3125rem 0.375rem;;
  }
  .geosearch-history .geosearch-history-item {
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
  }
  .geosearch-history-clear {
    color: #3199e8;
    text-decoration: none;
    text-align: center;
  }
  .ui-x {
    font-style: normal;
    -webkit-transform: scale3d(2, 2 , 1);
    -moz-transform: scale3d(2, 2 , 1);
    -ms-transform: scale3d(2, 2 , 1);
    -o-transform: scale3d(2, 2 , 1);
    transform: scale3d(2, 2 , 1);
  }
  /*  历史记录-end  */
  /*  商家-start  */
  .geosearch-restaurant, .geosearch-foods {
    padding: 0.46875rem;
    justify-content: flex-start;
    border: 1px solid #ddd;
    font-size: .4375rem;
  }
  .geosearch-restaurant-img {
    width: 1.3125rem;
    height: 1.3125rem;
    flex-shrink: 0;
  }
  .geosearch-restaurant-content {
    margin-left: 0.25rem;
    flex-grow: 1;
  }
  .support-icon {
    margin-left: 0.15625rem;
    padding: .0625rem;
    border: 1px solid;
    border-radius: 0.04rem;
    font-size: 0.3125rem;
    height: 0.375rem;
  }
  .geosearch-restaurant-detail {
    border-bottom: 1px solid #ddd;
  }
  .geosearch-restaurant-detail div+div, .geosearch-restaurant-activity li{
    margin: .15625rem 0;
  }
  .restaurant-sell span+span {
    padding-left: .3125rem;
    position: relative;
  }
  .restaurant-sell span+span::after {
    content: '/';
    position: absolute;
    top: 0;
    left: 0;
  }
  .activity-icon {
    font-style: normal;
    padding: 0 .0625rem;
    border: 1px solid;
    border-radius: .0625rem;
    font-size: .375rem;
  }
  /*  商家-end  */
  /*  食物-start  */
  .geosearch-foods-content {
    flex-direction: column;
  }
  .geosearch-foods {
    flex-direction: row;
    border: none;
    border-bottom: 1px solid #ddd;
  }
  .geosearch-foods-img {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
  }
  .geosearch-foods-img-small {
    width: .625rem;
    height: .625rem;
  }
  .rate {
    margin: .15625rem 0;
  }
  .price {
    color: #f60;
    font-weight: 700;
  }
  .geosearch-footer {
    align-items: center;
  }
  .geosearch-footer-content {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /*  食物-end  */
</style>
<script>
  import wrapper from '../common/wrapper.vue'
  import ratingStar from '../common/ratingStar.vue'
  export default{
    data () {
      return {
        keyword: '', //  搜索关键字
        showResults: false, //  是否显示搜索结果
        histories: [], //  搜索历史
        restaurants: [], //  结果商家列表
        foods: [], //  结果食物列表
        dpr: 1, //  当前设备像素比
      }
    },
    watch: {
      keyword(val){
        if (!val){
          this.showResults = false
        }
      }
    },
    computed: {
      geohash(){
        return this.$store.state.geohash
      }
    },
    methods: {
      searchRestaurant(){
        this.$http({url: 'eleme_api.php', params: {api_str: encodeURI('v4/restaurants?extras[]=restaurant_activity&geohash='+ this.geohash +'&keyword='+ this.keyword +'&type=search')}}).then(function (res) {
          this.restaurants = res.data
        })
      },
      searchFood(){
        this.$http({url: 'eleme_api.php', params: {api_str: encodeURI('v1/foods?extras[]=restaurant&geohash='+ this.geohash +'&keyword='+ this.keyword +'&type=search')}}).then(function (res) {
          this.foods = res.data
        })
      },
      search(){
        if (!this.keyword){
          return
        }
        this.showResults = true
        this.histories.push(this.keyword)
        window.localStorage.setItem('searchHistory', JSON.stringify(this.histories))
        this.searchRestaurant()
        this.searchFood()
      },
      searchByHistory(history){ //  通过历史记录来搜素
        this.keyword = history
        this.showResults = true
        this.searchRestaurant()
        this.searchFood()
      },
      removeHistory(index){
        if (index !== undefined){ //  移除单个历史项
          this.histories.splice(index, 1)
        } else { //  清空历史记录
          this.histories = []
        }
        window.localStorage.setItem('searchHistory', JSON.stringify(this.histories))
      }
    },
    created () {
      if (window.localStorage.getItem('searchHistory') !== null) this.histories = JSON.parse(window.localStorage.getItem('searchHistory'));
    },
    mounted(){
      //  设置整个背景色
      document.getElementsByClassName('vue-wrapper')[0].style.background = '#f2f2f2';
      //  因为图片最大只有2倍，所以大于2的设备像素比也只能使用2倍的图片尺寸了
      this.dpr = window.devicePixelRatio > 1 ? 2 : 1;
    },
    components: {
      wrapper, ratingStar
    }
  }
</script>
