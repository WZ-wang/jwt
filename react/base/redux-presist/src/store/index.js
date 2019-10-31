import {createStore,applyMiddleware,compose} from "redux"
import {routerMiddleware} from "connected-react-router"
import {createBrowserHistory} from "history"
import reducers from "./reducers"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export let history = createBrowserHistory()
 
const persisitConfig = {
  key:"root",
  storage
}





export default function configureStore(preloadedState){
    // const store = createStore(reducers(history),preloadedState,applyMiddleware(routerMiddleware(history)))
    // const store = applyMiddleware(
    //     routerMiddleware(history))(createStore)
    //     (reducers(history),preloadedState);
    const persisitedReducer = persistReducer(persisitConfig,reducers(history))
    const store = createStore(
      persisitedReducer, 
        preloadedState,
        compose(
          applyMiddleware(
            routerMiddleware(history), 
          ),
        ))
    let persistor = persistStore(store)
    return {store,persistor}
}