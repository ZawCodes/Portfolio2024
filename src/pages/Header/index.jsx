import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import ResumeMenu from "../../components/ResumeMenu";
import "./index.scss";

const slideDown = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header>
      <motion.div className="logo" initial="hidden" animate="visible" variants={slideDown}>
        <NavLink to="/">Home</NavLink>
      </motion.div>
      <motion.div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        initial="hidden"
        animate="visible"
        variants={slideDown}
      >
        <span></span>
        <span></span>
        <span></span>
      </motion.div>
      <motion.nav
        className={`nav-menu ${isMenuOpen ? "open" : ""}`}
        initial="hidden"
        animate="visible"
        variants={slideDown}
      >
        <ul>
          <li>
            <NavLink to="/background" className={navLinkClass} onClick={toggleMenu}>
              Background
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={navLinkClass} onClick={toggleMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass} onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
          <li>
            <ResumeMenu triggerClassName="btn btn-secondary resume-btn" onSelect={toggleMenu}>
              Resume
            </ResumeMenu>
          </li>
        </ul>
      </motion.nav>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Index;
