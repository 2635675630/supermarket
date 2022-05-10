<template>
<div>
  <!-- //导航栏 -->
  <main-nav-bar class="mainnavbar">首页</main-nav-bar>
  <bscroll class="maincontent" ref="bscroll" @scroll="scroll" :pullUpLoad="true" @pullingUp="pullingUp">
      <!-- //轮播图 -->
    <carousel :list="banners" ></carousel>
    <!-- //推荐栏 -->
    <recommend :list="recommends"></recommend>
    <!-- //每日推荐 -->
    <feature></feature>
    <!-- 分类栏 -->
    <tag-controll :titles="['流行','新款','精选']" @tabclick="changetag"></tag-controll>
    <!-- 商品 -->
    <goods-list :goodslist="goods[currenttag].data" @goodsonload="goodsonload"></goods-list>
  </bscroll>
  <backtop @click.native="backtop" v-show="isshow"></backtop>
</div>
</template>

<script>
import Recommend from 'views/home/HomeChildComponents/recommend/recommend.vue'
import Feature from 'views/home/HomeChildComponents/FeatureView/FeatureView.vue'

import GoodsList from 'components/content/Goods/GoodsList.vue'
import MainNavBar from 'components/content/MainNavBar/MainNavBar.vue'
import carousel from 'components/common/carousel/carousel.vue'
import TagControll from 'components/common/TagControll/TagControll.vue'
import Bscroll from 'components/common/bscroll/bscroll.vue'
import Backtop from 'components/common/backtop/backtop.vue'

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
        currenttag:'pop',
        isshow:false
      }
    },
    components:{
        MainNavBar,
        carousel,
        Recommend,
        Feature,
        TagControll,
        GoodsList,
        Bscroll,
        Backtop
    },
   
        created(){
          this.getmultidata()
          this.gethomegoods('pop')
          this.gethomegoods('sell')
          this.gethomegoods('new')
        
    },
        mounted(){
        //绑定bscroll监听事件，使得scrollHeight能自适应
        const refresh=this.debounce(this.$refs.bscroll.refresh,50)
        this.$bus.$on('itemimgload',()=>{
            refresh()
       })
        },
    methods:{
      //防抖函数
      debounce(func,delay){
        let timer=null
        return function(...arg){
          if(timer)clearTimeout(timer)
          timer=setTimeout(()=>{
            func.apply(this,arg)
          },delay)
        }
      },
      // 网络请求事件 获取首页轮播图、推荐数据
      getmultidata(){
        GetMultidata().then((res)=>{
          this.banners=res.data.data.banner.list
          this.recommends=res.data.data.recommend.list
          })
      },
      // 网络请求事件 获取商品数据
      gethomegoods(type){
        let page=this.goods[type].page+1
        GetHomeGoods(type,page).then(res=>{
          // this.goods[type].data=this.goods[type].data.concat(res.data.data.list)
          this.goods[type].data.push(...res.data.data.list)
          this.goods[type].page+=1
        })
        
        
      },
      // 监听事件 切换商品信息
        changetag(index){
          console.log(typeof index)
          console.log(index)
          switch(index){
            case 0:this.currenttag='pop';break;
            case 1:this.currenttag='new';break;
            case 2:this.currenttag='sell';break;
          }
        },
        // 监听事件 返回顶部
        backtop(){
          this.$refs.bscroll.scroll.scrollTo(0,0,500)
          
        },
        //监听事件 商品图片加载后刷新bscroll组件的高度
        goodsonload(){
          this.$nextTick(()=>{
           this.$refs.bscroll.scroll.refresh()
         })
        },
        //事件监听scroll
        scroll(position){
          this.isshow=position.y!=0?true:false
        },
        //监听事件 上拉加载更多
        pullingUp(){
          this.gethomegoods(this.currenttag)
          this.$refs.bscroll.finishpullUp()
        }
      
    }
    
}

</script>

<style scoped>
.maincontent{
  width: 100vw;
  height: 82vh;
  overflow: hidden;
  position: absolute;
  top:10vh
}
/* .mainnavbar::after{
  content: '';
  width: 100vw;
  height: 10vh;
  display: block;
} */
</style>