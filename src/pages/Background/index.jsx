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
  const educationData = [
    {
      year: "2003-2014",
      description:
        "From primary school through high school graduation, I completed my entire academic journey at Basic Education High School Ahlone 4.",
      funFact:
        "For most of my school years, I was in Section A and was fortunate to earn distinctions in 5 out of 6 subjects in the matriculation exam. It may not seem like much, but it's something I'm still proud of.",
    },
    {
      year: "2014-2015",
      description:
        "After graduating, I attended a Level 4 Diploma in Computing course at a local computer training center called KMD.",
      funFact:
        "They offered full scholarships to students who achieved 5 or more distinctions, so I thought, why not?",
      imageSrc: L4DC,
      imageAlt: "Basic Education High School Ahlone 4",
    },
    {
      year: "2014-2019",
      description: [
        "I chose to pursue a career in Computer Science because the idea of working in front of a computer in an air-conditioned room sounded appealing.",
        "Thus, I enrolled at the University of Information Technology, where I majored in Computer Science and Software Engineering.",
      ],
      funFact:
        "As someone who enjoys gaming and has a passion for drawing, pursuing Computer Science felt like a natural fit for me. I've always enjoyed creating things, and building websites seemed to align perfectly with my interests.",
      imageSrc: UIT,
      imageAlt: "University of Information Technology",
    },
  ];

  const careerData = [
    {
      year: "2018",
      description:
        "During my 4th year at university, I did a one-month field study at a small local company called Base. It was there that I experienced working in an office for the first time.",
      funFact:
        "I was tasked with using Python to web crawl local news websites.",
    },
    {
      year: "2019",
      description: [
        "In the second half of my final year at university, I passed my school interview and was given the opportunity to do a 4-month internship at a local company called DIR ACE Technology.",
        "DIR-ACE Technology Ltd. (DAT) is a collaboration between Japan's DIR and Myanmar's ACE, providing IT solutions for financial markets.",
      ],
      funFact:
        "I was part of a team made up of students from different universities, and together we created a small website for viewing matriculation results as part of our internship project, using Java Spring Boot. I took on the role of front-end developer.",
      imageSrc: DAT,
      imageAlt: "Dir Ace Technology",
    },
    {
      year: "2019-2022",
      description: [
        "After my internship, I decided to apply to Werkz Technology, also known as Amdon. It was a convenient choice since the office was very close to my home, and I also wanted the opportunity to work in Singapore.",
        "I officially started my career as a front-end developer at the Amdon Group.",
      ],
      funFact:
        "Between choosing Japan and Singapore as a career path after graduating, I decided to pursue the Singapore path because working there had always been one of my dreams.",
      imageSrc: Amdon,
      imageAlt: "Amdon",
    },
    {
      year: "2022-2024",
      description: [
        "Due to the coup that occurred in 2021, I began seeking better opportunities abroad. In August 2022, I visited Singapore for the first time and was fortunate to join YSQ International as a front-end developer.",
        "Leaving home and going abroad for the first time, as well as speaking English (or rather, Singlish), was challenging at first. However, I learned a lot along the way and gained many new experiences.",
      ],
      funFact:
        "As the sole front-end developer, I developed over a dozen company websites alongside my manager, who handled the backend, over the course of 1 year and 7 months.",
      imageSrc: Ysq,
      imageAlt: "YSQ International",
    },
    {
      year: "2024",
      description: [
        "Despite doing my best, I couldn't keep up with the fast-paced and unpredictable nature of the organization and its management. When some of the key people responsible for the stability of my position left, I ended up losing my job as well.",
        "I then joined a project at the invitation of a former colleague and worked on a CRM system called Loans Estate for a consulting firm named Loan$upermart.",
      ],
      funFact:
        "I have reflected on the events that happened and am now better equipped with the skills necessary for success and survival.",
    },
    {
      year: "2024-current",
      description: [
        "I moved to Bangkok as Myanmar was still unsafe to return to. I then rejoined my previous company, the Amdon Group, as a front-end developer, working remotely.",
      ],
      funFact:
        "I'm currently learning Japanese and Thai while also working on becoming a content creator as a side hustle to complement my main profession.",
    },
  ];

  return (
    <div className="background-container">
      <h1>My Story So Far</h1>
      <p className="intro">
        I was born in Myanmar and am now 27 years old as of 2025. I'd love to
        share a bit about my journey so far so you can get to know me better.
      </p>

      <section className="education-section">
        <h2>Education</h2>
        {educationData.map((item, index) => (
          <EducationItem key={index} {...item} />
        ))}
      </section>

      <section className="career-section">
        <h2>Working experiences</h2>
        {careerData.map((item, index) => (
          <CareerItem key={index} {...item} />
        ))}
      </section>
    </div>
  );
};

export default Index;
