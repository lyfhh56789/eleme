<template>
    <header class="ElemeHeader-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           style="position:absolute;width:0;height:0">
        <defs>
          <symbol viewBox="0 0 20 32" id="arrow-left">
            <path fill="#fff" d="M16.552 5.633L14.508 3.59 2.243 15.853 14.508 28.41l2.044-2.043-10.22-10.513z"></path>
          </symbol>
        </defs>
      </svg>
      <div class="ElemeHeader-wrapper ElemeHeader-fixed"
           style="background: rgb(0, 151, 255); z-index: 8844;">
        <div @click="goBack" class="ElemeHeader-left">
          <svg>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
          </svg>
        </div>
        <h1 class="ElemeHeader-center">{{ title }}</h1>
        <span v-if="this.$route.name === 'login'" @click="changeLoginMethod" class="App-3QabC">{{ unUseLoginMethod }}</span>
      </div>
    </header>
</template>
<style scoped>
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
  .App-3QabC {
    padding: 0 .4rem;
    font-size: .4rem;
  }
</style>
<script>
  export default{
    props: {
      title: {
        type: String,
        required: true
      },
      unUseLoginMethod: String
    },
    methods: {
      goBack(){ //  路由回退
        this.$router.back()
      },
      changeLoginMethod () { // 切换登录方式
        this.$emit('changeLoginMethod')
      }
    }
  }
</script>
