import * as React from "react"
import actions from "../store/actions/counter"
import {connect} from "react-redux"
import {State} from "../store/type/state"
interface props{
    number:number,
    add:any,
    sub:any,
    go:any
}
class Counter extends React.Component<props> {
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
                <button onClick={this.props.add}>+</button>
                <br/>
                <button onClick={this.props.sub}>-</button>
                <br/>
                <button onClick= {()=>this.props.go("/")}>返回首页</button>
            </div>
        );
    }
}
let mapState = function (state:any):State{
    return state.counter
}
export default connect(mapState,actions)(Counter);