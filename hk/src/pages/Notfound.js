// 1. Importing Components
import Logos from "../../src/components/Logos";
//import NavBar from "../../src/components/Navbar";
import { Link/*, useMatch, useResolvedPath */} from "react-router-dom";
//import { Router, Routes, Route } from "react-router-dom";

// 2. Import FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle/*,
  faCircleExclamation,
  faExclamationCircle,
  faKey,
  faSignOut,
  faBan*/
} from "@fortawesome/free-solid-svg-icons";

// export default function Denied() {
export const Notfound = () => {
  return (
    <div className="Notfound">
      <main>
        <div className="wrapper">
          <div className="container">
            <div className="formContainer">
              <Logos />
              <FontAwesomeIcon icon={faExclamationTriangle} className="icon" />
              <div className="buttonsContainer">
                <div className="row">
                  <div className="row">
                    {
                      /*
                      ----------------------------------------------------------------------------------------------------------------------
                       16/07/2024 Changes maded by D.P. ("trailingSlash": "auto", in all swa.config files and title chang on this page START 
                       ---------------------------------------------------------------------------------------------------------------------
                      */
                    }
                    <h1>Page was not found....</h1>
                    {
                      /*
                      --------------------------------------------------------------------------------------------------------------------
                       16/07/2024 Changes maded by D.P. ("trailingSlash": "auto", in all swa.config files and title chang on this page END
                       -------------------------------------------------------------------------------------------------------------------
                      */
                    }
                    <p>
                      Looks like you have entered an invalid URL, the page has moved or the server is currently down.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <Link to="/" className="btn btn-primary block">
                    Return to the Login Page.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
