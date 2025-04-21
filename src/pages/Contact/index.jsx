import React from "react";
import "./index.scss";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Get in Touch</h1>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <div className="contact-details">
            <h2>Email</h2>
            <a href="mailto:me@zawhtetaung.com">me@zawhtetaung.com</a>
          </div>
        </div>
        <div className="contact-item">
          <FaWhatsapp className="contact-icon" />
          <div className="contact-details">
            <h2>WhatsApp</h2>
            <a href="https://wa.me/81792673">+65 82832537</a>
            <a href="https://wa.me/0946481514">+66 9464 81514</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
