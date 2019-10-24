import axios from "axios"
import * as types from "../actions-types"
export function getList(payload){
    return {
        type:types.GETLIST,
        payload
    }
}

export function getFilmList(){
    return function(dispatch){
        axios.get("http://m.maoyan.com/ajax/movieOnInfoList?token=").then(res=>{
            console.log(res)
        })
    }
}