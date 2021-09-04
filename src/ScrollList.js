import React, { Component, createRef } from "react";
import "./App.css";

class ScrollList extends Component {
  static defaultRef = ["C#", "Java", "C++"];

  constructor(props) {
    super(props);
    this.listRef = createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if(prevProps.length < this.props.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return <div ref={this.listRef}></div>;
  }
}

export default ScrollList;
