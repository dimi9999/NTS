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
  faSignOut
} from "@fortawesome/free-solid-svg-icons";
import { faAppStore } from "@fortawesome/free-brands-svg-icons";
import { AuthData } from "../auth/AuthWrapper";

const RenderMegamenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { user, logout } = AuthData();
  
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    // Get the body and overlay elements
    const body = document.body;
    const overlay = document.getElementsByClassName('overlay');
 
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
      <div className={`overlay ${menuVisible ? "visible" : "hidden"}`} onClick={toggleMenu}></div>
      <div className="megamenuToggle" onClick={toggleMenu}>
        <h3>
          <FontAwesomeIcon icon={faBars} className="icon" />  
        </h3>
      </div>
      <div className={`Megamenu ${menuVisible ? "visible" : "hidden"}`} onClick={toggleMenu}>
          <div onClick={toggleMenu}>
            <h3>
              <FontAwesomeIcon icon={faClose} className="icon" /> Main Menu
            </h3>
          </div>
        <div>

        {/* Render links based on user's status */}
        {user.isAuthenticated ? (
          <div className="menuItem">
            <Link className="logoutlink" to={"/Logout"} onClick={logout}>
              <FontAwesomeIcon icon={faSignOut} className="icon" /> Log out
            </Link>
          </div>
          ) : (
            <div>
              <div className="menuItem">
                  <Link to="/" className="menu-item">
                    <FontAwesomeIcon icon={faHome} className="icon" />Home
                  </Link>
              </div>
        </div>
          
         )}

        </div>
        <div className="menuItem">
            <Link to="/Step" className="menu-item">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />View your Status
            </Link>
        </div>
        <div>
          <Link to="/Terms" className="menu-item">
            <FontAwesomeIcon icon={faFileContract} className="icon" /> Terms &amp; Privacy
          </Link>
        </div>
        <div>
          <Link to="/Getintouch" className="menu-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />Contact us
          </Link>
        </div>
      
      </div>
    </div>
 

  );
};

export default RenderMegamenu;
