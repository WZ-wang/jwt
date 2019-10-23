import React, { Component } from 'react';
import Home from "./home"
import User from "./User"
import List from "./list"
import Detail from "./Detail"
import Err from "./404"

import {Route,Link,Switch,Redirect} from "react-router-dom"

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/user">用户</Link></li>
                        <li><Link to="/list">列表</Link></li>
                    </ul>
                </div>
                <Switch> 
                {/* <Redirect from="/user" to="/"></Redirect> */}
                <Route path="/" exact component={Home}></Route>
                <Route path="/user"  component={User}></Route>
                <Route path="/list" exact component={List}></Route>
                <Route path="/detail/:id" exact component={Detail}></Route>
                <Route path="*" exact component={Err}></Route>
                </Switch>
                
            </div>
        );
    }
}

export default App;