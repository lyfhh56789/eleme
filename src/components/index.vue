<template>
  <div class="index">
    <header class="eleme-header" style="width: 100%; top: 0px; z-index: 1000;">
      <a slot="left">
        <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use></svg>
      </a>
      <div class="center"><span>龙岗区深圳信息职业技术学院</span></div>
      <a slot="right">登录</a>
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
  </div>
</template>
<style scoped>
  /*  头部样式-start  */
  .eleme-header {
    position: relative;
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
    color: inherit;
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
  export default{
    data () {
      return {
        //  地理位置信息
        latitude: 22.68403, //  纬度
        longitude: 114.21408, // 经度
        currentPage: 1, // 分页页码
        limit: 20, //  分页限制
        shopList: [], // 附近商家列表
        busy: false, // 网络请求状态
      }
    },
    computed: {
      offset(){
        // 分页偏移量
        return (this.currentPage - 1) * this.limit
      },
    },
    methods: {
      loadMore(){
        this.busy = true
        this.$http({url: 'eleme_api.php', params: {api_str: 'shopping/restaurants?latitude=' + this.latitude + '&longitude='+ this.longitude + '&offset='+ this.offset + '&limit='+ this.limit + '&extras[]: activities'}}).then(function (res) {
          this.currentPage ++;
          this.shopList = this.shopList.concat(res.data)
          this.busy = false
        })
      },
    },
    mounted () {
      this.loadMore()
    },
    components: {
      mySwipe, shopItem
    }
  }
</script>
