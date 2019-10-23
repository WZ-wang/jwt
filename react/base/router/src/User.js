import React, { Component } from 'react';
import  {Route,Link} from "react-router-dom"
import Login from "./login"
 class User extends Component {
    render() {
        return (
            <div>
                <h1>用户</h1>
                <ul>
                <li><Link to="/user/login">登录</Link></li>
                </ul>
                <Route path="/user/login" component={Login}></Route>
            </div>
        );
    }
}

export default User;