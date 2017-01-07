<template>
  <div class="vue-wrapper slide-right-transition">
    <header>
      <svg @click="historyBack" class="wrapper-back-arrow">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
      </svg>
      <span>评价</span>
    </header>
    <div class="content">
      <div class="shop-rate">
        <section class="shop-rate-overview">
          <div class="col1">
            <strong class="overall-score">{{ ratingScores.overall_score.toFixed(1) }}</strong>
            <div>综合评价</div>
            <small class="compare-rating">{{ ratingScores.compare_rating > 0 ? '高于': '低于'}}周边商家{{ (ratingScores.compare_rating * 100).toFixed(1) + '%' }}</small>
          </div>
          <div class="col2">
            <div class="score-block">
              <span class="score-title">服务态度</span>
              <span class="score-content">
                <rating-star :rating="ratingScores.service_score.toFixed(1)"></rating-star>
                <span class="score-value">{{ ratingScores.service_score.toFixed(1) }}</span>
              </span>
            </div>
            <div class="score-block">
              <span class="score-title">菜品评价</span>
              <span class="score-content">
                <rating-star :rating="ratingScores.food_score.toFixed(1)"></rating-star>
                <span class="score-value">{{ ratingScores.food_score.toFixed(1) }}</span>
              </span>
            </div>
            <div class="score-block">
              <span class="score-title">送达时间</span>
              <small class="score-content"><span>{{ ratingScores.deliver_time }}分钟</span></small>
            </div>
          </div>
        </section>
        <section class="rate-section">
          <div class="rate-tags">
            <ul class="tag-list">
              <template v-for="(tag, index) in tags">
                <li :class="{'active': tagActive === index,'unsatisfied': tag.unsatisfied}">{{ tag.name + '(' + tag.count + ')' }}</li>
              </template>
            </ul>
          </div>
          <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
            <li v-for="rate in ratings">
              <rate :rate="rate"></rate>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
<style scoped>
  /*  公告容器样式-start  */
  .vue-wrapper {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: auto;
    z-index: 100;
    background-color: #fff;
  }
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    background-color: #2196f3;
    color: #fff;
    height: 1.333333rem;
    line-height: 1.333333rem;
    font-size: 0.533333rem;
    z-index: 999;
  }
  .content {
    padding-top: 1.333333rem;
    height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .wrapper-back-arrow {
    position: fixed;
    width: 0.533333rem;
    height: 0.533333rem;
    padding: 0.4rem;
    left: 0;
    top: 0;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    fill: #fff;
  }
  .slide-right-transition {
    -webkit-transition: -webkit-transform .3s ease-out 100ms;
    transition: -webkit-transform .3s ease-out 100ms;
    transition: transform .3s ease-out 100ms;
    transition: transform .3s ease-out 100ms, -webkit-transform .3s ease-out 100ms;
  }
  .slide-right-enter,
  .slide-right-leave {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  .fade {
    opacity: 1;
  }
  .fade-enter-active, .fade-leave-active {
    -webkit-transition: opacity .3s ease-out 100ms;
    transition: opacity .3s ease-out 100ms;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  /*  公告容器样式-end  */
</style>
<style scoped>
  /*  rate-overview */
  .shop-rate-overview {
    background-color: #fff;
    margin-bottom: 0.266667rem;
    padding: 0.4rem;
    font-size: 0.36rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #666;
  }
  .col1 {
    padding-right: 0.4rem;
    border-right: 1px solid #ddd;
    text-align: center;
    line-height: 1.5;
  }
  .col2 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    font-size: 0.373333rem;
    line-height: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .overall-score {
    font-size: 0.8rem;
    line-height: 1;
    font-weight: normal;
    color: #f60;
    display: block;
  }
  small {
    font-size: 0.266667rem;
    color: #999;
  }
  .score-block {
    width: 80%;
    margin: 0.133333rem 0;
  }
  .score-content {
    padding-left: 0.266667rem;
  }
  .score-value {
    color: #f60;
    padding-left: 0.266667rem;
  }
</style>
<style scoped>
  /*  shop-rate */
  a {
    text-decoration: none;
    color: #333;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul li {
    padding: 0.4rem 0;
    border-bottom: 1px solid #ddd;
  }
  .shop-rate {
    background-color: #eee;
  }
  .rate-section {
    background-color: #fff;
    padding: 0.4rem 0.32rem;
    font-size: 0.36rem;
  }
  .rate-tags {
    padding-bottom: 0.4rem;
    border-bottom: 1px solid #ddd;
  }
</style>
<style scoped>
  /*  rating-tags */
  .tag-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .tag-list li {
    display: inline-block;
    padding: 0.2rem;
    margin: 0.066667rem 0.133333rem;
    -webkit-border-radius: 0.133333rem;
    border-radius: 0.133333rem;
    color: #6d7885;
    background-color: #ebf5ff;
  }
  .tag-list li.unsatisfied {
    color: #aaa;
    background-color: #f5f5f5;
  }
  .tag-list li.active {
    color: #fff;
    background-color: #3190e8;
  }
  .tag-list li.unsatisfied.active {
    color: #fff;
    background-color: #ccc;
  }
</style>
<script>
  import rate from '../common/rate.vue'
  import ratingStar from '../common/ratingStar.vue'
  export default{
    data () {
      return {
        tags: [], //  标签
        tagActive: 0, //  激活标签
        ratings: [], //  评价列表
        busy: true,
        page: 1, //  分页信息
        limit: 10, //  分页信息
      }
    },
    computed: {
      offset(){
        return (this.page - 1) * this.limit
      },
      ratingScores(){ //  商家评分信息
        return this.$store.state.ratingScores
      }
    },
    methods: {
      historyBack(){ //  模拟浏览器回退事件
        window.history.back()
        this.$store.commit('setShowActive', false)
      },
      loadData(){
        this.$http({url: 'eleme_api.php', params: {api_str: 'ugc/v2/restaurants/'+ this.$route.params.shopId +'/ratings?has_content=true&tag_name=%E5%85%A8%E9%83%A8&offset='+ this.offset +'&limit='+ this.limit}}).then(function (res) {
          this.ratings = res.data
          this.busy = false
          this.page = 2 //  从第二页开始加载更多数据
        })
      },
      loadMore(){
        this.busy = true
        this.$http({url: 'eleme_api.php', params: {api_str: 'ugc/v2/restaurants/'+ this.$route.params.shopId +'/ratings?has_content=true&tag_name=%E5%85%A8%E9%83%A8&offset='+ this.offset +'&limit='+ this.limit}}).then(function (res) {
          if (res.data.length < this.limit){ // 数据量少于limit，说明后续没有数据了
            return
          }
          this.busy = false
          this.page ++;
          this.ratings = this.ratings.concat(res.data)
        })
      },
      getTags(){
        this.$http({url: 'eleme_api.php', params: {api_str: 'ugc/v2/restaurants/'+ this.$route.params.shopId +'/ratings/tags'}}).then(function (res) {
          this.tags = res.data
        })
      }
    },
    created () {
      this.getTags();
      this.loadData();
    },
    components: {
      rate, ratingStar
    }
  }
</script>
