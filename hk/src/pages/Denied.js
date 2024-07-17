// 1. Importing Components
import Logos from "../../src/components/Logos";
//import NavBar from "../../src/components/Navbar";
import { Link/*, useMatch, useResolvedPath*/ } from "react-router-dom";
//import { Router, Routes, Route } from "react-router-dom";

// 2. Import FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan/*,
  faCircleExclamation,
  faExclamationCircle,
  faExclamationTriangle,
  faKey,
  faSignOut*/
} from "@fortawesome/free-solid-svg-icons";

// export default function Denied() {
export const Denied = () => {
  return (
    <div className="Denied">
      <main>
        <div className="wrapper">
          <div className="container">
            <div className="formContainer">
              <Logos />
              <FontAwesomeIcon icon={faBan} className="icon" />
              <div className="buttonsContainer">
                <div className="row">
                  <div className="row">
                    <h1>Access Denied</h1>
                    <p>
                      You need to be logged in with your PIN in order to access
                      this content
                    </p>
                  </div>
                </div>
                <div className="row">
                  <Link to="/" className="btn btn-primary block">
                    Please click here to Login
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
