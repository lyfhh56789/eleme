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
  </div>
</template>
<style scoped>
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
</style>
<script>
  import mySwipe from './index/mySwipe.vue'
  export default{
    data () {
      return {
      }
    },
    methods: {
    },
    mounted () {
    },
    components: {
      mySwipe
    }
  }
</script>
