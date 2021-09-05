import Article from "./Article";
import React, { Component, useState } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reverted: true,
      articles: [
        { title: "Article 1" },
        { title: "Article 2" },
        { title: "Article 3" },
        { title: "Article 4" },
      ],
    };
  }

  revertComponent = () => {
    this.setState({
      reverted: !this.state.reverted,
    });
  };

  populateList = (isReverse) => {
    let articles = this.state.articles;
   //let articles = (isReverse) ? this.state.articles.reverse() : this.state.articles;
    this.state.articles.map((article, index) => (
      <li key={article.title}>
        <Article title={article.title} defaultOpen={index === 0} />
      </li>
    ));
  };

  render() {
    return (
      <div>
        <button onClick={this.revertComponent}>Revert</button>
        <ul>
          {this.populateList(true)}
          {/* {this.state.reverted
            ? this.populateList(this.state.articles.reverse())
            : this.populateList(this.state.articles)} */}
        </ul>
      </div>
    );
  }
}
