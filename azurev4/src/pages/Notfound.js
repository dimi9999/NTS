// 1. Importing Components
import Logos from "../../src/components/Logos";
import NavBar from "../../src/components/Navbar";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Router, Routes, Route } from "react-router-dom";

// 2. Import FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faExclamationCircle,
  faExclamationTriangle,
  faKey,
  faSignOut,
  faBan
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
                    <h1>Page not found</h1>
                    <p>
                      Looks like you have entered an invalid URL, the page has moved or the server is currently down.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <Link to="/" className="btn btn-primary block">
                    Go back to the Login Page.
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
