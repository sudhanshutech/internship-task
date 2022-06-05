import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-menu">
          <div className="header_logo">
            <img src="./images/hetali logo_final_29.7 1.svg" alt="" />
          </div>

          <div className="aboutUs">ABOUT US</div>
          <div className="project">PROJECTS</div>
          <div className="diverse">DIVERSIFICATION</div>
          <div className="process">OUR PROCESS</div>
          <div className="testimonial">TESTIMONIALS</div>
          <div className="career">CARRERS</div>
          <div className="contact">CONTACT US</div>
        </div>
      </div>
    </>
  );
}

export default Header;
