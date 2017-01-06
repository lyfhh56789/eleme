<template>
  <div class="rate">
    <small class="rate-time">{{ rate.rated_at }}</small>
    <img v-if="rate.avatar != ''" class="rate-avatar" :src="rate.avatar | transformImgUrl(1) + '?imageMogr/quality/80/format/webp/'">
    <img v-else class="rate-avatar" src="~assets/avatar.png">
    <div class="rate-content">
      <h3 class="rate-username">{{ rate.username }}</h3>
      <rating-star :rating="rate.rating_star"></rating-star>
      <span class="rate-rating">{{ rate.time_spent_desc }}</span>
      <div v-if="rate.rating_text != ''" class="rate-text">{{ rate.rating_text }}</div>
      <div>
        <ul v-if="rate.item_ratings.length !== 0" class="item-list">
          <template v-for="item in rate.item_ratings">
            <li>{{ item.food_name }}</li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .rate {
    position: relative;
    padding-left: 1.2rem;
  }
  .rate-text {
    color: #333;
    font-size: 0.373333rem;
    margin: 0.213333rem 0;
  }
  .rate-avatar {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.8rem;
    height: 0.8rem;
    -webkit-border-radius: 50%;
    border-radius: 50%;
  }
  .rate-time {
    position: absolute;
    top: 0.133333rem;
    right: 0;
    font-size: 0.32rem;
    color: #999;
  }
  .rate-content {
    font-size: 0.346667rem;
  }
  .rate-username {
    font-size: 0.346667rem;
    margin-top: 0;
    margin-bottom: 0.133333rem;
    color: #666;
  }
  .rate-rating {
    font-size: 0.333333rem;
    color: #999;
    vertical-align: middle;
  }
  .rate-reply {
    position: relative;
    margin: 0.266667rem 0;
    padding: 0.266667rem;
    background: #f3f3f3;
    -webkit-border-radius: 0.106667rem;
    border-radius: 0.106667rem;
  }
  .rate-reply::after {
    content: ' ';
    position: absolute;
    bottom: 100%;
    left: 0.4rem;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0.213333rem 0.213333rem 0.213333rem;
    border-color: transparent transparent #f3f3f3 transparent;
  }
  .item-list li {
    display: inline-block;
    font-size: 0.293333rem;
    color: #999;
    border: 1px solid #ddd;
    padding: 0.106667rem 0.266667rem;
    margin: 0.093333rem;
    -webkit-border-radius: 0.08rem;
    border-radius: 0.08rem;
    max-width: 1.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .rate-images li {
    display: inline-block;
    margin: 0.133333rem;
  }
  .rate-images img {
    width: 1.893333rem;
    height: 1.893333rem;
  }
</style>
<script>
  import ratingStar from './ratingStar.vue'
  export default{
    props: {
      rate: Object
    },
    components: {
      ratingStar
    }
  }
</script>
