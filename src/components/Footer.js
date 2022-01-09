import React from "react";
import { Link } from "react-router-dom";
import "../Styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer-list-item">
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/privacy_policy">Privacy policy</Link>
        </li>
        <li>
          <Link to="/career">career</Link>
        </li>
      </ul>

      <div className="social-media-link">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-youtube"></a>
        <a href="#" class="fa fa-instagram"></a>
      </div>
    </div>
  );
}

export default Footer;
