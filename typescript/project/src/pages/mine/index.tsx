import React, { Component } from 'react';
import {connect} from "react-redux"
import actions from "../../store/actions/mine"
import {typeReducer} from "../../store/reducers"
import {mineType} from "../../store/reducers/mine"
import {RouteComponentProps} from "react-router"


type StateProps = ReturnType<typeof mapState>
type DispathProps = typeof actions
type RouterProps = RouteComponentProps
type Props = StateProps & RouterProps & DispathProps & {
    children?:any
}
class Mine extends Component<Props> {
    render() {
        return (
            <div>
               
            </div>
        );
    }
}
let mapState = (state:typeReducer):mineType => state.mine
export default connect(mapState,actions)(Mine);