import React from "react";
import whatsapp from "./assets/whatsapp.png";
import blue from "./assets/blue.png";
import "./index.scss";

const Index = () => {
  return (
    <div className="contact">
      <img src={blue} alt="blue" className="blue" />
      <div className="for-now">
        <p>That's it for now.</p>
        <div className="email">
          <p>
            Contact me on <span>me@zawhtetaung.com</span>
          </p>
          <img src={whatsapp} alt="whatsapp" className="whatsapp" />
        </div>
      </div>
    </div>
  );
};

export default Index;
