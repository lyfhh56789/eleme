<template>
  <div>
    <svg style="display: none">
      <symbol id="star" viewBox="0 0 32 32">
        <path class="path1"
              d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
             ></path>
      </symbol>
    </svg>
    <p>
      <span>
        <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
        <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
        <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
        <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
        <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
      </span>
      <span :style="{'width': rating * 20 + '%'}">
        <svg class="gray-star"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
        <svg class="gray-star"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
        <svg class="gray-star"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
        <svg class="gray-star"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
        <svg class="gray-star"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use></svg>
      </span>
    </p>
  </div>
</template>
<style scoped>
  div {
    display: inline-block;
    vertical-align: middle;
  }
  p {
    position: relative;
    margin: 0;
    width: 1.466667rem;
    height: 0.293333rem;
    white-space: nowrap;
  }
  span {
    position: absolute;
    top: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  svg {
    width: 0.266667rem;
    height: 0.266667rem;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    display: block;
    fill: #d1d1d1;
  }
  svg:not(:last-child) {
    margin-right: 0.026667rem;
  }
  span:last-child {
    overflow: hidden;
  }
  .gray-star {
    fill: #ff9a0d;
  }
</style>
<script>
  export default{
    props: {
      rating: {
        type: [Number, String],
        default: 0
      }
    }
  }
</script>
