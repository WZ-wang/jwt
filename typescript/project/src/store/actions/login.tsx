import * as types from "../type-action"
import {AnyAction} from "redux"
import { push } from "connected-react-router"
export default{
    go(path:string):AnyAction{
        return push(path)
    },
    addUser(payload:any):AnyAction{
        return {
            type:types.USER_INFO,
            payload 
        }
    }
}