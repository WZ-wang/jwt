import Vue from 'vue'
import Vuex from 'vuex'
import home from "./moudles/home"
import {login,validate} from "../api/user"
import {Toast} from "cube-ui"
import router from "../router"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home
  },
  state: {
    allRequest:[],  //页面各种请求
    user:{},  //用户信息
    hasPass:false  //是否登录
},
mutations: {
    setRequest(state,data){
        state.allRequest.push(data)
    },
    removeRequest(state){
        state.allRequest=[]
    },
    setUser(state,data){
      state.user = {username:data.username}
      router.push("/")
    },
    hasPass(state,data){
      state.hasPass = data
    }
},
actions: {
  async login({commit},user){
    let data = await login(user)
    if(data){
      localStorage.setItem("token",data.token)
      commit("setUser",data)
    }else{
      Toast.$create({
        timeout:1000,
        txt:"有误"
      }).show()
    }
  },
  async validate({commit}){
    let data = await validate()
    if(data){
      commit("hasPass",true)
      commit("setUser",data)
      return true
    }else{
      commit("hasPass",false)
      // return false
    }
  }
}
})
