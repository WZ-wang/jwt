import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./commponts/Counter"
import Home from "./commponts/Home"
import {Route,Link} from "react-router-dom"
import configureStore,{history} from "./store"
import {Provider} from "react-redux"
import {ConnectedRouter} from "connected-react-router"
import { PersistGate } from 'redux-persist/integration/react'
let {store,persistor} = configureStore({counter:{number:10}})
ReactDOM.render(
    <Provider store = {store}>
        <ConnectedRouter history={history}>
        <PersistGate persistor ={persistor}>
        <Link to="/">首页</Link>
        <Link to="/counter">计数器</Link>
        <Route path="/" exact component={Home}></Route>
        <Route path="/counter" component={Counter}></Route>
        </PersistGate>
       </ConnectedRouter>
    </Provider>
, 
document.getElementById('app'));

