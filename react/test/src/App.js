import React, { Component } from 'react';
import Counter from "./contains/Counter"
import Film from "./contains/Films"
class App extends Component {
  render() {
    return (
      <div>
        <Counter></Counter>
        <br/>
        <Film></Film>
      </div>
    );
  }
}

export default App;