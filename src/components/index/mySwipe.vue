<template>
  <div>
    <swipe :auto="-1" class="foodentry">
      <swipe-item class="slide1">
        <template v-for="(item,index) in foods">
          <a v-if="index < foods.length/2" href="javascript:">
            <div class="container">
              <img :src="item.image_url | transformImgUrl(0)">
            </div>
            <span class="title">{{ item.title }}</span>
          </a>
        </template>
      </swipe-item>
      <swipe-item class="slide2">
        <template v-for="(item,index) in foods">
          <a v-if="index >= foods.length/2" href="javascript:">
            <div class="container">
              <img :src="item.image_url | transformImgUrl(0)">
            </div>
            <span class="title">{{ item.title }}</span>
          </a>
        </template>
      </swipe-item>
    </swipe>
  </div>
</template>
<style scoped>
  .foodentry {
    overflow: hidden;
    height: 4.72rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    text-align: center;
  }
  .foodentry a {
    position: relative;
    float: left;
    margin-top: .293333rem;
    width: 25%;
  }
  .foodentry .container {
    position: relative;
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
  }
  .foodentry .container img {
    vertical-align: top;
    width: 100%;
    height: 100%;
  }
  .foodentry .title {
    display: block;
    margin-top: .133333rem;
    color: #666;
    font-size: .32rem;
  }
</style>
<script>
  import { Swipe, SwipeItem } from 'vue-swipe'
  export default{
    data () {
      return {
        foods: []
      }
    },
    methods: {
      loadData () {
        this.$http({url: 'eleme_api.php', params: {api_str: 'v2/index_entry?geohash=ws11p180hcw&group_type=1&flags[]=F'}}).then(function (res) {
//          console.log(res)
          this.foods = res.data
        })
      }
    },
    mounted () {
      this.loadData()
    },
    components: {
      Swipe, SwipeItem
    }
  }
</script>
