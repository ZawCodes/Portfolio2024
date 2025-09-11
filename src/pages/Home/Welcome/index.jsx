import React from "react";
import ME from "./assets/me.jpg";
import "./index.scss";

const Index = () => {
  return (
    <div className="welcome-section">
      <div className="wrapper">
        <div className="avatar-container">
        <img className="cursor-scale" src={ME} alt="avatar" />
      </div>
      <div className="info-container">
        <h2 className="cursor-scale">
          I'm <span className="techy-orange">Zaw</span>
        </h2>

        <h4>Experienced front-end developer since 2019.</h4>
      </div>
      </div>
    </div>
  );
};

export default Index;
