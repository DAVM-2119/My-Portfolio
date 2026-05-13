import React, { useState } from "react";
import "./Style.scss";
import { FaBars, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";

const data = [
  { label: "Home", to: "/" },
  { label: "About", to: "/About" },
  { label: "Skills", to: "/Skills" },
  { label: "Resume", to: "/Resume" },
  { label: "Portfolio", to: "/Portfolio" },
  { label: "Contact", to: "/Contact" },
];

const Navbar = ({ onMenuToggle }) => {
  const [toggleIcon, setToggleIcon] = useState(true);

  const handleToggleIcon = () => {
    const newState = !toggleIcon;
    setToggleIcon(newState);
    if (typeof onMenuToggle === "function") {
      onMenuToggle(!newState);
    }
  };

  const closeMenu = () => {
    setToggleIcon(true);
    if (typeof onMenuToggle === "function") {
      onMenuToggle(false);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul
          className={`navbar__container__menu ${!toggleIcon ? "active" : ""}`}
        >
          {data.map((item, index) => (
            <li key={index} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <FaBars size={30} /> : <HiX size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
