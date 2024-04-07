import React from "react";
import Welcome from "./Welcome";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "pages/Footer";
import "./index.scss";

const Index = () => {
  return (
    <section className="home">
      <Welcome />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </section>
  );
};

export default Index;
