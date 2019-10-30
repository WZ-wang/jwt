import {createStore} from "redux"
import reduer from "./reducers"

let store = createStore(reduer)
export default store