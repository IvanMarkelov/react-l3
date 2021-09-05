import Clock from "./Clock";
import React, { Component, useState } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
  }

  toggleClock = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    return (
      <div>
        {this.state.toggle && <Clock />}
        <button onClick={this.toggleClock}>
          {this.state.toggle ? "Turn off the clock" : "Turn on the clock"}
        </button>
      </div>
    );
  }
}
