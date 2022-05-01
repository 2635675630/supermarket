// 导航组件
<template>
  <div class="NavBar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
   
}
</script>

<style>
    .NavBar{
        display: flex;
        width: 100vw;
        height: 10vh;
        line-height: 10vh;
        flex-direction: row;
        box-shadow: 0px 1px 5px  rgba(0, 0, 0, 0.5) ;
    }
    .left{
        min-width: 20vw;
        max-width: 20vw;
    }
    .right{
        min-width: 20vw;
        max-width: 20vw;
    }
    .center{
        flex: 1;
        flex-grow: 1;
    }
</style>