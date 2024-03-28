// 1. Importing Components
import NavBar from "../../src/components/Navbar";
import Logos from "../../src/components/Logos";
import React, { createContext, useContext, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Popup } from "../../src/components/Popup";
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

/* *********************** USE Graph API to Merge your Changes START *************************** */

// STEP NUMBER (1). Import AuthWrapper
import { AuthData } from "../auth/AuthWrapper";

// STEP NUMBER (2). Import Sharepoint Data Locally (TO BE REPLACED WITH LIVE DATA PLEASE)
import Records from "../api/pins.json";

// STEP NUMBER (3). Idenitfy Which User is currently Logged in by inherriting promise from Auth. Then locate that data for that particular user
const caseno = (caseno) => {
  return new Promise((resolve, reject) => {
    const matchingcaseno = Records.find((caseno) => caseno.caseno === caseno);
  });
};

/* *********************** USE Graph API to Merge your Changes END **************************** */

//export default function Step() {
export const Step = () => {
  // Render Tab Colours
  const [CurrentTab, setCurrentTab] = useState(true);
  const [appStatus, setappStatus] = useState(true);

  const appStatusTextMap = {
    "Application Received": "Received and Under Review (Awaiting Documents)",
    "Checking Documents": "Checking Documents (In Progress)",
    "Application Confirmed": "Application Confirmed (Pending Decision)",
    // Add more mappings as needed
  };

  /* *********************** USE Graph API to Merge your Changes START *************************** */

  /* STEP NUMBER (1) PULL CURRENTLY LOGGED IN USER */
  const { user } = AuthData();
  console.log("Logged In User: ", user);
  console.log("Records: ", Records);

  // Filter records based on the user's PIN
  const userRecords = Records.filter((record) => record.pin === user.pin);
  console.log("User Records: ", userRecords);

  if (!userRecords.length) {
    console.warn("No records found for the user. Check PIN matching.");
  }

  /* *********************** USE Graph API to Merge your Changes END *************************** */
  return (
    <div>
      {/* If sessions has ended then display popup and overlay */}
      <Popup />
      <main>
        {/* *********************** USE Graph API to Merge your Changes START *************************** */}
        {userRecords.map((record) => (
          <div className="wrapper" key={record.pin}>
            {/* Display user-specific data */}
            <div className="container largeContainer">
              <div className="formContainer status">
                <div className="ApplicationDetails">
                  {/* Logged in Username and Welcome Message */}
                  <div className="ApplicationStatusLoggedInUser">
                    <h3>Welcome!</h3>
                    <FontAwesomeIcon icon={faUser} />
                    <span>{/* {record.username} */} </span>
                  </div>
                  {/* Case Number */}
                  <div className="ApplicationStatusCaseNumber">
                    <h3>Case Number:</h3>
                    <div className="block">
                      <strong>{record.caseno}</strong>
                    </div>
                  </div>
                  {/* Case Manager */}
                  <div className="ApplicationStatusCaseManager">
                    <h3> Case Manager: </h3>
                    <div className="block">
                      <strong>{record.casemanager}</strong>
                    </div>
                  </div>
                  <Logos />
                </div>
                {/* Progress Bar Steps */}
                <div className="ProgressBarContainer">
                  {/* HERE I DO RENDER MY COLOURS START */}
                  <ul
                    id={`step${record.appstatus.replace(/\s+/g, "")}`}
                    key={record.appstatus}
                  >
                    {/* HERE I DO RENDER MY COLOURS END */}

                    <li id="step1">
                      <span>
                        <strong>Application Received</strong>
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
                        <strong>Awaiting Desicion</strong>
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
                  id={`status${record.appstatus.replace(/\s+/g, "")}`}
                  key={record.appstatus}
                  className="ApplicationStatusContainer"
                >
                  {/* Application Status Columns */}

                  <div className="ApplicationStatus">
                    {/* Application Status Value */}
                    <h1 className="ApplicationStatusValue">
                      Your application status is:{" "}
                      <strong>
                        <span>
                          <strong>{record.appstatusvalue} </strong>
                        </span>
                      </strong>
                    </h1>
                    <div className="descriptionContainer">
                      <h3>What does this mean?</h3>
                      {/* Application Status Description */}
                      <div className="description">
                        {record.whatdoesthismean}
                      </div>
                    </div>
                  </div>

                  {/* Application Contact Details Columns */}
                  <div className="ApplicationContactDetails">
                    <h3>Your Case Manager Details</h3>
                    <div>
                      <h4>Case Manager Name:</h4>
                      <FontAwesomeIcon icon={faPerson} className="icon" />{" "}
                      {record.casemanager}
                      <br />
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="icon"
                      />{" "}
                      <a href="mailto:{CaseManagerEmail}">
                        {record.casemanageremail}
                      </a>
                      <br />
                      <FontAwesomeIcon icon={faPhone} className="icon" />{" "}
                      {record.casemanagertel}
                      <br />
                      {record.casemanageraddress}
                    </div>
                  </div>
                </div>
              </div>
              <Copyright />
            </div>
          </div>
        ))}
        {/* *********************** USE Graph API to Merge your Changes END *************************** */}
      </main>
    </div>
  );
};
