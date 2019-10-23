import React, { Component } from 'react';
import Counter from "./containters/Counter"
class App extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Counter></Counter>
            </div>
        );
    }
}

export default App;