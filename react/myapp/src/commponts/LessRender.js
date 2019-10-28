import React, { Component } from 'react';
import { setInterval } from 'timers';

class LessRender extends Component {
    constructor(props){
        super(props)
        this.state={
            date : new Date()
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                date:new Date()
            })
        }, 1000);
    }
    render() {
        // console.log("父组件的render")
        return (
            <div>
                <h1>{this.state.date.toString()}</h1>
                <C></C>
                <ChildrenUseP></ChildrenUseP>
            </div>
        );
    }
}
function children() {
    // console.log("子组件的render")
    return (
        <div>
            子组件
        </div>
    )
}
let C = React.memo(children)
// 如果一个组件是函数式组件，可以使用React.memo提升性能
//使用PureComponment避免子组件的重复渲染
class ChildrenUseP extends React.PureComponent{
    render(){
        // console.log("zi de render")
        return(
            <div>
                zi
            </div>
        )
    }
}


export default LessRender;