import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
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
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(x => x.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
