<template>
  <div class="home">
     <h1>首页面</h1>
     <br>
     <p>当前用户是：{{username}}</p>
  </div>
</template>

<script>
import {getUser} from "../api/user"
import {mapState} from "vuex"
export default {
  name: 'home',
  components: {
  },
  async mounted(){
   let r =  await getUser()
  },
  computed:{
    ...mapState(["username"])
  }
}
</script>
