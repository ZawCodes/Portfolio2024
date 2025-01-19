import React from "react";
import ysq1 from "./assets/ysq1.jpg";
import "./index.scss";

const Index = () => {
  return (
    <>
      <div className="Ysq-container">
        <div className="image-container">
          <div className="img-wrap ysq1">
            <img src={ysq1} alt="ysq1" />
          </div>
        </div>
        <div className="desc">
          <p className="tech">
            Technologies used: Reactjs, Vite, Html, Scss, Javascript, Context
            API, Swiperjs
          </p>
          <p>
            A company website designed for individuals to discover and engage
            with our group, explore the company's history, and view available
            positions for the general audience.
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
