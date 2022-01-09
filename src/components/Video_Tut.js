import React from "react";

import "../Styles/video-tut.css";
function Video_Tut() {
  return (
    <div className="container pt-4 pb-4">
      <div className="video-tags pb-4">
        <div className="tag">
          <a href="#">LinkedList</a>
        </div>
        <div className="tag">
          <a href="#">Arrays</a>
        </div>

        <div className="tag">
          <a href="#">String</a>
        </div>
        <div className="tag">
          <a href="#">Dp</a>
        </div>
        <div className="tag">
          <a href="#">Tree</a>
        </div>
        <div className="tag">
          <a href="#">GeneralConcepts</a>
        </div>
      </div>

      <div className="video-content">
        <div className="video-player">
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/TWMCMvfEAv4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="video-conten-topics">
          <div class="list-group">
            <h3 className="text-center">Arrays</h3>
            <a href="#" class="list-group-item list-group-item-action">
              Find max sum subarray
            </a>

            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-primary"
            >
              Two sum problem
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-secondary"
            >
              Linear searching
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-success"
            >
              Binary Search
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-danger"
            >
              Combinning two array
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-warning"
            >
              Find max sum in the array
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-info"
            >
              Traversal methods
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video_Tut;
