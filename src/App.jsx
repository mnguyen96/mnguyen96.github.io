import React, { Component } from "react";
import Header from "./components/header";
import Projects from "./components/projects";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
library.add(faHome);
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
