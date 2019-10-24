import axios from "axios"
import * as types from "../actions-types"
export function getList(){
    return {
        type:types.GETLIST
    }
}

export function getFilmList(){
    return function(dispatch){
        axios.get("http://m.maoyan.com/ajax/movieOnInfoList?token=").then(res=>{
            console.log(res)
        })
    }
}