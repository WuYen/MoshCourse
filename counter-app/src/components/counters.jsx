import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 3, value: 30 },
      { id: 4, value: 40 }
    ]
  };

  handleIncrement = counter => {
    const counters = this.state.counters; //[...this.state.counters];
    const index = counters.indexOf(counter);
    //counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("counterId: " + counterId);
    const tempCounters = this.state.counters.filter(x => {
      return x.id !== counterId;
    });
    this.setState({ counters: tempCounters });
  };

  handleReset = () => {
    console.log("handle reset");
    const newCounters = this.state.counters.map(x => {
      x.value = 0;
      return x;
    });
    console.log(newCounters);
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
