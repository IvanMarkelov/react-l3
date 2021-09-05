import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    const date = new Date();

    this.state = {
      seconds: date.getSeconds(),
      minutes: date.getMinutes(),
      hours: date.getHours(),
    };

    this.tick = () => {
      const date = new Date();
      console.log(date.toLocaleTimeString());
      this.setState({
        seconds: date.getSeconds(),
        minutes: date.getMinutes(),
        hours: date.getHours(),
      });
    };
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000);
    console.log("Component Did Mount");
    console.log("--------------------");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log("--------------------");
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    console.log("Component Will Unmount");
    console.log("--------------------");
  }

  render() {
    console.log("Render");
    const { seconds, minutes, hours } = this.state;
    const s = seconds * 6;
    const m = minutes * 6 + (6 * seconds) / 60;
    const h = (hours % 12) * 30 + (6 * minutes) / 60;
    return (
      <div className="clock">
        <div className="clock_seconds" style={{ transform: "rotate(" + s + "deg)" }}></div>
        <div className="clock_minutes" style={{ transform: "rotate(" + m + "deg)" }}></div>
        <div className="clock_hours" style={{ transform: "rotate(" + h + "deg)" }}></div>
      </div>
    );
  }
}

export default Clock;
