import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <div className="main">
      <header className="nav">
        <div id="brand">
          <Link to="/">FundamentalCoder</Link>
        </div>
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li id="login">
              <Link to="/video-tut">Video-Tut</Link>
            </li>
            <li id="signup">
              <Link to="/algo-anim">Algo-Animation</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div id="hamburger-icon" onclick="toggleMobileMenu(this)">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
          <ul class="mobile-menu">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li id="login">
              <Link to="/login">Login</Link>
            </li>
            <li id="signup">
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
