import React from "react"
import ReactDom from "react-dom"
import {Route,Switch,Redirect} from "react-router-dom"
import store from "./store"
import {Provider} from "react-redux"
import {ConnectedRouter} from "connected-react-router"
import Home from "./pages/home"
import Mine from "./pages/mine"
import Profile from "./pages/profile"
import history from "./store/history"
import Tabs from "./components/Tabs"
import Login from "./pages/login/Login"
import Register from "./pages/register"
import "./assets/css/comment.less"
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { PersistGate } from 'redux-persist/integration/react'

ReactDom.render(
    <Provider store={store.store}>
        <ConnectedRouter history={history}>
        <PersistGate  persistor={store.persistor}>
        <ConfigProvider locale={zhCN}>
           <main className="main"> 
           <Switch>
                <Route path="/" exact component = {Home}></Route>
                <Route path="/mine" exact component = {Mine}></Route>
                <Route path="/profile" exact component = {Profile}></Route>
                <Route path="/login" exact component = {Login}></Route>
                <Route path="/register" exact component = {Register}></Route>
                <Redirect to="/"></Redirect>
            </Switch>
           </main>
            <Tabs></Tabs>
        </ConfigProvider>
        </PersistGate>
        </ConnectedRouter>
    </Provider>
    ,document.getElementById("app"))