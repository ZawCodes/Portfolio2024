import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import L4DC from "./assets/l4dc.jpg";
import UIT from "./assets/uit.jpg";
import DAT from "./assets/dat.jpg";
import Amdon from "./assets/amdon.jpg";
import Ysq from "./assets/ysq_group.jpg";
import "./index.scss";

/* Section headings and timeline items: reveal as they scroll into view */
const sectionTitleVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const timelineItemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SectionHeading = ({ index, title }) => (
  <motion.div
    className="section-heading"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.6 }}
    variants={sectionTitleVariant}
  >
    <span className="section-index" aria-hidden="true">{index}</span>
    <h2 className="section-label">{title}</h2>
    <span className="section-rule" aria-hidden="true" />
  </motion.div>
);

/* Small thumbnail chip that opens a photo in a popover anchored to itself */
const PhotoChip = ({ src, alt, imagePosition }) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState({ vertical: "bottom", horizontal: "left" });
  const wrapperRef = useRef(null);
  const popoverRef = useRef(null);
  const imgStyle = imagePosition ? { objectPosition: imagePosition } : undefined;

  useEffect(() => {
    if (!open) return undefined;

    const handlePointerDown = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useLayoutEffect(() => {
    if (!open || !popoverRef.current) return;
    const rect = popoverRef.current.getBoundingClientRect();
    setPlacement({
      vertical: rect.bottom > window.innerHeight - 16 ? "top" : "bottom",
      horizontal: rect.right > window.innerWidth - 16 ? "right" : "left",
    });
  }, [open]);

  return (
    <span className="photo-trigger" ref={wrapperRef}>
      <button
        type="button"
        className="photo-chip"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={`View photo for ${alt}`}
      >
        <img src={src} alt="" style={imgStyle} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            ref={popoverRef}
            className={`photo-popover placement-${placement.vertical}-${placement.horizontal}`}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <img src={src} alt={alt} style={imgStyle} />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

const TimelineItem = ({ year, title, description, funFact, imageSrc, imageAlt, imagePosition }) => {
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <motion.div
      className="timeline-item"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={timelineItemVariant}
    >
      <div className="timeline-card">
        <span className="timeline-year">{year}</span>
        <h3 className="timeline-role">
          {title}
          {imageSrc && <PhotoChip src={imageSrc} alt={imageAlt} imagePosition={imagePosition} />}
        </h3>
        {paragraphs.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
        {funFact && <p className="fun-fact">{funFact}</p>}
      </div>
    </motion.div>
  );
};

const Index = () => {
  const educationData = [
    {
      year: "2003-2014",
      title: "Basic Education High School Ahlone 4",
      description:
        "From primary school through high school graduation, I completed my entire academic journey at Basic Education High School Ahlone 4.",
      funFact:
  "For most of my school years, I was in Section A and earned distinctions in 5 of 6 subjects in the matriculation exam—a milestone I'm proud of.",
    },
    {
      year: "2014-2015",
      title: "Level 4 Diploma in Computing — KMD",
      description:
        "After graduating, I attended a Level 4 Diploma in Computing course at a local computer training center called KMD.",
      funFact:
  "The program offered full scholarships to students with 5 or more distinctions, which motivated me to enroll.",
      imageSrc: L4DC,
      imageAlt: "Level 4 Diploma graduation ceremony",
      imagePosition: "68% center",
    },
    {
      year: "2014-2019",
      title: "University of Information Technology",
      description: [
  "I chose to pursue Computer Science because I enjoyed building websites and apps.",
  "I enrolled at the University of Information Technology, majoring in Computer Science and Software Engineering.",
      ],
      funFact:
  "With interests in gaming, drawing, and building things, Computer Science felt like a natural fit—especially front-end development where creativity meets engineering.",
      imageSrc: UIT,
      imageAlt: "University of Information Technology",
    },
  ];

  const careerData = [
    {
      year: "2018",
      title: "Field Study — Base",
      description:
  "In my 4th year, I completed a one-month field study at a local company called Base—my first exposure to a professional office environment.",
      funFact:
  "I built Python scripts to crawl local news websites.",
    },
    {
      year: "2019",
      title: "Internship — DIR-ACE Technology (DAT)",
      description: [
    "In the second half of my final year, I interviewed for and landed a 4‑month internship at a local company called DIR-ACE Technology.",
        "DIR-ACE Technology Ltd. (DAT) is a collaboration between Japan's DIR and Myanmar's ACE, providing IT solutions for financial markets.",
      ],
      funFact:
    "I was part of a team of students from multiple universities, and together we created a website for viewing matriculation results using Java Spring Boot. I focused on the front-end.",
      imageSrc: DAT,
      imageAlt: "Dir Ace Technology",
    },
    {
      year: "2019-2022",
      title: "Front-end Developer — Werkz Technology (Amdon Group)",
      description:
  "After the internship, I officially started my career as a front-end developer at Werkz Technology (Amdon), collaborating regionally with teams including Singapore.",
      funFact:
  "I chose it because it's a Singapore-based company—working for one had long been a goal of mine.",
      imageSrc: Amdon,
      imageAlt: "Amdon",
    },
    {
      year: "2022-2024",
      title: "Front-end Developer — YSQ International",
      description: [
  "Amid significant changes at home in 2021, I began exploring international opportunities. In August 2022, I relocated to Singapore and joined YSQ International as a front-end developer.",
  "It was my first time living abroad, and adapting to a new working culture accelerated both my technical and interpersonal growth.",
      ],
      funFact:
  "As the sole front-end developer, I partnered with a backend lead to deliver 12+ company websites in 1 year and 7 months.",
      imageSrc: Ysq,
      imageAlt: "YSQ International",
    },
    {
      year: "2024",
      title: "Career Transition — Loan$upermart",
      description: [
  "My role ended during a team restructuring.",
  "Soon after, I briefly contributed to the Loans Estate CRM project for the consulting firm Loan$upermart.",
      ],
      funFact:
  "The period strengthened my adaptability and clarified the environments where I create the most value.",
    },
    {
      year: "2024-current",
      title: "Front-end Developer (Remote) — Amdon Group",
      description: [
  "I relocated to Bangkok and rejoined the Amdon Group as a remote front-end developer.",
      ],
      funFact:
  "I'm currently studying Japanese and exploring future opportunities in Japan.",
    },
  ];

  return (
    <div className="background-page page">
      <section className="timeline-section">
        <SectionHeading index="01" title="Education" />
        <div className="timeline">
          {educationData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <SectionHeading index="02" title="Working Experience" />
        <div className="timeline">
          {careerData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
