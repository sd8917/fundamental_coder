import React from "react";
import "../Styles/about.css";
function About() {
  return (
    <div className="container pt-4">
      <div className="about">
        <img
          src="https://cdn1.vectorstock.com/i/1000x1000/77/05/bearded-coder-hacker-vector-17477705.jpg"
          alt="not found"
          width="400px"
          height="350px"
        />
        <div className="desc">
          <div className="desc-title">
            <h3 style={{ color: "red" }}>About Us</h3>
          </div>
          <div className="desc-para">
            <p>
              The motivation behind the introduction of useEffect Hook is to
              eliminate the side-effects of using class-based components. For
              example, tasks like updating the DOM, fetching data from API
              end-points, setting up subscriptions or timers, etc can be lead to
              unwarranted side-effects. Since the render method is to quick to
              produce a side-effect one needs to use life cycle methods to
              observe the side effects. For example, consider updating the
              document title for a simple counter component to the current
              value. On the initial render, we set the current clicked value to
              0 clicks. So, this section is coded into the componentDidMount()
              method which is executed only once in the component life cycle.
              Then we create a button to increment the count state value by one
              on every click. As the count value state changes, we also need to
              update the document title again and for that, we need to write the
              same piece of code in componentDidUpdate(). The
              componentDidupdate() method is perfect for updating the counter
              value at any time the state changes but the repetition of code is
              one of the side-effects.
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className="motivation-quote pt-4 pb-4">
        <pre>
          <strong>
            "Then we create a button to increment the count state value by one
            on every click"
          </strong>
          - sudhanshu
        </pre>
      </div>
    </div>
  );
}

export default About;
