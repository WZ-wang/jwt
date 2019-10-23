import React, { Component } from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as actions from "../actions/films"
class Films extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>电影列表</h1>
                <button onClick={()=>this.props.getFilm()}>获取电影列表</button>
            </div>
        );
    }
}
function setCounterState(state){
    console.log(state.filmList)
    return {
        filmList:state.filmList
    }
}
function setCounterMethods(dipatch){
    return bindActionCreators(actions,dipatch)
}

export default connect(setCounterState,setCounterMethods)(Films);