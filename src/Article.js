import React, { Component } from "react";
import Lorem from "react-lorem-component";

class Article extends Component {
  constructor(props) {
    super(props);
    const date = new Date();

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
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    console.log("--------------------");
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
          <Lorem count="2" />
        )}
      </div>
    );
  }
}

export default Article;
