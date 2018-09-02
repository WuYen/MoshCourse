import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    countersArray: [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 3, value: 30 },
      { id: 4, value: 40 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.countersArray.map(counter => (
          <Counter key={counter.id} value={counter.value} id={counter.id} />
        ))}
      </div>
    );
  }
}

export default Counters;
