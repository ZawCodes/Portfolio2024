import React, { useState } from "react";
import { Link } from "react-router-dom";
import resume from "../../assets/resume.pdf";
import "./index.scss";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">Home</Link>
      </div>
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/background" onClick={toggleMenu}>
              Background
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li>
            <a href={resume} target="_blank" onClick={toggleMenu}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Index;
