<template>
  <div class="index">
    <header class="index-3O8rT">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           style="position:absolute;width:0;height:0">
        <defs>
          <symbol viewBox="0 0 26 31" id="location">
            <path fill="#FFF" fill-rule="evenodd"
                  d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path>
          </symbol>
        </defs>
      </svg>
      <div class="index-MAORp">
        <div class="index-3vsmj">
          <svg class="index-3guVd"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
          </svg>
          <span class="index-1cnKa">龙华区民治大道(沙元埔民治大道南)</span>
          <svg class="index-9eIfV"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"></use>
          </svg>
        </div>
        <aside v-if="weather != null" class="index-2LvmP">
          <div>
            <h2 class="index-17uRU">{{ weather.temperature }}°</h2>
            <p class="index-3-P-K">{{ weather.description }}</p>
          </div>
          <img alt="天气图标" class="index-wRPUE" :src="weather.image_hash | transformImgUrl(1) + '?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/'">
        </aside>
      </div>
      <a><input type="text" placeholder="搜索商家、商品" aria-label="搜索商家、商品" class="index-20Oji"></a>
      <div v-if="hotSearchWords.length !== 0" class="index-6hVEQ">
        <template v-for="(item, index) in hotSearchWords">
          <a>{{ item.word }}</a>
        </template>
      </div>
    </header>
    <my-swipe :foods="banner"></my-swipe>
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
    <footer-tab></footer-tab>
    <back-to-top v-show="showBack"></back-to-top>
  </div>
</template>
<style scoped>
  /*  头部样式-start  */
  .index-3O8rT {
    box-sizing: border-box;
    padding: .266667rem .373333rem;
    background-color: #0096ff;
    color: #fff;
    height: 3.253333rem;
  }
  .index-MAORp {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: .92rem;
  }
  .index-3vsmj, .index-MAORp {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .index-3vsmj {
    width: 60%;
  }
  .index-3guVd {
    width: .346667rem;
    height: .413333rem;
    fill: #fff;
  }
  .index-1cnKa {
    margin: 0 .133333rem;
    font-size: .48rem;
    max-width: 80%;
    white-space: nowrap;
    overflow: hidden;
  }
  .index-9eIfV {
    width: .186667rem;
    height: .093333rem;
    fill: #fff;
  }
  .index-2LvmP {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .index-17uRU {
    font-size: .373333rem;
  }
  .index-3-P-K {
    font-size: .266667rem;
  }
  .index-wRPUE {
    margin-left: .106667rem;
    width: .733333rem;
    height: .733333rem;
  }
  .index-20Oji {
    display: block;
    margin: .2rem 0;
    width: 100%;
    height: .96rem;
    text-align: center;
    border-radius: .96rem;
    box-shadow: 0 0.026667rem 0.066667rem 0 rgba(0,0,0,.2);
    color: #333;
    font-size: .346667rem;
  }
  .index-6hVEQ {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    white-space: nowrap;
    overflow-x: auto;
  }
  .index-6hVEQ a {
    color: currentColor;
  }
  .index-6hVEQ a:not(:last-child) {
    margin-right: .4rem;
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
  import FooterTab from './common/FooterTab.vue'
  import BackToTop from './common/BackToTop.vue'

  export default{
    data () {
      return {
        //  地理位置信息
        latitude: null,
        longitude: null,
        location: {}, // 当前地理位置信息
        currentPage: 1, // 分页页码
        limit: 20, //  分页限制
        shopList: [], // 附近商家列表
        busy: false, // 网络请求状态
        showBack: false, // 是否显示回到顶部按钮
        scrollHeight: 0, // 当前滚动高度
        timer: null, // 滚动时设定的定时器
        weather: null, // 天气
        hotSearchWords: [], // 热搜词
        banner: [] // banner数据
      }
    },
    computed: {
      offset(){
        // 分页偏移量
        return (this.currentPage - 1) * this.limit
      },
      name(){ //  已经选择的城市名称
        return this.$store.state.name
      }
    },
    methods: {
      loadMore(){
        this.busy = true
        var params = {
          action: 'shop_list'
        }
        params.latitude = this.location.latitude
        params.longitude = this.location.longitude
        params.offset = this.offset
        params.limit = this.limit
        this.$http({url: 'eleme_api.php', params: params}).then(function (res) {
          this.currentPage ++;
          this.shopList = this.shopList.concat(res.data)
          this.busy = false
        })
      },
      getLocation () { // 获取用户地理位置信息
        return new Promise(function (resolve, reject) {
          window.navigator.geolocation.getCurrentPosition(function (position) {
            resolve(position)
          }, function (error) {
            reject(error)
          })
        })
      },
      getLocationDetail (position) {
        this.$http({url: 'eleme_api.php', params: {action: 'location', latitude: position.coords.latitude, longitude: position.coords.longitude}}).then(function (res) {
          this.location = res.data
          this.latitude = res.data.latitude
          this.longitude = res.data.longitude
          this.$store.commit('setLocation', res.data)
          this.getWeather()
          this.getHotSearchWords()
          this.getBanner()
          this.loadMore()
        })
      },
      getWeather () {
        var params = {
          action: 'weather'
        }
        params.latitude = this.latitude
        params.longitude = this.longitude
        this.$http({url: 'eleme_api.php', params: params}).then(function (res) {
          this.weather = res.data
        })
      },
      getHotSearchWords () {
        var params = {
          action: 'hot_search_words'
        }
        params.latitude = this.latitude
        params.longitude = this.longitude
        this.$http({url: 'eleme_api.php', params: params}).then(function (res) {
          this.hotSearchWords = res.data
        })
      },
      getBanner () {
        var params = {
          action: 'swipe'
        }
        params.geohash = this.location.geohash
        this.$http({url: 'eleme_api.php', params: params}).then(function (res) {
          this.banner = res.data
        })
      },
      gotoSearch(){ //  跳转搜素界面
        this.$router.push({
          name: 'search',
          params: {
            geohash: this.location.geohash
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
      this.getLocation().then((position) => {
        this.getLocationDetail(position)
      }).catch(function (error) {
        window.alert('无法获取到用户信息')
        console.log(error)
      })
      window.addEventListener('scroll', this.scrollHandler)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.scrollHandler)
    },
    components: {
      mySwipe, shopItem, FooterTab, BackToTop
    }
  }
</script>
