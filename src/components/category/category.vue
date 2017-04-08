<template>
  <div class="category">
    <!--SVG start here-->
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0;visibility:hidden"><defs><symbol viewBox="0 0 32 32" id="arrow-right"><path fill="#999" d="M26.055 16L10.118 32 6.45 28.142l12.205-12.269L5.944 3.92 9.865-.001z"></path></symbol><symbol viewBox="0 0 33 32" id="default"><path fill="#3b87c8" d="M13.374 29.064a.94.94 0 0 1-.941-.941V6.476l-7.285 6.899a.942.942 0 0 1-1.299-1.364l8.876-8.424a.94.94 0 0 1 1.59.681v23.855a.94.94 0 0 1-.941.941zM20.904 29.355h-.008a.94.94 0 0 1-.375-.078.943.943 0 0 1-.559-.86V3.944a.94.94 0 1 1 1.882 0v22.287l7.238-6.842a.94.94 0 0 1 1.289 1.366l-8.818 8.338a.943.943 0 0 1-.649.264z"></path></symbol><symbol viewBox="0 0 32 32" id="distance"><path fill="#2a9bd3" d="M15.884 31.236l-.042.001a.888.888 0 0 1-.59-.224l-7.91-7.91a7.548 7.548 0 0 1-.498-.471 12.752 12.752 0 0 1-3.747-9.045C3.097 6.523 8.824.796 15.888.796s12.791 5.727 12.791 12.791c0 3.532-1.432 6.73-3.747 9.045-.196.196-.409.391-.613.578l-7.813 7.804a.886.886 0 0 1-.589.223l-.035-.001zm0-28.667C9.818 2.59 4.908 7.513 4.908 13.582c0 3.023 1.218 5.762 3.19 7.752l.461.435 7.316 7.316 7.2-7.2q.284-.249.551-.516a10.977 10.977 0 0 0 3.225-7.787c0-6.066-4.905-10.987-10.965-11.013z"></path><path fill="#2a9bd3" d="M15.884 18.524a5.707 5.707 0 0 1-4.07-1.732l-.001-.001a5.76 5.76 0 1 1 4.119 1.734h-.05zm-2.817-2.942a3.982 3.982 0 1 0 0-5.626c-.726.717-1.175 1.713-1.175 2.813s.449 2.096 1.175 2.813z"></path></symbol><symbol viewBox="0 0 32 32" id="fengniao"><path fill="#27a9e1" d="M5.953 2.793s-.117 1.801.857 3.56c.361.255 10.458 6.218 10.458 6.218L5.953 2.794z"></path><path fill="#b8e5fa" d="M9.604.889s-.333 1.404.069 3.147c.254.307 7.801 8.116 7.801 8.116L9.604.889z"></path><path fill="#0089cf" d="M29.282 14.601l-4.861-.361s-.133-.001-.147-.226h-.002a2.652 2.652 0 0 0-2.978-2.357h-.003l-.011.001-.12.019-.004.001c-.432.075-1.812.374-3.038 1.285 0 0-.167.121-.421.33L2.665 6.043s3.254 8.665 12.207 11.98c-1.6 2.849-7.407 13.48-7.407 13.48l2.446-1.306s.775-2.853 1.884-4.957c.609-.936 1.211-.992 1.498-1.141.291-.151 3.707-.765 6.431-4.339.897-1.166 1.244-2.666 1.723-4.261.28-.061 3.008-.651 3.789-.718 1.068-.092 4.045-.181 4.045-.181z"></path><path fill="#0089cf" d="M7.392 17.849c-1.567-1.368-2.199-3.219-2.035-5.217-.232-.288-.45-.572-.654-.851-.484 2.903.555 4.854 2.176 6.269 1.538 1.342 3.635 1.85 5.466 1.577-1.674.109-3.563-.565-4.953-1.778z"></path><path fill="#0089cf" d="M12.345 19.628h.002zm-7.642-7.846c.204.279.421.563.654.851-.164 1.998.468 3.849 2.035 5.217 1.292 1.128 3.016 1.79 4.597 1.79.12 0 .238-.004.356-.011a6.554 6.554 0 0 1-.975.071c-1.568 0-3.22-.54-4.49-1.648-1.621-1.415-2.66-3.366-2.176-6.269z"></path></symbol><symbol viewBox="0 0 23 32" id="hot"><path fill="#f07373" d="M9.859 29.375c-3.489-.771-6.362-3.097-7.187-5.551-.882-2.623-1.029-6.873-.238-9.318l-1.727.037.001.002.001.004.004.01.011.029.038.091c.039.09.086.191.142.3.155.304.349.627.586.955a7.477 7.477 0 0 0 2.711 2.318c.583.153.583.153 1.087-.188.187-.263.187-.263.224-.39.028-.094.041-.176.05-.28.01-.109.016-.238.022-.47.063-2.219.162-3.38.562-4.943a10.05 10.05 0 0 1 .814-2.185c1.433-2.723 4.843-6.053 6.699-7.021l-1.325-.962c-.064.382-.127.992-.131 1.722-.008 1.252.169 2.393.616 3.329.261.547.525.968 1.132 1.862l.23.339c.86 1.281 1.161 1.986 1.069 2.653l-.009.125c.069.517.069.517.781.906.451-.026.451-.026.578-.104.144-.093.144-.093.19-.136.041-.037.079-.077.123-.125.068-.076.153-.178.245-.295.22-.279.458-.615.677-.963.648-1.028 1.045-1.988 1.037-2.845l-.914.009-.706.581c.295.358.809 1.075 1.33 1.936.826 1.363 1.492 2.791 1.898 4.209 1.1 3.845.3 9.288-2.245 11.75a9.652 9.652 0 0 1-1.659 1.29 10.232 10.232 0 0 1-3.471 1.332c-.794.151-1.385.191-2.064.191h-.009a2.75 2.75 0 0 1-.373-.03 6.007 6.007 0 0 1-.585-.115 7.765 7.765 0 0 1-.536-.15l-.578 1.735a9.182 9.182 0 0 0 1.445.341c.221.031.43.048.627.048h.009a12.546 12.546 0 0 0 2.407-.224 12.011 12.011 0 0 0 4.088-1.572c.699-.431 1.358-.94 1.971-1.533 3.098-2.998 4-9.132 2.731-13.567-.455-1.591-1.188-3.161-2.092-4.653-.569-.939-1.134-1.727-1.482-2.15l-1.645-1.998.024 2.588c.004.412-.281 1.1-.756 1.853a9.64 9.64 0 0 1-.569.809 4.528 4.528 0 0 1-.158.195c.028-.027.028-.027.16-.113.122-.075.122-.075.57-.101.71.388.71.388.778.902h-.914l.906.125c.174-1.262-.261-2.281-1.362-3.922l-.235-.347c-.554-.817-.787-1.189-.995-1.624-.306-.642-.444-1.53-.438-2.53a10.566 10.566 0 0 1 .107-1.431L14.44.304l-1.628.85c-2.18 1.138-5.862 4.733-7.471 7.791a11.873 11.873 0 0 0-.967 2.583 19.2 19.2 0 0 0-.511 3.147c-.036.423-.061.839-.079 1.273-.011.281-.019.531-.029.924-.005.191-.01.298-.015.354a.403.403 0 0 1 .019-.077c.027-.099.027-.099.203-.346.492-.332.492-.332 1.112-.157a5.745 5.745 0 0 1-2.54-2.496 3.456 3.456 0 0 1-.093-.197l-.018-.044-.002-.006v.001l.001.002v.002l-.915-2.473-.812 2.51c-.917 2.836-.757 7.485.245 10.463 1.042 3.099 4.442 5.852 8.526 6.754l.395-1.785z"></path></symbol><symbol viewBox="0 0 32 32" id="price"><path fill="#e6b61a" d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path><path fill="#e6b61a" d="M23.14 6.06l-5.12 8.65h4.48v1.54h-5.49v2.43h5.49v1.54h-5.49v5.1h-2.02v-5.1H9.53v-1.54h5.46v-2.43H9.53v-1.54h4.45L8.8 6.06h2.24l4.99 8.48 4.93-8.48h2.18z"></path></symbol><symbol viewBox="0 0 33 32" id="rating"><path fill="#eba53b" d="M27.087 31.84L16.8 25.553 6.504 31.84l2.824-11.727-9.186-7.878 12.019-.941L16.801.16l4.631 11.134 12.019.941-9.158 7.849zM16.8 23.369l7.407 4.527-2.014-8.471 6.588-5.647-8.659-.696L16.8 5.063l-3.341 8.019-8.659.696 6.588 5.647-2.014 8.471z"></path></symbol><symbol viewBox="0 0 38 32" id="selected"><path fill="#3190e8" d="M32.291 2.327c.582-.582 1.455-.582 2.036 0l2.036 2.036c.582.582.582 1.455 0 2.036L13.818 29.09c-.582.582-1.455.582-2.036 0L1.455 18.908c-.582-.582-.582-1.455 0-2.036l2.036-2.036c.582-.582 1.455-.582 2.036 0l7.273 7.273L32.291 2.327z"></path></symbol><symbol viewBox="0 0 32 32" id="speed"><path fill="#37c7b7" d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path><path fill="#37c7b7" d="M15 7v11.002l5.678 4.882 1.304-1.517-5.33-4.583.348.758V6.999h-2z"></path></symbol></defs></svg>
    <!--SVG end here-->
    <div style="visibility: hidden;" :style="{'height': hiddenHeight + 'px'}"></div>
    <div class="fixed-header" style="background-color: rgb(255, 255, 255); width: 100%; position: fixed; top: 0px; z-index: 1000;">
      <header class="eleme-header">
        <a @click="goBack" href="javascript:">
          <svg>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
          </svg>
        </a>
        <div class="center"><span>{{ cateParams.target_name }}</span></div>
        <a @click="gotoSearch" slot="right">
          <svg>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
          </svg>
        </a>
      </header>
      <aside class="filter">
        <div class="filter-header">
          <a @click="showCategory(0)" class="filter-nav" :class="{'active': nav === 0}" href="javascript:">
            <span>{{ subCateName || cateParams.target_name }}</span>
            <svg viewBox="0 0 72 32">
              <path d="M36 32l36-32h-72z"></path>
            </svg>
          </a>
          <a @click="showCategory(1)" class="filter-nav" :class="{'active': nav === 1}" href="javascript:">
            <span>{{ filterName || '排序'}}</span>
            <svg viewBox="0 0 72 32">
              <path d="M36 32l36-32h-72z"></path>
            </svg>
          </a>
          <a @click="showCategory(2)" class="filter-nav filter-nav-more" :class="{'active': nav === 2 || confirmFilter}" href="javascript:">
            <span>筛选</span>
            <svg viewBox="0 0 72 32">
              <path d="M36 32l36-32h-72z"></path>
            </svg>
          </a>
        </div>
        <section class="filter-extend filter-category" :class="{'open': nav === 0}">
          <div class="filter-scroller">
            <ul>
              <template v-for="(cate, index) in cateList">
                <li @click="selectCate(index)" :class="{'active': index === cateIndex}">
                  <img v-if="cate.image_url !== ''" class="icon" :src="cate.image_url | transformImgUrl(1)">
                  <span>{{ cate.name }}</span>
                  <span class="count">{{ cate.count }}</span>
                  <svg class="arrow">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                  </svg>
                </li>
              </template>
            </ul>
            <ul>
              <template v-for="subCate in subCategory">
                <li @click="selectSubCate(subCate)" :class="{'active': subCate.id === categoryId}">
                  <span>{{ subCate.name }}</span>
                  <span class="count">{{ subCate.count }}</span>
                </li>
              </template>
            </ul>
          </div>
        </section>
        <section class="filter-extend filter-sort" :class="{'open': nav === 1}">
          <ul>
            <template v-for="filter in filterSort">
              <li @click="filterData(filter)" :class="{'active': filter.id === filterId}">
                <svg>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#'+ filter.icon_name"></use>
                </svg>
                <span>{{ filter.name }}</span>
                <svg class="selected">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                </svg>
              </li>
            </template>
          </ul>
        </section>
        <section class="filter-extend filter-more" :class="{'open': nav === 2}">
          <div class="filter-scroller">
            <dl>
              <dt>配送方式</dt>
              <dd @click="changeDeliverMode(0)" :class="{'selected': deliverFilter === 0}">
                <svg class="selected-icon">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                </svg>
                <span>不限</span>
              </dd>
              <dd @click="changeDeliverMode(1)" :class="{'selected': deliverFilter === 1}">
                <svg class="fengniao">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fengniao"></use>
                </svg>
                <svg class="selected-icon">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                </svg>
                <span>蜂鸟专送</span></dd>
            </dl>
            <dl>
              <dt>商家属性 (可多选)</dt>
              <template v-for="(activity, index) in activityAttrs">
                <dd @click="selectActivity(activity, index)" :class="{'selected': activityIds[index] === activity.id}">
                  <svg class="selected-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                  </svg>
                  <i :style="{'color': '#'+ activity.icon_color }">{{ activity.icon_name }}</i>
                  <span>{{ activity.name }}</span>
                </dd>
              </template>
            </dl>
          </div>
          <div class="filter-btn">
            <a @click="emptyFilter" href="javascript:">清空</a>
            <a @click="filterMore" href="javascript:">
              确定
              <span v-if="filterLength !== 0">{{ '(' + filterLength + ')' }}</span>
            </a>
          </div>
        </section>
        <section @click="close" class="filter-modal" :class="{'open': nav !== -1}"></section>
      </aside>
    </div>
    <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="60" infinite-scroll-immediate-check="false"
        class="shoplist">
      <template v-for="shop in shopList">
        <shop-item :item="shop"></shop-item>
      </template>
    </ul>
    <p v-if="busy" class="index-loadmore">
      <span>正在载入...</span>
    </p>
    <p v-if="!hasMore && shopList.length !== 0" class="index-loadmore">
      <span>没有更多了</span>
    </p>
    <div v-if="!hasMore && shopList.length === 0" class="nodatatip">
      <section class="nodatatip">
        <div>
          <img src="~assets/no-food.png">
        </div>
        <h3>没有结果</h3>
      </section>
    </div>
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
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
  }
  .eleme-header, .eleme-header .center {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }
  .eleme-header .center {
    position: absolute;
    left: 50%;
    top: 0;
    width: 50%;
    margin-left: -25%
  }
  .eleme-header a {
    color: inherit;
    padding: 0 .4rem
  }
  .eleme-header svg {
    fill: #fff;
    width: .4rem;
    height: .44rem
  }
  .eleme-header img, .eleme-header svg {
    vertical-align: middle
  }
