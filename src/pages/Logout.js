// 1. Importing Components
import Logos from "../../src/components/Logos";
import NavBar from "../../src/components/Navbar";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Router, Routes, Route } from "react-router-dom";

// export default function Logout() {
export const Logout = () => {
  return (
    <div>
      <main>
        <div className="wrapper">
          <div className="container">
            <div className="formContainer">
              <Logos />
              <div className="buttonsContainer">
                <div className="row">
                  <span className="btn btn-secondary block">
                    Logout Sucessfull
                  </span>
                </div>
                <div className="row">
                  <Link to="/" className="btn btn-primary block">
                    Back to login page
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
