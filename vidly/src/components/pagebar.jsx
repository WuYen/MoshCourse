import React, { Component } from "react";
import Lodash from "lodash";

class PageBar extends Component {
  render() {
    const pagesCount = Math.ceil(this.props.totalCounts / this.props.pageSize);
    const pages = Lodash.range(1, pagesCount + 1);
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map(x => {
            let classes = "page-item";
            if (x === this.props.currentPageIndex) {
              classes += " active";
            }
            return (
              <li key={x} className={classes}>
                <a
                  className="page-link"
                  onClick={() => this.props.PageClick(x)}
                >
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
