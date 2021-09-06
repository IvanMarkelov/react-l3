import React, { Component } from "react";
import "./App.css";
import Ccomponent from './Ccomponent'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disableCcomponent: false,
    };
  }

  handleCcomponent = () => {
    this.setState({
      disableCcomponent: !this.state.disableCcomponent,
    })
  }

  render() {
    return <div className="App">
    {!this.state.disableCcomponent &&  <Ccomponent />}
    <button onClick={this.handleCcomponent}>{this.state.disableCcomponent ? `Монтировать` : `Демонтировать`} Ccomponent</button>
    </div>;
  }
}

export default App;
