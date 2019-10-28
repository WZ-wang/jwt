import * as actions from "../store/actions/counter"
import React, { Component } from 'react';
import {Route,Link} from "react-router-dom"
// import {bindActionCreators} from "../redux"
import {connect} from "react-redux"
import Time from "./Time"
import Film from "./Film"
import Wrapper from "./Wrapper"
import Ref from "./Ref"
import LessRender from "./LessRender"
import Hook from "./Hook"

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
                <br/>
                <h1>Ref</h1>
                <Ref></Ref>
                <h1>避免重复渲染</h1>
                <LessRender></LessRender>
                <h1>Hook</h1>
                <Hook></Hook>
            </div>
        );
    }
}
let mapState = state=>state.counter
// function mapActions(dispatch){
//     return bindActionCreators(actions,dispatch)
// }

export default connect(mapState,actions)(Counter);