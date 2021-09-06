import Article from "./Article";
import React, { Component, useState } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reverted: false,
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

  populateList = () => {
    let articles = null;
    if (!this.state.reverted) {
      articles = this.state.articles;
    } else {
      articles = this.state.articles.reverse();
    }
    return articles.map((article, index) => (
      <li key={article.title}>
        {console.log(article.title + " " + index + " " + (index === 0))}
        <Article title={article.title} defaultOpen={index === 0} />
      </li>
    ));
  };

  render() {
    return (
      <div>
        <button onClick={this.revertComponent}>Revert</button>
        <ul>{this.populateList()}</ul>
      </div>
    );
  }
}
