import {createStore,applyMiddleware,compose} from "redux"
import {routerMiddleware} from "connected-react-router"
import {createBrowserHistory} from "history"
import reducers from "./reducers"

export let history = createBrowserHistory()
 


export default function configureStore(preloadedState){
    // const store = createStore(reducers(history),preloadedState,applyMiddleware(routerMiddleware(history)))
    // const store = applyMiddleware(
    //     routerMiddleware(history))(createStore)
    //     (reducers(history),preloadedState);
    const store = createStore(
        reducers(history), 
        preloadedState,
        compose(
          applyMiddleware(
            routerMiddleware(history), 
          ),
        ))
    return store
}