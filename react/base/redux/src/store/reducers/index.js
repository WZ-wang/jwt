import counter from "./counter"
import time from "./time"
import film from "./film"
import {combineReducers} from "../../redux"
let reducer = combineReducers({
    counter,time,film
})
export default reducer