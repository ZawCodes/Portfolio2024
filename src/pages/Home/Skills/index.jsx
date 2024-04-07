import React from "react";
import yellow from "./assets/yellow.png";
import "./index.scss";

const Index = () => {
  return (
    <div className="skills">
      <img src={yellow} alt="yellow" className="yellow" />
      <div className="backstory">
        <p>
          I've been creating websites for a few years now since I graduated from
          my <span>university</span>.
        </p>
        <p>Since 2019 to be exact.</p>
      </div>
    </div>
  );
};

export default Index;
