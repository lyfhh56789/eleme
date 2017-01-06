<template>
  <div class="shop-info">
    <section v-if="ratings.length !== 0" class="shopinfo-rating">
      <header>
        <span class="overall">{{ shop.rating }}分</span>
        <span class="compare">{{ ratingScores.compare_rating > 0 ? '高于' : '低于'}}周边商家{{ (ratingScores.compare_rating * 100).toFixed(1) }}%</span>
        <span class="rating-count" @click="viewRate">
          {{ ratingScores.order_rating_amount }}条评价
          <svg class="arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use> </svg>
        </span>
      </header>
      <section>
        <div class="rate">
          <small class="rate-time">{{ ratings[0].rated_at }}</small>
          <img v-if="ratings[0].avatar != ''" class="rate-avatar" :src="ratings[0].avatar">
          <img v-else class="rate-avatar" src="~assets/avatar.png">
          <div class="rate-content">
            <h3 class="rate-username">{{ ratings[0].username }}</h3>
            <div>
              <svg style="display: none">
                <symbol id="star" viewBox="0 0 32 32">
                  <path class="path1"
                        d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                       ></path>
                </symbol>
              </svg>
              <p>
                <span>
                  <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
                  <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
                  <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
                  <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
                  <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
                </span>
                <span :style="{'width': ratings[0].rating_star * 20 + '%'}">
                  <svg class="gray-star"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
                  <svg class="gray-star"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
                  <svg class="gray-star"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
                  <svg class="gray-star"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
                  <svg class="gray-star"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
                </span>
              </p>
            </div>
            <span class="rate-rating"></span>
            <div v-if="ratings[0].rating_text != ''" class="rate-text">{{ ratings[0].rating_text }}</div>
            <div>
              <ul class="item-list">
                <template v-for="item in ratings[0].item_ratings">
                  <li>{{ item.food_name }}</li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section @click="viewRate" class="show-all-ratings"> 查看全部评价
        <svg class="arrow-right">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
        </svg>
      </section>
    </section>
    <section v-else>
      <h3>商家评价</h3>
      <div class="no-rating">暂无评价</div>
    </section>
    <section>
      <h3>活动与属性</h3>
      <div>
        <div v-for="activity in shop.activities" class="activity-wrap activity wrap">
          <i class="activity-icon" style="color: rgb(255, 255, 255);"
            :style="{'background-color': '#' + activity.icon_color, 'border-color': '#' + activity.icon_color}">
            {{ activity.icon_name }}</i>
          <span class="activity-description">
            <span>{{ activity.tips }}</span> <span>(APP专享)</span>
          </span>
        </div>
        <div v-for="support in shop.supports" class="activity-wrap activity wrap">
          <i class="activity-icon" style="color: rgb(255, 255, 255);"
            :style="{'background-color': '#' + support.icon_color, 'border-color': '#' + support.icon_color}">
            {{ support.icon_name }}</i>
          <span class="activity-description">
            <span>{{ support.description }}</span> <span>(APP专享)</span>
          </span>
        </div>
      </div>
    </section>
    <section>
      <h3>商家信息</h3>
      <ul>
        <li></li>
        <li>地址：{{ shop.address }}</li>
        <li>营业时间：{{ shop.opening_hours[0].replace('/', '-') }}</li>
        <li> 营业执照
          <svg class="arrow-right">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
          </svg>
        </li>
        <li> 餐饮服务许可证
          <svg class="arrow-right">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
          </svg>
        </li>
      </ul>
      <div></div>
    </section>
  </div>
