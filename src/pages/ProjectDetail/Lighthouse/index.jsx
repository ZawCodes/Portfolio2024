import React from "react";
import LH from "./assets/lh.jpg";
import LH_store from "./assets/lh_storage.jpg";
import LH_report from "./assets/lh_report.jpg";
import "./index.scss";

const ProjectDetail = () => {
  return (
    <div className="project-detail-container">
      <h1>Lighthouse</h1>
      <div className="project-image">
        <img src={LH} alt="Lighthouse" />
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
          An internal company tool for calculating product selling prices and
          storing related tax information, factoring in variables such as import
          duties, exchange rates, and country-specific taxes based on the
          selected product and location.
        </p>
        <div className="metadata">
          <p>
            <strong>Organization:</strong> YSQ
          </p>
        </div>
        <div className="project-details">
          <h2>Project Details</h2>
          <p>
            The project name "Lighthouse" was given by the former IT director to
            the tax calculator and centralized tax information storage system.
            As he explained, he wanted the system to be symbolic and visible,
            much like a lighthouse. The idea of storing all the tax information
            for new products had been on the owner's mind for some time, and
            with the development of this project, we brought that vision to
            life.
          </p>
          <p>
            The project team consisted of four people from the IT team: a
            business analyst who also helped with UI/UX, as we didn't have a
            dedicated UI/UX designer; me as the front-end developer; the manager
            handling backend and deployment; and the IT director as the team
            lead, providing overall direction for the project. Additionally,
            several other departments were involved, including sales, finance,
            and legal, who provided us with the necessary materials, such as tax
            and price information, calculation formulas, and more, to develop
            the website.
          </p>
          <p>
            The total development time for the initial MVP took about three
            months, with subsequent updates following later. It was also one of
            the first in-house software solutions developed within the company.
          </p>
          <p>
            Since it's only available for internal use, there is no external
            access to the system.
          </p>
          <h3>Some figma UI prototypes</h3>
          <div className="figure-container">
            <div>
              <img src={LH_store} alt="lighthouse" />
              <label>Tax information stored example</label>
            </div>
            <div>
              <img src={LH_report} alt="lighthouse" />
              <label>Report sample</label>
            </div>
          </div>
          <p>
            The main uses of the website include simulating tax prices,
            providing centralized storage for tax information, validating data
            from different departments, and generating reports.
          </p>
        </div>
        <div className="project-role">
          <h2>Project Role</h2>
          <p>
            As the front-end developer, I was responsible for developing the
            website's UI components from the ground up. I collaborated with the
            team of four to discuss ideas, demonstrate concepts, and bring the
            vision to a fully functioning website. This project also laid the
            foundation for reusable UI component libraries, which we continued
            to use in subsequent projects.
          </p>
          <p>
            Given the complexity of the application, we had to carefully
            structure the project to accommodate various countries, products,
            and tax information. It was more internally complex and functional
            than the typical brand websites I had worked on for the company's
            products.
          </p>
          <p>I can summarize my contributions to the project as follows:</p>
          <ul>
            <li>
              Building UI components from scratch based on designs proposed by
              me, the analyst, and the director's suggestions.
            </li>
            <li>
              Structuring the project and developing reusable components, as
              well as refactoring to accommodate future updates and requests.
            </li>
            <li>
              Assisting the manager with formulas and calculations for the tax
              simulation.
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
            While it was somewhat of a mid-sized project for the company, it was
            ultimately a valuable experience for both the company and my career.
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
              The lack of a dedicated UI/UX designer for the project put some
              pressure on the team, as it's not always easy to come up with
              optimal designs for a good website. Additionally, not having a
              professional UI/UX designer made it difficult to explain to
              stakeholders why certain design choices wouldn't work.
            </li>
            <li>
              I still lacked the full knowledge to architect the project in the
              most efficient way. Creating clean, reusable components was
              another skill I was still trying to master.
            </li>
            <li>
              Presenting the project to stakeholders was intimidating for me, as
              I hadn't been in such situations often. However, I did my part by
              walking through the app while the director explained the features
              to the stakeholders.
            </li>
            <li>
              The creation of calculations and formulas for the tax simulation
              was a challenge for me, as it required direct discussions with the
              finance director to fully understand the formulas. The manager
              handled that part for me.
            </li>
          </ul>
        </div>

        <div className="project-outcome">
          <h2>Outcome</h2>
          <p>
            The app launched on the planned timeline and received positive
            feedback from the stakeholders. It is believed to be a valuable tool
            for the organization, and I'm happy to have been a part of its
            development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
