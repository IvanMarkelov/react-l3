import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

   // intervalFlag = null;

    this.state = {
      title: "Текущее время",
      date: new Date(),
      counter: 0,
    }
  }

  componentDidMount() {
    this.intervalFlag = setInterval(() => {
      console.log(this.state.counter);
      this.setState({
        date: new Date(),
        counter: ++this.state.counter
      });
    }, 1000);

    // Утечка памяти
    // setInterval(() => {
    //   console.log(this.state.counter);
    //   this.setState({
    //     date: new Date(),
    //     counter: ++this.state.counter
    //   });
    // }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalFlag);

    //Утечка памяти

    // clearInterval(setInterval(() => {
    //   console.log(this.state.counter);
    //   this.setState({
    //     date: new Date(),
    //     counter: ++this.state.counter
    //   });
    // }, 1000));
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

export default App;
