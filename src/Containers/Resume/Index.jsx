import React, { useEffect, useRef } from "react";
import PageHeaderContent from "../../Componets/Pageheadercontent/Index";
import { GiFiles } from "react-icons/gi";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import "./Style.scss";

const educationData = [
  {
    title: "Bachelor of Science in Computer Science",
    subTitle: "Hawassa University, Ethiopia",
    description:
      "Currently pursuing a BSc in Computer Science at one of Ethiopia's most prestigious universities. Gaining strong foundations in software engineering, algorithms, data structures, and systems design.",
    date: "2023 — 2027 (Expected)",
  },
];

const experienceData = [
  {
    title: "Machine Learning Developer",
    subTitle: "Self-Driven & Project-Based",
    description:
      "Started exploring Machine Learning in 2024, building predictive models and AI-driven solutions using Python. Focused on data preprocessing, model training, and evaluation using libraries such as NumPy, Pandas, and Scikit-learn.",
    date: "2024 — Present",
  },
  {
    title: "Full Stack Web Developer",
    subTitle: "Self-Driven & Freelance Projects",
    description:
      "Started web development in 2025, specializing in building modern, responsive web applications. Frontend built with React.js and backend powered by Django with MySQL and PostgreSQL databases.",
    date: "2025 — Present",
  },
];

const Resume = () => {
  const itemRefs = useRef([]);

  useEffect(() => {
    // ✅ Intersection Observer - animate items when they enter viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 },
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  let refIndex = 0;

  return (
    <section id="resume" className="resume">
      <PageHeaderContent headerText="My Resume" icon={<GiFiles size={40} />} />

      <div className="resume__content">
        {/* ✅ Education Section */}
        <div className="resume__content__section">
          <h3
            className="resume__content__section__title"
            ref={(el) => (itemRefs.current[refIndex++] = el)}
          >
            <FaGraduationCap size={30} />
            Education
          </h3>

          {educationData.map((item, index) => {
            const currentRef = refIndex++;
            return (
              <div
                key={index}
                className="resume__content__section__item slide-left"
                ref={(el) => (itemRefs.current[currentRef] = el)}
              >
                <div className="resume__content__section__item__header">
                  <h4>{item.title}</h4>
                  <span className="date">{item.date}</span>
                </div>
                <h5>{item.subTitle}</h5>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* ✅ Experience Section */}
        <div className="resume__content__section">
          <h3
            className="resume__content__section__title"
            ref={(el) => (itemRefs.current[refIndex++] = el)}
          >
            <FaBriefcase size={25} />
            Experience
          </h3>

          {experienceData.map((item, index) => {
            const currentRef = refIndex++;
            return (
              <div
                key={index}
                className="resume__content__section__item slide-right"
                ref={(el) => (itemRefs.current[currentRef] = el)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="resume__content__section__item__header">
                  <h4>{item.title}</h4>
                  <span className="date">{item.date}</span>
                </div>
                <h5>{item.subTitle}</h5>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
