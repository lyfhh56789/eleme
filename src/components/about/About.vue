<template>
    <div class="about">
      <e-header title="关于我"></e-header>
      <div class="App-2KuIB">
        <h3 class="AboutUs-2YDNe">个人信息</h3>
        <div class="AboutUs-2lRsg">
          <section class="AboutUs-386J3"><span class="AboutUs-10s9V">昵称</span><span class="AboutUs-2UI3Z">Kurt</span></section>
          <section class="AboutUs-386J3"><span class="AboutUs-10s9V">职业</span><span class="AboutUs-2UI3Z">专注前端的全栈</span></section>
          <section class="AboutUs-386J3"><span class="AboutUs-10s9V">邮箱</span><span class="AboutUs-2UI3Z">474224024@qq.com</span></section></div>
          <section class="AboutUs-386J3"><span class="AboutUs-10s9V">GitHub</span><span class="AboutUs-2UI3Z AboutUs-github"><a href="https://github.com/guojingfeng1994">https://github.com/guojingfeng1994</a></span></section>
      </div>
    </div>
</template>
<style scoped>
  section {
    box-sizing: border-box;
  }
  .App-2KuIB {
    max-width: 12rem;
    margin: 0 auto;
    flex-grow: 1;
    margin-top: .4rem;
  }
  .AboutUs-2YDNe {
    margin-bottom: .133333rem;
    padding-left: .4rem;
    color: #999;
    font-size: .346667rem;
  }
  .AboutUs-2lRsg {
    border-top: 1px solid #ddd;
  }
  .AboutUs-386J3 {
    display: flex;
    align-items: center;
    padding: .32rem .4rem;
    min-height: 1.2rem;
    border-bottom: 1px solid #ddd;
    background: #fff;
    font-size: .4rem;
  }
  .AboutUs-10s9V {
    flex-shrink: 0;
    display: block;
    color: #666;
  }
  .AboutUs-2UI3Z {
    margin-left: 1.333333rem;
    color: #333;
    line-height: .56rem;
  }
  .AboutUs-github {
    margin-left: .96rem;
  }
</style>
<script>
  import EHeader from '../common/EHeader.vue'

  export default{
    components: {
      EHeader
    }
  }
</script>
