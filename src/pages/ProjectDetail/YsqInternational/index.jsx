import React from "react";
import YSQ from "./assets/ysq.jpg";
import Home1 from "./assets/ysq_home1.jpg";
import Home2 from "./assets/ysq_home2.jpg";
import Home3 from "./assets/ysq_home3.jpg";
import Home4 from "./assets/ysq_home4.jpg";
import Career from "./assets/ysq_career.jpg";
import Business from "./assets/ysq_business.jpg";
import Wellness from "./assets/ysq_wellness.jpg";
import Contact from "./assets/ysq_contact.jpg";
import "./index.scss";

const ProjectDetail = () => {
  return (
    <div className="project-detail-container">
      <h1>YSQ International</h1>
      <div className="project-image">
        <img src={YSQ} alt="YSQ" />
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
          YSQ International's main corporate website serves as a platform to
          engage with the general audience, attract job seekers, and provide
          comprehensive information about the company.
        </p>

        <div className="metadata">
          <p>
            <strong>Organization:</strong> YSQ
          </p>
        </div>
        <div className="project-details">
          <h2>Project Details</h2>
          <p>
            This project involved revamping YSQ International's previous company
            website to modernize its design, update content, and, for the first
            time, feature real employees as models in the website's imagery.
            While an initial list of nominated employees included me, the
            decision was later made to go in a different direction.
          </p>
          <p>
            For the redesign, the team included two main UI/UX designers—an
            intern and a graphic designer transitioning into a UI/UX role.
            Despite their varied levels of experience, the final designs were a
            significant improvement over the previous projects. As the sole
            front-end developer, I developed the website from the ground up. The
            design and preparation phases took approximately 4 to 6 months by
            the designers, while the actual development was completed in just 2
            to 3 months.
          </p>
          <p>
            The website serves as a mostly static landing page for the company,
            designed to engage visitors and provide key information. Given its
            simplicity, back-end support was minimal, and my collaboration with
            the designers was primarily focused on ensuring the implementation
            aligned with their vision.
          </p>

          <h3>Home Page</h3>
          <div className="figure-container">
            <div>
              <img src={Home1} alt="ysq homepage1" />
              <label>Home page sample 1</label>
            </div>
            <div>
              <img src={Home2} alt="ysq homepage2" />
              <label>Home page sample 2</label>
            </div>
            <div>
              <img src={Home3} alt="ysq homepage2" />
              <label>Home page sample 3</label>
            </div>
            <div>
              <img src={Home4} alt="ysq homepage2" />
              <label>Home page sample 4</label>
            </div>
          </div>
          <h3>Other pages</h3>
          <div className="figure-container">
            <div>
              <img src={Business} alt="ysq business" />
              <label>Business page sample</label>
            </div>
            <div>
              <img src={Wellness} alt="ysq wellness" />
              <label>Wellness page sample</label>
            </div>
            <div>
              <img src={Career} alt="ysq careers" />
              <label>Careers page sample</label>
            </div>{" "}
            <div>
              <img src={Contact} alt="ysq contact" />
              <label>Contact page sample</label>
            </div>
          </div>

          {/* <div className="tech-stack">
            <h3>Tech Stack</h3>
            <ul>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                />
                React
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                />
                Node.js
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                />
                MongoDB
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                  alt="Redux"
                />
                Redux
              </li>
            </ul>
          </div> */}
        </div>
        <div className="project-role">
          <h2>Project Role</h2>
          <p>
            As the frontend developer, I was responsible for overseeing the
            website's development from start to finish. This included
            collaborating with designers to address design-related challenges,
            researching suitable third-party libraries, planning the project
            structure, and building UI components from scratch. I also made
            necessary adjustments to ensure the design translated well from
            Adobe XD to web browsers. Additionally, I conducted several
            demonstrations to the creative director and project manager to align
            with the acceptance criteria.
          </p>
          <p>I can summarize my contributions to the project as follows:</p>
          <ul>
            <li>
              Building UI components from scratch and selecting tools and
              libraries that best suited the project requirements.
            </li>
            <li>
              Collaborating with the design team and presenting progress during
              demonstrations to the project manager and creative director.
            </li>
            <li>
              Implementing appropriate animations and ensuring responsive design
              across different devices.
            </li>
            <li>Providing maintenance and updates as requested post-launch.</li>
          </ul>
          <p>
            It was a fulfilling experience to be responsible for developing the
            company's landing page and seeing visitors from around the world
            engage with it, as reflected in Google Analytics.
          </p>
        </div>
        <div className="project-challenges">
          <h2>Challenges</h2>
          <p>
            During the development of this project, I encountered several
            challenges, which are summarized below:
          </p>
          <ul>
            <li>
              While the UI/UX designs represented an improvement over previous
              projects—thanks to changes in the design team and a longer
              preparation phase—they were not fully optimized for browser
              compatibility. This required me to make significant adjustments,
              such as resizing elements and adapting layouts, to ensure the
              website was both functional and responsive.
            </li>
            <li>
              The combination of under-optimized designs and the fact that the
              product manager and creative director were not from an IT
              background occasionally led to minor misunderstandings during
              demonstrations. Elements that looked well-designed on paper
              sometimes appeared oversized or misaligned in browsers,
              necessitating further refinements to meet expectations.
            </li>
          </ul>
        </div>
        <div className="project-outcome">
          <h2>Outcome</h2>
          <p>
            Despite some challenges along the way, the website turned out to be
            a success. It met the company's requirements for modernizing their
            online presence and has been actively used for the past two years.
            The positive feedback from stakeholders and the steady traffic
            observed through analytics confirmed its effectiveness in engaging
            the target audience.
          </p>
          <p>
            This project not only served as a crucial touchpoint for the company
            to showcase its values and services but also demonstrated the
            potential of well-executed teamwork. For me personally, it was
            rewarding to see the website functioning seamlessly and
            consistently, knowing that my efforts contributed to its long-term
            success and visibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
