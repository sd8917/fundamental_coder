import React from "react";

import "../Styles/home.css";
function Home() {
  return (
    <div className="container">
      <div className="main-page pt-4 pb-4">
        <div className="content">
          {/* blinking text */}
          <div class="wrapper">
            <div class="typing-demo">
              <h2 id="main-title">Welcome To Fundamentalcoder!</h2>
            </div>
          </div>
          {/* <h2 className="main-title-blink"></h2> */}

          <p className="intro">
            &#128073;
            <strong>
              Dedication :
              <br />
            </strong>
            main-page Learn developer using this community. You can contribute
            the our platform also.
            <br />
            &#128073;
            <strong>
              Patience :
              <br />
            </strong>
            We make your journey more easy to start in this era of computer .
            <br />
            &#128073;
            <strong>
              Consistency :
              <br />
            </strong>
            Have patience write coder daily.We are trying our best we can also
            contribute to our platform
            <br />
            <br />
            <em>Thanks &#128512;&#128151;</em>
          </p>
        </div>

        <div className="img-content">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJ7XnA4g4A6j4dKJmgXYocciMrXSgoEywhw&usqp=CAU"
            alt="not found"
          />
        </div>
      </div>

      <div className="divider m-4"></div>

      <div className="quote-main">"Coder everyday quote"</div>

      <div className="divider m-4"></div>

      <div className="service-provided pt-4 pb-4">
        <div className="service-content">
          <div className="community">
            <h3>Community Bounding </h3>
            <div className="community-content">
              <p>
                After this last step once again explores the GitHub repository.
                <br />
                You will notice that a master branch now existed, and it
                contained the app’s source code. You will see something like
                below in your GitHub repository
              </p>
              <img
                src="https://image.shutterstock.com/image-vector/community-concept-pictogram-showing-figures-260nw-559895728.jpg"
                alt="not found "
                width="300px"
                height="300px"
              />
            </div>
          </div>
          <div className="everyCoding">
            <h3>Every Day coder online</h3>
            <div className="everycoding-content">
              <img
                src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325502/a-cup-of-is-decaf-coffee.jpg"
                alt="not found "
                width="300px"
                height="300px"
              />

              <p>
                After this last step once again explores the GitHub repository.
                You will notice that a master branch now existed, and it
                contained the app’s source code. You will see something like
                below in your GitHub repository
              </p>
            </div>
          </div>
          <div className="tutorials">
            <h3>Video Content</h3>
            <div className="tutorials-content">
              <p>
                After this last step once again explores the GitHub repository.
                You will notice that a master branch now existed, and it
                contained the app’s source code. You will see something like
                below in your GitHub repository
              </p>
              <img
                src="https://www.digitalplanner.in/blog/wp-content/uploads/2020/02/Video-Marketing-Statistics-for-2020.jpg"
                alt="not found"
                width="300px"
                height="300px"
              />
            </div>
          </div>
          <div className="project-team">
            <h3>Project simulation</h3>
            <div className="project-content">
              <img
                src="https://www.xibms.com/blog/wp-content/uploads/2020/10/project-management.png"
                alt="not found"
                width="300px"
                height="300px"
              />
              <p>
                After this last step once again explores the GitHub repository.
                You will notice that a master branch now existed, and it
                contained the app’s source code. You will see something like
                below in your GitHub repository
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
