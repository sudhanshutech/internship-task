import "./App.css";
import Header from "./components/header/header";
import Card from "./components/card/card";
import Jumbotron from "./components/jumbotron/jumbotron";
import Founder from "./components/founder/founder";

function App() {
  return (
    <>
      <Header />
      <div className="title">ABOUT US</div>
      <div className="about-us-content">
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
      <div className="image">
        <img src="./images/happy.svg" alt="" />
      </div>
      <Card />
      <div className="vision">
        <div className="visionText">
          <div className="visionContent">
            <div className="visionPara">Vision</div>
            <div className="visiontext">
              We aim to ensure top-class service to our stakeholders & diversify
              our business to other service-oriented sectors with the ultimate
              goal of achieving customer satisfaction & end-user interaction.
            </div>
          </div>
        </div>
      </div>
      <Jumbotron direction="row" />
      <Founder />
      <div className="group">
        <div className="groupHeading">
          <p className="groupText">Group Companies</p>
        </div>
        <div className="groupLogo">
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
        <div className="groupCompanies">
          <div className="img1">
            <img src="./images/image 3.svg" alt="" />
            <p className="imgText">Agriculture</p>
          </div>
          <div className="img2">
            <img src="./images/image 5.svg" alt="" />
            <p className="imgText">Fuel</p>
          </div>
          <div className="img1">
            <img src="./images/image 9.svg" alt="" />
            <p className="imgText">Foods</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
