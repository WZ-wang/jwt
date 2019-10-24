import * as types from "../actions-types"
import { resolve } from "path"
import { reject } from "q"
export function add(payload){
    return {
        type:types.ADD,
        payload
    }
}

export function sub(payload){
    return {
        type:types.SUB,
        payload
    }
}

export function asyncAdd(){
    return function(dispatch){
        setTimeout(()=>{
            dispatch(add(20))
        },2000)
    }
}

export function promiseAdd(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(add(30))
        },2000)
    })
}