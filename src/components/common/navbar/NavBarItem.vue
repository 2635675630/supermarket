// 导航组件的子组件
<template>
  <div class="NavBaritem">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.NavBaritem{
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 150%;
    overflow: hidden;
    color: white;
}
.NavBaritem input{
    cursor: pointer;
    border-radius: 20px;
    font-size: 3vw;
    max-width: 3vw;
    max-height: 60%;
    min-width: 80%;
    min-height: 50%;
    vertical-align: middle;
}
.NavBaritem img{
    cursor: pointer;
   vertical-align: middle;
    width: 100%;
    height: 50%;
    
}
</style>