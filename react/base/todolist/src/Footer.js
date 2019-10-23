import React, { Component } from "react"
import PropTypes from "prop-types"
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <span className="todo-count"><strong>{this.props.Actived}</strong> items left</span> 
            <ul className="filters">
                <li><a href="javascripte:;" className={this.props.nowState== "all" ?"selected":""} onClick={()=>this.props.changeNowState("all")}>all</a></li>
                <li><a href="javascripte:;" className={this.props.nowState== "active" ?"selected":""} onClick={()=>this.props.changeNowState("active")}>active</a></li>
                <li><a href="javascripte:;" className={this.props.nowState== "completed" ?"selected":""} onClick={()=>this.props.changeNowState("completed")}>completed</a></li>
            </ul>
            <button onClick={()=>this.props.deleteAll()} className="clear-completed">clear completed</button>
        </footer>
        )
    }
}

Footer.propTypes = {
    Actived:PropTypes.number.isRequired,
    nowState:PropTypes.string.isRequired,
    deleteAll:PropTypes.func.isRequired,
    changeNowState:PropTypes.func.isRequired,
}