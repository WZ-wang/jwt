import {combineReducers,ReducersMapObject} from "redux"
import {connectRouter} from "connected-react-router"
import history from "../history"
import home from "./home"
import mine from "./mine"
import profile from "./profile"
import login from "./login"

let reducers:ReducersMapObject = {
    home,router:connectRouter(history),profile,mine,login
}

export type typeReducer = {
    [key in keyof typeof reducers]:ReturnType<typeof reducers[key]>
}

let reduer = combineReducers(reducers)

export default reduer

