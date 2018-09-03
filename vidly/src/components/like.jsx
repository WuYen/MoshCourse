import React, { Component } from "react";

class LikeButton extends Component {
  render() {
    let classes = "fa fa-heart";
    if (this.props.isLike == -1) {
      classes += "-o";
    }
    return (
      <i
        onClick={() =>
          this.props.onLikeClick(this.props.movie, this.props.isLike)
        }
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      />
    );
  }
}

export default LikeButton;
