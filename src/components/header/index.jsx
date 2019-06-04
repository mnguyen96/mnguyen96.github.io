import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="about">
        <div className="about" id="console">
          <div className="contents">
            <p>
              &gt; Print michael.nguyen
              <br />
              <span className="term">
                {" "}
                &nbsp;&nbsp;=&gt; "Hi! I'm a software developer living
                Maryland!"
              </span>
            </p>
            &gt; michael.interests()
            <br />
            <span className="term">
              &nbsp;&nbsp;=&gt; ["Programming", "Videography", "Design",
              "Music"]
            </span>
            <br />
            <br />
            &gt; michael.education()
            <br />
            <span className="term">
              &nbsp;&nbsp;=&gt; "Computer Science graduate from University of
              Maryland, College Park"
              <br />
              <br />
            </span>
            &gt; michael.projects()
            <br />
            <span className="term">
              &nbsp;&nbsp;=&gt;{" "}
              <Link to="/projects" id="link">
                "Here are my personal projects!"
              </Link>
              <br />
            </span>
            <br />
            &gt; _
          </div>
        </div>
      </div>
    );
  }
}
