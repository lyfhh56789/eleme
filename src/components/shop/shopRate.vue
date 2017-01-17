<template>
  <transition name="slide-right">
    <wrapper :has-header="true">
      <span slot="title">评价</span>
      <div slot="content" class="shop-rate">
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
            <tags @tag="tagChange" :tags="tags"></tags>
          </div>
          <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
            <li v-for="rate in ratings">
              <rate :rate="rate"></rate>
            </li>
          </ul>
        </section>
      </div>
    </wrapper>
  </transition>
</template>
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
<script>
  import wrapper from '../common/wrapper.vue'
  import rate from '../common/rate.vue'
  import ratingStar from '../common/ratingStar.vue'
  import tags from '../common/tags.vue'
  export default{
    data () {
      return {
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
      },
      tag(){
        return this.$store.state.tag
      },
      tags(){
        return this.$store.state.tags
      }
    },
    methods: {
      historyBack(){ //  模拟浏览器回退事件
        window.history.back()
        this.$store.commit('setShowActive', false)
      },
      getUrl(){
        var tagName;
        tagName = this.tag.name === undefined ? '全部': this.tag.name
        var url = 'ugc/v2/restaurants/'+ this.$route.params.shopId +'/ratings?has_content=true&tag_name='+ tagName +'&offset='+ this.offset +'&limit='+ this.limit
        return url
      },
      loadData(){
        var url = this.getUrl()
        this.busy = true
        this.$http({url: 'eleme_api.php', params: {api_str: encodeURI(url)}}).then(function (res) {
          this.ratings = res.data
          this.busy = false
          this.page = 1
        })
      },
      loadMore(){
        var url = this.getUrl()
        this.busy = true
        this.page ++;
        this.$http({url: 'eleme_api.php', params: {api_str: encodeURI(url)}}).then(function (res) {
          if (res.data.length < this.limit){ // 数据量少于limit，说明后续没有数据了
            return
          }
          this.busy = false
          this.ratings = this.ratings.concat(res.data)
        })
      },
      tagChange(tag){ //  分类标签显示评论
        this.$store.commit('setTag', tag)
        this.loadData()
      }
    },
    created () {
      this.loadData();
    },
    components: {
      wrapper, rate, ratingStar, tags
    }
  }
</script>
