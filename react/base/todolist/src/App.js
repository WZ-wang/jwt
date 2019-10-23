import React from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import Footer from "./Footer"

import "./styles/todo-mvc.css"

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[
                {content:"AAA",complete:true},
                {content:"BBB",complete:false},
                {content:"CCC",complete:true},
            ],
            nowState:"all"
        }
    }
    render(){
        return(
            <div>
                <AddTodo AddTodo={this.AddTodo.bind(this)}></AddTodo>
                <TodoList allSelected = {this.allSelected.bind(this)()}  allSelect = {this.allSelect.bind(this)} select = {this.select.bind(this)} SubTodo = {this.SubTodo.bind(this)}  todos = {this.showCurrentState.bind(this)()}></TodoList>
                <Footer nowState={this.state.nowState} changeNowState = {this.changeNowState.bind(this)}  Actived = {this.Actived.bind(this)()} deleteAll = {this.deleteAll.bind(this)}></Footer>
            </div>
        )
    }
    AddTodo(todo){
        this.state.todos.push(todo)
        this.setState({
            todos:this.state.todos
        })
        // localStorage.setItem("info",this.state.todos)
    }
    // componentDidMount(){
    //     this.getData()
    // }
    // getData(){
    //     if(localStorage.getItem("info")){
    //         this.setState({
    //             todos:localStorage.getItem("info")
    //         })
    //     }

    // }
    Actived(){
        return this.state.todos.filter(todo=>!todo.complete).length
    }
    SubTodo(todo){
        let delIndex = this.state.todos.findIndex(item=>todo===item)
        this.state.todos.splice(delIndex,1)
        this.setState({
            todos:this.state.todos
        })
    }
    select(todo){
        todo.complete = !todo.complete
        this.setState({
            todos:this.state.todos
        })
    }
    allSelect(selected){
        this.state.todos.map(item=>item.complete=selected)
        this.setState({
           todos:this.state.todos
       })
    }
    allSelected(){
       return this.state.todos.every(item=>item.complete)
    }
    deleteAll(){
        this.setState({
            todos:this.state.todos.filter(item=>!item.complete)
        })
    }
    showCurrentState(){
        switch (this.state.nowState) {
            case "all":
               return this.state.todos ;
            case "active":
                return this.state.todos.filter(item=>!item.complete)
            case "completed":
            return this.state.todos.filter(item=>item.complete)
            default:
                break;
        }
    }
    changeNowState(content){
        this.setState({
            nowState:content
        })
    }
}

export default App;