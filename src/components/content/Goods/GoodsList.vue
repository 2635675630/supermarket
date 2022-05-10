<template>
  <div class="goodslist">
      <goods-list-item v-for="(item,index) in goodslist" :key="index" :goodsitem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from 'components/content/Goods/GoodsListItem.vue'
export default {
    components:{
        GoodsListItem
    },
    props:{
        goodslist:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    mounted(){
        this.$emit('goodsonload')
    }
}
</script>

<style>
    .goodslist{
        width: 100vw;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
    }

</style>