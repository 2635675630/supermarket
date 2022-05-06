<template>
  <div id="app">
    <router-view></router-view>
    <main-tag-bar></main-tag-bar>
  </div>
</template>
<script>
import MainTagBar from 'components/content/MainTagBar/MainTagBar.vue'

export default {
  components:{
    MainTagBar
  }
}
</script>
<style lang="less">
  @import "assets/css/base.css";
</style>
