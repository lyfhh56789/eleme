<template>
  <transition name="fade">
    <div class="vue-wrapper">
      <div class="content">
        <div class="shopheader-noticemodal">
          <h2 class="shopheader-noticemodal-name">{{ shop.name }}</h2>
          <h2>
            <div class="shopheader-noticemodal-rating">
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
                <span :style="{'width': shop.rating * 20 + '%'}">
                  <svg class="gray-star"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
                  <svg class="gray-star"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
                  <svg class="gray-star"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
                  <svg class="gray-star"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
                  <svg class="gray-star"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
                </span>
                </p>
              </div>
            </div>
          </h2>
          <h3><span>优惠信息</span></h3>
          <ul class="shopheader-activity">
            <li v-for="activity in shop.activities">
              <div class="activity-wrap wrap">
                <i class="activity-icon" style="color: rgb(255, 255, 255);"
                  :style="{'background-color': '#' + activity.icon_color, 'border-color': '#' + activity.icon_color}">
                  {{ activity.icon_name }}
                </i>
              <span class="activity-description">
                <span>{{ activity.description }}</span> <span>(APP专享)</span>
              </span>
              </div>
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
      </div>
    </div>
  </transition>
</template>
<style scoped>
  /*  星星的公共样式-start */
  div {
    display: inline-block;
    vertical-align: middle;
  }
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
  svg {
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
  /*  星星的公共样式-end */
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
    -webkit-transform: scale(.3);
    transform: scale(.3);
  }
  .shopheader-activity li {
    margin-bottom: 0.333333rem;
  }
  /*  from shopactive.vue.style-start  */
  .activity-wrap {
    line-height: 0.426667rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .activity-wrap.wrap .activity-icon {
    margin-top: 0.04rem;
  }
  .activity-wrap.nowrap {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    -ms-grid-row-align: center;
    align-items: center;
  }
  .activity-wrap.nowrap .icononly {
    margin-left: 0.066667rem;
  }
  .activity-wrap.nowrap .activity-description {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .activity-description {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
  }
  .activity-icon {
    margin-right: 0.133333rem;
    font-size: 0.266667rem;
    font-style: normal;
    line-height: 1;
    height: 0.346667rem;
    padding: 0.04rem;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid;
    -webkit-border-radius: 0.04rem;
    border-radius: 0.04rem;
  }
  .activity-icon.icononly {
    margin-right: 0;
  }
  /*  from shopactive.vue.style-end  */
</style>
<script>
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
        this.$emit('close')
      },
    },
    created () {
    },
    components: {
    }
  }
</script>
