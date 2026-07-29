import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import SW from "./assets/sw.jpg";
import SW_login from "./assets/sw_login.jpg";
import SW_dashboard from "./assets/sw_dashboard.jpg";
import SW_subscription from "./assets/sw_subscription.jpg";
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
          <motion.h1 variants={headerItem}>Stemwerkz</motion.h1>
          <motion.p className="description" variants={headerItem}>
            STEMWerkz is an engaging platform that offers kids the opportunity
            to explore science, technology, engineering, and mathematics
            through 4000 minutes of interactive content. The platform uses
            various learning methods, including interactive games and videos,
            to make learning fun and effective.
          </motion.p>
          <motion.div className="meta-row" variants={headerItem}>
            <span className="meta-org">
              <strong>Organization</strong> YSQ
            </span>
            <span className="meta-sep" aria-hidden="true" />
            <div className="tags">
              <span className="tag">Angular</span>
              <span className="tag">CSS</span>
              <span className="tag">Node.js</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="project-media"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          <img src={SW} alt="Stemwerkz" />
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
              STEMWerkz was the third project I contributed to during my time
              at the Amdon Group. The platform featured various apps,
              including SteamValley, an interactive town-building game where
              students complete quests while progressing through a
              storyline, and SteamChannel, a hub for learning through
              interactive videos.
            </p>
            <p>
              Along with one other developer, I was responsible for building
              the dashboard used for managing parent and child accounts,
              subscriptions, and other account-related features. I played a
              key role from the very beginning, developing UI components
              from scratch as part of the project's foundational phase.
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
              creation and control of child accounts, and child accounts,
              which are used to access content across the various STEMWerkz
              apps.
            </p>

            <h3>Subscription history</h3>
            <div className="figure-container">
              <div>
                <img src={SW_subscription} alt="subscription" />
                <label>Subscription page</label>
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
              <li>Setting up the project and building initial UI components from the provided UI/UX designs.</li>
              <li>Animating dynamic backgrounds and UI components such as profile sections and modals.</li>
              <li>Collaborating with the backend team on seamless API integration.</li>
              <li>Presenting progress to the HOD and CTO at development milestones.</li>
            </ul>
          </motion.div>
        </section>
      </article>
    </div>
  );
};

export default ProjectDetail;
