import React from "react";
import MagicBento from "../../../blocks/Components/MagicBento/MagicBento";
import LogoLoop from "../../../blocks/Animations/LogoLoop/LogoLoop";
import "./index.scss";
import "../../../blocks/Components/MagicBento/MagicBento.css";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const Info = () => {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    {
      node: <SiNextdotjs />,
      title: "Next.js",
      href: "https://nextjs.org",
    },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  return (
    <section className="home-info" aria-labelledby="home-info__title">
      <div className="container">
        <div className="home-info__intro">
          <span className="home-info__eyebrow">In the toolkit</span>
          <h2 id="home-info__title" className="home-info__title">
            Motion-first front-end craft, delivered with calm
          </h2>
          <p className="home-info__description">
            I partner with founders and design teams to ship React experiences that feel
            premium, stay fast, and are easy to iterate on.
          </p>
        </div>

        <div className="home-info__cards">
          <MagicBento
            textAutoHide
            enableStars
            enableSpotlight
            enableBorderGlow
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={false}
            simpleLayout
            spotlightRadius={130}
            particleCount={4}
            glowColor="140, 90, 255"
            cards={[
              {
                color: "#060010",
                label: "About",
                className: "card--pill card--gradient-orange",
                content: (
                  <div className="card__content">
                    <h2 className="card__title">Role</h2>
                    <p className="card__description">
                      Front-end engineer shaping calm, animated product surfaces for
                      teams across Singapore and Myanmar.
                    </p>
                  </div>
                ),
              },
              {
                color: "#060010",
                label: "Career",
                className: "card--rounded card--gradient-purple",
                content: (
                  <div className="card__content">
                    <h2 className="card__title">Experience</h2>
                    <p className="card__description">
                      6+ years shipping SaaS dashboards, brand launches, and learning
                      platforms with 95+ Lighthouse scores.
                    </p>
                  </div>
                ),
              },
              {
                color: "#060010",
                label: "Stack",
                className:
                  "card--rounded card--gradient-blue span-2x2 place-right",
                content: (
                  <div className="card__content">
                    <h2 className="card__title">Tech</h2>
                    <p className="card__description">
                      React · Next.js · TypeScript · Vite · GSAP · Framer Motion · Three.js ·
                      Zustand · Radix UI
                    </p>
                  </div>
                ),
              },
              {
                color: "#060010",
                label: "Reach",
                className: "card--pill card--accent span-2x1 place-left-wide",
                content: (
                  <div className="card__content">
                    <h2 className="card__title">Contact</h2>
                    <p className="card__description">
                      <a href="mailto:zaw@labs.wtf">zaw@labs.wtf</a> · LinkedIn
                      /zawcodes · Telegram @zawcodes
                    </p>
                  </div>
                ),
              },
            ]}
          />
        </div>

        <div className="home-info__logo-loop">
          <LogoLoop
            logos={techLogos.map((tech) => ({
              node: tech.node,
              ariaLabel: tech.title,
              href: tech.href,
            }))}
            speed={26}
            direction="left"
            logoHeight={32}
            gap={44}
            pauseOnHover
            fadeOut
            fadeOutColor="rgba(10, 6, 24, 0.92)"
            scaleOnHover
            ariaLabel="Preferred tooling"
            className="tech-logo-loop"
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
