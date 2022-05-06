<template>
  <div class="tag-controll">
      <div v-for="(item,index) in titles" :key="index" :class="['tag-items',{'active':index===currentactive}]" @click="select(index)" >
          <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentactive:null
        }
    },
    props:{
        titles:{
            type:Array
        }
    },
    methods:{
        select(index){
            this.currentactive=index 
            this.$emit('tabclick',index)
        }
    }

}
</script>

<style scoped>
.tag-controll{
    display: flex;
    justify-content: center;
    flex-direction: row;
    box-shadow: 0px 0px 3px 0px black;
    position: sticky;
    top:10vh;
    background-color: white;
}
.tag-items{
    flex:1;
    line-height: 5vh;
    text-align: center;
}
.tag-items:hover{
    background-color: rgba(128, 128, 128,0.2);
    cursor: pointer;
}
.active{
    background-color: rgba(18, 128, 128,0.2);
}
.active span{
    color: var(--color-tint);
}
</style>