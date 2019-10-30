import counter from "./counter"
import {combineReducers} from "redux"
import { connectRouter } from 'connected-react-router'
export default history=>combineReducers({
    counter,router:connectRouter(history)
})