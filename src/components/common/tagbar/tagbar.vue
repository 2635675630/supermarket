// 底栏组件
<template>
  <div class="tagbar">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'tagbar'
}
</script>

<style scoped>
.tagbar{
    width: 100vw;
    height: 8vh;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    justify-content: space-around;
    background-color: white;
}

</style>