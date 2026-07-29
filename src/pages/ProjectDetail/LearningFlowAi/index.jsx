import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import LF from "./assets/lf.jpg";
import FlowSample from "./assets/flow_sample1.mp4";
import FlowSample2 from "./assets/flow_sample2.mp4";
import ViewerSample from "./assets/viewer_sample.mp4";
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
        <motion.h1 variants={headerItem}>Learning Flow AI</motion.h1>
        <motion.p className="description" variants={headerItem}>
          LearningFlow AI is an AI-powered online learning platform featuring a
          suite of apps designed to make customized lessons more fun,
          effective, and engaging.
        </motion.p>
        <motion.div className="meta-row" variants={headerItem}>
          <span className="meta-org">
            <strong>Organization</strong> Amdon
          </span>
          <span className="meta-sep" aria-hidden="true" />
          <div className="tags">
            <span className="tag">React</span>
            <span className="tag">Vite</span>
            <span className="tag">Tailwind</span>
            <span className="tag">Zustand</span>
            <span className="tag">ContextAPI</span>
            <span className="tag">NestJS</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="project-media"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
      >
        <img src={LF} alt="Learning Flow AI" />
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
              <video autoPlay loop muted playsInline>
                <source src={FlowSample} type="video/mp4" />
              </video>
              <label>Empty flow sample</label>
            </div>
            <div>
              <video autoPlay loop muted playsInline>
                <source src={FlowSample2} type="video/mp4" />
              </video>
              <label>KnowledgeBot flow sample</label>
            </div>
          </div>
          <p>
            The created Flows can be viewed by learners or students through
            the Viewer app.
          </p>

          <h3>Viewer</h3>
          <div className="figure-container">
            <div>
              <video autoPlay loop muted playsInline>
                <source src={ViewerSample} type="video/mp4" />
              </video>
              <label>KnowledgeBot in Viewer</label>
            </div>
          </div>
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
            <li>Developing new features for the Viewer — including a Random Number Generator and Display Quiz — as the node library grows.</li>
            <li>Shipping centralized error handling, Journal Page pagination/filtering, and a "Copy Flow" action.</li>
            <li>Refactoring existing code for robustness and alignment with best practices.</li>
            <li>Partnering with backend developers to define APIs and debug integration issues.</li>
          </ul>
        </motion.div>
      </section>
      </article>
    </div>
  );
};

export default ProjectDetail;
