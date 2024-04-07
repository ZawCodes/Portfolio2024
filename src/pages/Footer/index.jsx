import React from "react";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import "./index.scss";

const Index = () => {
  return (
    <div className="footer">
      <div className="social">
        <a href="https://github.com/ZawHtetAung-Zhared" target="_blank">
          <img src={github} alt="github" className="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/zaw-htet-aung-zhared/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" className="linkedin" />
        </a>
      </div>
      <div className="copyright">
        <p>© 2024 designed and built by Zaw Htet Aung</p>
      </div>
    </div>
  );
};

export default Index;
