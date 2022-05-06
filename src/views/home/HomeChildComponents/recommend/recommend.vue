<template>
      <div class="recommend">
          <ul>
              <li v-for="(item,index) in list" :key="index">
                  <img :src="item.image" alt="">
              </li>
          </ul>
      </div>
</template>

<script>
export default {
    props:{
        list:{
            type:Array
        }
    }
}
</script>

<style scoped>
.recommend{
    height: 10vh;
    width: 100vw;
     padding-left: 5vw;
     padding-right: 5vw;
}
.recommend ul {
    height: 100%;
    width: 100%;
    display: flex;
    white-space: nowrap;
    align-content: center;
    justify-content: center;
}
.recommend ul li{
    list-style-type: none;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
.recommend ul li img{
    width: 90%;
    height: 90%;
    max-width: 100px;
}
</style>