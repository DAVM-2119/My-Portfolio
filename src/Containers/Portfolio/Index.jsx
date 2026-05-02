import React from "react";

import PageHeaderContent from "../../Componets/Pageheadercontent/Index";
import { BsInfoCircleFill } from "react-icons/bs";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill />}
      />
    </div>
  );
};
export default Portfolio;
