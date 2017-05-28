<template>
    <div class="order">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           style="position:absolute;width:0;height:0">
        <defs>
          <symbol viewBox="0 0 20 32" id="arrow-left">
            <path fill="#fff" d="M16.552 5.633L14.508 3.59 2.243 15.853 14.508 28.41l2.044-2.043-10.22-10.513z"></path>
          </symbol>
        </defs>
      </svg>
      <header class="ElemeHeader-wrapper">
        <div class="ElemeHeader-wrapper ElemeHeader-fixed"
             style="background: rgb(0, 151, 255); z-index: 8844;">
          <div class="ElemeHeader-left">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
            </svg>
          </div>
          <h1 class="ElemeHeader-center">订单</h1></div>
      </header>
      <section class="nodatatipWrap NoDataTip-wrapper" img="no-log">
        <img src="../../assets/error-load.png"> <h3>登录后查看外卖订单</h3><button>
        立即登录
      </button>
      </section>
      <footer-tab></footer-tab>
    </div>
</template>
<style scoped>
  /*  头部--start  */
  .ElemeHeader-wrapper {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    height: 1.173333rem;
    color: #fff;
    font-size: .48rem;
  }
  .ElemeHeader-wrapper.ElemeHeader-fixed {
    position: fixed;
    top: 0;
    left: 0;
  }
  .ElemeHeader-left {
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
    width: 1.173333rem;
    height: 1.173333rem;
  }
  .ElemeHeader-left svg {
    display: block;
    fill: #fff;
    width: .586667rem;
    height: .586667rem;
  }
  .ElemeHeader-center {
    position: absolute;
    top: 0;
    left: 50%;
    height: 1.173333rem;
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    font-size: 1em;
    line-height: 1.173333rem;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  /*  头部--end  */

  .NoDataTip-wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .nodatatipWrap {
    margin-top: 2.666667rem;
  }
  .NoDataTip-wrapper img {
    display: block;
    width: 4rem;
    height: 2.266667rem;
  }
  .NoDataTip-wrapper h3 {
    margin: .333333rem 0 .266667rem;
    color: #6a6a6a;
    font-weight: 400;
    font-size: .453333rem;
  }
  .NoDataTip-wrapper button {
    padding: .266667rem 0;
    width: 3.2rem;
    border: none;
    border-radius: .053333rem;
    background-color: #56d176;
    color: #fff;
    text-align: center;
    font-size: 1.2em;
    font-family: inherit;
  }
</style>
<script>
  import FooterTab from '../common/FooterTab.vue'

  export default{
    data () {
      return {}
    },
    methods: {},
    created () {
    },
    components: {
      FooterTab
    }
  }
</script>
