import React from "react";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import "./index.scss";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="hero-inner">
          <p className="hero-kicker">Contact</p>
          <h1 className="page-title">Let's Connect</h1>
        </div>
      </div>

      <div className="contact-container page">
        <ul className="contact-list">
          <li>
            <MdEmail className="contact-icon" />
            <div className="contact-info">
              <span className="label">Email</span>
              <a href="mailto:me@zawhtetaung.com">me@zawhtetaung.com</a>
            </div>
          </li>
          <li>
            <FaWhatsapp className="contact-icon" />
            <div className="contact-info">
              <span className="label">WhatsApp</span>
              <a href="https://wa.me/6582832537">+65 8283 2537</a>
            </div>
          </li>
          <li>
            <SiLine className="contact-icon" />
            <div className="contact-info">
              <span className="label">Line</span>
              <a href="https://line.me/ti/p/~66946481514">+66 9464 81514</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
