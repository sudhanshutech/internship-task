import React from "react";
import "./jumbotron.css";

export default function Jumbotron({ direction }) {
  return (
    <>
      <div className="container">
        <div className="headLine">Mission</div>
        <div className="logo">
          <div className="left">
            <img src="./images/Rectangle 14.svg" alt="" />
          </div>
          <div className="mid">
            <img src="images/path834.svg" alt="" />
          </div>
          <div className="right">
            <img src="./images/Rectangle 14.svg" alt="" />
          </div>
        </div>
        <div className="subContainer" style={{ flexDirection: direction }}>
          <div className="imageContainer">
            <img
              className="image"
              src="https://images.unsplash.com/photo-1510162126413-f644071b8f60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1490&q=80" alt=""
            />
          </div>
          <div className="infoContainer">
            <div className="firstGrayInfo">
              <span>Personalised</span>
              <p>
                Our core idealogy is to provide personalised homes to meet the
                very specific needs of residents.
              </p>
            </div>
            <div className="whiteInfo">
              <span>Committed</span>
            </div>
            <div className="whiteInfo">
              <span>Quality & Service Oriented</span>
            </div>
            <div className="whiteInfo">
              <span>Timely</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="headLine">Corporate Social Responsibility</div>
        <div className="logo">
          <div className="left">
            <img src="./images/Rectangle 14.svg" alt="" />
          </div>
          <div className="mid">
            <img src="images/path834.svg" alt="" />
          </div>
          <div className="right">
            <img src="./images/Rectangle 14.svg" alt="" />
          </div>
        </div>
        <div
          className="subContainer"
          style={{
            flexDirection: direction,
            height: "550px",
            flexDirection: "row-reverse",
          }}
        >
          <div className="imageContainer">
            <img
              className="image"
              src="https://ashwathfoundation.org/wp-content/uploads/2020/10/church-of-the-king-j9jZSqfH5YI-unsplash-min.jpg" alt=""
              style={{ width: "550px", height: "550px" }}
            />
          </div>
          <div className="infoContainer">
            <div className="firstGrayInfo">
              <span>Education for the under-privileged</span>
              <p>
                We believe that our future lies in the holistic educational
                foundation of the youth and we have nurtured that cause by
                providing the necessary books and monetary support to the
                under-privileged children of Mumbai & also at several villages
                in Gujarat. As the Trustees of the H A Desai Boarding School in
                Matunga, Mumbai, we have been providing living and hospitality
                services to the academically bright students from the weaker
                monetary sections of the society.
              </p>
            </div>
            <div className="whiteInfo">
              <span>Support for Rural Farmers</span>
            </div>
            <div className="whiteInfo">
              <span>Spiritual</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
