import React from "react";
import ME from "./assets/me.jpg";
import "./index.scss";
import ShinyText from "../../../blocks/TextAnimations/ShinyText/ShinyText";

const Index = () => {
  return (
    <div className="welcome-section">
      <div className="wrapper">
        {/* <div className="avatar-container">
        <img className="cursor-scale" src={ME} alt="avatar" />
      </div> */}
      <div className="info-container">
        <ShinyText
          as="h2"
          text={"I'm Zaw"}
          speed={2}
          className="cursor-scale"
        />

        <ShinyText
          as="h4"
          text={"Experienced front-end developer since 2019."}
          speed={4}
          className="cursor-scale"
        />

        {/* <h4>Experienced front-end developer since 2019.</h4> */}
      </div>
      </div>
    </div>
  );
};

export default Index;
