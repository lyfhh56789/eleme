<template>
  <div class="search-place">
    <!--  SVG start here  -->
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; visibility: hidden;"><defs><symbol xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" viewBox="0 0 547 987" id="arrow-right"><title>Shape</title> <desc>Created with Sketch.</desc> <defs></defs> <g id="arrow-right_Page-1" stroke="none" stroke-width="1" type="MSPage"><path d="M0,931.973 L51.2,986.586 L546.133,491.653 L51.2,0.133 L4.26325641e-14,51.333 L440.32,491.653 L0,931.973 Z" id="arrow-right_Shape" type="MSShapeGroup"></path></g></symbol></defs></svg>
    <!--  SVG end here  -->
    <header class="flex eleme-header">
      <svg @click="historyBack" class="wrapper-back-arrow">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
      </svg>
      <span class="city-title">{{ cityName }}</span>
      <router-link :to="{path: '/city'}">
        <span style="color: #fff;">切换城市</span>
      </router-link>
    </header>
    <section class="search">
      <form class="geo-search">
        <input class="ui-input geo-search-input" @keydown.enter.prevent="getPlace" v-model="keyword" type="search" placeholder="输入学校、商务楼、地址" required="">
        <button class="ui-btn geo-search-btn" @click="getPlace">搜索</button>
      </form>
    </section>
    <section v-if="firstTimeIn && histories.length !==0" class="search-histories">
      <div class="geo-categ-title">
       <span>搜索历史</span>
      </div>
      <template v-for="item in histories">
        <li @click="setLocation(item)" class="geo-search-result">
          <a class="gsr-detail" href="javascipt:">
            <p class="spot">{{ item.name }}</p>
            <p class="address">{{ item.address }}</p></a>
        </li>
      </template>
    </section>
    <section class="search-results">
      <ul>
        <template v-for="item in results">
          <li @click="setLocation(item)" class="geo-search-result">
            <a class="gsr-detail" href="javascipt:">
              <p class="spot">{{ item.name }}</p>
              <p class="address">{{ item.address }}</p></a>
          </li>
        </template>
      </ul>
    </section>
    <div v-if="noResult" class="geo-search-empty">很抱歉！无搜索结果</div>
  </div>
</template>
<style scoped>
  svg {
    width: .466667rem;
    height: .466667rem;
  }
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
  /*  搜索框-start  */
  .geo-search {
    position: relative;
    padding: .3125rem;
    margin-top: .3125rem;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background: #fff;
    font-size: .5rem;
  }
  input.ui-input, p.ui-input, textarea.ui-textarea {
    box-sizing: border-box;
    display: block;
    margin-bottom: .3125rem;
    width: 100%;
    padding: .25rem .125rem;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: .0625rem;
  }
  .ui-btn {
    color: #fff;
  }
  .ui-btn {
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding: .3125rem 0;
    background: #3199e8;
    border: none;
    border-radius: .09375rem;
    text-align: center;
    cursor: pointer;
    -webkit-transition: color .4s;
    transition: color .4s;
  }
  /*  搜索框-end  */
  /*  搜索历史-start  */
  .geo-categ-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    padding: .09375rem .3125rem;
    background: #f2f2f2;
    color: #666;
    font: 400 .4375rem "Helvetica Neue","Microsoft Yahei",sans-serif;
    border-bottom: 1px solid #ddd;
  }
  .geo-search-result {
    padding: .3125rem;
    border-top: 1px solid #eee;
    display: block;
    color: #08c;
    background: #fff;
  }
  a.gsr-detail {
    color: #08c;
    display: block;
  }
  .gsr-detail>.spot {
    margin: 0;
    margin-bottom: .15625rem;
    font-size: .5rem;
    color: #333;
  }
  .gsr-detail>.address {
    margin: 0;
    color: #999;
  }
  /*  搜索历史-end  */
  .geo-search-empty {
    margin-top: .3125rem;
    padding: .3125rem;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background: #fff;
    color: #666;
  }
</style>
<script>
  export default{
    data () {
      return {
        currentPage: 1, // 分页页码
        limit: 20, //  分页限制
        keyword: '',
        firstTimeIn: true, //  首次进入搜索显示历史记录
        histories: [], //  搜索历史
        results: [], //  搜索结果列表
        noResult: false,
      }
    },
    computed: {
      offset(){
        // 分页偏移量
        return (this.currentPage - 1) * this.limit
      },
      cityName(){ //  已经选择的城市名称
        return this.$store.state.cityName
      }
    },
    methods: {
      getPlace(){
        var params = {
          action: 'search_city'
        }
        params.keyword = encodeURI(this.keyword)
        params.offset = this.offset
        params.limit = this.limit
        this.$http({url: 'eleme_api.php', params: params}).then(function (res) {
          if (res.data.length === 0) this.noResult = true;
          this.firstTimeIn = false
          this.results = res.data
          if (res.data[0]){
            this.histories.push(res.data[0])
            window.localStorage.setItem('searchPlaceHistory', JSON.stringify(this.histories))
          }
        })
      },
      setLocation(item){
        this.$store.commit('setLocation', item)
        this.$router.push({
          path: '/'
        })
      },
      historyBack(){ //  模拟浏览器回退事件
        window.history.back()
        this.$store.commit('setShowActive', false)
      }
    },
    created () {
      if (window.localStorage.getItem('searchPlaceHistory') !== null) this.histories = JSON.parse(window.localStorage.getItem('searchPlaceHistory'));
    }
  }
</script>
