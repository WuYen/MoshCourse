import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";

class ListGroup extends Component {
  state = {
    Genres: getGenres()
  };

  render() {
    let genres = [...this.state.Genres];
    return (
      <ul className="list-group">
        {genres.map(genre => {
          let classes = "list-group-item";
          if (genre._id == this.props.currentGenre) {
            classes += " active";
          }
          return (
            <li
              key={genre._id}
              className={classes}
              onClick={() => this.props.handleClick(genre._id)}
            >
              {genre.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListGroup;
