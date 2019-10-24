import React, { Component } from 'react';

let ColorContext = React.createContext()
class Wrapper extends Component {
    render() {
        let ContentValue = {color:this.state.color,changeColor:this.changeColor}
        return (
            <ColorContext.Provider value={ContentValue}>
            <div style={{border:`2px solid ${this.state.color}`,padding:5}}>
                <h1>Wrapper</h1>
                <Head></Head>
                <Main></Main>
            </div>
            </ColorContext.Provider>
        );
    }
    state={color:"red"}
    changeColor = (color) => {
        this.setState({
            color
        })
    }
}
function Head() {
    return (
        <ColorContext.Consumer>
     {
        value=>(
            <div style={{border:`2px solid ${value.color}`,padding:5}}>
                <h1>head</h1>
                <Title></Title>
            </div>
        )
     }
    </ColorContext.Consumer>
    )
}
class Title extends Component {
    static contextType = ColorContext;
    render() {
        return (
            <div style={{border:`2px solid ${this.context.color}`,padding:5}}>
                <h1>title</h1>
            </div>
        );
    }
}
class Main extends Component {
    static contextType = ColorContext;
    render() {
        return (
            <div style={{border:`2px solid ${this.context.color}`,padding:5}}>
                <h1>main</h1>
                <Content></Content>
            </div>
        );
    }
}
class Content extends Component {
    static contextType = ColorContext;
    render() {
        return (
            <div style={{border:`2px solid ${this.context.color}`,padding:5}}>
                <h1>Content</h1>
                <button onClick={()=>this.context.changeColor("blue")}>变蓝</button>
                <button onClick={()=>this.context.changeColor("green")}>变绿</button>
            </div>
        );
    }
}



export default Wrapper;