</style>
<style scoped>
  .index-loadmore {
    text-align: center;
    line-height: 3;
    color: #999
  }
  .shoplist {
    background-color: #fff
  }
  .nodatatip {
    margin-top: 2.666667rem
  }
  a {
    text-decoration: none
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none
  }
  .filter {
    position: relative;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    height: 1.066667rem;
    line-height: 1.04rem;
    z-index: 100
  }
  .filter-header {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    z-index: 3;
    background-color: #fff
  }
  .filter-nav {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    text-align: center;
    color: #666;
    position: relative;
    font-size: .346667rem
  }
  .filter-nav:after {
    content: "";
    background: #ddd;
    width: 1px;
    height: .56rem;
    position: absolute;
    top: 50%;
    right: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
  }
  .filter-nav.active {
    color: #3190e8
  }
  .filter-nav.active > svg {
    fill: currentColor;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
  }
  .filter-nav > svg {
    width: .24rem;
    height: .106667rem;
    margin-bottom: .053333rem;
    fill: #999;
    will-change: transform;
    -webkit-transition: all .3s;
    transition: all .3s
  }
  .filter-nav-more.active svg {
    fill: #3190e8;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
  }
  .filter-nav-arrow {
    display: inline-block;
    vertical-align: middle;
    width: .24rem
  }
  .filter-extend {
    left: 0;
    right: 0;
    top: 100%;
    border-top: 1px solid #ddd;
    position: absolute;
    max-height: 0;
    background-color: #fff;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    visibility: hidden;
    overflow: auto;
    opacity: 0;
    z-index: 3
  }
  .filter-extend.filter-more {
    padding-bottom: 1.466667rem
  }
  .filter-extend.open {
    opacity: 1;
    visibility: visible;
    max-height: 1000%
  }
  .filter-category {
    height: 1000%
  }
  .filter-modal {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background: rgba(0, 0, 0, .2);
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out
  }
  .filter-modal.open {
    opacity: 1;
    visibility: visible
  }
  .filter-category {
    z-index: 200;
    padding-bottom: 0;
    color: #666
  }
  .filter-category .loading {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #999
  }
  .filter-category .filter-scroller, .filter-category .loading {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%
  }
  .filter-category ul {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch
  }
  .filter-category ul:first-child {
    background-color: #f2f2f2
  }
  .filter-category ul:first-child li {
    padding: 0 .133333rem 0 .266667rem
  }
  .filter-category ul:first-child .icon {
    margin-right: .133333rem;
    width: .453333rem;
    vertical-align: middle
  }
  .filter-category ul:nth-of-type(2) {
    margin-left: .4rem;
    padding-right: .133333rem
  }
  .filter-category ul:nth-of-type(2) li {
    border-bottom: 1px solid #ddd
  }
  .filter-category ul:nth-of-type(2) li.active, .filter-category ul:nth-of-type(2) li.active .count {
    color: #3190e8
  }
  .filter-category ul:nth-of-type(2) .count {
    right: .266667rem;
    background-color: transparent;
    color: #999
  }
  .filter-category li {
    position: relative;
    line-height: 1.333333rem
  }
  .filter-category li.active {
    background-color: #fff
  }
  .filter-category .count {
    position: absolute;
    right: .666667rem;
    line-height: .373333rem;
    top: 50%;
    margin-top: -.186667rem;
    border-radius: .266667rem;
    color: #fff;
    background-color: #ccc;
    padding: 0 .133333rem;
    font-size: .293333rem
  }
  .filter-category .arrow {
    position: absolute;
    font-weight: 700;
    right: .266667rem;
    top: 50%;
    width: .24rem;
    height: .24rem;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    color: #999
  }
  .loading {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 10em;
    color: #999
  }
  .filter-scroller {
    overflow: auto;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    line-height: normal
  }
  .filter-scroller dl {
    margin: .266667rem 0;
    padding: 0 .4rem;
    overflow: hidden
  }
  .filter-scroller dt {
    margin-bottom: .2rem
  }
  .filter-scroller dd {
    margin: 0;
    float: left;
    width: 32%;
    margin-right: 2%;
    border: 1px solid #ddd;
    padding: .173333rem 0;
    margin-bottom: .2rem;
    border-radius: .066667rem;
    box-sizing: border-box
  }
  .filter-scroller dd:nth-of-type(3n) {
    margin-right: 0
  }
  .filter-scroller dd.selected {
    border-color: #a2d2ff;
    color: #3190e8;
    background-color: #edf5ff
  }
  .filter-scroller dd.selected .fengniao, .filter-scroller dd.selected i {
    display: none
  }
  .filter-scroller dd.selected .selected-icon {
    /*display: inline-block*/
    display: inline
  }
  .filter-scroller .fengniao, .filter-scroller .selected-icon {
    display: none;
    margin: 0 .066667rem 0 .2rem;
    width: .506667rem;
    height: .506667rem;
    vertical-align: middle
  }
  .filter-scroller .fengniao {
    /*display: inline-block*/
    display: inline
  }
  .filter-scroller i {
    display: inline-block;
    vertical-align: middle;
    font-style: normal;
    border-width: 1px;
    margin: 0 .066667rem 0 .2rem;
    border-style: solid;
    width: .506667rem;
    line-height: .48rem;
    text-align: center;
    border-radius: .08rem;
    font-size: .32rem;
    box-sizing: border-box
  }
  .filter-scroller span {
    vertical-align: middle
  }
  .filter-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #eee;
    background-color: #fafafa;
    padding: 0 .133333rem;
    height: 1.466667rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }
  .filter-btn a {
    font-size: .48rem;
    line-height: 1.093333rem;
    border-radius: .08rem;
    text-align: center;
    text-decoration: none;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0
  }
  .filter-btn a:first-child {
    background-color: #fff;
    border: 1px solid #ddd;
    margin-right: .266667rem;
    color: #333
  }
  .filter-btn a:last-child {
    color: #fff;
    background-color: #56d176;
    border: 1px solid #56d176
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0
  }
  .filter-sort {
    padding-bottom: 0
  }
  .filter-sort li {
    position: relative;
    padding-left: .4rem;
    line-height: 1.333333rem
  }
  .filter-sort svg {
    width: .4rem;
    height: .4rem;
    margin-right: .266667rem;
    vertical-align: middle
  }
  .filter-sort li:not(:last-child):after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 1.066667rem;
    right: 0;
    height: 1px;
    background-color: #ddd
  }
  .filter-sort li:active {
    background-color: #f9f9f9
  }
  .filter-sort li.active {
    color: #0089dc
  }
  .filter-sort li.active .selected {
    display: block
  }
  .filter-sort .selected {
    position: absolute;
    right: 0;
    top: 50%;
    display: none;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
  }
