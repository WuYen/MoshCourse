import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Like from "./common/like";

class MovieTable extends Component {
  state = {
    MovieList: getMovies()
  };

  handleDeleteMovie = id => {
    deleteMovie(id);
    this.setState({
      MovieList: getMovies()
    });
  };

  handleLike = movie => {
    const movies = [...this.state.MovieList];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ MovieList: movies });
  };

  ShowTable() {
    const { length: count } = this.state.MovieList;
    if (count > 0) {
      return (
        <div>
          <p>Showing {count} movies in the database.</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col" />
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              {this.state.MovieList.map(movie => (
                <tr key={movie._id}>
                  <th scope="row">{movie.title}</th>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDeleteMovie(movie._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <p>There is no movie to display</p>;
    }
  }

  render() {
    return <div>{this.ShowTable()}</div>;
  }
}

export default MovieTable;
