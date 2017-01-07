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
        <rate :rate="ratings[0]"></rate>
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
        <template v-for="activity in shop.activities">
          <shop-activity :activity="activity" type="activity" class="activity"></shop-activity>
        </template>
        <template v-for="support in shop.supports">
          <shop-activity :activity="support" type="support" class="activity"></shop-activity>
        </template>
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
<script>
  import rate from '../common/rate.vue'
  import shopActivity from '../common/shopActivity.vue'
  export default{
    data () {
      return {
        ratings: [], // 商家评价信息
      }
    },
    computed: {
      shop(){
        return this.$store.state.shop
      },
      ratingScores(){ //  商家评分信息
        return this.$store.state.ratingScores
      }
    },
    methods: {
      getRatings(){ // 获取商家最新一条评价
        this.$http({url: 'eleme_api.php', params: {api_str: 'ugc/v2/restaurants/'+ this.$route.params.shopId +'/ratings?has_content=1&limit=1'}}).then(function (res) {
          this.ratings = res.data
        })
      },
      viewRate(){ //  显示评价页
        window.history.pushState({rate: true}, document.title)
        this.$store.commit('setShowRate', true)
      }
    },
    created () {
      this.getRatings();
    },
    components: {
      rate, shopActivity
    }
  }
</script>
