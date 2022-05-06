<template>
  <div class="goodsitem">
      <a :href="goodsitem.link">
          <img :src="goodsitem.show.img" alt="">
      <p>{{goodsitem.title}}</p>
      <span class="price">${{goodsitem.price}}</span>
      <span class="cfav">⭐{{goodsitem.cfav}}</span>
      </a>
  </div>
</template>

<script>
export default {
    props:{
        goodsitem:{
            type:Object
        }
    }
}
</script>

<style scoped>
.goodsitem{
    width: 50vw;
    padding: 1vw;
    max-width: 320px;
}
img{
    width: 100%;
    height: 80%;
}
span{
    display: inline-block;
    width: 50%;
    height: 10%;
    text-align: center;
}
p{
    display: inline-block;
    overflow:hidden;
    width: 100%;
    height: 11%;
    text-overflow: ellipsis;
}

</style>