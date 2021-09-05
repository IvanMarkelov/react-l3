import Counter from "./Counter";
import React, { Component, useState } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      ignoreProp: 0,
      seed: 40,
      showErrorTab: false,
    };
  }

  toggleApp = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  ignoreProp = () => {
    this.setState({
      ignoreProp: Math.random(),
    });
  };

  generateSeed = () => {
    this.setState({
      seed: parseInt(Math.random() * 100),
    });
  };

  showErrorTab = () => {
    this.setState({
      showErrorTab: !this.state.showErrorTab
    });
  };

  render() {
    return (
      <div>
        {this.state.toggle ? <Counter showErrorTab={this.state.showErrorTab} seed={this.state.seed} ignoreProp={this.state.ignoreProp} /> : null}
        {/* {toggle && <Counter />} */}
        <button onClick={this.toggleApp}>Toggle App</button>
        <button onClick={this.ignoreProp}>Ignore Prop</button>
        <button onClick={this.generateSeed}>Generate Seed</button>
        <button onClick={this.showErrorTab}>Show Error</button>
      </div>
    );
  }
}