</style>
<style scoped>
  /*  列表无数据时显示的内容  */
  .nodatatip {
    text-align: center
  }
  .nodatatip img {
    width: 50%
  }
  .nodatatip h3 {
    margin: .333333rem 0 .266667rem;
    font-size: .453333rem;
    color: #6a6a6a;
    font-weight: 400
  }
  .nodatatip-tiptext {
    margin-top: 0;
    margin-bottom: .333333rem;
    font-size: .306667rem;
    color: #999
  }
  .button {
    width: 3.2rem;
    display: inline-block;
    padding: .266667rem .133333rem;
    border: none;
    border-radius: .053333rem;
    color: #fff;
    text-align: center;
    font-size: 1.2em;
    background-color: #56d176;
    text-decoration: none
  }
  .button:active {
    opacity: .8
  }
</style>
<script>
  import shopItem from '../common/shopItem.vue'
  export default{
    data () {
      return {
        filterSort: [
          {
            id: 0,
            name: '智能排序',
            icon_name: 'default'
          },
          {
            id: 5,
            name: '距离最近',
            icon_name: 'distance'
          },
          {
            id: 6,
            name: '销量最高',
            icon_name: 'hot'
          },
          {
            id: 1,
            name: '起送价最低',
            icon_name: 'price'
          },
          {
            id: 2,
            name: '配送速度最快',
            icon_name: 'speed'
          },
          {
            id: 3,
            name: '评分最高',
            icon_name: 'rating'
          }
        ], //  模拟的排序数组
        shopList: [],
        busy: false,
        limit: 20,
        page: 1,
        hasMore: true, //  是否还有数据可加载
        hiddenHeight: 0, //  隐藏于头部和分类面板底下的不可见div高度
        nav: -1, //  激活tab导航
        cateIndex: 1, //  激活小分类选项导航，因为第一个为总分类，所以默认激活第二个
        filterId: -1, //  激活过滤选项
        filterName: '', //  当前过滤选项名称
        activityIds: [], //  筛选选项
        deliverFilter: -1, //  筛选派送模式
        cateList: [], //  小分类选项
        confirmFilter: false, //  默认不进行筛选
        filterCount: 0, //  筛选选项个数
        subCategory: [], //  当前选中小分类的细分类
        subCateName: '', //  选中细分类后更改过滤条件名称
        categoryId: this.$route.params.categoryId, //  当前选中小分类的细分类的ID,默认路由中的分类ID
        deliverMode: [], //  支持的派送筛选
        activityAttrs: [], //  商家属性筛选
      }
    },
    computed: {
      latitude(){ //  纬度
        return this.$store.state.latitude
      },
      longitude(){ // 经度
        return this.$store.state.longitude
      },
      offset(){
        return (this.page - 1) * this.limit
      },
      filterLength(){ //  筛选选项个数
        return (this.deliverFilter === -1) ? this.filterCount : this.filterCount + 1;
      },
      cateParams(){ //  用于过滤分类选项的参数对象，包含可用的过滤属性
        return this.$store.state.cateParams
      },
      geohash(){
        return this.$store.state.geohash
      }
    },
    methods: {
      getParams(){
        var params = {
          action: 'cate_list'
        }
        params.latitude = this.latitude
        params.longitude = this.longitude
        params.offset = this.offset
        params.limit = this.limit
        //  添加过滤选项
        if (this.filterId !== -1) {
          params.order_by = this.filterId;
        }
        if (this.confirmFilter){
          //  筛选派送模式
          if (this.deliverFilter !== -1) {
            params.delivery_mode = this.deliverFilter;
          }
          if (this.filterCount !== 0){
            var query = ''
            for (var i =0, len = this.activityIds.length; i < len; i++) {
              if (this.activityIds[i] !== undefined) {
                query += '&support_ids[]=' + this.activityIds[i]
              }
            }
            params.support_ids = query
          }
        }
        return params
      },
      loadData(){
        var params = this.getParams()
        this.busy = true
        this.page = 1
        this.$http({url: 'eleme_api.php', params: params}).then(function (res) {
          if (res.data.length < this.limit) this.hasMore = false;
          this.shopList = res.data
          this.busy = false
        })
      },
      loadMore(){
        if (!this.hasMore) return;
        this.busy = true
        var params = this.getParams()
        this.$http({url: 'eleme_api.php', params: params}).then(function (res) {
          if (res.data.length < this.limit) this.hasMore = false;
          this.shopList = this.shopList.concat(res.data)
          this.page ++;
          this.busy = false
        })
      },
      filterData(filterItem){
        this.close()
        if (this.filterId === filterItem.id) return;
        this.filterId = filterItem.id
        this.filterName = filterItem.name
        this.loadData()
      },
      filterMore(){ //  确定筛选
        this.confirmFilter = true
        this.close()
        this.loadData()
      },
      emptyFilter(){ //  清空筛选选项
        this.confirmFilter = false
        this.deliverFilter = -1;
        this.filterCount = 0;
        this.activityIds = [];
        this.close()
        this.loadData()
      },
      selectActivity(activity, index){ //  选中筛选选项
        if (this.activityIds[index] === activity.id){
          this.activityIds.splice(index, 1, undefined)
        } else {
          this.activityIds[index] = undefined
          this.activityIds.splice(index, 1, activity.id)
        }
        //  计算选中的属性数量
        var count = 0;
        for (var i = 0; i < this.activityIds.length; i++){
          if (this.activityIds[i] !== undefined) count++;
        }
        this.filterCount = count
      },
      selectCate(index){ //  选择了小分类
        if (index === 0){
          this.categoryId = this.$route.params.categoryId
          this.subCateName = this.cateParams.target_name
          this.close()
          this.loadData()
          return
        }
        if (this.cateIndex === index) return;
        if (this.cateList[index].sub_categories) this.subCategory = this.cateList[index].sub_categories;
        this.cateIndex = index
      },
      selectSubCate(item){ //  选择了细分类
        this.close()
        if (this.categoryId === item.id) return;
        this.categoryId = item.id
        this.subCateName = item.name
        this.loadData()
      },
      showCategory(navIndex){ //  获取分类细节选项
        if (this.nav === navIndex){
          this.close()
          return
        }
        this.nav = navIndex
        //  加载小分类选项
        if (this.cateList.length === 0 && navIndex === 0){
          let params = {
            action: 'cate_list_menu'
          }
          params.latitude = this.latitude
          params.longitude = this.longitude
          params.show_name = encodeURI(this.cateParams.target_name)
          this.$http({url: 'eleme_api.php', params: params}).then(function (res) {
            this.cateList = res.data
            this.subCategory = res.data[1] ? res.data[1].sub_categories : []
          })
        }
        //  加载筛选选项
        if (this.deliverMode.length === 0 && navIndex === 2){
          let params = {
            action: 'cate_list_delivery_modes'
          }
          params.latitude = this.latitude
          params.longitude = this.longitude
          this.$http({url: 'eleme_api.php', params: params}).then(function (res) {
            this.deliverMode = res.data
          })
        }
        if (this.activityAttrs.length === 0 && navIndex === 2){
          let params = {
            action: 'cate_list_activity_attributes'
          }
          params.latitude = this.latitude
          params.longitude = this.longitude
          this.$http({url: 'eleme_api.php', params: params}).then(function (res) {
            this.activityAttrs = res.data
          })
        }
      },
      changeDeliverMode(id){ //  筛选派送方式
        if (this.deliverFilter === id){
          this.deliverFilter = -1;
          return
        }
        this.deliverFilter = id
      },
      close(){ //  关闭分类选择
        this.nav = -1
      },
      gotoSearch(){ //  跳转搜素界面
        this.$router.push({
          name: 'search',
          params: {
            geohash: this.geohash
          }
        })
      },
      goBack(){ //  路由回退
        this.$router.back()
      }
    },
    created () {
      this.loadData()
    },
    mounted(){
      //  获取隐藏在头部下面的div高度
      this.hiddenHeight = document.getElementsByClassName('fixed-header')[0].offsetHeight
    },
    components: {
      shopItem
    }
  }
</script>
