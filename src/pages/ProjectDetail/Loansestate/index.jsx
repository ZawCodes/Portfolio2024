import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import LS from "./assets/ls.jpg";
import LE from "./assets/le.jpg";
import ChatBot from "./assets/chatbot.jpg";
import Leads from "./assets/leads.jpg";
import "./index.scss";

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const headerItem = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const sectionTitleVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SectionHeading = ({ index, title }) => (
  <motion.div
    className="section-heading"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.6 }}
    variants={sectionTitleVariant}
  >
    <span className="section-index" aria-hidden="true">{index}</span>
    <h2 className="section-label">{title}</h2>
    <span className="section-rule" aria-hidden="true" />
  </motion.div>
);

const ProjectDetail = () => {
  return (
    <div className="project-detail-page page">
      <article className="article">
        <Link to="/projects" className="back-link">
          <FiArrowLeft /> All projects
        </Link>

        <motion.div
          className="project-header"
          initial="hidden"
          animate="visible"
          variants={headerContainer}
        >
          <motion.span className="kicker" variants={headerItem}>
            Case Study
          </motion.span>
          <motion.h1 variants={headerItem}>Loans Estate</motion.h1>
          <motion.p className="description" variants={headerItem}>
            LoansEstate is an online mortgage loan system that allows users to
            select loan packages, automate the application process, and
            submit to banks, streamlining the experience for faster results.
          </motion.p>
          <motion.div className="meta-row" variants={headerItem}>
            <span className="meta-org">
              <strong>Organization</strong> Loan$upermart
            </span>
            <span className="meta-sep" aria-hidden="true" />
            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">MaterialUI</span>
              <span className="tag">Node.js</span>
              <span className="tag">ContextAPI</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="project-media"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          <img src={LE} alt="Loans Estate" />
        </motion.div>

        <section className="project-section">
          <SectionHeading index="01" title="Overview" />
          <motion.div
            className="section-body"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
          >
            <p>
              LoansEstate was a startup project I worked on with a former
              colleague for Loan$upermart, a mortgage consulting firm. The
              project consisted of three components: the main Loan$upermart
              website, a chatbot, and the LoansEstate CRM.
            </p>
            <p>
              Users interested in applying for mortgage loans can visit the
              main Loan$upermart website, where they can access the chatbot
              via the navigation bar. After answering a series of questions
              from the chatbot, the system generates up to three tailored
              loan packages for users to choose from.
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
              system recommends up to three suitable loan packages for users
              to consider.
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

            <h3>Tech Stack</h3>
            <ul>
              <li>React for the CRM and chatbot front ends.</li>
              <li>Node.js and Express for the REST API layer.</li>
              <li>MongoDB for data storage.</li>
              <li>Redux for client-side state management.</li>
            </ul>
          </motion.div>
        </section>

        <section className="project-section">
          <SectionHeading index="02" title="My Role" />
          <motion.div
            className="section-body"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
          >
            <ul>
              <li>Building the frontend for the chatbot and CRM, and maintaining the Loan$upermart website in WordPress.</li>
              <li>Building REST APIs and Auth0 authentication for the CRM, transitioning into a full-stack role.</li>
              <li>Managing deployment with PM2 on a Node.js/Express/MySQL backend.</li>
              <li>Collaborating directly with the client to plan requirements and next steps.</li>
            </ul>
          </motion.div>
        </section>
      </article>
    </div>
  );
};

export default ProjectDetail;
