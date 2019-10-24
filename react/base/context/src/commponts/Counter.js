import * as actions from "../store/actions/counter"
import React, { Component } from 'react';
import {Route,Link} from "react-router-dom"
// import {bindActionCreators} from "../redux"
import {connect} from "react-redux"
import Time from "./Time"
import Film from "./Film"
import Wrapper from "./Wrapper"


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
                <Link to="/wrapper">Wrapper</Link>
                <Route path="/wrapper" exact component={Wrapper}></Route>
            </div>
        );
    }
}
let mapState = state=>state.counter
// function mapActions(dispatch){
//     return bindActionCreators(actions,dispatch)
// }

export default connect(mapState,actions)(Counter);