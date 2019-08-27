import React, { Component } from "react";
import Main from "./components/main";
import Projects from "./components/projects";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faWrench } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { HashRouter, Route } from "react-router-dom";
import Header from "./components/header";
import "./App.css";
library.add(faHome, faWrench, faLinkedin, faGithub);

class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <>
          <Header />
          <Route path={"/"} component={Main} exact />
          <Route path={"/projects"} component={Projects} />
        </>
      </HashRouter>
    );
  }
}

export default App;
