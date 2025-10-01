import ProfileCard from "../../../blocks/Components/ProfileCard/ProfileCard";
import ME from "../Welcome/assets/me.jpg";
import ME_PNG from "../Welcome/assets/me.png";
import icon_url from "./assets/icon.svg";
import "./index.scss";

const stats = [
  {
    label: "Projects shipped",
    value: "24+",
    description: "From SaaS dashboards to immersive brand storytelling."
  },
  {
    label: "Average Lighthouse score",
    value: "95",
    description: "Performance-first builds with accessibility baked in."
  },
  {
    label: "Mission",
    value: "Craft delightful, high-impact web experiences.",
    description: null
  }
];

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

          <div className="home-spotlight__content">
            <p className="home-spotlight__eyebrow">In focus</p>
            <h2 id="home-spotlight__title" className="home-spotlight__title">
              Designing calm, animated interfaces that earn trust
            </h2>
            <blockquote className="home-spotlight__quote">
              “Great products feel effortless. I blend motion, performance, and
              storytelling to keep users curious and teams confident.”
            </blockquote>
            <ul className="home-spotlight__stats" role="list">
              {stats.map(({ label, value, description }) => (
                <li key={label} className="home-spotlight__stat" role="listitem">
                  <span className="home-spotlight__stat-value">{value}</span>
                  <span className="home-spotlight__stat-label">{label}</span>
                  {description && (
                    <span className="home-spotlight__stat-description">
                      {description}
                    </span>
                  )}
                </li>
              ))}
            </ul>
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
