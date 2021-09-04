import React, { Component } from "react";
import "./App.css";

const ErrorComponent = () => <div>{props.ignore}</div>;

class Counter extends Component {
  constructor(props) {
    console.log("Constructor");
    super(props);

    this.state = {
      counter: 0,
      seed: 0,
    };

    this.increment = () =>
      this.setState({
        counter: ++this.state.counter,
      });

    this.decrement = () =>
      this.setState({
        counter: --this.state.counter,
      });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      console.log("Get Derived State From Props");
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("Component Did Mount");
    console.log("--------------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps.ignoreProp);
    console.log(this.props.ignoreProp);
    if (nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("Should Component Update - DO NOT RENDER");
      return false;
    }
    console.log("Should Component Update - RENDER");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Get SNAPSHOT Before Update');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log("--------------------");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    console.log("--------------------");
  }

  componentDidCatch(error, info) {
    console.log("Component Did Catch Error");
    console.log(error + "\n" + info);
    this.setState({error, info});
    console.log(this.state);
    console.log("Changing state of error: " + this.state.error);
  }

  render() {
    console.log("Render");
    console.log(this.state.error);
    if (this.props.showErrorTab && this.state.error.message) {
      console.log(this.state);
      return <div>We have encountered an error! {this.state.error}</div>;
    }
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <h1>Counter: {this.state.counter}</h1>
        {this.props.showErrorTab && <ErrorComponent />}
      </div>
    );
  }
}

export default Counter;
