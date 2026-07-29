import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import "./index.scss";

const slideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Index = () => {
  return (
    <div className="footer">
      <motion.div className="footer-inner" initial="hidden" animate="visible" variants={slideUp}>
        <p className="copyright">© 2026 Zaw Htet Aung</p>
        <div className="social">
          <a href="https://github.com/ZawCodes" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/zawcodes/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
