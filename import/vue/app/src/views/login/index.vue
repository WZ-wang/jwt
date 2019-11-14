<template>
  <div>
    <div class="wrapper">
      <div class="header">
        <P @click="$router.go(-1)">返回</P>
        <h1>登录</h1>
      </div>
      <div>
        <cube-form :model="model">
          <cube-form-group class="form">
            <cube-input v-model="model.username" placeholder="请输入用户名"></cube-input>
            <cube-input type="password" v-model="model.password" placeholder="请输入密码"></cube-input>
            <cube-button @click="toLogin">登录</cube-button>
          </cube-form-group>
        </cube-form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
    data(){
        return {
            model:{
                username:"",
                password:""
            }
        }
    },
    methods:{
        ...mapActions(["login"]),
        toLogin(){
            this.login(this.model)
        }
    }
};
</script>

<style lang="stylus" scoped>
.wrapper{
    position absolute
    top 0
    left 0
    height 100%
    width 100%
    background-color #fff
    z-index 10
    
}
.header {
  width: 100%;
  height: 50px;
  display: flex;
  background-color: orange;
  line-height: 50px;

  h1 {
    flex: 1;
    text-align: center;
  }

  p {
    margin-left: 10px;
  }
}
.form{
    margin 10px
    cube-input{
        height 50px
    }
}
</style>