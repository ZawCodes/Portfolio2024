import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import HW from "./assets/hw.jpg";
import HW_sample from "./assets/hw_early.jpg";
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
          <motion.h1 variants={headerItem}>Hunnworld</motion.h1>
          <motion.p className="description" variants={headerItem}>
            Hunnworld is a website that showcases our heated tobacco products,
            provides information on where to purchase them, offers customer
            support, and allows users to register warranties for their
            purchased devices.
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
          <img src={HW} alt="Hunnworld" />
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
              Hunnworld was my primary reason for joining YSQ—continuing an
              ongoing project. It is intended to become both a branding
              website and a platform for registering heated tobacco devices
              for warranty exchanges. It includes other information such as
              usage instructions, purchase locations, contact details,
              support, FAQs, and more.
            </p>
            <p>
              The project had paused for a couple of years due to the
              COVID-19 pandemic, which delayed the product's launch. When I
              joined the team, a decision was made to revamp the website with
              a new direction, so I developed it from scratch.
            </p>
            <p>
              The live website is only accessible from the Philippines, so
              the demo here uses an early prototype instead.
            </p>

            <h3>Early design</h3>
            <div className="figure-container">
              <div>
                <img src={HW_sample} alt="hunnworld sample" />
                <label>Hunnworld early Home page</label>
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
              <li>Rebuilding the site from scratch with a new UI, solo, over about 2-3 months, shipping the first launch in 2023.</li>
              <li>Overseeing and refactoring the project's structure and architecture.</li>
              <li>Integrating APIs in collaboration with the backend manager.</li>
              <li>Creating email templates on Brevo for warranty registration and support.</li>
            </ul>
          </motion.div>
        </section>
      </article>
    </div>
  );
};

export default ProjectDetail;
