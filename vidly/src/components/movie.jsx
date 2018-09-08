import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import LikeBtn from "./like";
import PageBar from "./pagebar";
import ListGroup from "./listgroup";

class MovieTable extends Component {
  state = {
    MovieList: getMovies(),
    LikeList: [],
    pageSize: 3,
    totalCounts: getMovies().length,
    currentPageIndex: 1,
    currentGenre: "0"
  };

  handleDeleteMovie = id => {
    deleteMovie(id);
    let lengthMovie = getMovies()
      .slice(0)
      .filter(x => x.genre._id === this.state.currentGenre).length;
    this.setState({
      MovieList: getMovies(),
      totalCounts: lengthMovie
    });

    let newTotalPageCount = Math.ceil(lengthMovie / 3);
    if (this.state.currentPageIndex > newTotalPageCount) {
      this.setState({
        currentPageIndex:
          newTotalPageCount == 0 ? 1 : this.state.currentPageIndex - 1
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

  SetCurrentGenre = id => {
    this.setState({
      currentPageIndex: 1,
      currentGenre: id,
      totalCounts: getMovies()
        .slice(0)
        .filter(x => x.genre._id === id).length
    });
  };

  PaninateMovie = (items, index) => {
    const pageSize = this.state.pageSize;
    const tempList = items.slice(0);
    let skipCounts = (index - 1) * pageSize;
    let newCurrentPageMoviex = tempList.splice(skipCounts, pageSize);
    return newCurrentPageMoviex;
  };

  ClassifyMovie = id => {
    if (id === "0") {
      return getMovies().slice(0);
    }
    const tempList = getMovies().slice(0);
    const newMovies = tempList.filter(x => x.genre._id === id);
    return newMovies;
  };

  ShowTable() {
    const { length: count } = this.state.MovieList;
    let movies = this.ClassifyMovie(this.state.currentGenre);
    movies = this.PaninateMovie(movies, this.state.currentPageIndex);

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
      <div className="row">
        <div className="col-2">
          <ListGroup
            handleClick={this.SetCurrentGenre}
            currentGenre={this.state.currentGenre}
          />
        </div>
        <div className="col-10">
          {this.ShowTable()}
          <PageBar
            PageClick={this.PageClick}
            totalCounts={this.state.totalCounts}
            pageSize={this.state.pageSize}
            currentPageIndex={this.state.currentPageIndex}
          />
        </div>
      </div>
    );
  }
}

export default MovieTable;
