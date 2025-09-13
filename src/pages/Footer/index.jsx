import React from "react";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import "./index.scss";

const Index = () => {
  return (
    <div className="footer">
      <div className="social">
        <a href="https://github.com/ZawCodes" target="_blank">
          <img src={github} alt="github" className="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/zawcodes/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" className="linkedin" />
        </a>
      </div>
      <div className="copyright">
        <p>© 2025 Zaw Htet Aung</p>
      </div>
    </div>
  );
};

export default Index;
