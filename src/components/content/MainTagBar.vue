<template>
  <tagbar>
      <tagbaritems path="/home">
        <img slot="items_img" src="~assets/img/tagbar/home.svg" alt="" srcset="">
        <span slot="items_text">首页</span>
      </tagbaritems>
      <tagbaritems path="/message">
        <img slot="items_img" src="~assets/img/tagbar/message.svg" alt="" srcset="">
        <span slot="items_text">消息</span>
      </tagbaritems>
      <tagbaritems path="/selec">
        <img slot="items_img" src="~assets/img/tagbar/select.svg" alt="" srcset="">
        <span slot="items_text">搜索</span>
      </tagbaritems>
      <tagbaritems path="/user">
        <img slot="items_img" src="~assets/img/tagbar/user.svg" alt="" srcset="">
        <span slot="items_text">个人</span>
      </tagbaritems>
    </tagbar>
</template>

<script>
import tagbar from 'components/common/tagbar/tagbar.vue'
import tagbaritems from'components/common/tagbar/tagbarItems.vue'
export default {
  name:"MainTagBar",
  components:{
    tagbar:tagbar,
    tagbaritems:tagbaritems
  }

}
</script>

<style>

</style>