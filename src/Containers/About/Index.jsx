import React from "react";
import PageHeaderContent from "../../Componets/Pageheadercontent/Index";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaReact, FaPython, FaDatabase } from "react-icons/fa";
import { SiDjango, SiMysql, SiPostgresql } from "react-icons/si";
import "./Style.scss";

const personalDetails = [
  { label: "Name", value: "Dagnew Mekasha" },
  { label: "Age", value: "21" },
  { label: "Address", value: "Ethiopia, Hawassa" },
  { label: "Email", value: "dagnew19211921@gmail.com" },
  { label: "Contact Number", value: "+251930042721" },
];

const jobSummary =
  "I am a passionate and dedicated Full Stack Developer based in Hawassa, Ethiopia. I specialize in building modern, responsive web applications using React.js on the frontend, Django on the backend, and managing data with MySQL and PostgreSQL. I also have a strong interest in Machine Learning and AI-driven solutions. I am committed to writing clean, efficient code and delivering high-quality digital experiences.";

const orbitIcons = [
  { icon: <FaReact size={40} />, label: "React" },
  { icon: <SiDjango size={40} />, label: "Django" },
  { icon: <FaPython size={40} />, label: "ML/Python" },
  { icon: <SiMysql size={40} />, label: "MySQL" },
  { icon: <SiPostgresql size={40} />, label: "PostgreSQL" },
  { icon: <FaDatabase size={40} />, label: "Database" },
];

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        {/* ✅ Left Side */}
        <div className="about__content__left">
          <h3>Full Stack Developer & ML Engineer </h3>
          <p>{jobSummary}</p>

          <h3 className="about__content__left__personalTitle">
            Personal Information
          </h3>

          <div className="about__content__left__details">
            {personalDetails.map((item, index) => (
              <div key={index} className="about__content__left__details__item">
                <span className="label">{item.label}:</span>
                <span className="value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />

        {/* ✅ Right Side - Orbiting Globe */}
        <div className="about__content__right">
          <div className="orbit-container">
            <div className="orbit-globe" />
            {orbitIcons.map((item, index) => (
              <div
                key={index}
                className="orbit-icon"
                style={{
                  "--i": index,
                  "--total": orbitIcons.length,
                }}
              >
                <div className="orbit-icon__inner">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
