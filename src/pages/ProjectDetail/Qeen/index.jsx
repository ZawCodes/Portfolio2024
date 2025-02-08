import React from "react";
import Qeen from "./assets/qeen.jpg";
import Qeen_1 from "./assets/qeen_1.mp4";
import Qeen_2 from "./assets/qeen_2.mp4";
import "./index.scss";

const ProjectDetail = () => {
  return (
    <div className="project-detail-container">
      <h1>Qeen</h1>
      <div className="project-image">
        <img src={Qeen} alt="Qeen" />
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
          Qeenworld is a website that showcases Qeen heated tobacco devices and
          heated tobacco stick products for both customers and distributors. It
          provides information about the devices and the various available
          flavors.
        </p>
        <div className="metadata">
          <p>
            <strong>Organization:</strong> YSQ
          </p>
        </div>
        <div className="project-details">
          <h2>Project Details</h2>
          <p>
            Qeenworld, similar to Hunnworld, is a website designed to showcase
            heated tobacco devices and various types of heated tobacco sticks
            for customers and distributors. However, it only serves as a product
            showcase page and does not include any dynamic content or systems.
          </p>
          <p>
            Essentially, it offers the same products as Hunnworld, but with
            different branding to target distinct markets, in my opinion.
          </p>

          <h3>Preview</h3>
          <div className="figure-container">
            <div>
              <video autoPlay loop muted playsInline>
                <source src={Qeen_1} type="video/mp4" />
              </video>
              <label>Home</label>
            </div>
            <div>
              <video autoPlay loop muted playsInline>
                <source src={Qeen_2} type="video/mp4" />
              </video>
              <label>Heated tobacco sticks</label>
            </div>
          </div>
          <p></p>
        </div>
        <div className="project-role">
          <h2>Project Role</h2>
          <p>
            As the sole front-end developer, I handled the development from the
            ground up and delivered the website on time. No API integration was
            required for this project, as it primarily served to provide
            information about the product.
          </p>
          <p>
            I developed the website based on the design files and images
            provided by the creative team. After completing the development, I
            conducted a demo of the website for the stakeholders.
          </p>
          <p>I can summarize my contributions to the project as follows:</p>
          <ul>
            <li>
              Built UI components from scratch based on the designs provided by
              the creative team.
            </li>
            <li>
              Decided on responsive layouts and user experience for displaying
              the heated tobacco sticks.
            </li>
            <li>
              Demonstrated the website to the project manager and creative
              director.
            </li>
            <li>
              Maintained the website and provided ongoing support for future
              updates.
            </li>
          </ul>
        </div>
        <div className="project-challenges">
          <h2>Challenges</h2>
          <p>
            There were several challenges I faced while developing the project,
            which are as follows:
          </p>
          <ul>
            <li>
              The designs were not optimized for responsive layouts, with images
              and text being too large for the desktop view as provided.
            </li>
            <li>
              Determining how to display the heated tobacco sticks in a neat and
              organized manner.
            </li>
            <li>
              A lack of communication between the designers and the project
              manager, which created unnecessary additional work for
              development.
            </li>
          </ul>
        </div>

        <div className="project-outcome">
          <h2>Outcome</h2>
          <p>
            I successfully delivered the website on time, and it was launched to
            a global audience, allowing users to seamlessly interact with the
            products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
