import React from "react";
import "./card.css";

function Card() {
  return (
    <>
      <div className="cardMenu">
        <div className="heading">
          <p className="content">
            We endeavour to build homes which make it's residents happy and
            proud of their address. Residents are at heart of everything we do,
            we build homes to live in, not houses to stay in.
          </p>
        </div>
        <div className="card_logo">
          <div className="left_img">
            <img src="./images/Rectangle 14.svg" alt="" />
          </div>
          <div className="mid">
            <img src="images/path834.svg" alt="" />
          </div>
          <div className="left_img">
            <img src="./images/Rectangle 14.svg" alt="" />
          </div>
        </div>
        <div className="cardSection d-flex justify-content-center">
          <div className="row row-cols-1 row-cols-md-2 g-4 w-50 ">
            <div className="col">
              <div
                className="card"
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <img
                  src="./images/Vector.svg"
                  className="card-img-top"
                  style={{ height: "70px", marginTop: "20px" }}
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Our track record has been impeccable with project completion
                    on time and have surpassed expectations many a time, society
                    members have positively received our redevelopment plans and
                    encourage our modern and urbane designs to their neighbours.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <img
                  src="./images/star.svg"
                  className="card-img-top"
                  style={{ height: "70px", marginTop: "20px" }}
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    The Hetali Group is a redeveloper like no other with a
                    profound focus on quality and long term satisfaction of its
                    residents. The Hetali Group is a redeveloper like no other
                    with a profound focus on quality and long term satisfaction
                    of its residents.The Hetali Group is a redeveloper like no
                    other with a
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <img
                  src="./images/hand.svg"
                  className="card-img-top"
                  style={{ height: "70px", marginTop: "20px" }}
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    They just don't endeavour but build homes which make it's
                    residents proud of their address by putting home-owners at
                    the heart and soul of everything they do from start to
                    finish and post completion.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <img
                  src="./images/donate.svg"
                  className="card-img-top"
                  style={{ height: "70px", marginTop: "20px" }}
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Hetali Group lives by the ethos of building homes to live
                    and not houses to stay in.Hetali Group lives by the ethos of
                    building homes to live and not houses to stay in.Hetali
                    Group lives by the ethos of building
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cardBar"></div>
        <div className="cardText">
          Established in 1992, Hetali Group is a leading real estate developer
          of residential spaces across Mumbai and have earned an unmatched
          reputation amongst its very loyal customers. The company's
          customer-centric values, project management proficiency and technical
          expertise are amplified with over 6.5 lakh sq.ft. built and almost 1
          lakh sq.ft underway leading to more than families!
          <br />
          <br />
          The Hetali Group promises a lifestyle second to none. In a span of
          over four decades, the group has proved to be one of the most reputed
          real estate builders in the western suburbs of Mumbai with residences
          in prime locations such as Andheri, Goregaon, Vile Parle and Juhu.
          <br />
          <br />
          Spearheaded by Mr Jayesh Pandya, the company's central ideology is to
          provide homes customized to the customer's requirements and home’s
          that are superior in nature keeping in mind the needs of the modern
          home user.
        </div>
      </div>
    </>
  );
}

export default Card;
