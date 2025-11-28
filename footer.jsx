import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* Left */}
      <p className="copyright">© 2025 yumify.com</p>

      {/* Center */}
      <p className="made-with">
        Made with <i className="fa-solid fa-heart"></i> by Harshu
      </p>

      {/* Right */}
      <div className="social-icons">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
    </div>
  );
};

export default Footer;
