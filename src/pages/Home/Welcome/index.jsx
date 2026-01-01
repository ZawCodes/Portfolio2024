import React from "react";
import ME from "./assets/me.jpg";
import "./index.scss";

const Index = () => {
  return (
    <div className="welcome-section">
      <div className="welcome-content">
        <div className="hero-grid">
          {/* Left Side - Avatar and Visual */}
          <div className="hero-left">
            <div className="avatar-wrapper">
              <div className="avatar-bg"></div>
              <img className="cursor-scale avatar-img" src={ME} alt="avatar" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="hero-right">
            <div className="content-top">
              <div className="greeting">Hello, I'm</div>
              <h1 className="cursor-scale">
                <span className="techy-orange">Zaw</span> Htet Aung
              </h1>
              <p className="tagline">Web Developer (Front-end)</p>
            </div>

            <div className="divider"></div>

            <div className="content-bottom">
              <div className="info-grid">
                <div className="info-item">
                  <div className="info-label">Experience</div>
                  <div className="info-value">Since <span className="techy-blue">2019</span></div>
                </div>
                <div className="info-item">
                  <div className="info-label">Currently</div>
                  <div className="info-value">At <a href="https://www.amdon.com/" target="_blank" className="techy-blue">Amdon</a></div>
                </div>
              </div>

              <div className="tech-stack">
                <div className="tech-label">Tech Stack</div>
                <div className="tech-tags">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
