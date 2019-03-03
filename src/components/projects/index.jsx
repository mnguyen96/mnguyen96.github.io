import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";
import "./projects.scss";

export default function Projects() {
  return (
    <div>
      <div className="button">
        <ReactTooltip />
        <Link to="/" id="link">
          <FontAwesomeIcon
            icon="home"
            size="2x"
            color="white"
            data-tip="Home"
          />
        </Link>
      </div>
      <div className="project">
        <h2>My Projects</h2>

        <div className="node">
          <a href="https://github.com/mnguyen96/Stock-sentiment-predictor">
            <img
              src={process.env.PUBLIC_URL + "/media/knn.png"}
              alt=""
              width="70%"
              height="70%"
              className="content"
            />
          </a>
          <div className="proj_details">
            <div className="proj_title">
              <a href="https://github.com/mnguyen96/Stock-sentiment-predictor">
                <b>Stock Sentiment Predictor</b>
              </a>
            </div>
            <div className="description">
              I made a learning program that applies the KNN algorithm and
              historic weekly stock data from yahoo finance to predict stock
              sentiment and movement.
            </div>

            <div className="language_container">
              <span className="proj_languages">Python</span>
            </div>
          </div>
        </div>
        <div className="node">
          <a href="https://mnguyen96.github.io/audiovisualizer/index.html">
            <img
              width="70%"
              src={process.env.PUBLIC_URL + "/media/vis.png"}
              alt=""
              height="70%"
              className="content"
            />
          </a>
          <div className="proj_details">
            <div className="proj_title">
              <a href="https://mnguyen96.github.io/audiovisualizer/index.html">
                <b>Audio Visualizer</b>
              </a>
            </div>
            <div className="description">
              I made an audio visualizer using Javascript and Three.js. Using
              the Web Audio API, the program analyzes frequency data from a
              AnalyserNode and displays a specific hue and height based on the
              read frequency.
            </div>
            <div className="language_container">
              <span className="proj_languages">HTML</span>
              <span className="proj_languages">CSS</span>
              <span className="proj_languages">JavaScript</span>
              <span className="proj_languages">Three.js</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
