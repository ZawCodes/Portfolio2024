import React from "react";
import whatsapp from "./assets/whatsapp.png";
import blue from "./assets/blue.png";
import "./index.scss";

const Index = () => {
  return (
    <div className="contact">
      <img src={blue} alt="blue" className="blue" />
      <div className="for-now">
        <p>Want to learn more?</p>
        <div className="email">
          <p>
            Contact me on{" "}
            <a href="mailto:me@zawhtetaung.com">me@zawhtetaung.com</a>
          </p>
          <a href="https://wa.me/+6581792673">
            <img src={whatsapp} alt="whatsapp" className="whatsapp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
