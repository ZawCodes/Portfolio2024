import React from "react";
import avatar from "./assets/avatar.png";
import purple from "./assets/purple.png";
import dive_four from "./assets/dice_four.png";
import "./index.scss";

const Index = () => {
  return (
    <div className="welcome-section">
      <img src={purple} alt="purple" className="purple" />
      <h1>Hi There, Welcome</h1>
      <div className="avatar-container">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="info-container">
        <h2>
          My Name is <span className="neon-lime">Zaw Htet Aung</span>
        </h2>
        <div className="dice-options">
          <p>But you can call me Zaw.</p>
          <img src={dive_four} />
        </div>
      </div>
    </div>
  );
};

export default Index;
