// 1. Importing Components
import NavBar from "../../src/components/Navbar";
import Logos from "../../src/components/Logos";
import React, { createContext, useContext, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Copyright from "../../src/components/Copyright";

// 2. Import FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faSignOut,
  faUser,
  faPhone,
  faEnvelope,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

// STEP NUMBER (1). Import AuthWrapper
import { AuthData } from "../auth/AuthWrapper";

//export default function Step() {
export const Step = () => {
  const { user } = AuthData();

  return (
    <div>
      <main>
        <div className="wrapper" /*key={record.pin}*/>
          {/* Display user-specific data */}
          <div className="container largeContainer">
            <div className="formContainer status">
              <div className="ApplicationDetails">
                {/* Logged in Username and Welcome Message */}
                <div className="ApplicationStatusLoggedInUser">
                  <h3>Welcome!</h3>
                </div>
                {/* Case Manager */}
                <div className="ApplicationStatusCaseManager">
                  <h3> Case Manager: </h3>
                  <div className="block">
                    <strong>{user.CM}</strong>
                  </div>
                </div>
                <Logos />
              </div>
              {/* Progress Bar Steps */}
              <div className="ProgressBarContainer">
                {/* HERE I DO RENDER MY COLOURS START */}
                <ul
                  id={`step${user.Status.replace(/\s+/g, "")}`}
                  key={user.Status}
                >
                  {/* HERE I DO RENDER MY COLOURS END */}

                  <li id="step1">
                    <span>
                      <strong>Awaiting Confirmation</strong>
                    </span>
                    <i></i>
                  </li>
                  <li id="step2">
                    <span>
                      <strong>Checking Documents</strong>
                    </span>
                    <i></i>
                  </li>
                  <li id="step3">
                    <span>
                      <strong>Application Confirmed</strong>
                    </span>
                    <i></i>
                  </li>
                  <li id="step4">
                    <span>
                      <strong>Awaiting Decision</strong>
                    </span>
                    <i></i>
                  </li>
                  <li id="step5">
                    <span>
                      <strong>In Valuation</strong>
                    </span>
                    <i></i>
                  </li>
                  <li id="step6">
                    <span>
                      <strong>
                        Property Acquisition <br />
                        Process
                      </strong>
                    </span>
                    <i></i>
                  </li>
                </ul>
              </div>

              <div
                id={`status${user.Status.replace(/\s+/g, "")}`}
                key={user.Status}
                className="ApplicationStatusContainer"
              >
                {/* Application Status Columns */}

                <div className="ApplicationStatus">
                  {/* Application Status Value */}
                  <h1 className="ApplicationStatusValue">
                    Your application status is:{" "}
                    <strong>
                      <span>
                        <strong>{user.Status_Sub} </strong>
                      </span>
                    </strong>
                  </h1>
                  <div className="descriptionContainer">
                    <h3>What does this mean?</h3>
                    {/* Application Status Description */}
                    <div className="description">
                      {user.Status_Desc}
                    </div>
                  </div>
                </div>

                {/* Application Contact Details Columns */}
                <div className="ApplicationContactDetails">
                  <h3>Your Case Manager Details</h3>
                  <div>
                    <h4>Case Manager Name:</h4>
                    <FontAwesomeIcon icon={faPerson} className="icon" />{" "}
                    {user.CM}
                    <br />
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="icon"
                    />{" "}
                    <a href="mailto:{CaseManagerEmail}">{user.CM_UPN}</a>
                    <br />
                    <FontAwesomeIcon icon={faPhone} className="icon" />{" "}
                    {user.CM_Phone}
                    <br />
                    <p>
                    The Quadrant <br/>
                    Elder Gate  <br/>
                    Milton Keynes <br/>
                    MK9 1EN 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Copyright />
          </div>
        </div>
      </main>
    </div>
  );
};
