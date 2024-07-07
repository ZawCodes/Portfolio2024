import React from "react";
import Welcome from "./Welcome";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";
import "./index.scss";

const Index = () => {
  return (
    <section className="home">
      <Welcome />
      <Skills />
      <Resume />
      <Contact />
    </section>
  );
};

export default Index;
