import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import LH from "./assets/lh.jpg";
import LH_store from "./assets/lh_storage.jpg";
import LH_report from "./assets/lh_report.jpg";
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
          <motion.h1 variants={headerItem}>Lighthouse</motion.h1>
          <motion.p className="description" variants={headerItem}>
            An internal company tool for calculating product selling prices
            and storing related tax information, factoring in variables such
            as import duties, exchange rates, and country-specific taxes
            based on the selected product and location.
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
          <img src={LH} alt="Lighthouse" />
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
              The project name "Lighthouse" was given by the former IT
              director to the tax calculator and centralized tax information
              storage system. As he explained, he wanted the system to be
              symbolic and visible, much like a lighthouse. The idea of
              storing all the tax information for new products had been on
              the owner's mind for some time, and with the development of
              this project, we brought that vision to life.
            </p>
            <p>
              The project team consisted of four people from the IT team: a
              business analyst who also helped with UI/UX, as we didn't have
              a dedicated UI/UX designer; me as the front-end developer; the
              manager handling backend and deployment; and the IT director as
              the team lead, providing overall direction for the project.
              Additionally, several other departments were involved,
              including sales, finance, and legal, who provided us with the
              necessary materials, such as tax and price information,
              calculation formulas, and more, to develop the website.
            </p>
            <p>
              The total development time for the initial MVP took about three
              months, with subsequent updates following later. It was also
              one of the first in-house software solutions developed within
              the company. Since it's only available for internal use, there
              is no external access to the system.
            </p>

            <h3>Some figma UI prototypes</h3>
            <div className="figure-container">
              <div>
                <img src={LH_store} alt="lighthouse" />
                <label>Tax information stored example</label>
              </div>
              <div>
                <img src={LH_report} alt="lighthouse" />
                <label>Report sample</label>
              </div>
            </div>
            <p>
              The main uses of the website include simulating tax prices,
              providing centralized storage for tax information, validating
              data from different departments, and generating reports.
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
              <li>Building UI components from scratch based on designs shaped with the analyst and director.</li>
              <li>Structuring the project around reusable components built to accommodate future updates.</li>
              <li>Assisting with the formulas and calculations behind the tax simulation.</li>
              <li>Providing ongoing maintenance and support as new requests came in.</li>
            </ul>
          </motion.div>
        </section>
      </article>
    </div>
  );
};

export default ProjectDetail;
