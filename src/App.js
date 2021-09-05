import React, { Component, Fragment } from "react";
import "./App.css";
import RecursiveButton from "./RecursiveButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showGreeting: false,
    };
  }

  handlerClick = (e) => {
    this.setState({
      showGreeting: !this.state.showGreeting,
    });
  };

  render() {
    let content = null;
    if (this.state.showGreeting) {
      content = (
        <>
          <h1>Привет Мир!</h1>
          <div>Message</div>
        </>
      )
    }
    return (
      <>
        <RecursiveButton />
        <button onClick={this.handlerClick}>Toggle greeting</button>
        {content}
      </>
    );
  }
}

export default App;
