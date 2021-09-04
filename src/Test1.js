import React, { Component, createRef } from "react";
import "./App.css";

class Test1 extends Component {
  static defaultRef = ["C#", "Java", "C++"];

  constructor(props) {
    console.clear();
    console.log("constructor");
    console.log(props);
    super(props);
    this.listRef = createRef();
    this.state = {
      //s1: props.arg,
      s1: 0,
    };
  }

  buttonHandler = () => {
    console.log("buttonHandler works");
    let val = this.state.s1;
    val++;
    this.setState({
      s1: val,
    });
  };

  static getDerivedStateFromProps(props, state) {
    console.log("get derived state from props");
    return null;
    // return ({"s1": props.arg})
  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  render() {
    console.log("render 1");
    return (
      <>
        {console.log("render 2")}
        <div>
          <button onClick={this.buttonHandler}>Push</button>
        </div>
        <div>{this.state.s1}</div>
      </>
    );
  }
}

export default Test1;
