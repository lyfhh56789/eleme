<template>
  <div class="index">
    <header class="eleme-header" style="width: 100%; top: 0px; z-index: 1000;">
      <div @click="gotoSearch">
        <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use></svg>
      </div>
      <div class="center">
        <router-link :to="{path: '/city'}">
          <span>{{ name || '上海商学院(奉浦校区)' }}</span>
        </router-link>
      </div>
      <div>登录</div>
    </header>
    <my-swipe></my-swipe>
    <h3 class="index-title">
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shop"></use>
      </svg>
      <span>附近商家</span>
    </h3>
    <section v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="60" class="shoplist">
      <shop-item v-for="item in shopList" :item="item"></shop-item>
    </section>
    <p class="index-loadmore"> <span>正在载入更多商家...</span> </p>
    <back-to-top v-show="showBack"></back-to-top>
  </div>
</template>
<style scoped>
  /*  头部样式-start  */
  .eleme-header {
    box-sizing: border-box;
    position: relative;
    padding: 0 .4rem;
    background-color: #3190e8;
    color: #fff;
    text-align: center;
    line-height: 1.173333rem;
    font-size: .466667rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .eleme-header a {
    color: #fff;
    padding: 0 .4rem;
  }
  .eleme-header svg {
    fill: #fff;
    width: .4rem;
    height: .44rem;
  }
  .eleme-header .center {
    position: absolute;
    left: 50%;
    top: 0;
    width: 50%;
    margin-left: -25%;
  }
  .eleme-header, .eleme-header .center {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /*  头部样式-end  */
  /*  列表标题样式-start  */
  .index-title {
    margin-top: .266667rem;
    line-height: .906667rem;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    color: #999;
    font-size: .346667rem;
    padding-left: .4rem;
  }
  .index-title svg {
    margin-right: .106667rem;
    width: .373333rem;
    height: .373333rem;
    fill: currentColor;
  }
  /*  列表标题样式-end  */
  /*  列表样式-start  */
  .shoplist {
    background-color: #fff;
  }
  /*  列表样式-end  */
  .index-loadmore {
    text-align: center;
    line-height: 3;
    color: #999;
  }
</style>
<script>
  import mySwipe from './index/mySwipe.vue'
  import shopItem from './common/shopItem.vue'
  import BackToTop from './common/BackToTop.vue'

  export default{
    data () {
      return {
        //  地理位置信息
        currentPage: 1, // 分页页码
        limit: 20, //  分页限制
        shopList: [], // 附近商家列表
        busy: false, // 网络请求状态
        showBack: false, // 是否显示回到顶部按钮
        scrollHeight: 0, // 当前滚动高度
        timer: null // 滚动时设定的定时器
      }
    },
    computed: {
      offset(){
        // 分页偏移量
        return (this.currentPage - 1) * this.limit
      },
      latitude(){ //  纬度
        return this.$store.state.latitude
      },
      longitude(){ // 经度
        return this.$store.state.longitude
      },
      name(){ //  已经选择的城市名称
        return this.$store.state.name
      },
      geohash(){
        return this.$store.state.geohash
      }
    },
    methods: {
      loadMore(){
        this.busy = true
        var params = {
          action: 'shop_list'
        }
        params.latitude = this.latitude
        params.longitude = this.longitude
        params.offset = this.offset
        params.limit = this.limit
        this.$http({url: 'eleme_api.php', params: params}).then(function (res) {
          this.currentPage ++;
          this.shopList = this.shopList.concat(res.data)
          this.busy = false
        })
      },
      gotoSearch(){ //  跳转搜素界面
        this.$router.push({
          name: 'search',
          params: {
            geohash: this.geohash
          }
        })
      },
      scrollHandler (e) { // 滚动检测
        if (this.timer != null) return
        this.timer = setTimeout(() => {
          document.body.scrollTop > this.$el.querySelector('.shoplist').offsetTop ? this.showBack = true : this.showBack = false
          this.timer = null
        }, 300)
      }
    },
    created () {
      window.addEventListener('scroll', this.scrollHandler)
    },
    mounted () {
      this.loadMore()
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.scrollHandler)
    },
    components: {
      mySwipe, shopItem, BackToTop
    }
  }
</script>
