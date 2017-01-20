<template>
  <transition name="fade">
    <wrapper>
      <template slot="content">
        <div class="shopheader-noticemodal">
          <h2 class="shopheader-noticemodal-name">{{ shop.name }}</h2>
          <h2>
            <div class="shopheader-noticemodal-rating">
              <rating-star :rating="shop.rating"></rating-star>
            </div>
          </h2>
          <h3><span>优惠信息</span></h3>
          <ul class="shopheader-activity">
            <li v-for="activity in shop.activities">
              <shop-activity :activity="activity" type="activity"></shop-activity>
            </li>
          </ul>
          <h3><span>商家公告</span></h3>
          <div class="shopheader-noticemodal-notice">{{ shop.promotion_info }}</div>
        </div>
        <div @click="closeNotice" class="shopheader-noticemodal-close">
          <svg>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#res-x"></use>
          </svg>
        </div>
      </template>
    </wrapper>
  </transition>
</template>
<style scoped>
  .shopheader-noticemodal {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* æ”¹ç”¨ border æ–¹ä¾¿å¤„ç† overflow */
    /* padding: 80px 60px 180px 60px; */
    border: 0.8rem solid transparent;
    border-top-width: 1.066667rem;
    border-bottom-width: 2.4rem;
    overflow: auto;
    background-color: #262626;
    color: #fff;
    -webkit-backdrop-filter: saturate(500%) blur(0.666667rem);
    backdrop-filter: saturate(500%) blur(0.666667rem);
  }
  /* no */
  .shopheader-noticemodal h2 {
    text-align: center;
    font-size: 1.5em;
  }
  .shopheader-noticemodal h3 {
    text-align: center;
    margin: 0.8rem 0 0.533333rem;
    background-image: -webkit-gradient(linear, left top, right top, from(#555));
    background-image: -webkit-linear-gradient(left, #555);
    background-image: linear-gradient(to right, #555);
    background-position: center;
    -webkit-background-size: 100% 0.013333rem;
    background-size: 100% 1px;
    background-repeat: no-repeat;
  }
  .shopheader-noticemodal h3 span {
    font-size: 0.32rem;
    padding: 0.133333rem 0.266667rem;
    -webkit-border-radius: 0.666667rem;
    border-radius: 0.666667rem;
    border: 1px solid #555;
    background-color: #262626;
  }
  .shopheader-noticemodal-rating {
    display: inline-block;
    -webkit-transform: scale(2);
    transform: scale(2);
  }
  .shopheader-noticemodal-info {
    position: relative;
    color: #ff6000;
    font-size: 0.373333rem;
    line-height: 0.48rem;
    padding-bottom: 0.666667rem;
    margin-bottom: 0.666667rem;
  }
  .shopheader-noticemodal-info::after {
    content: "";
    position: absolute;
    border-bottom: 1px solid #ddd;
    width: 90%;
    left: 5%;
    bottom: 0;
  }
  .shopheader-noticemodal-close {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0.666667rem;
    margin: auto;
    width: 1.2rem;
    height: 1.2rem;
    border: 1px solid #888;
    -webkit-border-radius: 50%;
    border-radius: 50%;
  }
  .shopheader-noticemodal-close svg {
    fill: #fff;
    width: 100%;
    height: 100%;
    -webkit-transform: scale3d(.3, .3, 1);
    transform: scale3d(.3, .3, 1);
  }
  .shopheader-activity li {
    margin-bottom: 0.333333rem;
  }
</style>
<script>
  import wrapper from '../common/wrapper.vue'
  import ratingStar from '../common/ratingStar.vue'
  import shopActivity from '../common/shopActivity.vue'
  export default{
    props: {
      shop: Object,
    },
    data () {
      return {
      }
    },
    methods: {
      closeNotice(){
        window.history.back()
        this.$store.commit('setShowActive', false)
      },
    },
    created () {
    },
    components: {
      wrapper, ratingStar, shopActivity
    }
  }
</script>
