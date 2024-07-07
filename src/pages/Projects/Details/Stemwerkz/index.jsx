import React from "react";
import loan1 from "./assets/loan1.jpg";
import loan2 from "./assets/loan2.jpg";
import "./index.scss";

const Index = () => {
  return (
    <>
      <div className="project-detail-container">
        <div className="image-container">
          <div className="img-wrap">
            <img src={loan1} alt="loan1" />
          </div>
          <div className="img-wrap">
            <img src={loan2} alt="loan1" />
          </div>
        </div>
        <div className="desc">
          <p>Tech used: React, Material UI</p>
          <p>
            An online mortgage loan application system where users can select
            loan package offers, seamlessly automate the application process,
            and submit it to the respective banks, providing a faster and easier
            user experience. Technologies: Reactjs, Material UI, Html, Scss,
            Javascript
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
