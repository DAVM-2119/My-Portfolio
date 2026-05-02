import React from "react";
import PageHeaderContent from "../../Componets/Pageheadercontent/Index";
import { BsInfoCircleFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div id="contact" className="contact">
      <PageHeaderContent headerText="Contact Me" icon={<BsInfoCircleFill />} />
    </div>
  );
};
export default Contact;
