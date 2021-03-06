import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Social from "./Social";
import UsersDashBoard from "./Users/UsersDashBoard";
import PageNotFound from "./PageNotFound";

// let log = console.log;

class Main extends Component {
  state = {
    error: true,
  };

  // routing right there

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/social">
            <Social />
          </Route>

          <Route exact path="/users/login">
            <Social />
          </Route>
          <Route exact path="/users/dashboard">
            <UsersDashBoard />
          </Route>
          <Route exact path="/users/sign-up">
            <Social />
          </Route>

          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </main>
    );
  }
}

export default Main;
