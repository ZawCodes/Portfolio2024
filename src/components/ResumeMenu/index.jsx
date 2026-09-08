import React, { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import resumeEn from "../../assets/resume.pdf";
import resumeJa from "../../assets/resume-ja.pdf";
import "./index.scss";

const OPTIONS = [
  { key: "en", label: "English", href: resumeEn },
  { key: "ja", label: "日本語", href: resumeJa },
];

const ResumeMenu = ({ triggerClassName = "btn btn-secondary", children, onSelect }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const handleOptionClick = () => {
    setOpen(false);
    onSelect?.();
  };

  return (
    <div className="resume-menu" ref={containerRef}>
      <button
        type="button"
        className={`${triggerClassName} resume-menu-trigger`}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {children}
        <FiChevronDown className={`resume-menu-chevron ${open ? "open" : ""}`} />
      </button>

      {open && (
        <div className="resume-menu-panel" role="menu">
          {OPTIONS.map((option) => (
            <a
              key={option.key}
              href={option.href}
              target="_blank"
              rel="noreferrer"
              role="menuitem"
              onClick={handleOptionClick}
            >
              {option.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumeMenu;
