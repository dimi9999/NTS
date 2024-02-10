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
import { faAppStore } from "@fortawesome/free-brands-svg-icons";

const RenderMegamenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    // Get the body element
    const body = document.body;

    // If the menu is visible, push the body to the left by 300px with animation
    if (!menuVisible) {
      body.style.transition = 'margin-left 0.3s ease';
      body.style.marginLeft = '300px';
    } else {
      // If the menu is hidden, reset the margin with animation
      body.style.transition = 'margin-left 0.3s ease';
      body.style.marginLeft = '0';
    }
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
            <FontAwesomeIcon icon={faHome} className="icon" />Home
          </Link>
        </div>
        <div>
          <Link to="/Terms" className="menu-item">
            <FontAwesomeIcon icon={faFileContract} className="icon" />Terms
          </Link>
        </div>
        <div>
          <Link to="/Privacy" className="menu-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />Privacy
          </Link>
        </div>
        <div>
          <Link to="/Step" className="menu-item">
            <FontAwesomeIcon icon={faAppStore} className="icon" />View your Status
          </Link>
        </div>
        <div>
          <Link to="/Getintouch" className="menu-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />Contact Us
          </Link>
        </div>
      
      </div>
    </div>
  );
};

export default RenderMegamenu;
