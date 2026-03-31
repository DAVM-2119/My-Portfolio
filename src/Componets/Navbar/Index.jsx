import React from "react";
import "./Style.scss";
import { FaBars, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { useState } from "react";
const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/About",
  },
  {
    label: "Skills",
    to: "/Skills",
  },

  {
    label: "Resume",
    to: "/Resume",
  },
  {
    label: "Portfolio",
    to: "/",
  },
  {
    label: "Contact",
    to: "/Contact",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(true);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul
          className={`navbar__container__menu ${!toggleIcon ? "active" : ""}`}
        >
          {data.map((item, index) => (
            <li key={index} className="navbar__container__menu__links">
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div
          className="navbar__container__menu__icon"
          onClick={handleToggleIcon}
        >
          {toggleIcon ? <FaBars size={30} /> : <HiX size={30} />}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
