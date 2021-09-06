import React, { Component } from "react";
import "./App.css";
import Ccomponent from './Ccomponent'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
    };
  }

  render() {
    return <div className="App">
      <Ccomponent />
    </div>;
  }
}

export default App;
