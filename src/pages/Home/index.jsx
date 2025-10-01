import React from "react";
import Welcome from "./Welcome";
import Spotlight from "./Spotlight";
import Info from "./Info";
import "./index.scss";
import Orb from "../../blocks/Backgrounds/Orb/Orb";

const Index = () => {
  return (
    <section className="home">
      {/* Hero: orb background + centered welcome content */}
      <div className="home-hero">
        <div className="home-squares-background">
          <Orb hue={280} hoverIntensity={0.15} rotateOnHover forceHoverState={false} />
        </div>
        <Welcome />
      </div>
      <Spotlight />
      <Info />
    </section>
  );
};

export default Index;
