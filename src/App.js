import React, { Component } from "react";
import "./App.css";
import Test1 from "./Test1";
import Test2 from "./Test2";

class App extends Component {
  constructor(props) {
    super(props);
  }

  list = new Array(124).fill('item');

  render() {
    return <div ref={this.listRef} className="App">
      {/* <Test1 arg={77} /> */}
      <Test2 arg={77} />
    </div>;
  }
}

export default App;
