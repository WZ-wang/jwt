import * as types from "../type-actions"
import {push} from "connected-react-router"
export default{
    add(){
        return {
            type:types.ADD
        }
    },
    sub(){
        return {
            type:types.SUB
        }
    },
    goto(path){
        return push(path)
    }
}