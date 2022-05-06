<template>
<div>
  <!-- //导航栏 -->
  <main-nav-bar>首页</main-nav-bar>
  <!-- //轮播图 -->
  <carousel :list="banners" ></carousel>
  <!-- //推荐栏 -->
  <recommend :list="recommends"></recommend>
  <!-- //每日推荐 -->
  <feature></feature>
  <!-- 分类栏 -->
  <tag-controll :titles="['流行','新款','精选']" @tabclick="changetag"></tag-controll>
  <!-- 商品 -->
  <goods-list :goodslist="goods[currenttag].data" ></goods-list>
</div>
</template>

<script>
import Recommend from 'views/home/HomeChildComponents/recommend/recommend.vue'
import Feature from 'views/home/HomeChildComponents/FeatureView/FeatureView.vue'

import GoodsList from 'components/content/Goods/GoodsList.vue'
import MainNavBar from 'components/content/MainNavBar/MainNavBar.vue'
import carousel from 'components/common/carousel/carousel.vue'
import TagControll from 'components/common/TagControll/TagControll.vue'

import {GetMultidata,GetHomeGoods} from 'network/home.js'


export default {
    name:"home",
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,data:[]},
          'new':{page:0,data:[]},
          'sell':{page:0,data:[]},
        },
        currenttag:'pop'
      }
    },
    components:{
        MainNavBar,
        carousel,
        Recommend,
        Feature,
        TagControll,
        GoodsList
    },
     created(){
          this.getmultidata()
          this.gethomegoods('pop')
          this.gethomegoods('sell')
          this.gethomegoods('new')
        
    },
    methods:{
      // 获取首页轮播图、推荐数据
      getmultidata(){
        GetMultidata().then((res)=>{
          this.banners=res.data.data.banner.list
          this.recommends=res.data.data.recommend.list
          })
      },
      // 获取商品数据
      gethomegoods(type){
        let page=this.goods[type].page+1
        GetHomeGoods(type,page).then(res=>{
          // this.goods[type].data=this.goods[type].data.concat(res.data.data.list)
          this.goods[type].data.push(...res.data.data.list)
          this.goods[type].page+=1
        })
      },
      // 切换商品信息
        changetag(index){
          console.log(typeof index)
          console.log(index)
          switch(index){
            case 0:this.currenttag='pop';break;
            case 1:this.currenttag='new';break;
            case 2:this.currenttag='sell';break;
          }
        }
      
    }
}

</script>

<style>

</style>