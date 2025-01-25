import React from "react";
import LF from "./assets/lf.jpg";
import FlowSample from "./assets/flowSample.jpg";
import FlowSample2 from "./assets/flowSample2.jpg";
import ViewerSample from "./assets/viewerSample.jpg";
import "./index.scss";

const ProjectDetail = () => {
  return (
    <div className="project-detail-container">
      <h1>Learning Flow AI</h1>
      <div className="project-image">
        <img src={LF} alt="Learning Flow AI" />
      </div>
      <div className="project-info">
        <div className="tags">
          <span className="tag">React</span>
          <span className="tag">Vite</span>
          <span className="tag">Tailwind</span>
          <span className="tag">Zustand</span>
          <span className="tag">ContextAPI</span>
          <span className="tag">NestJS</span>
        </div>
        <p className="description">
          LearningFlow AI is an AI-powered online learning platform featuring a
          suite of apps designed to make customized lessons more fun, effective,
          and engaging.
        </p>
        <div className="metadata">
          <p>
            <strong>Organization:</strong> Amdon
          </p>
        </div>
        <div className="project-details">
          <h2>Project Details</h2>
          <p>
            LearningFlow AI currently consists of four apps: the Editor, the
            Viewer, the Admin, and Flowxchange. The main apps for users are the
            Editor and the Viewer, while the other two are for administrative
            purposes.
          </p>
          <p>
            The basic workflow allows teachers or users to create customized
            learning materials called Flows. They can also use pre-existing
            materials provided by the app. Flows are created using nodes, and
            currently, there are over 50 nodes available to create unique
            lessons.
          </p>

          <h3>Editor</h3>
          <div className="figure-container">
            <div>
              <img src={FlowSample} alt="flow sample" />
              <label>Empty flow sample</label>
            </div>
            <div>
              <img src={FlowSample2} alt="flow sample 2" />
              <label>KnowledgeBot flow sample</label>
            </div>
          </div>
          <p>
            The created Flows can be viewed by learners or students through the
            Viewer app.
          </p>
          <h3>Viewer</h3>
          <div className="figure-container">
            <div>
              <img src={ViewerSample} alt="viewer sample" />
              <label>KnowledgeBot in Viewer</label>
            </div>
          </div>
        </div>
        <div className="project-role">
          <h2>Project Role</h2>
          <p>
            I joined the project after its launch and began working on the next
            phase of feature development. I was assigned to the Viewer team,
            which currently consists of three front-end developers, including
            myself. As new nodes were added to the app, I contributed to
            integrating tools for rendering within the Viewer, such as a Random
            Number Generator and a Display Quiz feature.
          </p>
          <p>
            Over the past few months, I have implemented several tasks,
            including centralized error message popups using an error boundary
            page, pagination and filtering for the Journal Page, and a "Copy
            Flow" button, among others.
          </p>
          <p>I can summarize my current role in the project as follows:</p>
          <ul>
            <li>Developing new features for the Viewer.</li>
            <li>
              Optimizing and refactoring existing functions to enhance
              robustness and align with best practices.
            </li>
            <li>
              Performing regular code cleanups and testing functionalities.
            </li>
            <li>
              Working closely with back-end developers to define APIs, debug
              integration issues, and ensure efficient communication between
              front-end and back-end systems.
            </li>
            <li>
              Collaborating with team members during code reviews to maintain
              high-quality standards and share knowledge.
            </li>
          </ul>
          <p>
            Personally, I see this project as a goldmine for improving and
            honing my React and TypeScript skills. It has also given me the
            opportunity to approach refactoring and optimization more seriously
            than ever before, allowing me to grow both technically and
            professionally. Leveraging my past experience in ownership,
            responsibilities, and optimizing code performance and quality, I've
            been able to make significant improvements as a front-end developer
            while working on this project.
          </p>
        </div>
        <div className="project-challenges">
          <h2>Challenges</h2>
          <p>
            Some of the challenges I faced while developing the project include:
          </p>
          <ul>
            <li>
              Coming from React with JavaScript and SCSS to using TypeScript
              with React and TailwindCSS, it took me some time to adjust at
              first. However, I've successfully made the transition and now feel
              comfortable with the new stack.
            </li>
            <li>
              Since the work is remote and developers are working from different
              locations, and some have already left, it can be time-consuming to
              trace code written by multiple developers, especially when no one
              is available to ask about its purpose.
            </li>
            <li>
              The earlier code, written by previous developers, heavily relied
              on object-oriented programming principles and JavaScript classes.
              As someone more familiar with hooks and functions, I found it
              challenging to work with the OOP-based structure, as I'm more
              accustomed to functional programming techniques.
            </li>
            <li>
              With insufficient documentation or knowledge-sharing practices in
              place, understanding the reasoning behind certain decisions in the
              code can be difficult, making onboarding new developers or
              debugging more time-consuming.
            </li>
          </ul>
        </div>
        <div className="project-outcome">
          <h2>Project Outcome</h2>
          <p>
            Although I joined the team after the app's initial launch, I was
            able to contribute in ways that have been overall beneficial to the
            health of the Viewer app, particularly in terms of code quality and
            maintenance. I am still striving to improve my code optimization and
            writing high-quality code, while ensuring the app doesn't experience
            unexpected breakdowns and maintaining good React practices. Overall,
            leveraging my previous experiences, I was able to seamlessly
            integrate with the existing developers and contribute to the
            continuous development for the next phases of the app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
