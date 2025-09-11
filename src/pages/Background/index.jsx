import React from "react";
import L4DC from "./assets/l4dc.jpg";
import UIT from "./assets/uit.jpg";
import DAT from "./assets/dat.jpg";
import Amdon from "./assets/amdon.jpg";
import Ysq from "./assets/ysq_group.jpg";
import "./index.scss";

const EducationItem = ({ year, description, funFact, imageSrc, imageAlt }) => (
  <div className="education-item">
    <div className="split">
      <div className="left">
        <h3>{year}</h3>
        <p>{description}</p>
        {funFact && <p className="fun-fact">{funFact}</p>}
      </div>
      {imageSrc && (
        <div className="right school-image">
          <img src={imageSrc} alt={imageAlt} />
        </div>
      )}
    </div>
  </div>
);

const CareerItem = ({ year, description, funFact, imageSrc, imageAlt }) => (
  <div className="career-item">
    <div className="split">
      <div className="left">
        <h3>{year}</h3>
        {Array.isArray(description) ? (
          description.map((desc, index) => <p key={index}>{desc}</p>)
        ) : (
          <p>{description}</p>
        )}
        {funFact && <p className="fun-fact">{funFact}</p>}
      </div>
      {imageSrc && (
        <div className="right school-image">
          <img src={imageSrc} alt={imageAlt} />
        </div>
      )}
    </div>
  </div>
);

const Index = () => {
  // Dynamically compute age (birth year inferred from original text: 27 in 2025 -> 1998)
  const currentAge = new Date().getFullYear() - 1998;
  const educationData = [
    {
      year: "2003-2014",
      description:
        "From primary school through high school graduation, I completed my entire academic journey at Basic Education High School Ahlone 4.",
      funFact:
  "For most of my school years, I was in Section A and earned distinctions in 5 of 6 subjects in the matriculation exam—a milestone I'm proud of.",
    },
    {
      year: "2014-2015",
      description:
        "After graduating, I attended a Level 4 Diploma in Computing course at a local computer training center called KMD.",
      funFact:
  "The program offered full scholarships to students with 5 or more distinctions, which motivated me to enroll.",
      imageSrc: L4DC,
      imageAlt: "Basic Education High School Ahlone 4",
    },
    {
      year: "2014-2019",
      description: [
  "I chose to pursue Computer Science because I was drawn to technology's blend of logic, creativity, and impact.",
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
      description:
  "In my 4th year, I completed a one-month field study at a local company called Base—my first exposure to a professional office environment.",
      funFact:
  "I built Python scripts to crawl local news websites.",
    },
    {
      year: "2019",
      description: [
    "In the second half of my final year at university, I passed an internal interview and was offered a 4‑month internship at a local company called DIR ACE Technology.",
        "DIR-ACE Technology Ltd. (DAT) is a collaboration between Japan's DIR and Myanmar's ACE, providing IT solutions for financial markets.",
      ],
      funFact:
    "I was part of a team of students from multiple universities, and together we created a website for viewing matriculation results using Java Spring Boot. I focused on the front-end.",
      imageSrc: DAT,
      imageAlt: "Dir Ace Technology",
    },
    {
      year: "2019-2022",
      description: [
  "After the internship, I joined Werkz Technology (Amdon), motivated by growth potential and the chance to collaborate regionally, including with the Singapore team.",
  "I officially started my career as a front-end developer at the Amdon Group.",
      ],
      funFact:
  "I chose the Singapore pathway after graduation—working there had long been a goal of mine.",
      imageSrc: Amdon,
      imageAlt: "Amdon",
    },
    {
      year: "2022-2024",
      description: [
  "Amid significant changes at home in 2021, I began exploring international opportunities. In August 2022, I relocated to Singapore and joined YSQ International as a front-end developer.",
  "It was my first time living abroad and adapting to a new working culture and language style (including Singlish), and the experience accelerated both my technical and interpersonal growth.",
      ],
      funFact:
  "As the sole front-end developer, I partnered with a backend lead to deliver 12+ company websites in 1 year and 7 months.",
      imageSrc: Ysq,
      imageAlt: "YSQ International",
    },
    {
      year: "2024",
      description: [
  "Following organizational shifts and team transitions, my role concluded during a company restructuring.",
  "Soon after, I briefly contributed to the Loans Estate CRM project for the consulting firm Loan$upermart.",
      ],
      funFact:
  "The period strengthened my adaptability and clarified the environments where I create the most value.",
    },
    {
      year: "2024-current",
      description: [
  "I relocated to Bangkok and rejoined the Amdon Group as a remote front-end developer.",
      ],
      funFact:
  "I'm currently studying Japanese and exploring future opportunities in Japan.",
    },
  ];

  return (
    <div className="background-container page">
      <h1 className="page-title">A little back story</h1>
      <p className="intro page-intro">
        I was born in Myanmar and I'm currently {currentAge}. I'd love to share a bit of my journey so you can get to know me better.
      </p>

      <section className="education-section">
        <h2 className="section-title">Education</h2>
        {educationData.map((item, index) => (
          <EducationItem key={index} {...item} />
        ))}
      </section>

      <section className="career-section">
        <h2 className="section-title">Working experiences</h2>
        {careerData.map((item, index) => (
          <CareerItem key={index} {...item} />
        ))}
      </section>
    </div>
  );
};

export default Index;
