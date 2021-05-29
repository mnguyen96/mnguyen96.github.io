import React from 'react';
import { Link } from 'react-router-dom';
import './main.scss';

export default function Main() {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="aboutWrapper">
        <div className="about d-flex flex-column">
          <div className="d-flex justify-content-center align-items-center">
            <span style={{ fontSize: '13px', color: 'black' }}>~/Michael.Nguyen</span>
          </div>
          <div id="console">
            <div className="contents">
              [Michael.Nguyen]$ cat description
              <br />
              <span className="term"> &nbsp;=&gt; "Hi! I'm a software developer living in Washington, DC!"</span>
              <br />
              <br />
              [Michael.Nguyen]$ ls interests
              <br />
              <span className="term">
                &nbsp;=&gt;{' '}
                <span style={{ color: 'rgb(58, 216, 71)' }}>Programming Sports Video_Games Gardening Music</span>
              </span>
              <br />
              <br />
              [Michael.Nguyen]$ cat education
              <br />
              <span className="term">
                &nbsp;=&gt; "B.S in Computer Science from University of Maryland, College Park"
                <br />
                <br />
              </span>
              [Michael.Nguyen]$ cat projects
              <br />
              <span className="term">
                &nbsp;=&gt;{' '}
                <Link to="/projects" id="link">
                  "Here are my personal projects!"
                </Link>
                <br />
              </span>
              <br />
              [Michael.Nguyen]$ <span className="blink">_</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
