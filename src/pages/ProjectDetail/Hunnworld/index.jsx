import React from "react";
import HW from "./assets/hw.jpg";
import HW_sample from "./assets/hw_early.jpg";
import "./index.scss";

const ProjectDetail = () => {
  return (
    <div className="project-detail-container">
      <h1>Hunnworld</h1>
      <div className="project-image">
        <img src={HW} alt="Hunnworld" />
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
          Hunnworld is a website that showcases our heated tobacco products,
          provides information on where to purchase them, offers customer
          support, and allows users to register warranties for their purchased
          devices.
        </p>
        <div className="metadata">
          <p>
            <strong>Organization:</strong> YSQ
          </p>
        </div>
        <div className="project-details">
          <h2>Project Details</h2>
          <p>
            Hunnworld was my primary reason for joining YSQ—to finish the
            ongoing project after the previous developer left. It is intended to
            become both a branding website and a platform for registering heated
            tobacco devices for warranty exchanges. It includes other
            information such as usage instructions, purchase locations, contact
            details, support, FAQs, and more.
          </p>
          <p>
            The project had been on hold for a couple of years due to the
            COVID-19 pandemic in 2022, which prevented the product from fully
            launching and entering the market. Since then, the project has had
            intermittent breaks until I joined the team. A decision was made to
            revamp the entire website in light of new directions, so I ended up
            developing the website from scratch again.
          </p>
          <p>
            Currently, the website is only accessible from the Philippines, so
            for the sake of the demo, I am using one of the old early
            prototypes.
          </p>

          <h3>Early design</h3>
          <div className="figure-container">
            <div>
              <img src={HW_sample} alt="hunnworld sample" />
              <label>Hunnworld early Home page</label>
            </div>
          </div>
          <p></p>
        </div>
        <div className="project-role">
          <h2>Project Role</h2>
          <p>
            I was initially hired for the project primarily because the company
            was planning to relaunch the product in the coming year. I began by
            continuing the old project left by the previous developer, which was
            later abandoned. A new project was started with a new UI and
            designers, and I was brought on as the front-end developer. As the
            sole front-end developer, I was responsible for developing the
            project mostly on my own, using the architecture set by the earlier
            websites. The initial phase took about 2 to 3 months, with
            additional updates throughout the year until the first launch in
            2023.
          </p>
          <p>
            I worked closely with the manager, who handled the backend and
            server management, and assisted me with the project architecture and
            coding practices along the way. I also collaborated with the
            creative team, who provided the materials necessary for development.
          </p>
          <p>I can summarize my contributions to the project as follows:</p>
          <ul>
            <li>
              Building UI components from scratch based on the designs provided
              by the creative team.
            </li>
            <li>
              Overseeing and tweaking the project structure and architecture as
              necessary, including refactoring and optimization.
            </li>
            <li>
              Collaborating with the manager to properly integrate APIs and
              ensure the project was heading in the right direction.
            </li>
            <li>
              Demonstrating the website to other stakeholders within the company
              and writing user acceptance tests.
            </li>
            <li>
              Creating email templates on Brevo for warranty registration and
              support.
            </li>
            <li>
              Maintaining the website and providing continuous support for
              upcoming changes.
            </li>
          </ul>
          <p>
            I felt a sense of satisfaction that the website, which had been on
            hold for a couple of years, was finally launched during my time,
            thanks to my contributions. It was also my first-ever collaboration
            and work experience in a multinational company, and I gained
            invaluable experience that will stay with me for a lifetime.
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
              The company doesn't have a dedicated UI/UX designer for the
              project. The designers responsible are actually graphic designers
              who are used to creating static product-related designs, such as
              vinyls, posters, and packaging. They have little to no experience
              designing dynamic websites that should work across various
              devices. This made things difficult when they couldn't deliver
              accurate image sizes or layouts suitable for a web browser.
            </li>
            <li>
              It was challenging to work with designs that weren't created with
              browser viewing in mind. The website required a lot of
              improvisation in many areas, which meant extra work for me as a
              front-end developer—especially since I wasn't a designer myself.
              They only delivered one design for the website, and I had to come
              up with the necessary adjustments for responsive design.
              Additionally, using Adobe XD instead of Figma made collaboration
              harder, as I had to request changes every time I needed something
              updated.
            </li>
            <li>
              As this was my first project in a foreign country and my first
              time working in English as a second language, it made things a bit
              more difficult than they should have been, especially due to the
              lack of proper UI/UX designers.
            </li>
          </ul>
        </div>

        <div className="project-outcome">
          <h2>Outcome</h2>
          <p>
            After being on hold for several years, the project was successfully
            relaunched on the planned date. Despite the challenges, I was able
            to complete all tasks on time and address the issues that arose. My
            ability to adapt to the situation and collaborate effectively with
            the team played a key role in bringing the project to completion,
            marking an important milestone for the company after several years
            of delay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
