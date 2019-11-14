<template>
  <div id="app">
    <div class="container">
      <transition  v-if="$route.meta.isSession" :name="move">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
      <transition v-else>
        <router-view />
      </transition>
    </div>
    <div class="footer">
      <cube-tab-bar v-model="selectedLabelDefault" :data="tabs" @click="clickHandler"></cube-tab-bar>
    </div>
  </div>
</template>
<script>
// import axios from "axios"
export default {
  data() {
    return {
      selectedLabelDefault: "/home",
      tabs: [
        {
          label: "首页",
          value: "/home",
          icon: "cubeic-home"
        },
        {
          label: "电影",
          value: "/movie",
          icon: "cubeic-like"
        },
        {
          label: "个人中心",
          value: "/profile",
          icon: "cubeic-vip"
        }
      ],
      move:"slide-left"
    };
  },
  methods: {
    clickHandler(label) {
      this.$router.push(label);
    }
  },
  watch: {
    $route: {
      handler(to, from) {
        if(to&&from){
          if(to.meta.index>from.meta.index){
            this.move = "slide-left"
          }else{
            this.move = "slide-right"
          }
        }
        this.selectedLabelDefault = to.path;
      },
      immediate: true
    }
  },
  created() {
    
  },
  components: {}
};
</script>
<style lang="stylus">
html, body, #app {
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  overflow: scroll;
}

.footer {
  background-color: #ccc;
}

.slide-left-enter-active, .slide-left-leave-active,.slide-right-enter-active, .slide-right-leave-active{
  transition all 0.3s linear;
}
.slide-left-enter-active,.slide-right-enter-active{
  position absolute
  top 0
  left 0 
  width 100%
}
.slide-left-enter{
  transform translate(100%)
}
.slide-left-leave-to{
  transform translate(-100%)
}
.slide-right-enter{
  transform translate(-100%)
}
.slide-right-leave-to{
  transform translate(100%)
}
</style>



