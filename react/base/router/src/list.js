import React, { Component } from 'react';
import {Link} from  "react-router-dom"
class list extends Component {
    render() {
        return (
            <div>
                <h1>列表</h1>
                <Link to="/detail/1">第一个</Link>
                <Link to="/detail/2">第二个</Link>
                <Link to="/detail/3">第三个</Link>
                <Link to="/detail/4">第四个</Link>
            </div>
        );
    }
}

export default list;