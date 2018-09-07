import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import LikeBtn from "./like";
import PageBar from "./pagebar";

class MovieTable extends Component {
  state = {
    MovieList: getMovies(),
    LikeList: [],
    pageSize: 3,
    totalCounts: getMovies().length,
    currentPageIndex: 1
  };

  handleDeleteMovie = id => {
    deleteMovie(id);
    this.setState({
      MovieList: getMovies(),
      totalCounts: getMovies().length
    });

    let newTotalPageCount = Math.ceil(getMovies().length / 3);
    if (this.state.currentPageIndex > newTotalPageCount) {
      this.setState({
        currentPageIndex: this.state.currentPageIndex - 1
      });
    }
  };

  handleLikeClick = (movie, isLike) => {
    var tempList = this.state.LikeList;
    if (isLike > -1) {
      tempList = tempList.filter(x => x !== movie._id);
    } else {
      tempList.push(movie._id);
    }
    this.setState({ LikeList: tempList });
  };

  PageClick = index => {
    this.setState({
      currentPageIndex: index
    });
  };

  PaninateMovie = index => {
    const pageSize = this.state.pageSize;
    const tempList = getMovies().slice(0);
    let skipCounts = (index - 1) * pageSize;
    let newCurrentPageMoviex = tempList.splice(skipCounts, pageSize);
    return newCurrentPageMoviex;
  };

  ShowTable() {
    const { length: count } = this.state.MovieList;
    const movies = this.PaninateMovie(this.state.currentPageIndex);
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
              {movies.map(movie => (
                <tr key={movie._id}>
                  <th scope="row">{movie.title}</th>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <LikeBtn
                      isLike={this.state.LikeList.indexOf(movie._id)}
                      onLikeClick={this.handleLikeClick}
                      movie={movie}
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
    return (
      <div>
        {this.ShowTable()}
        <PageBar
          PageClick={this.PageClick}
          totalCounts={this.state.totalCounts}
          pageSize={this.state.pageSize}
          currentPageIndex={this.state.currentPageIndex}
        />
      </div>
    );
  }
}

export default MovieTable;
