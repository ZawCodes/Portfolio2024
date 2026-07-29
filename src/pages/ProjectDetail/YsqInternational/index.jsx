import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import YSQ from "./assets/ysq.jpg";
import Home1 from "./assets/ysq_home1.jpg";
import Home2 from "./assets/ysq_home2.jpg";
import Home3 from "./assets/ysq_home3.jpg";
import Home4 from "./assets/ysq_home4.jpg";
import Career from "./assets/ysq_career.jpg";
import Business from "./assets/ysq_business.jpg";
import Wellness from "./assets/ysq_wellness.jpg";
import Contact from "./assets/ysq_contact.jpg";
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
          <motion.h1 variants={headerItem}>YSQ International</motion.h1>
          <motion.p className="description" variants={headerItem}>
            YSQ International's main corporate website serves as a platform to
            engage with the general audience, attract job seekers, and
            provide comprehensive information about the company.
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
          <img src={YSQ} alt="YSQ" />
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
              This project involved revamping YSQ International's previous
              company website to modernize its design, update content, and,
              for the first time, feature real employees as models in the
              website's imagery.
            </p>
            <p>
              For the redesign, the team included two UI/UX designers—an
              intern and a graphic designer transitioning into a UI/UX role.
              The final designs were a significant improvement over previous
              projects. As the sole front-end developer, I developed the
              website from the ground up. The design and preparation phases
              took approximately 4 to 6 months, while development was
              completed in 2 to 3 months.
            </p>
            <p>
              The website serves as a mostly static landing page for the
              company, designed to engage visitors and provide key
              information. Given its simplicity, back-end support was
              minimal, and my collaboration with the designers was primarily
              focused on ensuring the implementation aligned with their
              vision.
            </p>

            <h3>Home Page</h3>
            <div className="figure-container">
              <div>
                <img src={Home1} alt="ysq homepage1" />
                <label>Home page sample 1</label>
              </div>
              <div>
                <img src={Home2} alt="ysq homepage2" />
                <label>Home page sample 2</label>
              </div>
              <div>
                <img src={Home3} alt="ysq homepage2" />
                <label>Home page sample 3</label>
              </div>
              <div>
                <img src={Home4} alt="ysq homepage2" />
                <label>Home page sample 4</label>
              </div>
            </div>
            <h3>Other pages</h3>
            <div className="figure-container">
              <div>
                <img src={Business} alt="ysq business" />
                <label>Business page sample</label>
              </div>
              <div>
                <img src={Wellness} alt="ysq wellness" />
                <label>Wellness page sample</label>
              </div>
              <div>
                <img src={Career} alt="ysq careers" />
                <label>Careers page sample</label>
              </div>
              <div>
                <img src={Contact} alt="ysq contact" />
                <label>Contact page sample</label>
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
              <li>Building UI components from scratch and selecting the right tools and libraries for the project.</li>
              <li>Translating Adobe XD designs into responsive, cross-device layouts.</li>
              <li>Implementing UI animations and interaction details.</li>
              <li>Presenting progress to the creative director and project manager during demos.</li>
            </ul>
          </motion.div>
        </section>
      </article>
    </div>
  );
};

export default ProjectDetail;
