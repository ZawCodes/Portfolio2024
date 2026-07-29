import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import PT from "./assets/pt.jpg";
import PT_home from "./assets/pt_home.mp4";
import PT_about from "./assets/pt_about.mp4";
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
        <motion.h1 variants={headerItem}>Paris Tobacco</motion.h1>
        <motion.p className="description" variants={headerItem}>
          A company website for a branch based in Poland that serves as a
          landing page, provides information about the company, displays
          contact details, and showcases career opportunities for job
          seekers.
        </motion.p>
        <motion.div className="meta-row" variants={headerItem}>
          <span className="meta-org">
            <strong>Organization</strong> YSQ
          </span>
          <span className="meta-sep" aria-hidden="true" />
          <div className="tags">
            <span className="tag">React</span>
            <span className="tag">Vite</span>
            <span className="tag">SCSS</span>
            <span className="tag">ContextAPI</span>
            <span className="tag">PHP</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="project-media"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
      >
        <img src={PT} alt="Paris Tobacco" />
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
            The Paris Tobacco website was originally built using a website
            builder platform (such as WordPress). However, it incurred
            unnecessary subscription fees every month, so the decision was
            made to convert it into a React website and host it ourselves.
          </p>
          <p>
            Since it wasn't an urgent project, the timeline was loosely
            defined, allowing me to work at my own pace. I primarily focused
            on replicating the existing website and transforming it into a
            single-page application (SPA). It was completed in about two
            months and has been live since then.
          </p>

          <h3>Preview</h3>
          <div className="figure-container">
            <div>
              <video autoPlay loop muted playsInline>
                <source src={PT_home} type="video/mp4" />
              </video>
              <label>Home</label>
            </div>
            <div>
              <video autoPlay loop muted playsInline>
                <source src={PT_about} type="video/mp4" />
              </video>
              <label>About</label>
            </div>
          </div>
          <p>
            The development primarily focused on HTML and CSS to ensure the
            elements were correctly structured and styled.
          </p>
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
            <li>Setting up the project and building out the pages from scratch.</li>
            <li>Researching and replicating the original site's UI elements and animations.</li>
            <li>Implementing a language switcher to support English and Polish.</li>
            <li>Handling ongoing updates and maintenance of the live site.</li>
          </ul>
        </motion.div>
      </section>
      </article>
    </div>
  );
};

export default ProjectDetail;
