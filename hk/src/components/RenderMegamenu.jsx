import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faOpen,
  faClose,
  faHome,
  faInfoCircle,
  faFileContract,
  faEnvelope,
  faAddressBook,
  faBoxOpen,
  faToggleOn,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const RenderMegamenu = () => {
  const [menuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <div className="megamenuToggle" onClick={toggleMenu}>
        <h3>
          <FontAwesomeIcon icon={faBars} className="icon" />
        </h3>
      </div>
      <div className={`Megamenu ${menuVisible ? "visible" : "hidden"}`}>
        <div onClick={toggleMenu}>
          <h3>
            <FontAwesomeIcon icon={faClose} className="icon" /> Main Menu
          </h3>
        </div>
        <div>
          <Link to="/" className="menu-item">
            <FontAwesomeIcon icon={faHome} className="icon" />
            Home
          </Link>
        </div>
        <div>
          <Link to="/About" className="menu-item">
            <FontAwesomeIcon icon={faInfoCircle} className="icon" />
            About
          </Link>
        </div>
        <div>
          <Link to="/Terms" className="menu-item">
            <FontAwesomeIcon icon={faFileContract} className="icon" />
            Terms
          </Link>
        </div>
        <div>
          <Link to="/Privacy" className="menu-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            Privacy
          </Link>
        </div>
        <div>
          <Link to="/Contact" className="menu-item">
            <FontAwesomeIcon icon={faAddressBook} className="icon" />
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RenderMegamenu;
