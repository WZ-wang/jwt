import React, { Component } from 'react';
import {createBrowserHistory} from "history"
let history = createBrowserHistory({
    forceRefresh:true //强制刷新
})
class Detail extends Component {
    render() {
        return (
            <div>
                <h4>商品详情</h4>
                {this.props.match.params.id}
                <button onClick={()=>history.go(-1)}>返回</button>
                <button onClick={()=>history.push("/user")}>用户</button>
            </div>
        );
    }
}

export default Detail;