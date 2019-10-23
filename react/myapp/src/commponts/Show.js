import React, { Component } from 'react';

class Show extends Component {
    render() {
        return (
            <div>
                <h1>counter:{this.props.counter}</h1>
            </div>
        );
    }
}

export default Show;