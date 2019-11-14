// import * as types from "../types"
import {getCategory,getMovie} from "../../api/home"
export default{
    namespaced:true,
    state: {
        category:[], //电影分类
        // currentCategory:-1, //当前电影类型的id
        movieData:{}, //电影数据
    },
    mutations: {
        setCategory(state,data){
            state.category = data            
        },
        getMovie(state,data){
            state.movieData = data            
        },
        // getCurrentCategory(state,id){
        //     state.currentCategory = id
        // }
    },
    actions: {
        async setCategory({commit}){
            let data = await getCategory()
            commit("setCategory",data)
        },
        async getMovie({commit},init={size:6,offset:0,id:-1}){
            let data = await getMovie(init)
            commit("getMovie",data)
        },

    }
}