<template>
  <div>
    <swipe :auto="-1" class="foodentry">
      <swipe-item class="slide1">
        <template v-for="(item,index) in foods">
          <a @click="gotoCategory(item.link)" v-if="index < foods.length/2" href="javascript:">
            <div class="container">
              <img :src="item.image_url | transformImgUrl(0)">
            </div>
            <span class="title">{{ item.title }}</span>
          </a>
        </template>
      </swipe-item>
      <swipe-item class="slide2">
        <template v-for="(item,index) in foods">
          <a @click="gotoCategory(item.link)" v-if="index >= foods.length/2" href="javascript:">
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
    computed: {
      geohash(){
        return this.$store.state.geohash
      }
    },
    methods: {
      loadData () {
        var params = {
          action: 'swipe'
        }
        params.geohash = this.geohash
        this.$http({url: 'eleme_api.php', params: params}).then(function (res) {
          this.foods = res.data
        })
      },
      gotoCategory(link){
        //  处理特殊的饿了么路由接链
        var obj = {}
        var params = decodeURIComponent(link).split('?')[1].split('&')
        for (var i = 0; i < params.length; i++){
          obj[params[i].split('=')[0]] = params[i].split('=')[1]
        }
        //  使用了eval函数来解析字符串参数对象filter_key，如果你有更好的办法，请告知邮箱474224024@qq.com
        obj.filter_key = eval('('+ obj.filter_key +')')
        this.$store.commit('setCateParams', obj)
        this.$router.push({
          name: 'category',
          params: {
            categoryId: obj.filter_key.restaurant_category_id.id
          }
        })
      },
    },
    mounted () {
      this.loadData()
    },
    components: {
      Swipe, SwipeItem
    }
  }
</script>
