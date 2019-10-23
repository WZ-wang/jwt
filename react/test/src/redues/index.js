import {combineReducers} from "redux"
import counter from "./counter"
import film from "./film"
const reducer = combineReducers({
    counter,film
})
export default reducer