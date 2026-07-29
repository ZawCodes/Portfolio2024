import { useState } from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import { FiSend } from "react-icons/fi";
import "./index.scss";

// Get a free access key instantly (no signup) at https://web3forms.com/ — paste it below.
const WEB3FORMS_ACCESS_KEY = "9944ceac-9b13-46dd-af0a-b2d028fbd432";

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const headerItem = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const rowVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.15, ease: "easeOut" } },
};

const formVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.25, ease: "easeOut" } },
};

const contactMethods = [
  {
    icon: MdEmail,
    label: "Email",
    value: "me@zawhtetaung.com",
    href: "mailto:me@zawhtetaung.com",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+65 8283 2537",
    href: "https://wa.me/6582832537",
  },
  {
    icon: SiLine,
    label: "Line",
    value: "+66 9464 81514",
    href: "https://line.me/ti/p/~66946481514",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio contact from ${formData.name}`,
          ...formData,
        }),
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact-page page">
      <motion.div
        className="contact-header"
        initial="hidden"
        animate="visible"
        variants={headerContainer}
      >
        <motion.span className="kicker" variants={headerItem}>
          Contact
        </motion.span>
        <motion.h1 variants={headerItem}>Get in touch</motion.h1>
      </motion.div>

      <div className="contact-layout">
        <motion.div className="contact-methods" initial="hidden" animate="visible" variants={rowVariant}>
          {contactMethods.map(({ icon: Icon, label, value, href }) => (
            <a href={href} className="contact-method" key={label}>
              <Icon className="contact-icon" />
              <span className="contact-text">
                <span className="contact-label">{label}</span>
                <span className="contact-value">{value}</span>
              </span>
            </a>
          ))}
        </motion.div>

        <span className="contact-divider" aria-hidden="true" />

        <motion.form
          className="contact-form"
          initial="hidden"
          animate="visible"
          variants={formVariant}
          onSubmit={handleSubmit}
        >
          <input type="checkbox" name="botcheck" className="botcheck" aria-hidden="true" tabIndex="-1" />

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"}
            <FiSend />
          </button>

          {status === "success" && (
            <p className="form-status form-status--success">
              Thanks! Your message has been sent — I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="form-status form-status--error">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
