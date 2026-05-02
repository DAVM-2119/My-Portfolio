import React, { useEffect, useRef } from "react";
import PageHeaderContent from "../../Componets/Pageheadercontent/Index";
import { GiSkills } from "react-icons/gi";
import "./Style.scss";

const skillsData = [
  {
    category: "Front End",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React JS", level: 85 },
    ],
  },
  {
    category: "Back End",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "C++", level: 70 },
      { name: "PHP", level: 65 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 70 },
    ],
  },
];

const Skills = () => {
  const fillRefs = useRef([]);

  useEffect(() => {
    // ✅ trigger width transition after mount
    setTimeout(() => {
      fillRefs.current.forEach((el, i) => {
        if (el) el.style.width = el.getAttribute("data-level") + "%";
      });
    }, 200);
  }, []);

  let refIndex = 0;

  return (
    <section id="skills" className="skills">
      <PageHeaderContent headerText="My Skills" icon={<GiSkills size={40} />} />

      <div className="skills__content">
        {skillsData.map((category, index) => (
          <div key={index} className="skills__content__category">
            <h3>{category.category}</h3>
            <div className="skills__content__category__items">
              {category.skills.map((skill, skillIndex) => {
                const currentRef = refIndex++;
                return (
                  <div
                    key={skillIndex}
                    className="skills__content__category__items__item"
                  >
                    <p>{skill.name}</p>
                    <div className="skills__content__category__items__item__bar">
                      <div
                        className="skills__content__category__items__item__bar__fill"
                        data-level={skill.level} /* ✅ store level */
                        ref={(el) => (fillRefs.current[currentRef] = el)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
