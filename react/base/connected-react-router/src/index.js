import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./commponts/Counter"
import Home from "./commponts/Home"
import {Route,Link} from "react-router-dom"
import configureStore,{history} from "./store"
import {Provider} from "react-redux"
import {ConnectedRouter} from "connected-react-router"
let store = configureStore({counter:{number:10}})
ReactDOM.render(
    <Provider store = {store}>
        <ConnectedRouter history={history}>
        <Link to="/">首页</Link>
        <Link to="/counter">计数器</Link>
        <Route path="/" exact component={Home}></Route>
        <Route path="/counter" component={Counter}></Route>
       </ConnectedRouter>
    </Provider>
, 
document.getElementById('app'));

