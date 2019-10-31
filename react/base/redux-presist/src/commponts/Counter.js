import React, { Component } from 'react';
import {connect} from "react-redux"
import actions from "../store/actions/counter"

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
                <button onClick = {this.props.add}>+</button>
                <button onClick = {this.props.sub}>-</button>
                <br/>
                <button onClick = {()=>this.props.goto("/")}>跳转home</button>
            </div>
        );
    }
}

export default connect(state=>state.counter,actions)(Counter);