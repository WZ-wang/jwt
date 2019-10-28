import React, { Component } from 'react';

class Ref extends Component {
    constructor(props){
        super(props)
        this.num5 = React.createRef()
        this.num6 = React.createRef()
        this.res3 = React.createRef()
        this.num7 = React.createRef()
        this.num8 = React.createRef()
        this.res4 = React.createRef()
        this.state={
            val1:1,
            val2:1
        }
    }
    add(){
        this.refs.res.value = this.refs.num1.value + this.refs.num2.value
    }
    add2(){
        this.res2.value = this.num3.value + this.num4.value
    }
    add3(){
        this.res3.current.value = this.num5.current.value + this.num6.current.value
    }
    add4(){
        this.res4.current.value = this.num7.current.value + this.num8.current.value
    }
    valueChange(event){
        // console.log(event.target)
        // console.log(event.target.dataset)
        // console.log(event.target.dataset.name)
        this.setState({
            [event.target.dataset]:event.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>方法一</h1>
                <input ref="num1" type="text" />+
                <input ref="num2" type="text"/> 
                {/* this的三种写法 */}
                <button onClick={()=>this.add()}>=</button>
                {/* <button onClick={this.add.bind(this)}>=</button> */}
                {/* <button onClick={this.add}>=</button> 此时方法要写成箭头函数 */}
                <input ref="res" type="text"/>
                <br/>
                <h1>方法二</h1>
                <input ref={value=>this.num3=value} type="text" />+
                <input ref={value=>this.num4=value} type="text"/> 
                <button onClick={()=>this.add2()}>=</button>
                <input ref={value=>this.res2=value} type="text"/>
                <h1>方法三</h1>
                <input ref={this.num5} type="text" />+
                <input ref={this.num6} type="text"/> 
                <button onClick={()=>this.add3()}>=</button>
                <input ref={this.res3} type="text"/>
                <h1>可控</h1>
                <input ref={this.num7} data-name="val1" type="text"  onChange={this.valueChange.bind(this)} />+
                <input ref={this.num8} data-name="val2" type="text"  onChange={this.valueChange.bind(this)}/> 
                <button onClick={()=>this.add4()}>=</button>
                <input ref={this.res4} type="text" value = {this.state.val1+this.state.val2} onChange={()=>{}} />
            </div>

        );
    }
}

export default Ref;