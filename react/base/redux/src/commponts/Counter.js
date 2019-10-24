import * as actions from "../store/actions/counter"
import React, { Component } from 'react';
// import {bindActionCreators} from "../redux"
import {connect} from "react-redux"
import Time from "./Time"
import Film from "./Film"


class Counter extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
                <button onClick={()=>this.props.add(5)}>+</button>
                <button onClick={()=>this.props.sub(3)}>-</button>
                <button onClick={()=>this.props.asyncAdd()}>异步</button>
                <button onClick={()=>this.props.promiseAdd()}>promise</button>
                <br/>
                <Time></Time>
                <br/>
                <Film></Film>
            </div>
        );
    }
}
let mapState = state=>state.counter
// function mapActions(dispatch){
//     return bindActionCreators(actions,dispatch)
// }

export default connect(mapState,actions)(Counter);