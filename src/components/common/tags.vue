<template>
  <ul class="tag-list">
    <template v-for="item in tags">
      <li @click="showTag(item)" :class="{'active': item.name === tag.name && showRate,'unsatisfied': item.unsatisfied}">{{ item.name + '(' + item.count + ')' }}</li>
    </template>
  </ul>
</template>
<style scoped>
  /*  rating-tags */
  .tag-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .tag-list li {
    display: inline-block;
    padding: 0.2rem;
    margin: 0.066667rem 0.133333rem;
    -webkit-border-radius: 0.133333rem;
    border-radius: 0.133333rem;
    color: #6d7885;
    background-color: #ebf5ff;
  }
  .tag-list li.unsatisfied {
    color: #aaa;
    background-color: #f5f5f5;
  }
  .tag-list li.active {
    color: #fff;
    background-color: #3190e8;
  }
  .tag-list li.unsatisfied.active {
    color: #fff;
    background-color: #ccc;
  }
</style>
<script>
  export default{
    computed: {
      tag(){
        return this.$store.state.tag
      },
      tags(){
        return this.$store.state.tags
      },
      showRate(){
        return this.$store.state.showRate
      }
    },
    methods: {
      showTag(tag){
        this.$emit('tag', tag)
      }
    }
  }
</script>