</template>
<style scoped>
  /*  rating  */
  p {
    position: relative;
    margin: 0;
    width: 1.466667rem;
    height: 0.293333rem;
    white-space: nowrap;
  }
  p span {
    position: absolute;
    top: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  p span svg {
    width: 0.266667rem;
    height: 0.266667rem;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    display: block;
    fill: #d1d1d1;
  }
  svg:not(:last-child) {
    margin-right: 0.026667rem;
  }
  span:last-child {
    overflow: hidden;
  }
  .gray-star {
    fill: #ff9a0d;
  }
</style>
<style scoped>
  /*  shop-info  */
  .shop-info {
    padding-top: .266667rem;
    background-color: #eee;
    font-size: .346667rem;
  }
  .shop-info > section {
    margin-bottom: 0.266667rem;
    padding: 0 0.4rem 0.4rem 0.4rem;
    font-size: 0.346667rem;
    background-color: #fff;
    color: #666;
  }
  .shop-info > section > h3,
  .shop-info > section > header {
    margin: 0 -0.4rem;
    padding: 0.213333rem 0.4rem;
    border-bottom: 1px solid #eee;
    color: #333;
    font-weight: normal;
    font-size: 0.4rem;
    line-height: 0.6rem;
  }
  .shop-info .arrow-right {
    width: 0.4rem;
    height: 0.4rem;
    fill: #ccc;
    vertical-align: middle;
  }
</style>
<style scoped>
  /*  shop-info-rating  */
  .no-rating {
    padding-top: 0.4rem;
  }
  .shopinfo-rating section {
    padding: 0.4rem 0;
  }
  .shopinfo-rating section:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
  .shopinfo-rating section:last-child {
    padding-bottom: 0;
  }
  .overall {
    color: #ff6000;
    font-size: 0.4rem;
    font-weight: bold;
  }
  .compare {
    font-size: 0.346667rem;
    color: #333;
  }
  .rating-count {
    float: right;
    font-size: 0.346667rem;
    color: #999;
  }
  .show-all-ratings {
    font-size: 0.346667rem;
    color: #999;
    text-align: center;
  }
  .show-all-ratings svg {
    fill: #999;
  }
</style>
<style scoped>
  /*  shop-info-notice  */
  .activity:not(:last-child) {
    margin: 0.4rem 0;
  }
  /*  shop-info-detail  */
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    padding: 0.4rem 0;
    /* åˆ†å‰²çº¿å»¶ä¼¸åˆ°å±å¹•å³è¾¹ç¼˜ */
    margin-right: -0.4rem;
  }
  li:not(:first-child) {
    border-top: 1px solid #ddd;
  }
  li:last-child {
    padding-bottom: 0;
  }
  li .arrow-right {
    position: absolute;
    right: 0.4rem;
  }
  .license-modal {
    height: 100%;
    background-color: #000;
    -webkit-background-size: contain;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
<style>
  /*  rating-block  */
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .rate {
    position: relative;
    padding-left: 1.2rem;
  }
  .rate-text {
    color: #333;
    font-size: 0.373333rem;
    margin: 0.213333rem 0;
  }
  .rate-avatar {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.8rem;
    height: 0.8rem;
    -webkit-border-radius: 50%;
    border-radius: 50%;
  }
  .rate-time {
    position: absolute;
    top: 0.133333rem;
    right: 0;
    font-size: 0.32rem;
    color: #999;
  }
  .rate-content {
    font-size: 0.346667rem;
  }
  .rate-username {
    font-size: 0.346667rem;
    margin-top: 0;
    margin-bottom: 0.133333rem;
    color: #666;
  }
  .rate-rating {
    font-size: 0.333333rem;
    color: #999;
    vertical-align: middle;
  }
  .rate-reply {
    position: relative;
    margin: 0.266667rem 0;
    padding: 0.266667rem;
    background: #f3f3f3;
    -webkit-border-radius: 0.106667rem;
    border-radius: 0.106667rem;
  }
  .rate-reply::after {
    content: ' ';
    position: absolute;
    bottom: 100%;
    left: 0.4rem;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0.213333rem 0.213333rem 0.213333rem;
    border-color: transparent transparent #f3f3f3 transparent;
  }
  .item-list li {
    display: inline-block;
    font-size: 0.293333rem;
    color: #999;
    border: 1px solid #ddd;
    padding: 0.106667rem 0.266667rem;
    margin: 0.093333rem;
    -webkit-border-radius: 0.08rem;
    border-radius: 0.08rem;
    max-width: 1.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .rate-images li {
    display: inline-block;
    margin: 0.133333rem;
  }
  .rate-images img {
    width: 1.893333rem;
    height: 1.893333rem;
  }
</style>
<script>
  export default{
    data () {
      return {
        ratingScores: {}, //  商家评分信息
        ratings: [], // 商家评价信息
      }
    },
    computed: {
      shop(){
        return this.$store.state.shop
      }
    },
    methods: {
      getRatingScores(){ // 获取商家评分评价信息
        this.$http({url: 'eleme_api.php', params: {api_str: 'ugc/v2/restaurants/'+ this.$route.params.shopId +'/ratings/scores'}}).then(function (res) {
          this.ratingScores = res.data
        })
      },
      getRatings(){ // 获取商家最新一条评价
        this.$http({url: 'eleme_api.php', params: {api_str: 'ugc/v2/restaurants/'+ this.$route.params.shopId +'/ratings?has_content=1&limit=1'}}).then(function (res) {
          this.ratings = res.data
        })
      },
      viewRate(){ //  显示评价页
        this.$emit('rate')
      }
    },
    created () {
      this.getRatingScores();
      this.getRatings();
    },
    components: {
    }
  }
</script>
