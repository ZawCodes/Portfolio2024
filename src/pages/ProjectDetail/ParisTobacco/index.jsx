import React from "react";
import PT from "./assets/pt.jpg";
import PT_home from "./assets/pt_home.mp4";
import PT_about from "./assets/pt_about.mp4";
import "./index.scss";

const ProjectDetail = () => {
  return (
    <div className="project-detail-container">
      <h1>Paris Tobacco</h1>
      <div className="project-image">
        <img src={PT} alt="Paris Tobacco" />
      </div>
      <div className="project-info">
        <div className="tags">
          <span className="tag">React</span>
          <span className="tag">Vite</span>
          <span className="tag">SCSS</span>
          <span className="tag">ContextAPI</span>
          <span className="tag">PHP</span>
        </div>
        <p className="description">
          A company website for a branch based in Poland that serves as a
          landing page, provides information about the company, displays contact
          details, and showcases career opportunities for job seekers.
        </p>
        <div className="metadata">
          <p>
            <strong>Organization:</strong> YSQ
          </p>
        </div>
        <div className="project-details">
          <h2>Project Details</h2>
          <p>
            The Paris Tobacco website was originally built using a website
            builder platform (such as WordPress). However, it incurred
            unnecessary subscription fees every month, so the decision was made
            to convert it into a React website and host it ourselves.
          </p>
          <p>
            Since it wasn't an urgent project, the timeline was loosely defined,
            allowing me to work at my own pace. I primarily focused on
            replicating the existing website and transforming it into a
            single-page application (SPA). It was completed in about two months
            and has been live since then.
          </p>
          <h3>Overview</h3>
          <div className="figure-container">
            <div>
              <video autoPlay loop muted playsInline>
                <source src={PT_home} type="video/mp4" />
              </video>
              <label>Home</label>
            </div>
            <div>
              <video autoPlay loop muted playsInline>
                <source src={PT_about} type="video/mp4" />
              </video>
              <label>About</label>
            </div>
          </div>
          <p>
            The development primarily focused on HTML and CSS to ensure the
            elements were correctly structured and styled.
          </p>
        </div>
        <div className="project-role">
          <h2>Project Role</h2>
          <p>
            I handled most of the development for the SPA version myself, as
            there was no designer and minimal API integration required.
          </p>
          <p>I can summarize my contributions to the project as follows:</p>
          <ul>
            <li>
              Initial project setup and development of the pages from scratch.
            </li>
            <li>
              Using the original website as a design reference and researching
              how to replicate similar UI elements.
            </li>
            <li>Adding or removing content as directed by the IT director.</li>
            <li>
              Implementing a language switcher to support both English and
              Polish.
            </li>
            <li>Occasional updates and maintenance of the live website.</li>
          </ul>
          <p>
            It was a fun project, as it wasn't complex or time-constrained, and
            replicating the existing website was an enjoyable experience.
          </p>
        </div>
        <div className="project-challenges">
          <h2>Challenges</h2>
          <p>
            There weren't many challenges during the development, but some of
            them were as follows:
          </p>
          <ul>
            <li>
              Some of the animations were difficult to replicate exactly, so
              adjustments had to be made.
            </li>
            <li>
              Certain UI elements, such as maps, were specific to the website
              builder, so alternative solutions were needed to address the
              missing libraries.
            </li>
          </ul>
        </div>

        <div className="project-outcome">
          <h2>Outcome</h2>
          <p>
            The conversion from the website builder version to the React version
            was flawless, and it has been in use since the launch date, reducing
            the subscription fees and saving thousands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
