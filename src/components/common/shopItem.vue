<template>
  <section @click="gotoDetail(item.id)" class="item">
    <div class="left-wrap">
      <img class="logo" :src="item.image_path | transformImgUrl(1)  + '?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'">
    </div>
    <div class="right-wrap">
      <section class="line">
        <h3 class="shopname" :class="{'premium': item.is_premium}">{{ item.name }}</h3>
        <div class="support-wrap">
          <template v-for="(support,index) in item.supports">
            <div v-if="index != (item.supports.length -1)" class="activity-wrap nowrap">
              <i class="activity-icon icononly" :style="{'color': '#'+ support.icon_color,'border-color': 'rgb(221, 221, 221)'}">{{ support.icon_name }}</i>
            </div>
          </template>
        </div>
      </section>
      <section class="line">
        <div class="rate-wrap">
          <template v-if="item.rating != 0">
            <rating-star :rating="item.rating"></rating-star>
          </template>
          <span v-if="item.rating != 0" class="rate">{{ item.rating }}</span>
          <span>月售{{ item.recent_order_num }}单</span>
        </div>
        <div class="delivery-wrap">
          <span v-if="item.delivery_mode" class="icon-delivery hollow"> <span>{{ item.delivery_mode.text }}</span> </span>
          <span class="icon-delivery">准时达</span>
        </div>
      </section>
      <section class="line">
        <div class="moneylimit"><span>¥{{ item.piecewise_agent_fee.rules[0].price }}起送</span> <span>{{ item.piecewise_agent_fee.tips }}</span></div>
        <div class="timedistance-wrap"> <span class="distance-wrap">{{ item.distance | transformDistance }}</span> <span v-if="item.order_lead_time != 0" class="time-wrap">{{ item.order_lead_time }}分钟</span> </div>
      </section>
    </div>
    <div v-if="item.is_new" class="logo-decoration"><span>新店</span></div>
  </section>
</template>
<style scoped>
  .item {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .4rem .266667rem;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    color: #666;
    list-style: none;
    font-size: .293333rem;
  }
  .left-wrap {
    position: relative;
    margin-right: .266667rem;
    width: 1.6rem;
    height: 1.6rem;
  }
  .logo {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: .053333rem;
  }
  .right-wrap {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .line, .right-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .line {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .line:nth-child(2) {
    margin-top: .2rem;
  }
  .line:nth-child(3) {
    margin-top: .226667rem;
    line-height: .32rem;
  }
  .shopname {
    overflow: hidden;
    margin: 0;
    padding: 0;
    max-width: 5rem;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
    font-size: .4rem;
    line-height: .426667rem;
  }
  .shopname.premium::before {
    margin-right: 0.133333rem;
    padding: 0 0.066667rem;
    height: 0.4rem;
    -webkit-border-radius: 0.053333rem;
    border-radius: 0.053333rem;
    background-color: #ffd930;
    color: #52250a;
    content: "品牌";
    vertical-align: top;
    text-align: center;
    font-weight: 700;
    font-size: 0.293333rem;
    line-height: 0.4rem;
  }
  .activities, .support-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .support-wrap {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .activity-wrap {
    line-height: 0.426667rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .activity-wrap.wrap .activity-icon {
    margin-top: 0.04rem;
  }
  .activity-wrap.nowrap {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    -ms-grid-row-align: center;
    align-items: center;
  }
  .activity-wrap.nowrap .icononly {
    margin-left: 0.066667rem;
  }
  .activity-wrap.nowrap .activity-description {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .activity-description {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
  }
  .activity-icon {
    margin-right: 0.133333rem;
    font-size: 0.266667rem;
    font-style: normal;
    line-height: 1;
    height: 0.346667rem;
    padding: 0.04rem;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid;
    -webkit-border-radius: 0.04rem;
    border-radius: 0.04rem;
  }
  .activity-icon.icononly {
    margin-right: 0;
  }
  .rate-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .rate {
    margin: 0 .106667rem;
    color: #ff6000;
  }
  .delivery-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .icon-delivery {
    padding: 0 0.053333rem;
    border: 1px solid #44a5ff;
    -webkit-border-radius: 0.053333rem;
    border-radius: 0.053333rem;
    background-color: #fff;
    color: #2395ff;
    font-size: 0.266667rem;
    line-height: 0.346667rem;
  }
  .icon-delivery:not(:last-child) {
    margin-right: 0.08rem;
  }
  .icon-delivery.hollow {
    background-color: #2395ff;
    color: #fff;
  }
  .moneylimit {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-line-pack: center;
    align-content: center;
  }
  .moneylimit span+span:before {
    margin: 0 .08rem;
    color: #ddd;
    content: '/';
  }
  .moneylimit span:nth-of-type(2) {
    max-width: 3.333333rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .timedistance-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .distance-wrap {
    color: #999;
  }
  .time-wrap {
    color: #2395ff;
  }
  .timedistance-wrap span+span:before {
    margin: 0 .08rem;
    color: #ddd;
    content: '/';
  }
  .logo-decoration {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    width: .853333rem;
    height: .853333rem;
    background-image: -webkit-linear-gradient(315deg,#26ce61,#26ce61 50%,transparent 0);
    background-image: linear-gradient(135deg,#26ce61,#26ce61 50%,transparent 0);
    font-size: .293333rem;
  }
  .logo-decoration span {
    position: absolute;
    top: .133333rem;
    left: -.026667rem;
    display: block;
    color: #fff;
    font-weight: 700;
    -webkit-transform: rotate(-45deg) scale(.85);
    transform: rotate(-45deg) scale(.85);
  }
</style>
<script>
  import ratingStar from './ratingStar.vue'
  export default{
    props: {
      item: {
        type: Object,
        default: {}
      }
    },
    data () {
      return {
      }
    },
    methods: {
      gotoDetail(id){
        this.$router.push({
          name: 'shop',
          params: {
            shopId: id
          }
        })
      },
    },
    mounted () {
    },
    components: {
      ratingStar
    }
  }
</script>
