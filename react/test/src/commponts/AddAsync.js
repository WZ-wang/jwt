import React, { Component } from 'react';

class AddAsync extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.asyncAdd()}>异步加</button>
            </div>
        );
    }
}

export default AddAsync;