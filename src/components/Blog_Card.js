import React from "react";

import "../Styles/blog_card.css";

function Blog_Card() {
  return (
    <>
      <div class="row">
        <div class="leftcolumn">
          <div class="blog_card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div class="fakeimg" style={{ height: "200px" }}>
              Image
            </div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
              <a href="#">Read more...</a>
            </p>
          </div>
        </div>
        <div class="rightcolumn">
          <div class="blog_card">
            <h3>Popular Post</h3>
            <div class="fakeimg">Image</div>
            <br />
            <div class="fakeimg">Image</div>
            <br />
            <div class="fakeimg">Image</div>
          </div>
          <div class="blog_card">
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog_Card;
