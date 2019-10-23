import {createStore} from "redux"
import reduer from "../reduxs"

const state={
    counter:66
}
const store = createStore(reduer,state)
export default store;