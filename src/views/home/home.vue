<template>
<div>
  <nav-bar class="NavBar">
    <template v-slot:center>
      <nav-bar-item>
        <span>首页</span>
      </nav-bar-item>
      </template>
  </nav-bar>
  <carousel :list="banners" ></carousel>
  <h1>首页</h1>
  
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import NavBarItem from 'components/common/navbar/NavBarItem.vue'
import {getmultidata} from 'network/home.js'
import carousel from 'components/common/carousel/carousel.vue'
export default {
    name:"home",
    data(){
      return{
        banners:[],
        recommends:[]
      }
    },
    components:{
        NavBar,
        NavBarItem,
        carousel

    },
     created(){
        getmultidata().then((res)=>{
          this.banners=res.data.data.banner.list
          this.recommends=res.data.data.recommend.list
          })
        
    }
}

</script>

<style>
.NavBar{
  background-color: var(--color-tint);
}
</style>