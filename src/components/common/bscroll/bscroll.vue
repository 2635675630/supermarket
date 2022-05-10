<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    data(){
        return{
            scroll:null
        }
    },
    props:{
        probeType:{
            type:Number,
            default:3
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }

    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.wrapper,{
           probeType:this.probeType,
            pullUpLoad: this.pullUpLoad,
            click:true,
            mouseWheel: true,//开启鼠标滚轮
            disableMouse: false,//启用鼠标拖动
            disableTouch: false,//启用手指触摸
            useTransition:false,
            scrollY:true,
       })
       this.scroll.on("scroll",(position)=>{
           this.$emit('scroll',position)
       })
       this.scroll.on("pullingUp",()=>{
          this.$emit('pullingUp')
       })
       
    },
    methods:{
        finishpullUp(){
            this.scroll.finishPullUp()
        },
        refresh(){
            this.scroll.refresh()
        }
    }

}
</script>

<style scoped>
.content{
    position: relative;
    top: 0;
    /* transform: translateX(0px) translateY(-68px) translateZ(1px); */
}
</style>