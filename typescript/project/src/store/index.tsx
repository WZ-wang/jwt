import {createStore,applyMiddleware,compose} from "redux"
import {routerMiddleware} from "connected-react-router"
import thunk from "redux-thunk"
import logger from "redux-logger"
import promise from "redux-promise"
import history from "./history"
import reduer from "./reducers"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, reduer)
let store = createStore(persistedReducer,compose(applyMiddleware(routerMiddleware(history),logger,thunk,promise)))
let persistor = persistStore(store)
export default {store,persistor}



