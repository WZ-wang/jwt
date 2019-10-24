import {createStore,applyMiddleware,compose} from "redux"
import reducer from "./reducers"
import Thunk from "redux-thunk"
import Promise from "redux-promise"
let middleware = [Thunk,Promise]
// let initState={
//     counter:554
// }
// let store =compose(applyMiddleware(...middleware))(createStore)(reducer)
let store =createStore(reducer,compose(applyMiddleware(...middleware)))
 
export default store