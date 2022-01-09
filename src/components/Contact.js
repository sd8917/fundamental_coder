import React from "react";
import "../Styles/contact.css";
function Contact() {
  return (
    <div className="container">
      <div className="contact-container">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input type="text" class="form-control" id="name" />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">
              Message
            </label>
            <textarea class="form-control" placeholder="Type your message..." />
          </div>

          <button type="submit" class="btn btn-primary ">
            Submit
          </button>
        </form>
        <div className="image-container">
          <img
            src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2020/02/form-builders-11-850x435.png"
            alt="not found"
          />
        </div>
      </div>
      <hr />

      <div className="map-container pt-4 pb-4">
        <img
          src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1"
          alt="map"
        />
      </div>
      <div className="address-container">
        <address>
          <strong>You can find us here:</strong>
          <br />
          GeeksforGeeks
          <br />
          5th & 6th Floor, Royal Kapsons, A- 118, <br />
          Sector- 136, Noida, Uttar Pradesh (201305)
        </address>
      </div>
    </div>
  );
}

export default Contact;
