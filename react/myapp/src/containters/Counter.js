import React, { Component } from 'react';
import Add from "../commponts/Add"
import Sub from "../commponts/Sub"
import Show from "../commponts/Show"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as actions from "../actions/counter"
class Counter extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <Show counter = {this.props.counter}></Show>
                <br/>
                <Add></Add>
                <br/>
                <Sub></Sub>
            </div>
        );
    }
}
function setCounterState(state){
    return{
        counter:state.counter
    }
}
function setCounterMethods(dispath){
    return bindActionCreators(actions,dispath)
}


export default connect(setCounterMethods,setCounterState)(Counter);