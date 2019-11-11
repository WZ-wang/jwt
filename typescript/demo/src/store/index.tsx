import {createStore,applyMiddleware} from "redux"
import reduer from "./reducers"
import { routerMiddleware } from 'connected-react-router'
import history from "./history"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reduer)
const store = createStore(
    persistedReducer, 
    applyMiddleware(
      routerMiddleware(history),
  ),)
let persistor = persistStore(store)

export default {store,persistor}