import React from "react";
import LS from "./assets/ls.jpg";
import LE from "./assets/le.jpg";
import ChatBot from "./assets/chatbot.jpg";
import Leads from "./assets/leads.jpg";
import "./index.scss";

const ProjectDetail = () => {
  return (
    <div className="project-detail-container">
      <h1>LoansEstate</h1>
      <div className="project-image">
        <img src={LE} alt="LoansEstate" />
      </div>
      <div className="project-info">
        <div className="tags">
          <span className="tag">React</span>
          <span className="tag">MaterialUI</span>
          <span className="tag">Node.js</span>
          <span className="tag">ContextAPI</span>
        </div>
        <p className="description">
          LoansEstate is an online mortgage loan system that allows users to
          select loan packages, automate the application process, and submit to
          banks, streamlining the experience for faster results.
        </p>
        <div className="metadata">
          <p>
            <strong>Organization:</strong> LoansEstate
          </p>
        </div>
        <div className="project-details">
          <h2>Project Details</h2>
          <p>
            LoansEstate was a startup project I worked on with a former
            colleague for Loan$upermart, a mortgage consulting firm. The project
            consisted of three components: the main Loan$upermart website, a
            chatbot, and the LoansEstate CRM.
          </p>
          <p>
            Users interested in applying for mortgage loans can visit the main
            Loan$upermart website, where they can access the chatbot via the
            navigation bar. After answering a series of questions from the
            chatbot, the system generates up to three tailored loan packages for
            users to choose from.
          </p>

          <h3>Loan$upermart</h3>
          <div className="figure-container">
            <div>
              <img src={LS} alt="Loan$upermart main website" />
              <label>Loan$upermart</label>
            </div>
          </div>
          <p>
            This is the main Loan$upermart website for the consulting firm.
            Users can access the chatbot by clicking the "Apply Now" button.
          </p>
          <h3>Chatbot</h3>
          <div className="figure-container">
            <div>
              <img src={ChatBot} alt="Chatbot interface" />
              <label>Chatbot</label>
            </div>
          </div>
          <p>
            After responding to a series of questions from the chatbot, the
            system recommends up to three suitable loan packages for users to
            consider.
          </p>
          <h3>CRM</h3>
          <div className="figure-container">
            <div>
              <img src={Leads} alt="CRM leads management" />
              <label>Leads Information</label>
            </div>
            <div>
              <img src={LE} alt="CRM package management" />
              <label>Registered Package List</label>
            </div>
          </div>
          <p>
            The CRM stores information about potential clients as leads.
            Consultants regularly register new loan packages, ensuring the
            chatbot provides updated recommendations.
          </p>
          <div className="tech-stack">
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
          </div>
        </div>

        <div className="project-role">
          <h2>Project Role</h2>
          <p>
            The project was already a few months old when I joined the team,
            which consisted of myself, my former colleague, and the client
            consultant. Initially, I was tasked with handling frontend-related
            tasks, such as updating the loan package registration form, lead
            information form, loan package list, and similar components, while
            the other developer managed the backend and deployment.
          </p>
          <p>
            My primary reason for joining this startup project was to gain
            hands-on backend experience in my journey toward becoming a
            full-stack developer. A few months into the project, I gradually
            started taking on backend tasks. I gained valuable experience in
            backend development, such as creating REST APIs using Node.js and
            Express with a MySQL database, and learning deployment methods using
            PM2. One of the most interesting aspects of the project for me was
            implementing the authentication flow using Auth0.
          </p>
          <p>I can summarize my role in the project as follows:</p>
          <ul>
            <li>
              Handling frontend tasks for the chatbot and CRM, as well as
              updating the main Loan$upermart website in WordPress.
            </li>
            <li>
              Gaining experience in regular client communication to discuss
              project requirements and updates.
            </li>
            <li>
              Managing APIs and authentication for the CRM, which helped me
              transition into a full-stack development role for the project.
            </li>
            <li>
              Directly collaborating with the client to plan and discuss the
              next steps for the project.
            </li>
          </ul>
          <p>
            This collaboration gave me the opportunity to work on a startup
            project, engage directly with a client, and acquire the backend
            experience I was seeking. Overall, it was a highly valuable and
            rewarding project for me.
          </p>
        </div>

        <div className="project-challenges">
          <h2>Challenges</h2>
          <p>
            Throughout the development of this project, I encountered several
            challenges:
          </p>
          <ul>
            <li>
              Since the project was initially started by a single developer
              without a dedicated frontend focus, it required significant
              refactoring and optimization, which became overwhelming at times.
            </li>
            <li>
              The project's scope was loosely defined at the beginning, making
              it difficult to determine when a phase was truly complete and when
              to move on to the next steps, as minor tweaks continued to
              accumulate.
            </li>
            <li>
              While the original concept was promising, achieving the initial
              vision proved challenging due to certain technical limitations and
              obstacles. These made the original goals unrealistic unless
              alternative solutions were considered.
            </li>
            <li>
              The scope of the project exceeded the available manpower, creating
              additional challenges in meeting deadlines and expectations.
            </li>
          </ul>
        </div>
        <div className="project-outcome">
          <h2>Project Outcome</h2>
          <p>
            Despite the numerous challenges and adjustments we faced throughout
            the project, we were able to successfully launch a fully functional
            app by the end of last year, meeting key milestones and delivering a
            valuable tool to the users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
