<template>
  <div class="about">
    <Input v-model="username"  placeholder="输入用户名" style="width: 260px" />
    <Button @click="login()"  type="primary" class="btn">登录</Button>

  </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
  data(){
    return{
      username:""
    }
  },
  methods:{
    ...mapActions(["getUsername"]),
    login(){
      this["getUsername"](this.username).then(res=>{
        this.$router.push("/")
      })
    }
  }
}
</script>
<style scoped>
.btn{
  margin-left: 10px;
}
</style>