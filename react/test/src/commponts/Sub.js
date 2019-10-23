import React, { Component } from 'react';

class Sub extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.sub()}>-</button>
            </div>
        );
    }
}

export default Sub;