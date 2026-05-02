import React from "react";
import PageHeaderContent from "../../Componets/Pageheadercontent/Index";
import { BsInfoCircleFill } from "react-icons/bs";
const Skills = () => {
  return (
    <div id="skills" className="skills">
      <PageHeaderContent headerText="My Skills" icon={<BsInfoCircleFill />} />
    </div>
  );
};
export default Skills;
