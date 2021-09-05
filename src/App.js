import React, { Component, useState } from "react";
import "./App.css";

const Tab1 = () => <h1>Text of tab 1</h1>;

const Tab2 = () => <h1>Text of tab 2</h1>;

const Tab3 = () => <h1>Text of tab 3</h1>;

const ValidationTab = () => {
  const [num, setNum] = useState(0);

  const handleValidation = (e) => {
    setNum(e.target.value);
  };

  return (
    <div>
      <input type="number" onChange={handleValidation} />
      {num > 5 ? (
        <h2>Number {num} is bigger than 5</h2>
      ) : num < 5 ? (
        <h2>Number {num} is less than 5</h2>
      ) : (
        <h2>Number {num} equals 5</h2>
      )}
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }

  handleTab = (e) => {
    this.setState({
      activeTab: +e.target.getAttribute("data-name"),
    });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <div className="App">
        <ValidationTab />

        <button data-name="1" onClick={this.handleTab}>
          Tab1
        </button>
        <button data-name="2" onClick={this.handleTab}>
          Tab2
        </button>
        <button data-name="3" onClick={this.handleTab}>
          Tab3
        </button>

        {activeTab === 1 && <Tab1 />}
        {activeTab === 2 && <Tab2 />}
        {activeTab === 3 && <Tab3 />}
        <div>
          {`Active tab is: ${
            activeTab === 1 ? "first" : activeTab === 2 ? "second" : "third"
          }`}
        </div>
      </div>
    );
  }
}

export default App;
