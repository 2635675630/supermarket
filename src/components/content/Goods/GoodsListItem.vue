<template>
  <div class="goodsitem">
      <a :href="goodsitem.link">
          <img :src="goodsitem.show.img" alt="" @load="imgload">
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
    },
    methods:{
        imgload(){
            this.$bus.$emit('itemimgload')
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
.goodsitem p{
    overflow:hidden;
    text-overflow:ellipsis;
    -webkit-line-clamp: 2;
    display:-webkit-inline-box;
    -webkit-box-orient: vertical;
}


</style>