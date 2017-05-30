<template>
    <div class="order">
      <e-header title="订单"></e-header>
      <section class="nodatatipWrap NoDataTip-wrapper" img="no-log">
        <img src="../../assets/error-load.png"> <h3>登录后查看外卖订单</h3><button @click="toLogin">
        立即登录
      </button>
      </section>
      <footer-tab></footer-tab>
    </div>
</template>
<style scoped>
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
  import EHeader from '../common/EHeader.vue'
  import FooterTab from '../common/FooterTab.vue'

  export default{
    methods: {
      toLogin () {
        this.$router.push({
          name: 'login'
        })
      }
    },
    components: {
      EHeader, FooterTab
    }
  }
</script>
