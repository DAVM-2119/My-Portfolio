import React from "react";
import PageHeaderContent from "../../Componets/Pageheadercontent/Index";
import { BsInfoCircleFill } from "react-icons/bs";

const Resume = () => {
  return (
    <div id="resume" className="resume">
      <PageHeaderContent headerText="My Resume" icon={<BsInfoCircleFill />} />
    </div>
  );
};
export default Resume;
