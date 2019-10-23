import React, { Component } from 'react';

class Add extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.add()}>+</button>
            </div>
        );
    }
}

export default Add;