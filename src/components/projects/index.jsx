import React from "react";
import "./projects.scss";
export default function Projects() {
  return (
    <div class="project_background">
      <div class="project_overlay">
        <div class="project" id="projects">
          <h2>My Projects</h2>
          <div class="node">
            <img
              href="https://github.com/mnguyen96/Stock-sentiment-predictor"
              src={process.env.PUBLIC_URL + "/media/knn.png"}
              alt=""
              width="70%"
              height="70%"
              class="content"
            />
            <div class="proj_desc">
              <div class="proj_title">
                <b>Stock Sentiment Predictor</b>
              </div>
              <div class="description">
                I made a learning program that applies the KNN algorithm and
                historic weekly stock data from yahoo finance to predict stock
                sentiment and movement.
              </div>

              <div className="language_container">
                <span class="proj_languages">Python</span>
              </div>
            </div>
          </div>
          <div class="node">
            <img
              href="https://mnguyen96.github.io/audiovisualizer/index.html"
              width="70%"
              src={process.env.PUBLIC_URL + "/media/vis.png"}
              alt=""
              height="70%"
              class="content"
            />
            <div class="proj_desc">
              <div class="proj_title">
                <b>Audio Visualizer</b>
              </div>
              <div class="description">
                I made an audio visualizer using Javascript and Three.js. Using
                the Web Audio API, the program analyzes frequency data from a
                AnalyserNode and displays a specific hue and height based on the
                read frequency.
              </div>
              <div className="language_container">
                <span class="proj_languages">HTML</span>
                <span class="proj_languages">CSS</span>
                <span class="proj_languages">JavaScript</span>
                <span class="proj_languages">Three.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
