import * as React from "react"
import actions from "../store/actions/counter"
import {connect} from "react-redux"
import {State} from "../store/type/state"
interface props{
    number:number,
    add:any,
    sub:any
}
class Counter extends React.Component<props> {
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
                <button onClick={this.props.add}>+</button>
                <br/>
                <button onClick={this.props.sub}>-</button>
            </div>
        );
    }
}

export default connect((state:State)=>state,actions)(Counter);