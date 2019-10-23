import {createStore,applyMiddleware} from "redux"
import reduer from "../redues/"
import thunkMiddleware from "redux-thunk"

const createStoreWithMidd =  applyMiddleware(thunkMiddleware)(createStore)

const state = {
    counter:55,
    filmList:55
}

const store = createStoreWithMidd(reduer,state)

export default store