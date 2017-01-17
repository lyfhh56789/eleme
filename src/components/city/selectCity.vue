<template>
  <div class="city">
    <!--  SVG start here  -->
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; visibility: hidden;"><defs><symbol xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" viewBox="0 0 547 987" id="arrow-right"><title>Shape</title> <desc>Created with Sketch.</desc> <defs></defs> <g id="arrow-right_Page-1" stroke="none" stroke-width="1" type="MSPage"><path d="M0,931.973 L51.2,986.586 L546.133,491.653 L51.2,0.133 L4.26325641e-14,51.333 L440.32,491.653 L0,931.973 Z" id="arrow-right_Shape" type="MSShapeGroup"></path></g></symbol></defs></svg>
    <!--  SVG end here  -->
    <header class="flex eleme-header">
      <svg @click="historyBack" class="wrapper-back-arrow">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
      </svg>
      <span class="city-title">选择城市</span>
      <span class="eleme-logo"><i>ele.me</i></span>
    </header>
    <!--  不需要的猜测位置设定  -->
    <!--
    <section class="guess">
      <div class="geo-guess-wrapper">
        <div class="geo-guess">饿了么猜你在：
          <a class="geo-guess-addr guessed_addr"
             href="javascript:">广东省深圳市龙岗区龙翔大道2188号深圳信息职业技术学院北门</a>
        </div>
      </div>
    </section>
    -->
    <section class="default background-white">
      <h4 class="geo-title flex">当前定位城市：
        <small class="geo-title-note">定位不准时，请在城市列表中选择</small>
      </h4>
      <a class="flex geo-locate-city covered" href="javascript:">
        <span>上海</span>
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
        </svg>
      </a>
      <!--  不支持的城市，暂时还没有作用  -->
      <!--
        <div class="geo-locate-city uncovered hide">城市
          <small class="note">（城市还未覆盖）</small>
        </div>
      -->
    </section>
    <section class="hot background-white">
      <div class="geo-cities-wrapper">
        <h4 class="geo-title">热门城市</h4>
        <div class="flex geo-cities">
          <template v-for="item in hot">
            <a class="geo-city-hot" href="javascript:">{{ item.name }}</a>
          </template>
          </div>
      </div>
    </section>
    <section class="cities">
      <template v-for="(item, index) in groupSort">
        <div class="background-white geo-cities-wrapper">
          <h4 class="geo-title">
            <span>{{ item }}</span>
            <small v-if="index === 0" class="geo-title-note">（按字母排序）</small>
          </h4>
          <div class="flex geo-cities">
            <template v-for="city in group[item]">
              <a class="geo-city" href="javascript:">{{ city.name }}</a>
            </template>
          </div>
        </div>
      </template>
    </section>
  </div>
</template>
<style scoped>
  /*  通用的样式  */
  svg {
    width: .466667rem;
    height: .466667rem;
  }
  .flex {
    display: flex;
  }
  .background-white {
    background: #fff;
  }
  .default, .geo-cities-wrapper {
    margin-top: .3125rem;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  .geo-city, .geo-city-hot {
    box-sizing: border-box;
    width: 25%;
    height: 1.375rem;
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
    text-align: center;
    line-height: 1.375rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
<style scoped>
  .eleme-header {
    padding: 0 .4rem;
    background-color: #3190e8;
    color: #fff;
    line-height: 1.173333rem;
    font-size: .466667rem;
    text-align: center;
    align-items: center;
    justify-content: space-between;
  }
  .wrapper-back-arrow {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    fill: #fff;
  }
  .eleme-logo {
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: .5rem;
  }
  /*  猜测位置-start  */
  .geo-guess-wrapper {
    overflow: hidden;
    -webkit-transition: max-height .3s ease;
    transition: max-height .3s ease;
    max-height: 10rem;
  }
  .geo-guess {
    background: #fffeea;
    padding: .3125rem;
    border-bottom: 1px solid #ddd;
    font-size: .4375rem;
  }
  .geo-guess-addr {
    color: #ff6000;
    font-weight: 700;
  }
  /*  猜测位置-end  */
  /*  默认选择位置-start  */
  .geo-title {
    margin: 0;
    padding: .3125rem;
    border-bottom: 1px solid #eee;
    font: 400 .4375rem "Helvetica Neue","Microsoft Yahei",sans-serif;
    color: #666;
    justify-content: space-between;
    align-items: center;
  }
  .geo-title>.geo-title-note {
    color: #999;
    font-size: .3125rem;
  }
  .geo-locate-city {
    padding: .3125rem;
    justify-content: space-between;
    align-items: center;
    font: 700 .5625rem "Helvetica Neue","Microsoft Yahei",sans-serif;
    color: #08c;
  }
  .geo-locate-city>svg {
    fill: #ddd;
  }
  /*  默认选择位置-end  */
  /*  热门城市-start  */
  .geo-cities-wrapper {
    position: relative;
    border-bottom: none;
  }
  .geo-cities {
    flex-wrap: wrap;
  }
  .geo-city-hot {
    color: #08c;
  }
  .geo-city {
    color: #555;
  }
  /*  热门城市-end  */
</style>
<script>
  export default{
    data () {
      return {
        guess: {}, //  猜测城市
        hot: [], //  热门城市
        group: {}, //  城市对象数组
        groupSort: [], //  城市对象数组属性的排序
      }
    },
    methods: {
      loadData(type){
        this.$http({url: 'eleme_api.php', params: {api_str: 'v1/cities?type='+ type}}).then(function (res) {
          if (type === 'guess') this.guess = res.data;
          if (type === 'hot') this.hot = res.data;
          if (type === 'group'){
            //  对城市数组对象属性进行排序
            this.group = res.data;
            this.groupSort = Object.keys(res.data).sort()
          }
        })
      },
      historyBack(){ //  模拟浏览器回退事件
        window.history.back()
        this.$store.commit('setShowActive', false)
      }
    },
    created () {
      this.loadData('guess')
      this.loadData('hot')
      this.loadData('group')
    },
    components: {
    }
  }
</script>
