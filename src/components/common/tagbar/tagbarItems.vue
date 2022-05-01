// 底栏子组件
<template>
<div class="tagbaritems" @click="location" :class="{'active':isactive}">
    <div class="tagbaritems_img"><slot name="items_img"></slot></div>
    <div class="tagbaritems_text"><slot name="items_text"></slot></div>  
</div>
</template>

<script>
export default {
    
    props:{
        path:String
    },
    methods:{
    location(){
        this.$router.replace(this.path).catch(()=>{})
        },
    },
    computed:{
        isactive(){
            
            return this.$route.path.indexOf(this.path)+1}
    }
}
</script>

<style>
.tagbaritems{
    cursor: pointer;
    flex:1;
    display: flex;
    flex-direction: column;
    /* align-items: stretch; */
    text-align: center;
    
    
}
.tagbaritems_img{
    flex: 3.5;
    flex-grow: 3.5;
    overflow: hidden;
}
.tagbaritems_img img{
    width: 100%;
    height: 100%;
    margin: 0 auto;

}
.tagbaritems_text{
    
    flex: 1;
    flex-grow: 2.5;
    text-align: center;
    overflow: hidden;
    font-size: 100%;
   
    
}


.active{
    background-color: rgba(112, 108, 108,0.4);
}
</style>