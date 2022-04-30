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

<style>
.tagbar{
    width: 100vw;
    height: 15vh;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 15vh;
    flex-grow: 0;
}
</style>