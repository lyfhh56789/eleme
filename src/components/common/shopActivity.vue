<template>
  <div class="activity-wrap nowrap">
    <i class="activity-icon" style="color: rgb(255, 255, 255);"
       :style="{'background-color': '#'+ activity.icon_color ,'border-color': '#'+ activity.icon_color}">
      {{ activity.icon_name }} </i>
    <span class="activity-description">
      <span v-if="type === 'activity'">{{ activity.tips }}</span>
      <span v-else>{{ activity.description }}</span>
      <span>(APP专享)</span>
    </span>
  </div>
</template>
<style scoped>
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
</style>
<script>
  export default{
    props: {
      activity: Object,
      type: String
    }
  }
</script>
