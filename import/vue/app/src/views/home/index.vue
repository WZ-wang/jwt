<template>
  <div>
    <div>
      <HomeHeader @selectCategory="selectCategory" :category="category"></HomeHeader>
    </div>
    <div>
      <cube-slide ref="slide" :data="slides" @change="changePage">
        <cube-slide-item
          v-for="(item, index) in slides"
          :key="index"
          @click.native="clickHandler(item, index)"
        >
          <a :href="item.url">
            <img :src="item.image" />
          </a>
        </cube-slide-item>
      </cube-slide>
    </div>
    <h1 style="margin:10px ">电影列表</h1>
    <div class="scroll-list-wrap">
      <cube-scroll ref="list">
        <cube-swipe>
          <transition-group name="swipe" tag="ul">
            <li class="swipe-item-wrapper" v-for="(data,index) in movieData.result" :key="data.id">
              <cube-swipe-item ref="swipeItem" :index="index">
                <div class="item-inner">
                  <div class="icon">
                    <img width="80" height="60" :src="data.pic" />
                  </div>
                  <div class="text">
                    <h2 class="item-name" v-html="data.title"></h2>
                    <p class="item-desc" v-html="data.info"></p>
                  </div>
                </div>
              </cube-swipe-item>
            </li>
          </transition-group>
        </cube-swipe>
      </cube-scroll>
    </div>
  </div>
</template>
<script>
import HomeHeader from "./HomeHeader";
// import * as types from "../../store/types"
import { createNamespacedHelpers } from "vuex";
let { mapState, mapActions, mapMutations } = createNamespacedHelpers("home");
import { getSlide } from "../../api/home";
export default {
  data() {
    return {
      slides: []
    };
  },
  activated() { //每次路由进入都会走这个api
    // let position = sessionStorage.getItem("position")
    // this.$refs.list.$e.scrollTop = position
  },
  methods: {
    ...mapActions(["setCategory"]),
    ...mapActions(["getMovie"]),
    ...mapMutations(["getCurrentCategory"]),
    selectCategory(id) {
      //选择分类后接收类型id
      this.getMovie({ size: 6, offset: 0, id: id[0] });
    },

    //轮播图切换和点击的事件
    changePage(current) {
      // console.log("当前轮播图序号为:" + current);
    },
    clickHandler(item, index) {
      console.log(item, index);
    },
  },
  async mounted() {
    this.setCategory();
    this.getMovie();
     // 防抖节流  回到离开时的位置
    // let timer;
    // this.$refs.list.$el.addEventListener("scroll",(e)=>{
    //   if(timer){
    //     clearTimeout(timer)
    //   }
    //   setTimeout(()=>{
    //     sessionStorage.setItem("position",e.target.scroll.scrollTop)
    //   },75)
    // })
    this.slides = await getSlide();
  },
  computed: {
    ...mapState(["category"]), //菜单的数据
    ...mapState(["movieData"]) //电影的数据
  },
  components: {
    HomeHeader
  }
};
</script>

<style lang="stylus" scoped>
.scroll-list-wrap {
  height: calc(100vh - 320px);
}

.cube-slide {
  height: 150px;
}

.item-inner {
  display: flex;
  margin-top: 20px;

  .icon {
    margin: 0 20px;
  }

  .text {
    line-height: 1.5;

    h1 {
      font-weight: bold;
    }

    p {
      font-size: 20px;
      color: #ccc;
    }
  }
}
</style>
