import counter from "./counter"
import {combineReducers} from "redux"
import { connectRouter } from 'connected-react-router'
import history from "../history"
let  reduer = combineReducers({
    router:connectRouter(history),
    counter
})
export default reduer
