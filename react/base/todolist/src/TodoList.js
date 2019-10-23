import React, { Component } from "react"
import PropTypes from "prop-types"
import Todo from "./Todo"

export default class TodoList extends Component {
    render() {
        return (
            <section className="main">
                <input onChange={(e)=>this.props.allSelect(e.target.checked)} checked={this.props.allSelected} type="checkbox"  className="toggle-all" />
                <ul className="todo-list">
                    {this.props.todos.map((todo,index)=>
                        <Todo select = {this.props.select} SubTodo = {this.props.SubTodo} todo={todo} key={index}></Todo>
                    )}
                </ul>
            </section>
        )
    }
}
TodoList.propTypes = {
    todos:PropTypes.array.isRequired,
    SubTodo:PropTypes.func.isRequired,
    select:PropTypes.func.isRequired,
    allSelect:PropTypes.func.isRequired,
    allSelected:PropTypes.bool.isRequired,
}