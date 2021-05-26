import React from "react";
import "../HomePage.scss";
const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="box-items">
            <div className="title">Hats</div>
            <span click="subtitle">click for more</span>
          </div>
        </div>
        <div className="box">
          <div className="box-items">
            <div className="title">Mens</div>
            <span click="subtitle">click for more</span>
          </div>
        </div>
        <div className="box">
          <div className="box-items">
            <div className="title">Womens </div>
            <span click="subtitle">click for more</span>
          </div>
        </div>
        <div className="box">
          <div className="box-items">
            <div className="title">western </div>
            <span click="subtitle">click for more</span>
          </div>
        </div>
        <div className="box">
          <div className="box-items">
            <div className="title">Jackets</div>
            <span click="subtitle">click for more</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
