import Vue from 'vue'
import Vuex from 'vuex'
import {login,validate} from "./api/user"
import {setLocal} from "./lib/local"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow:false,
    username:""
  },
  mutations: {
    loading(state){
      state.isShow = true
    },
    unloading(state){
      state.isShow = false
    },
    setUsername(state,username){
      state.username = username
    }
  },
  actions: {
    async getUsername({commit},username){
      let r = await login(username)
      if(r.code==0){
        setLocal("token",r.token)
        commit("setUsername",username)
        alert("登录成功")
      }else{
        alert("用户不存在")
      }
    },
    async validate(){
      let r = await validate()
      if(r.code==0){
        setLocal("token",r.token)
      }
      return r.code === 0
    }
  }
})
