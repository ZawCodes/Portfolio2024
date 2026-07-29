import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import LF from "./assets/lf.jpg";
import LE from "./assets/le.jpg";
import HW from "./assets/hw.jpg";
import LH from "./assets/lh.jpg";
import YSQ from "./assets/ysq.jpg";
import SW from "./assets/sw.jpg";
import ABACUS from "./assets/abacus.jpg";
import PT from "./assets/pt.jpg";
import QEEN from "./assets/qeen.jpg";
import "./index.scss";

const projectsData = [
  {
    id: 1,
    path: "learning-flow-ai",
    title: "Learning Flow Ai",
    description:
      "An AI-powered platform that enables teachers to create customized lessons while helping students learn through personalized learning paths and progress tracking.",
    image: LF,
    tags: ["React", "Vite", "Tailwind", "Zustand", "ContextAPI", "NestJS"],
  },
  {
    id: 2,
    path: "loansestate",
    title: "Loans Estate",
    description:
      "An online mortgage loan system that allows users to select loan packages, automate the application process, and submit to banks for a faster, more streamlined experience.",
    image: LE,
    tags: ["React", "MaterialUI", "Node.js", "ContextAPI"],
  },
  {
    id: 3,
    path: "hunnworld",
    title: "Hunnworld",
    description:
      "A customer portal showcasing heated tobacco products, providing product details, purchase locations, customer support, and warranty registration.",
    image: HW,
    tags: ["React", "Vite", "SCSS", "ContextAPI", "PHP"],
  },
  {
    id: 4,
    path: "lighthouse",
    title: "Lighthouse",
    description:
      "An internal tool for calculating product prices and storing tax information, taking into account import duties, exchange rates, and country-specific taxes.",
    image: LH,
    tags: ["React", "Vite", "SCSS", "ContextAPI", "PHP"],
  },
  {
    id: 5,
    path: "ysq-international",
    title: "YSQ International",
    description:
      "A company website designed for individuals to discover and engage with our group, explore the company's history, and view available positions for the public.",
    image: YSQ,
    tags: ["React", "Vite", "SCSS", "ContextAPI", "PHP"],
  },
  {
    id: 6,
    path: "stemwerkz",
    title: "Stemwerkz",
    description:
      "STEMWerkz provides a fun environment for kids to learn about science, technology, engineering, and mathematics through 4,000 minutes of interactive content.",
    image: SW,
    tags: ["Angular", "CSS", "Node.js"],
  },
  {
    id: 7,
    path: "abacus",
    title: "Abacus",
    description:
      "Abacus is an internal company tool used for calculating the cost of lab materials in manufacturing and research processes.",
    image: ABACUS,
    tags: ["React", "Vite", "SCSS", "ContextAPI", "PHP"],
  },
  {
    id: 8,
    path: "paris-tobacco",
    title: "Paris Tobacco",
    description:
      "A company website for a branch based in Poland that serves as a landing page, provides information about the company, and displays contact details.",
    image: PT,
    tags: ["React", "Vite", "SCSS", "ContextAPI", "PHP"],
  },
  {
    id: 9,
    path: "qeen",
    title: "Qeen",
    description:
      "A website to showcase Qeen heated tobacco devices and heated tobacco stick products for customers and distributors.",
    image: QEEN,
    tags: ["React", "Vite", "SCSS", "ContextAPI", "PHP"],
  },
];

/* Project cards: reveal as they scroll into view */
const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const MotionLink = motion.create(Link);

const ProjectHero = ({ project }) => (
  <MotionLink
    to={`/projects/${project.path}`}
    className="project-hero"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={cardVariant}
  >
    <div className="hero-media">
      <img src={project.image} alt={project.title} />
    </div>
    <div className="hero-body">
      <span className="hero-kicker">Featured Project</span>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <span className="hero-stack">{project.tags.join(" · ")}</span>
      <span className="hero-link">
        View project <FiArrowRight />
      </span>
    </div>
  </MotionLink>
);

const ProjectMedium = ({ project }) => (
  <MotionLink
    to={`/projects/${project.path}`}
    className="project-medium"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={cardVariant}
  >
    <div className="medium-media">
      <img src={project.image} alt={project.title} />
    </div>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
  </MotionLink>
);

const ProjectCompact = ({ project }) => (
  <MotionLink
    to={`/projects/${project.path}`}
    className="project-compact"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={cardVariant}
  >
    <div className="compact-media">
      <img src={project.image} alt={project.title} />
    </div>
    <div className="compact-body">
      <h3>{project.title}</h3>
      <span className="compact-stack">{project.tags.join(" · ")}</span>
    </div>
  </MotionLink>
);

const Projects = () => {
  const [hero, ...rest] = projectsData;
  const mediumItems = rest.slice(0, 4);
  const compactItems = rest.slice(4);

  return (
    <div className="projects-page page">
      <ProjectHero project={hero} />

      <div className="tier-divider" aria-hidden="true" />

      <div className="project-row project-row--medium">
        {mediumItems.map((project) => (
          <ProjectMedium key={project.id} project={project} />
        ))}
      </div>

      <div className="tier-divider" aria-hidden="true" />

      <div className="project-row project-row--compact">
        {compactItems.slice(0, 2).map((project) => (
          <ProjectCompact key={project.id} project={project} />
        ))}
        <div className="row-divider" aria-hidden="true" />
        {compactItems.slice(2).map((project) => (
          <ProjectCompact key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
