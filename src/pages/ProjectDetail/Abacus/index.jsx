import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import ABACUS from "./assets/abacus.jpg";
import AB_1 from "./assets/abacus_1.jpg";
import AB_2 from "./assets/abacus_2.jpg";
import AB_3 from "./assets/abacus_3.jpg";
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
        <motion.h1 variants={headerItem}>Abacus</motion.h1>
        <motion.p className="description" variants={headerItem}>
          Abacus is an internal company tool used to calculate the cost of lab
          materials in manufacturing and research processes.
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
        <img src={ABACUS} alt="Abacus" />
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
            Abacus was developed for the R&D department to calculate the lab
            and commercial costs of the materials needed for the manufacturing
            and research of new tobacco-related products. It was named by the
            same IT director who named Project Lighthouse.
          </p>
          <p>
            It was developed by the same group of four, including me as the
            frontend developer, my manager as the backend and server manager,
            a business analyst who handled requirements and some UI/UX, and
            the IT director who led the team. We essentially used the same
            formula as the previous project, Lighthouse, utilizing the same UI
            components and strategies.
          </p>
          <p>
            It took about one or two months to complete the initial usable
            product, which was then launched within the organization for the
            R&D department to use and to provide reports to the CEO about the
            cost-related data. The concept is the same as the Lighthouse
            project in that it involves data storage and data simulation or
            calculation.
          </p>
          <p>
            Since it is only available for internal use, there is no external
            access to the system.
          </p>

          <h3>Some figma UI prototypes</h3>
          <div className="figure-container">
            <div>
              <img src={AB_1} alt="lighthouse" />
              <label>Categories of products</label>
            </div>
            <div>
              <img src={AB_2} alt="lighthouse" />
              <label>Process of each category</label>
            </div>
          </div>
          <div className="figure-container">
            <div>
              <img src={AB_3} alt="lighthouse" />
              <label>Creation of new materials</label>
            </div>
          </div>
          <p>
            The goal of the website is to replicate the real-life processes
            involved in the research and development of new products, making
            it easier to calculate the materials needed without relying too
            heavily on Excel files and manual calculations.
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
            <li>Building UI components from scratch based on designs proposed by me, the analyst, and the director's suggestions.</li>
            <li>Solving UI/UX problems to meet user requirements and proposing solutions.</li>
            <li>Participating in brainstorming sessions and regularly reporting progress to the director.</li>
            <li>Demonstrating the website to stakeholders and supporting upcoming changes.</li>
          </ul>
        </motion.div>
      </section>
      </article>
    </div>
  );
};

export default ProjectDetail;
