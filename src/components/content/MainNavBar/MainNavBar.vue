 <template>
 <div class="NavBar">
     <nav-bar >
        <template v-slot:center>
      <nav-bar-item>
        <span><slot></slot></span>
      </nav-bar-item>
      </template>
     </nav-bar>
  
 </div>
 </template>
 <script>
    import NavBar from 'components/common/navbar/NavBar.vue'
    import NavBarItem from 'components/common/navbar/NavBarItem.vue'    
    export default{
    components:{
        NavBar,
        NavBarItem
    }
}
 </script>
 <style scoped>
 .NavBar{
  background-color: var(--color-tint);
  position: fixed;
  top: 0;
  z-index: 9;
}


 </style>
 