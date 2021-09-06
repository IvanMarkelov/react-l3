import { render } from "@testing-library/react";
import React, { Component } from "react";

export default class Ccomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: "off",
      label: "Press",
    };

    this.press = this.press.bind(this);

    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Component Did Mount");
    console.log("--------------------");
  }

  shouldComponentUpdate() {
    console.log("should Component update?");
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log("--------------------");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    console.log("--------------------");
  }

  press() {
    const className = this.state.class === "off" ? "on" : "off";
    this.setState({
      class: className,
    });
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h1>Ccomponent</h1>
        <button onClick={this.press}>{this.state.label} : {this.state.class}</button>
      </div>
    );
  }
}
