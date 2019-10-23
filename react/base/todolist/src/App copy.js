import React from "react"
import PropTypes from "prop-types"
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'ssdsd',
            age:10,
            book:["vue","react"]
        }
    }
    render() {
        return (
            <div>
                <h1>按下enter键添加书籍</h1>
                <input onChange={this.f.bind(this)} onKeyUp={this.addBook.bind(this)} value={this.state.name}></input>
                <button onClick={this.add.bind(this)}>加一</button>
                <h1>{this.state.name+this.state.age}</h1>
                <br/>
                {/* 样式要用{}包裹 */}
                <ul style={{listStyle:"none",color:"red"}}>
                    {this.state.book.map((item,index)=>
                        <li key={index}>{item}</li>
                    )}
                </ul>
            </div>
        )
    }
    f(e) {
        this.setState({
            name: e.target.value
        })
    }
    add(){
        this.setState({
            age:++this.state.age
        })
    }
    addBook(e){
        if(e.keyCode===13){
            this.state.book.push(e.target.value)
        this.setState({
            book: this.state.book
        })
        }
    }
}
export default App

App.PropTyeps={
    name:PropTypes.string.isRequired
}
