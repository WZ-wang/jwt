import React, { Component } from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as actions from "../actions/counter"
import Add from "../commponts/Add"
import Show from "../commponts/Show"
import Sub from "../commponts/Sub"
import AddAsync from "../commponts/AddAsync"
class Counter extends Component {
    render() {
        return (
            <div>
                <Show counter = {this.props.counter}></Show>
                <Sub sub = {this.props.sub}></Sub>
                <Add add = {this.props.add}></Add>
                <AddAsync asyncAdd = {this.props.asyncAdd}></AddAsync>
            </div>
        );
    }
}
function setCounterState(state){
    return {
        counter:state.counter
    }
}
function setCounterMethods(dipatch){
    return bindActionCreators(actions,dipatch)
}

export default connect(setCounterState,setCounterMethods)(Counter);