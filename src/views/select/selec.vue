<template>
<div>
  <nav-bar class="NavBar">
  
    <template v-slot:center>
      <nav-bar-item>
        <span>搜索</span>
      </nav-bar-item>
      </template>

  </nav-bar>
  <h1>搜索</h1>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import NavBarItem from 'components/common/navbar/NavBarItem.vue'
export default {
    name:"selec",
    components:{
        NavBar,
        NavBarItem
    }
}
</script>

<style>

</style>