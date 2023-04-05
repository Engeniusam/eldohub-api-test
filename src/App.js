import React, { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import "./App.css";
import JokeList from "./JokeList.js";
import JokeCategory from "./JokeCategory.js";
import ChuckWelcome from "./ChuckWelcome.js";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      randomJoke: "",
      category: [],
      findJoke: [],
    };
  }

  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((response) => response.json())
      .then((cate) => this.setState({ category: cate }));
  }
  render() {
    return (
      <div className="app">
        <Header />

        <div className="app__body">
          <ChuckWelcome />
          <JokeList
            findJoke={this.state.findJoke}
            termSearch={this.state.termSearch}
          />
          <JokeCategory
            randomJoke={this.state.randomJoke}
            category={this.state.category}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
