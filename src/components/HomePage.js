import React from "react";
import "../HomePage.scss";
import img1 from "../images/hat2.jpg";
const HomePage = () => {
  var s = {
    backgroundImage: "img1",
  };
  return (
    <>
      <div className="container">
        <div
          className="box"
          style={{
            backgroundImage: "url(" + "../images/hhat1.jpg" + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="box-items">
            <div className="title">Hats</div>
            <span click="subtitle">click for more</span>
          </div>
        </div>
        <div
          className="box"
          style={{
            backgroundImage: "url(" + "../images/men.jpg" + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="box-items">
            <div className="title">Men's Fashion</div>
            <span click="subtitle">click for more</span>
          </div>
        </div>
        <div
          className="box"
          style={{
            backgroundImage: "url(" + "../images/women.jpg" + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="box-items">
            <div className="title">Women's Fashion </div>
            <span click="subtitle">click for more</span>
          </div>
        </div>
        <div
          className="box"
          style={{
            backgroundImage: "url(" + "../images/watches.jpg" + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="box-items">
            <div className="title">Watches </div>
            <span click="subtitle">click for more</span>
          </div>
        </div>
        <div
          className="box"
          style={{
            backgroundImage: "url(" + "../images/jewellery.jpg" + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="box-items">
            <div className="title">Fashion Jewellery</div>
            <span click="subtitle">click for more</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
