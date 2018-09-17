import React, { Component } from "react";
// class MovieForm extends Component {
//   handleClick = () => {
//     this.props.history.replace("/movies");
//   };
//   render() {
//     return (
//       <div>
//         <h1>Movie Form {this.props.match.params.id}</h1>
//         <button className="btn btn-primary" onClick={this.handleClick}>
//           Save
//         </button>
//       </div>
//     );
//   }
// }

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
