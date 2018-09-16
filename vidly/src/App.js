import React, { Component } from "react";
import "./App.css";
import MovieComponent from "./components/movie";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import NotFound from "./notFound";
import Customer from "./components/customer";
import Rental from "./components/rental";
import MovieForm from "./components/movieForm";

class App extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={MovieComponent} />
            <Route path="/customers" component={Customer} />
            <Route path="/rentals" component={Rental} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
