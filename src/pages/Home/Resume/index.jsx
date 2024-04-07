import React from "react";
import resume from "./assets/resume.pdf";
import "./index.scss";

const Index = () => {
  return (
    <div className="resume">
      <div className="download-resume">
        <p>
          Download my{" "}
          <a href={resume} target="_blank">
            Resume
          </a>
        </p>
        <p>To find out more.</p>
      </div>
    </div>
  );
};

export default Index;
