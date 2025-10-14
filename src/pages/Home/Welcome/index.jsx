import React from "react";
import "./index.scss";
import ShinyText from "../../../blocks/TextAnimations/ShinyText/ShinyText";

const highlights = [
  { value: "10+", label: "features shipped" },
  { value: "6", label: "brand sites launched" },
  { value: "40%", label: "ui animation lift" },
];

const Index = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-section__spark" aria-hidden="true" />
      <div className="welcome-section__content">
        <span className="welcome-section__eyebrow">Front-end developer · Singapore & Myanmar</span>

        <ShinyText
          as="h1"
          text="Building thoughtful web products for learning teams"
          speed={2.3}
          className="welcome-section__title"
        />

        <p className="welcome-section__description">
          I’m Zaw Htet Aung, a front-end developer partnering with teams across Myanmar and Singapore. I carry products from planning to launch, elevating performance, interactions, and reliability along the way.
        </p>

        <div className="welcome-section__cta">
          <a className="welcome-section__cta-btn welcome-section__cta-btn--primary" href="/projects">
            View selected work
          </a>
          <a className="welcome-section__cta-btn welcome-section__cta-btn--ghost" href="/contact">
            Start a project
          </a>
        </div>

        <ul className="welcome-section__meta" role="list">
          {highlights.map(({ value, label }) => (
            <li key={label} className="welcome-section__meta-card">
              <span className="welcome-section__meta-value">{value}</span>
              <span className="welcome-section__meta-label">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Index;
