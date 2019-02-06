import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import NotMatch from "./components/NotMatch";
import Home from "./components/Home";
import Result from "./components/Result";
import Login from "./components/Login";
import Signup from "./components/Signup";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NotMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
