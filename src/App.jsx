import React, { Component } from "react";
import Header from "./components/header";
import Projects from "./components/projects";

import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path={"/"} component={Header} exact />
          <Route path={"/projects"} component={Projects} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
