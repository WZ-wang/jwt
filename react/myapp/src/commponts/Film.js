import * as actions from "../store/actions/film"
import React, { Component } from 'react';
import {connect} from "react-redux"

class Film extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={()=>this.props.getFilmList()}>get</button>
            </div>
        );
    }
}
let mapState = state=>({filmList:state.film})
export default connect(mapState,actions)(Film);