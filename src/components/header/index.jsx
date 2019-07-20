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
              &gt; Michael.Nguyen[description]
              <br />
              <span className="term">
                {" "}
                &nbsp;&nbsp;=&gt; "Hi! I'm a software developer living in
                Maryland!"
              </span>
            </p>
            &gt; Michael.Nguyen[interests]
            <br />
            <span className="term">
              &nbsp;&nbsp;=&gt; ["Programming", "Videography", "Design",
              "Music"]
            </span>
            <br />
            <br />
            &gt; Michael.Nguyen[education]
            <br />
            <span className="term">
              &nbsp;&nbsp;=&gt; "Computer Science graduate from University of
              Maryland, College Park"
              <br />
              <br />
            </span>
            &gt; Michael.Nguyen[projects]
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
