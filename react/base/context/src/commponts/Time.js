import store from "../store"
import * as actions from "../store/actions/time"
import React, { Component } from 'react';
import {bindActionCreators} from "../redux"

let all = bindActionCreators(actions,store.dispatch)

class Time extends Component {
    constructor(props){
        super(props)
        this.state={
            counter:store.getState().time.counter
        }
    }
    componentDidMount(){
       this.unsubsribe =  store.subscribe(()=>{
           this.setState({
               counter:store.getState().time.counter
           })
       })
    }
    componentWillUnmount(){
        this.unsubsribe()
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={()=>all.add()}>+</button>
                <button onClick={()=>all.sub()}>-</button>
            </div>
        );
    }
}


export default Time;