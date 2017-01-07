<template>
  <div class="vue-wrapper">
    <header v-if="hasHeader">
      <svg @click="historyBack" class="wrapper-back-arrow">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
      </svg>
      <slot name="title"></slot>
    </header>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<style scoped>
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
  .slide-right-enter-active, .slide-right-leave-active {
    -webkit-transition: -webkit-transform .3s ease-out 100ms;
    transition: transform .3s ease-out 100ms;
  }
  .slide-right-enter, .slide-right-leave-active {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  .fade-enter-active, .fade-leave-active {
    -webkit-transition: opacity .3s ease-out 100ms;
    transition: opacity .3s ease-out 100ms;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
<script>
  export default{
    props: {
      hasHeader: {
        type: Boolean,
        default: false
      },
    },
    methods: {
      historyBack(){ //  模拟浏览器回退事件
        window.history.back()
        this.$store.commit('setShowActive', false)
      }
    }
  }
</script>
