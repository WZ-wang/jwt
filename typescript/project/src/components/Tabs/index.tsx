import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import "./index.less"
import { Icon } from 'antd';
class Tabs extends Component {
    render() {
        return (
            <div className="tabs">
                <footer>
                <NavLink exact to="/">
                    <Icon type="home" />
                    <span>首页</span>
                </NavLink>
                <NavLink to="/mine">
                    <Icon type="video-camera" />
                    <span>我的电影</span>
                </NavLink>
                <NavLink to="/profile">
                    <Icon type="user" />
                    <span>个人中心</span>
                </NavLink>
            </footer>
            </div>
        );
    }
}

export default Tabs;