<template>
  <div>
    <div class="header">
      <h1>logo</h1>
      <p @click="showDrawer">菜单</p>
    </div>
    <div>
      <cube-drawer
        ref="drawer"
        title="影片分类"
        :data="data"
        :selected-index="selectedIndex"
        @select="selectHandler"
      ></cube-drawer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: Array
  },
  data() {
    return {
      selectedIndex: [],
    };
  },
  methods: {
    showDrawer() {
      this.$refs.drawer.show();
    },
    selectHandler(selectedVal, selectedIndex, selectedText) {
     this.$emit("selectCategory",selectedVal)
    }
  },
  computed:{
      data(){
          let allMovie = [{text:"全部电影",value:-1}]
          return this.category.length>0 ? [allMovie.concat(this.category)] :[allMovie]
      }
  }
};
</script>
<style lang="stylus" scoped>
.header {
  display: flex;
  height: 50px;
  line-height: 50px;
  justify-content: space-between;
  padding: 0 10px;
  background-color: orange;
}
</style>