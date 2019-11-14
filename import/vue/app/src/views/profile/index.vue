<template>
  <div>
    <div class="header">
      <img src="../../assets/user.jpg" alt />
      <p v-if="!user.username" @click="toLogin">登录</p>
      <p v-else>当前用户:{{user.username}}</p>
      <div>
        <cube-upload 
        action="http://localhost:3000/api/avatar" 
        :simultaneous-uploads="1" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  methods: {
    toLogin() {
      this.$router.push("/login");
    }
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>
<style lang="stylus" scoped>
.header {
  width: 100%;
  height: 200px;
  background-image: url('../../assets/bg.jpg');

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 20px 45%;
  }

  p {
    width: 100%;
    text-align: center;
    color: yellow;
    padding: 10px;
  }

  .file {
    position: absolute;
    top: 0;
  }
}
</style>