import React from "react";
import SW from "./assets/sw.jpg";
import SW_login from "./assets/sw_login.jpg";
import SW_dashboard from "./assets/sw_dashboard.jpg";
import SW_subscription from "./assets/sw_subscription.jpg";
import "./index.scss";

const ProjectDetail = () => {
  return (
    <div className="project-detail-container">
      <h1>Stemwerkz</h1>
      <div className="project-image">
        <img src={SW} alt="Stermwerkz" />
      </div>
      <div className="project-info">
        <div className="tags">
          <span className="tag">Angular</span>
          <span className="tag">CSS</span>
          <span className="tag">Node.js</span>
        </div>
        <p className="description">
          STEMWerkz is an engaging platform that offers kids the opportunity to
          explore science, technology, engineering, and mathematics through 4000
          minutes of interactive content. The platform uses various learning
          methods, including interactive games and videos, to make learning fun
          and effective.
        </p>

        <div className="metadata">
          <p>
            <strong>Organization:</strong> YSQ
          </p>
        </div>
        <div className="project-details">
          <h2>Project Details</h2>
          <p>
            STEMWerkz was the third project I contributed to during my time at
            the Amdon Group. The platform featured various apps, including
            SteamValley, an interactive town-building game where students
            complete quests while progressing through a storyline, and
            SteamChannel, a hub for learning through interactive videos.
          </p>
          <p>
            Along with one other developer, I was responsible for building the
            dashboard used for managing parent and child accounts,
            subscriptions, and other account-related features. I played a key
            role from the very beginning, developing UI components from scratch
            as part of the project's foundational phase.
          </p>

          <h3>Dashboard early designs</h3>
          <div className="figure-container">
            <div>
              <img src={SW_login} alt="login" />
              <label>Login page</label>
            </div>
            <div>
              <img src={SW_dashboard} alt="dashboard" />
              <label>Dashboard page</label>
            </div>
          </div>
          <p>
            There are two user types: parent accounts, which can manage the
            creation and control of child accounts, and child accounts, which
            are used to access content across the various STEMWerkz apps.
          </p>
          <h3>Subscription history</h3>
          <div className="figure-container">
            <div>
              <img src={SW_subscription} alt="subscrption" />
              <label>Subscription page</label>
            </div>
          </div>
        </div>
        <div className="project-role">
          <h2>Project Role</h2>
          <p>
            For this project, I was primarily responsible for the development of
            the dashboard application, where account management functionalities
            are handled. Alongside another developer, I contributed from the
            initial project setup to the website's successful launch.
          </p>
          <p>
            While my main focus was on the dashboard development, I was
            occasionally assigned to other STEMWerkz websites to handle minor
            updates or conduct case studies. However, the majority of my work
            revolved around building and refining the dashboard site.
          </p>
          <p>My contributions to the project can be summarized as follows:</p>
          <ul>
            <li>
              Setting up the project and developing initial UI components while
              strictly following the provided UI/UX designs.
            </li>
            <li>
              Animating dynamic backgrounds and various UI components, such as
              profile sections and popup modals.
            </li>
            <li>
              Collaborating closely with the backend team to ensure seamless API
              integration.
            </li>
            <li>
              Presenting the app's progress to the HOD and CTO during
              development milestones.
            </li>
            <li>
              Conducting manual testing and maintaining the dashboard for
              stability and usability.
            </li>
          </ul>
          <p>
            Being part of this project and collaborating with a diverse team of
            professionals was an incredibly rewarding experience. It was
            inspiring to witness the combined effort that brought this app to
            life. I'm grateful for the opportunity to have contributed to this
            memorable project, which played a significant role in my
            professional growth.
          </p>
        </div>

        <div className="project-challenges">
          <h2>Challenges</h2>
          <p>
            Some of the challenges I faced while developing the project
            included:
          </p>
          <ul>
            <li>
              Adapting to the facade design pattern in an Angular application,
              as standardized by senior developers. Implementing this pattern
              required setting up extensive boilerplate code to separate the
              layers and using mocks between each layer, which was initially
              time-consuming.
            </li>
            <li>
              Handling certain complex UI components that demanded additional
              time and effort to implement, though these challenges were
              manageable with persistence.
            </li>
            <li>
              Learning the Nim programming language to analyze the codebase of
              SteamValley, which was developed by an external team. This
              included understanding concepts like 3D sprites and cameras, which
              were new to me and required significant effort to grasp.
            </li>
          </ul>
        </div>

        <div className="project-outcome">
          <h2>Outcome</h2>
          <p>
            The Stemwerkz app successfully launched in 2021, earning positive
            feedback, attracting a significant user base, and achieving
            thousands of downloads. It also received industry recognition and
            awards, marking it as a highly successful project. While my primary
            contributions were focused on the account management aspect of the
            application, I am proud to have played a role in its overall success
            and impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
