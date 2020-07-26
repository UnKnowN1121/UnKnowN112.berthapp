import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer py-3">
        <div className="container">
          <span className="text-muted">Bertha's Chocolate Factory</span>
          <span
            className="fa fa-instagram text-muted "
            aria-hidden="true"
          ></span>
          <span
            className="fa fa-facebook text-muted "
            aria-hidden="true"
          ></span>
          <span
            className="fa fa-twitter text-muted  "
            aria-hidden="true"
          ></span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
