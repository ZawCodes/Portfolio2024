import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LF from "./assets/lf.jpg";
import LE from "./assets/le.jpg";
import HW from "./assets/hw.jpg";
import LH from "./assets/lh.jpg";
import YSQ from "./assets/ysq.jpg";
import SW from "./assets/sw.jpg";
import ABACUS from "./assets/abacus.jpg";
import PT from "./assets/pt.jpg";
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
    organization: "Amdon",
    type: "Professional",
  },
  {
    id: 2,
    path: "loansestate",
    title: "Loans Estate",
    description:
      "An online mortgage loan system that allows users to select loan packages, automate the application process, and submit to banks for a faster, more streamlined experience.",
    image: LE,
    tags: ["React", "MaterialUI", "Node.js", "ContextAPI"],
    organization: "LoansEstate",
    type: "Professional",
  },
  {
    id: 3,
    path: "hunnworld",
    title: "Hunnworld",
    description:
      "A customer portal showcasing heated tobacco products, providing product details, purchase locations, customer support, and warranty registration.",
    image: HW,
    tags: ["React", "Vite", "SCSS", "ContextAPI", "PHP"],
    organization: "YSQ",
    type: "Professional",
  },
  {
    id: 4,
    path: "lighthouse",
    title: "Lighthouse",
    description:
      "An internal tool for calculating product prices and storing tax information, taking into account import duties, exchange rates, and country-specific taxes.",
    image: LH,
    tags: ["React", "Vite", "SCSS", "ContextAPI", "PHP"],
    organization: "YSQ",
    type: "Professional",
  },
  {
    id: 5,
    path: "ysq-international",
    title: "YSQ International",
    description:
      "A company website designed for individuals to discover and engage with our group, explore the company's history, and view available positions for the public.",
    image: YSQ,
    tags: ["React", "Vite", "SCSS", "ContextAPI", "PHP"],
    organization: "YSQ",
    type: "Professional",
  },
  {
    id: 6,
    path: "stemwerkz",
    title: "Stemwerkz",
    description:
      "STEMWerkz provides a fun environment for kids to learn about science, technology, engineering, and mathematics through 4,000 minutes of interactive content.",
    image: SW,
    tags: ["Angular", "CSS", "Node.js"],
    organization: "Amdon",
    type: "Professional",
  },
  {
    id: 7,
    path: "abacus",
    title: "Abacus",
    description:
      "Abacus is an internal company tool used for calculating the cost of lab materials in manufacturing and research processes.",
    image: ABACUS,
    tags: ["React", "Vite", "SCSS", "ContextAPI", "PHP"],
    organization: "YSQ",
    type: "Professional",
  },
  {
    id: 8,
    path: "paris-tobacco",
    title: "Paris Tobacco",
    description:
      "A company website for a branch based in Poland that serves as a landing page, provides information about the company, and displays contact details.",
    image: PT,
    tags: ["React", "Vite", "SCSS", "ContextAPI", "PHP"],
    organization: "YSQ",
    type: "Professional",
  },
];

const ProjectCard = ({ project }) => (
  <Link to={`/projects/${project.path}`} className="project-card">
    <img src={project.image} alt={project.title} />
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="tags">
      {project.tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  </Link>
);

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedOrg, setSelectedOrg] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const allTags = [
    "All",
    ...new Set(projectsData.flatMap((project) => project.tags)),
  ];
  const allOrgs = [
    "All",
    ...new Set(projectsData.map((project) => project.organization)),
  ];
  const allTypes = ["All", "Professional", "Personal"];

  useEffect(() => {
    const filtered = projectsData.filter(
      (project) =>
        (selectedTag === "All" || project.tags.includes(selectedTag)) &&
        (selectedOrg === "All" || project.organization === selectedOrg) &&
        (selectedType === "All" || project.type === selectedType)
    );
    setFilteredProjects(filtered);
  }, [selectedTag, selectedOrg, selectedType]);

  const FilterButtons = ({ options, selected, setSelected, title }) => (
    <div className="filter-section">
      <h3>{title}:</h3>
      <div className="filter-buttons">
        {options.map((option) => (
          <button
            key={option}
            className={`filter-button ${selected === option ? "active" : ""}`}
            onClick={() => setSelected(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <p className="intro">
        Here are some of the projects I've worked on. I'm still gradually adding
        in more entries as of now.
      </p>

      <FilterButtons
        options={allTags}
        selected={selectedTag}
        setSelected={setSelectedTag}
        title="Filter by technology"
      />
      <FilterButtons
        options={allOrgs}
        selected={selectedOrg}
        setSelected={setSelectedOrg}
        title="Filter by organization"
      />
      <FilterButtons
        options={allTypes}
        selected={selectedType}
        setSelected={setSelectedType}
        title="Filter by type"
      />

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
