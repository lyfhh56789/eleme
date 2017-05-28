<template>
  <div @click="backToTop" class="BackTop-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         style="position:absolute;width:0;height:0">
      <defs>
        <symbol viewBox="0 0 1024 1024" id="back-top" class="icon">
          <path
            d="M109.078 75.5h805.846v134.308H109.076s0-134.308.002-134.308zm805.846 604.384H713.462V948.5H310.538V679.884H109.076L512 276.962l402.924 402.922z"></path>
        </symbol>
      </defs>
    </svg>
    <svg class="BackTop-icon">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#back-top"></use>
    </svg>
  </div>
</template>
<style scoped>
  .BackTop-wrapper {
    position: fixed;
    right: .4rem;
    bottom: 2rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 1.133333rem;
    height: 1.133333rem;
    border: 1px solid #999;
    border-radius: 50%;
    background: #fff;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
  }
  .BackTop-icon {
    display: block;
    width: .533333rem;
    height: .533333rem;
    fill: #999;
  }
</style>
<script>
  export default{
    methods: {
      backToTop () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>
