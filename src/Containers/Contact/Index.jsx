import React, { useState } from "react";
import PageHeaderContent from "../../Componets/Pageheadercontent/Index";
import { MdContactPhone } from "react-icons/md";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Style.scss";

emailjs.init("vxSLFONcyn1D0E0kG");

const contactData = [
  {
    icon: <FaEnvelope size={30} />,
    label: "Email",
    link: "mailto:dagnew19211921@gmail.com",
  },
  {
    icon: <FaPhone size={30} />,
    label: "Phone",
    link: "tel:+251930042721",
  },
  {
    icon: <FaLinkedin size={30} />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/dagnew-mekasha-2637a139",
  },
  {
    icon: <FaGithub size={30} />,
    label: "GitHub",
    link: "https://github.com/DAVM-2119",
  },
  {
    icon: <FaTelegram size={30} />,
    label: "Telegram",
    link: "https://t.me/Teddy21123",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({}); // ✅ field validation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFieldErrors({ ...fieldErrors, [e.target.name]: "" }); // ✅ clear error on type
  };

  const handleSubmit = () => {
    // ✅ validate all fields
    const errors = {};
    if (!formData.name) errors.name = "Please fill in your name";
    if (!formData.email) errors.email = "Please fill in your email";
    if (!formData.message) errors.message = "Please fill in your message";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setLoading(true);
    setError(false);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send("service_ulg1y8r", "template_k08j8gh", templateParams)
      .then(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setFieldErrors({});
        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch((err) => {
        console.log("Status:", err.status);
        console.log("Text:", err.text);
        setLoading(false);
        setError(true);
        setTimeout(() => setError(false), 4000);
      });
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<MdContactPhone size={40} />}
      />

      <div className="contact__content">
        {/* ✅ Left — Icon Badges Only */}
        <div className="contact__content__info">
          <h3>Get In Touch</h3>
          <p>
            Feel free to reach out to me through any of the following channels.
            I am always open to new opportunities and collaborations!
          </p>

          <div className="contact__content__info__badges">
            {contactData.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="contact__content__info__badges__badge"
                title={item.label} // ✅ tooltip on hover
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ✅ Right — Contact Form */}
        <div className="contact__content__form">
          <h3>Send Me A Message Via Email </h3>

          {submitted && (
            <div className="contact__content__form__success">
              ✅ Message sent successfully! I will get back to you soon.
            </div>
          )}

          {error && (
            <div className="contact__content__form__error">
              ❌ Something went wrong. Please try again.
            </div>
          )}

          <div className="contact__content__form__group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={fieldErrors.name ? "input-error" : ""}
            />
            {fieldErrors.name && (
              <span className="contact__content__form__group__error">
                ⚠ {fieldErrors.name}
              </span>
            )}
          </div>

          <div className="contact__content__form__group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={fieldErrors.email ? "input-error" : ""}
            />
            {fieldErrors.email && (
              <span className="contact__content__form__group__error">
                ⚠ {fieldErrors.email}
              </span>
            )}
          </div>

          <div className="contact__content__form__group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className={fieldErrors.message ? "input-error" : ""}
            />
            {fieldErrors.message && (
              <span className="contact__content__form__group__error">
                ⚠ {fieldErrors.message}
              </span>
            )}
          </div>

          <button
            className="contact__content__form__btn"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
