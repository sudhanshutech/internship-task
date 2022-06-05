import React from "react";
import "./founder.css";

function Founder() {
  return (
    <>
      <div className="founderContainer">
        <div className="founderContent">
          <div className="message">Founder's Message</div>
          <div className="founderLogo">
            <img className="founderImage" src="./images/image 8.svg" alt="" />
          </div>
          <div className="name">Mr. Jayesh H. Pandya</div>
          <div className="thought">
            “When a customer buys a home, he is giving up a major chunk of his
            life's savings to do so. It is imperative to give him exactly what
            he looks for in his home.”
          </div>
          <div className="founderMessage">
            We bring to our clients much wanted human values, integrity, trust
            and an assurance of responsibility all coupled with our expertise in
            construction, engineering & management. Our biggest assets have
            always been our small but highly trained team of professional
            managers and engineers who are backed by a very able team of
            administrators. We have a clear vision about building on our
            strengths and our achievements while holding dear to us our basic
            principles
          </div>
        </div>
      </div>
    </>
  );
}

export default Founder;
