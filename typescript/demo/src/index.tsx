import * as React from "react"
import * as ReactDom from "react-dom"
import {Route,Link} from "react-router-dom"
import Counter from "./components/Counter"
import Home from "./components/Home"
import store from "./store"
import history from "./store/history"
import {Provider} from "react-redux"
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'
// let store = configureStore({counter:{number:0}})
ReactDom.render(<Provider store = {store.store}>
    <ConnectedRouter history={history}>
        <PersistGate persistor={store.persistor}>
        <Link to="/">首页</Link>
        <Link to="/counter">计数器</Link>
        <Route path="/" exact component={Home}></Route>
        <Route path="/counter" component={Counter}></Route>
        </PersistGate>
    </ConnectedRouter>
    </Provider>,document.getElementById("app"))