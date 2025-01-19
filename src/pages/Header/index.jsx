import React from "react";
import { Link } from "react-router-dom";
import resume from "../../assets/resume.pdf";
import "./index.scss";

const Index = () => {
  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <ul>
        <li>
          <Link to="/background">Background</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href={resume} target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Index;
