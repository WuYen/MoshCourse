import React, { Component } from "react";

class PageBar extends Component {
  state = {
    pageSize: 5,
    pageCount: 3,
    currentPage: 1
  };

  handleClick = index => {
    this.props.PageClick(index);
    this.setState({ currentPage: index });
  };
  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {[1, 2, 3].map(x => {
            let classes = "page-item";
            if (x === this.state.currentPage) {
              classes += " active";
            }
            return (
              <li key={x} className={classes}>
                <a className="page-link" onClick={() => this.handleClick(x)}>
                  {x}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default PageBar;
