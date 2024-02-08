// 1. Importing Components
import Logos from "../../src/components/Logos";
import NavBar from "../../src/components/Navbar";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Router, Routes, Route } from "react-router-dom";

// 2. Import FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faExclamationCircle, faExclamationTriangle, faKey, faQuestion, faQuestionCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";

// export default function Denied() {
export const Forgot = () => {
  return (
    <div className="Forgot">
      <main>
        <div className="wrapper">
          <div className="container">
            <div className="formContainer">
              <Logos />
              <FontAwesomeIcon icon={faQuestion} className="icon" />
              <div className="buttonsContainerfullwidth">
                <div className="row">
                    <div className="row">
                        <h1>Forgotten your PIN?</h1>
                        <p>You need to be logged in with our PIN in order to access this content</p>
                    </div>
                </div>
                <div className="row">
                    <p>
                      <ul className="list">
                        <li>If you have forgotten your PIN, please email your case manager to request a new one. </li>
                        <li>They will arrange a callback with you to verify your identity and authorise a PIN reset request. </li>
                        <li>You will then receive your new PIN from your case manager.</li>
                        <li>If you cannot locate your case manager’s email, 
                      please <Link to="/Contact" className="Link"> click here </Link></li>
                      </ul>
                      </p>
                  </div>
                <div className="row">
                  <Link to="/" className="btn btn-primary block">
                    Please click here to go back to the Login Page
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
