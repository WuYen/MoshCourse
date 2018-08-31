import React, { Component } from "react";
import "./App.css";
import MovieComponent from "./components/movie";

class App extends Component {
  render() {
    return (
      <div className="container">
        <MovieComponent />
      </div>
    );
  }
}

export default App;
