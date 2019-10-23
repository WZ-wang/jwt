import React,{Component} from "react"
import PropTypes from "prop-types"
export default class Todo extends Component{
    render(){
       return(
        <li className={!this.props.todo.complete?"todo":"completed"}>
             <div className="view">
                <input type="checkbox" onChange={()=>this.props.select(this.props.todo)} checked={this.props.todo.complete} />
                <label>{this.props.todo.content}</label>
                <button className="destroy" onClick={()=>this.props.SubTodo(this.props.todo)}></button>
                <input type="text" ref='ipt' style={{display:"none"}}  className="edit" />
             </div>
        </li>
       )
    }
}

Todo.propTypes = {
    todo:PropTypes.object.isRequired,
    SubTodo:PropTypes.func.isRequired,
    select:PropTypes.func.isRequired,
}