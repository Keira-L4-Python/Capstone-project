import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <img
          src="https://meta-capstone-little-lemon.web.app/static/media/secondaryLogo.2c859235d6c57bb54176.png"
          alt="Little Lemon Logo"
          className="footer-logo"
        />
      </div>

      <div>
        <h3>Contact Us</h3>
        <p>Little Lemon Restaurant</p>
        <p>Chicago, Illinois</p>
        <p>Email: info@littlelemon.com</p>
      </div>

      <p className="copyright">
        © 2026 Little Lemon. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
