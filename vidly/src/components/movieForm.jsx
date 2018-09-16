import React, { Component } from "react";
class MovieForm extends Component {
  handleClick = () => {
    this.props.history.replace("/movies");
  };
  render() {
    return (
      <div>
        <h1>Movie Form {this.props.match.params.id}</h1>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
