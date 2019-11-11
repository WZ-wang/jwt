import React, { Component } from 'react';
import {connect} from "react-redux"
import actions from "../../store/actions/home"
import {typeReducer} from "../../store/reducers"
import {homeType} from "../../store/reducers/home"
import {RouteComponentProps} from "react-router"
import Headers from "./header"
import Swiper from "./swiper"


type StateProps = ReturnType<typeof mapState>
type DispathProps = typeof actions
type RouterProps = RouteComponentProps
type Props = StateProps & RouterProps & DispathProps & {
    children?:any
}
class Home extends Component<Props> {
    
    render() {
        return (
           <div>
               <Headers setCategory={this.props.setCategory} currentCategory = {this.props.currentCategory}></Headers>
                <div className="home-contain">
                    <Swiper swipers={this.props.swipers} getSwiper={this.props.getSwiper}></Swiper>
                </div>
           </div>
        );
    }
}

let mapState = (state:typeReducer):homeType => state.home

export default connect(mapState,actions)(Home);