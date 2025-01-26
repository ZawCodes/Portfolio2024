import React from "react";
import ABACUS from "./assets/abacus.jpg";
import AB_1 from "./assets/abacus_1.jpg";
import AB_2 from "./assets/abacus_2.jpg";
import AB_3 from "./assets/abacus_3.jpg";
import "./index.scss";

const ProjectDetail = () => {
  return (
    <div className="project-detail-container">
      <h1>Abacus</h1>
      <div className="project-image">
        <img src={ABACUS} alt="Abacus" />
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
          Abacus is an internal company tool used to calculate the cost of lab
          materials in manufacturing and research processes.
        </p>
        <div className="metadata">
          <p>
            <strong>Organization:</strong> YSQ
          </p>
        </div>
        <div className="project-details">
          <h2>Project Details</h2>
          <p>
            Abacus was developed for the R&D department to calculate the lab and
            commercial costs of the materials needed for the manufacturing and
            research of new tobacco-related products. It was named by the same
            IT director who named Project Lighthouse.
          </p>
          <p>
            It was developed by the same group of four, including me as the
            frontend developer, my manager as the backend and server manager, a
            business analyst who handled requirements and some UI/UX, and the IT
            director who led the team. We essentially used the same formula as
            the previous project, Lighthouse, utilizing the same UI components
            and strategies.
          </p>
          <p>
            It took about one or two months to complete the initial usable
            product, which was then launched within the organization for the R&D
            department to use and to provide reports to the CEO about the
            cost-related data. The concept is the same as the Lighthouse project
            in that it involves data storage and data simulation or calculation.
          </p>
          <p>
            Since it is only available for internal use, there is no external
            access to the system.
          </p>
          <h3>Some figma UI prototypes</h3>
          <div className="figure-container">
            <div>
              <img src={AB_1} alt="lighthouse" />
              <label>Categories of products</label>
            </div>
            <div>
              <img src={AB_2} alt="lighthouse" />
              <label>Process of each category</label>
            </div>
          </div>
          <div className="figure-container">
            <div>
              <img src={AB_3} alt="lighthouse" />
              <label>Creation of new materials</label>
            </div>
          </div>
          <p>
            The goal of the website is to replicate the real-life processes
            involved in the research and development of new products, making it
            easier to calculate the materials needed without relying too heavily
            on Excel files and manual calculations.
          </p>
        </div>
        <div className="project-role">
          <h2>Project Role</h2>
          <p>
            As usual, I handled the frontend development of the website,
            focusing on the UI/UX aspects, themes, icons, and UI components. I
            had regular meetings with the team to discuss the project's
            direction and sprints.
          </p>
          <p>I can summarize my contributions to the project as follows:</p>
          <ul>
            <li>
              Building UI components from scratch based on designs proposed by
              me, the analyst, and the director's suggestions.
            </li>
            <li>
              Solving UI/UX problems to meet user requirements and coming up
              with solutions.
            </li>
            <li>
              Participating in brainstorming sessions with the team and
              regularly reporting progress to the director.
            </li>
            <li>
              Demonstrating the website to other stakeholders during meetings.
            </li>
            <li>
              Maintaining and providing continuous support for upcoming changes.
            </li>
          </ul>
          <p>
            After launching the website and seeing how useful it was to the R&D
            department, it was truly satisfying to have developed the app.
          </p>
        </div>
        <div className="project-challenges">
          <h2>Challenges</h2>
          <p>
            There were several challenges I faced while developing the project,
            which are as follows:
          </p>
          <ul>
            <li>
              Not having a dedicated UI/UX developer and having to come up with
              UI designs myself.
            </li>
            <li>
              Understanding the entire research and development process
              regarding the lab.
            </li>
            <li>
              The slightly complex tables required for the system, which needed
              additional effort.
            </li>
          </ul>
        </div>

        <div className="project-outcome">
          <h2>Outcome</h2>
          <p>
            The app was successfully launched on the planned timeline and is now
            being used by the R&D department in their daily operations. It has
            streamlined their processes and improved efficiency in managing
            materials for research and development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
