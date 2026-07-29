import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import Qeen from "./assets/qeen.jpg";
import Qeen_1 from "./assets/qeen_1.mp4";
import Qeen_2 from "./assets/qeen_2.mp4";
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
          <motion.h1 variants={headerItem}>Qeen</motion.h1>
          <motion.p className="description" variants={headerItem}>
            Qeenworld is a website that showcases Qeen heated tobacco devices
            and heated tobacco stick products for both customers and
            distributors. It provides information about the devices and the
            various available flavors.
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
          <img src={Qeen} alt="Qeen" />
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
              Qeenworld, similar to Hunnworld, is a website designed to
              showcase heated tobacco devices and various types of heated
              tobacco sticks for customers and distributors. It's built as a
              static product showcase page.
            </p>
            <p>
              It offers similar products to Hunnworld, with different
              branding to target a distinct market.
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
              <li>Built UI components from scratch based on designs from the creative team.</li>
              <li>Decided on responsive layouts and UX for displaying the heated tobacco stick range.</li>
              <li>Demonstrated the site to the project manager and creative director.</li>
              <li>Maintained the site and provided ongoing support for updates.</li>
            </ul>
          </motion.div>
        </section>
      </article>
    </div>
  );
};

export default ProjectDetail;
