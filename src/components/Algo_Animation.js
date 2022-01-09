import React from "react";

import "../Styles/algo_anim.css";
import Box from "./Box";

function Algo_Animation() {
  const Algo_animation_Clicked = (props) => {
    return <h1>Algo played..</h1>;
  };

  return (
    <div className="container">
      <div className="animation-content-wrapper pt-4 pb-4">
        <div className="animation-content">
          <div className="animation-dsa">
            <Box />
            <Box />

            <Box />
            <Box />
            <Box />
          </div>
          <button className="btn btn-primary">Add element</button>
          <button className="btn btn-danger">Iterate element</button>
        </div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Array
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action list-group-item-primary"
                  onClick={() => alert("clicked on insertion array")}
                >
                  Insertion in the array
                  <hr />
                </a>

                <a
                  href="#"
                  class="list-group-item list-group-item-action list-group-item-danger"
                  onClick={() => alert("clicked on  linear search")}
                >
                  Linear Searching in an array
                  <hr />
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action list-group-item-primary"
                  onClick={() => alert("clicked on removal array")}
                >
                  Removal in the array
                  <hr />
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action list-group-item-secondary"
                  onClick={() => alert("clicked on binary search")}
                >
                  Binary Search
                  <hr />
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action list-group-item-primary"
                  onClick={() => alert("clicked on vector method..")}
                >
                  vector method Demo
                  <hr />
                </a>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Strings
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action list-group-item-primary"
                  onClick={() => alert("clicked on iterating over string")}
                >
                  Iteration over string
                  <hr />
                </a>

                <a
                  href="#"
                  class="list-group-item list-group-item-action list-group-item-secondary"
                  onClick={() => alert("clicked on palindrome program")}
                >
                  Palindrom program
                  <hr />
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action list-group-item-primary"
                  onClick={() => alert("clicked on removal of vowels")}
                >
                  Removal of vowels
                  <hr />
                </a>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                LinkedList
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action list-group-item-primary"
                  onClick={() => alert("clicked on insertion in linked list")}
                >
                  Insertion in Linked List,
                  <hr />
                </a>

                <a
                  href="#"
                  class="list-group-item list-group-item-action list-group-item-secondary "
                  onClick={() => alert("clicked on removal from linked list")}
                >
                  Removal from linked list
                  <hr />
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action list-group-item-primary"
                  onClick={() =>
                    alert("clicked on iterating over the linked list")
                  }
                >
                  Iterating over the Linked list
                  <hr />
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action list-group-item-secondary"
                  onClick={() => alert("clicked on linkedlist STL demo")}
                >
                  Linkedlist STL demo
                  <hr />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Algo_Animation;
