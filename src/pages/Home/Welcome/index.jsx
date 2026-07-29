import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import resume from "../../../assets/resume.pdf";
import "./index.scss";

/* Identity (eyebrow + name): tight duo, reveals first */
const identityContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const identityItem = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

/* Bio: single slower settle, after identity lands */
const bioVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.42, ease: "easeOut" } },
};

/* CTAs: tactile pop-in with slight overshoot, since they're actionable */
const ctaContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.68 } },
};
const ctaItem = {
  hidden: { opacity: 0, y: 6, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } },
};

/* Stat strip: slides in horizontally as one unit, last — reads as supporting data, not more headline */
const statVariant = {
  hidden: { opacity: 0, x: -18 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.95, ease: "easeOut" } },
};

const Index = () => {
  return (
    <div className="welcome-section">
      <div className="welcome-content">
        <motion.div
          className="identity-group"
          initial="hidden"
          animate="visible"
          variants={identityContainer}
        >
          <motion.div className="eyebrow" variants={identityItem}>
            Software Engineer
          </motion.div>
          <motion.h1 variants={identityItem}>Zaw Htet Aung</motion.h1>
        </motion.div>

        <motion.p className="bio" initial="hidden" animate="visible" variants={bioVariant}>
          I build web apps with React, Node.js and TypeScript, and integrate
          AI agents into my workflow. 7 years of experience, currently at{" "}
          <a href="https://www.amdon.com/" target="_blank" rel="noreferrer">
            Amdon
          </a>
          .
        </motion.p>

        <motion.div
          className="cta-row"
          initial="hidden"
          animate="visible"
          variants={ctaContainer}
        >
          <motion.a href="/projects" className="btn btn-primary" variants={ctaItem}>
            View Projects
            <FiArrowRight />
          </motion.a>
          <motion.a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            variants={ctaItem}
          >
            Resume
            <FiDownload />
          </motion.a>
        </motion.div>

        <motion.div
          className="stat-row"
          initial="hidden"
          animate="visible"
          variants={statVariant}
        >
          <div className="stat">
            <div className="stat-value">2019</div>
            <div className="stat-label">Since</div>
          </div>
          <span className="stat-sep" />
          <div className="stat">
            <div className="stat-value">20+</div>
            <div className="stat-label">Projects shipped</div>
          </div>
          <span className="stat-sep" />
          <div className="stat">
            <div className="stat-value">React · Node.js · TypeScript</div>
            <div className="stat-label">Tech stack</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
