<template>
  <div class="loading">
    <div class="k-ball-a"></div>
    <div class="k-ball-b"></div>
    <div class="k-ball-c"></div>
    <div class="k-ball-d"></div>
  </div>
</template>
<style scoped>
  .loading {
    position: fixed;
    width: 1.1733333rem;
    height: 1.1733333rem;
    top: 50%;
    left: 50%;
    z-index: 9999;
    transform: translate3d(-50%, -50%, 0);
  }
  .k-ball-a,
  .k-ball-b,
  .k-ball-c,
  .k-ball-d
  {
    border:0;
    margin:0;
    width: 0.4266667rem;
    height: 0.4266667rem;
    position:absolute;
    border-radius:50%;
  }
  .k-ball-a {
    border:0;
    margin:0;
    width: 0.4266667rem;
    height: 0.4266667rem;
    position:absolute;
    border-radius:50%;
    animation:k-loadingO 2s ease infinite;
    background:#19A68C;
    animation-delay:-1.5s
  }
  .k-ball-b {
    animation:k-loadingO 2s ease infinite;
    background:#F63D3A;
    animation-delay:-1s
  }
  .k-ball-c {
    animation:k-loadingO 2s ease infinite;
    background:#FDA543;
    animation-delay:-0.5s
  }
  .k-ball-d {
    animation:k-loadingO 2s ease infinite;
    background:#193B48
  }
  @keyframes k-loadingO {
    0%,100% {
      transform:translate(0)
    }
    25% {
      transform:translate(160%)
    }
    50% {
      transform:translate(160%,160%)
    }
    75% {
      transform:translate(0,160%)
    }
  }
</style>
<script>
  export default{
    data () {
      return {}
    },
    methods: {},
    created () {
    },
    components: {}
  }
</script>
