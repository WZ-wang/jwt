import React,{Component} from "react"
import PropTypes from "prop-types"
export default class AddTodo extends Component{
    render(){
       return(
        <header  className="header">
        <h1>todos</h1>
        <input type="text" onKeyUp={this.add.bind(this)}  className="new-todo" placeholder="what need to be done?"></input>
    </header>
       )
    }
    add(e){
        let content = e.target.value.trim()
        if(!content) return
        if(e.keyCode===13){
            this.props.AddTodo({content,complete:false})
            e.target.value=""
        }
    }
}
AddTodo.propTypes = {
    AddTodo:PropTypes.func.isRequired
}