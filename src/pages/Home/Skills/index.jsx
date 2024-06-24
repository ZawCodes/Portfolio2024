import React from "react";
import yellow from "./assets/yellow.png";
import angular from "./assets/angular.png";
import css from "./assets/css.png";
import cy from "./assets/cy.png";
import html from "./assets/html.png";
import js from "./assets/js.png";
import figma from "./assets/figma.png";
import mongodb from "./assets/mongodb.png";
import nodejs from "./assets/nodejs.png";
import ts from "./assets/ts.png";
import react from "./assets/react.png";
import "./index.scss";

const skills = [
  { src: angular, alt: "angular" },
  { src: css, alt: "css" },
  { src: cy, alt: "cy" },
  { src: html, alt: "html" },
  { src: js, alt: "js" },
  { src: figma, alt: "figma" },
  { src: mongodb, alt: "mongodb" },
  { src: nodejs, alt: "nodejs" },
  { src: ts, alt: "ts" },
  { src: react, alt: "react" },
];

const Index = () => {
  return (
    <div className="skills">
      <img src={yellow} alt="yellow" className="yellow" />
      {skills.map((skill, index) => (
        <img
          className={`${skill.alt} skill`}
          key={index}
          src={skill.src}
          alt={skill.alt}
        />
      ))}
      <div className="backstory">
        <p>
          I've been creating websites for a few years now since I graduated from
          my{" "}
          <a href="https://www.uit.edu.mm/" target="_blank">
            university
          </a>
          .
        </p>
        <p>Since 2019 to be exact.</p>
      </div>
    </div>
  );
};

export default Index;
