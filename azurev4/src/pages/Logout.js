// 1. Importing Components
import Logos from "../../src/components/Logos";
import NavBar from "../../src/components/Navbar";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Router, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";

// export default function Logout() {
export const Logout = () => {
  return (
    <div className="Logout">
      <main>
        <div className="wrapper">
          <div className="container">
            <div className="formContainer">
              <Logos />
              <FontAwesomeIcon icon={faAddressBook} className="icon" />
              <div className="buttonsContainer">
                <div className="row">
                  <div className="row">
                    <h1>Logout Succesfull</h1>
                    <p>You have logged out from NTS.</p>
                  </div>
                </div>
                <div className="row">
                  <Link to="/" className="btn btn-primary block">
                    Please click here to again
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
