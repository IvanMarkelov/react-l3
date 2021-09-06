import React, { Component } from "react";
import Lorem from "react-lorem-component";

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.defaultOpen,
    };
  }

  toggleArticle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  componentWillMount() {
    console.log("Component Will Mount");
    console.log("--------------------");
  }

  componentDidMount() {
    console.log("Component Did Mount");
    console.log("--------------------");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log("--------------------");
    console.log(this.state.isOpen + " " + this.props.title);
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    console.log("--------------------");
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultOpen != this.props.defaultOpen) {
      this.setState({
        isOpen: nextProps.defaultOpen,
      });
    }
  }

  render() {
    console.log("Render");

    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.toggleArticle}>
          {this.state.isOpen ? "Close" : "Open"}
        </button>
        {this.state.isOpen && (
          <Lorem count={Math.random() * 3} />
        )}
      </div>
    );
  }
}

export default Article;
