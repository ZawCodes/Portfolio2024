import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Index = () => {
  const projects = [
    { primary: "LOANSESTATE", secondary: "LOANSESTATE", link: "loansestate" },
    { primary: "HUNNWORLD", secondary: "HUNNWORLD", link: "hunnworld" },
    { primary: "YSQ", secondary: "YSQ", link: "ysq" },
    {
      primary: "PARISTOBACCO",
      secondary: "PARISTOBACCO",
      link: "paristobacco",
    },
    { primary: "LIGHTHOUSE", secondary: "LIGHTHOUSE", link: "lighthouse" },
    { primary: "CLASSWERKZ", secondary: "CLASSWERKZ", link: "classwerkz" },
    { primary: "NODMA", secondary: "NODMA", link: "nodma" },
    { primary: "STEMWERKZ", secondary: "STEMWERKZ", link: "stemwerkz" },
  ];

  return (
    <>
      <div className="project-list">
        <ul className="body">
          {projects.map((project, index) => (
            <Text3d
              key={index}
              primary={project.primary}
              secondary={project.secondary}
              link={project.link}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

const Text3d = ({ primary, secondary, link }) => (
  <li className="text-container">
    <Link to={link} className="primary">
      {primary}
    </Link>
    <Link to={link} className="secondary">
      {secondary}
    </Link>
  </li>
);

export default Index;
