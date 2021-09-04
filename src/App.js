import React, { Component } from "react";
import "./App.css";
import ScrollList from "./ScrollList";

class App extends Component {
  constructor(props) {
    super(props);
  }

  list = new Array(124).fill('item');

  render() {
    return <div ref={this.listRef} className="App">
      <ScrollList list={list} />
    </div>;
  }
}

export default App;
