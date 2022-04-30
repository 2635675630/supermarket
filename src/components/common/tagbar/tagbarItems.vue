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
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    
    
}
.tagbaritems_img{
    flex: 2;
    flex-grow: 0;
}
.tagbaritems_img img{
    width: 100%;
    height: 100%;
    margin: 0 auto;

}
.tagbaritems_text{
    flex: 1;
    text-align: center;
    font-size: 1vh;
}
.active{
    background-color: gray;
}
</style>