import ProfileCard from "../../../blocks/Components/ProfileCard/ProfileCard";
import ME from "../Welcome/assets/me.jpg";
import ME_PNG from "../Welcome/assets/me.png";
import icon_url from "./assets/icon.svg";
import "./index.scss";
import { FiCalendar, FiMapPin, FiBriefcase, FiUserCheck, FiArrowUpRight } from "react-icons/fi";

// Quick personal details (edit these values to keep them up to date)
const personal = {
  // Optional: set birthdate to auto-calculate age, e.g., "1999-07-12"
  birthdate: "",
  // Fallback if birthdate is not provided
  age: "—", // e.g., 26
  location: "Yangon, Myanmar",
  experience: "6+ years",
  current: "Front-end Engineer · Open to collaboration",
  latestProject: { name: "LearningFlow AI", href: "/projects/learning-flow-ai" },
};

const getAge = (isoDate) => {
  if (!isoDate) return null;
  const dob = new Date(isoDate);
  if (isNaN(dob.getTime())) return null;
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  return `${age}`;
};

const Spotlight = () => {
  return (
    <section className="home-spotlight" aria-labelledby="home-spotlight__title">
      <div className="container">
        <div className="home-spotlight__grid">
          <div className="home-spotlight__profile">
            <ProfileCard
              iconUrl={icon_url}
              avatarUrl={ME_PNG}
              miniAvatarUrl={ME}
              name="Zaw Htet Aung"
              title="Front-end Engineer"
              handle="zawcodes"
              status="Open to collaboration"
              contactText="Let's talk"
              onContactClick={() => {
                if (typeof window !== "undefined") {
                  window.open("/contact", "_self");
                }
              }}
              className="home-spotlight__profile-card"
            />
          </div>

          <div className="home-spotlight__content" role="region" aria-labelledby="home-spotlight__title">
            <p className="home-spotlight__eyebrow">About me</p>
            <p className="home-spotlight__kicker">{personal.location} • {personal.experience}</p>




            <div className="home-spotlight__section" aria-labelledby="at-a-glance-title">
              <ul className="home-spotlight__details" role="list">
                <li className="home-spotlight__detail" role="listitem">
                  <span className="home-spotlight__detail-icon" aria-hidden="true"><FiCalendar /></span>
                  <div className="home-spotlight__detail-body">
                    <span className="home-spotlight__detail-label">Age</span>
                    <span className="home-spotlight__detail-value">{getAge(personal.birthdate) ?? personal.age}</span>
                  </div>
                </li>
                <li className="home-spotlight__detail" role="listitem">
                  <span className="home-spotlight__detail-icon" aria-hidden="true"><FiBriefcase /></span>
                  <div className="home-spotlight__detail-body">
                    <span className="home-spotlight__detail-label">Experience</span>
                    <span className="home-spotlight__detail-value">{personal.experience}</span>
                  </div>
                </li>
                <li className="home-spotlight__detail" role="listitem">
                  <span className="home-spotlight__detail-icon" aria-hidden="true"><FiArrowUpRight /></span>
                  <div className="home-spotlight__detail-body">
                    <span className="home-spotlight__detail-label">Latest project</span>
                    <a className="home-spotlight__detail-value link" href={personal.latestProject.href}>{personal.latestProject.name}</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="home-spotlight__section" aria-labelledby="tech-stack-title">
              <h3 id="tech-stack-title" className="home-spotlight__section-title">Core stack</h3>
              <ul className="home-spotlight__tags" role="list">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Vite",
                  "SCSS / CSS Modules",
                  "Tailwind CSS",
                ].map((t) => (
                  <li key={t} className="home-spotlight__tag" role="listitem">{t}</li>
                ))}
              </ul>
            </div>

            <div className="home-spotlight__section" aria-labelledby="language-title">
              <h3 id="language-title" className="home-spotlight__section-title">Language</h3>
              <ul className="home-spotlight__tags" role="list">
                {[
                  "Myanmar",
                  "English",
                  "Japanese",
                ].map((t) => (
                  <li key={t} className="home-spotlight__tag" role="listitem">{t}</li>
                ))}
              </ul>
            </div>

            <div className="home-spotlight__cta" role="group" aria-label="Primary actions">
              <a className="home-spotlight__cta-btn home-spotlight__cta-btn--primary" href="/projects">
                View projects
              </a>
              <a className="home-spotlight__cta-btn home-spotlight__cta-btn--ghost" href="/contact">
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
