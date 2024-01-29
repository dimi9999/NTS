// 1. Importing Components
import NavBar from "../../src/components/Navbar";
import Logos from "../../src/components/Logos";
import React from "react";
import Copyright from "../../src/components/Copyright";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

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

// 3. Import Case Numbers
const CaseNumber = [
  {
    key: 1,
    number: "AX18939",
  },
];

// 4. Import Case Managers
const CaseManager = `
  Robert Powell
`;

const CaseManagerEmail = `robert.powel@eastwestrail.co.uk`;
const CaseManagerPhone = `01279 8765 4321`;
const CaseManagerAddress = `99 High Street ,
London,
NW11 7SU`;

// 5. Application Status

const statusValue = "Rejected";
// 6. Import Description
const CaseDescription = `
The NTS Panel has rejected NTS application due to insufficient documentation or other reasons. 
`;

// export default function Rejected() {
export const Rejected = () => {
  return (
    <div>
      <main>
        <div className="wrapper">
          <div className="container largeContainer">
            <div className="formContainer status">
              <div className="ApplicationDetails">
                {/* Case Number */}
                {CaseNumber.map((item) => {
                  return (
                    <div className="ApplicationStatusCaseNumber">
                      <h3>Case Number:</h3>
                      <div className="block">
                        <strong>{item.number}</strong>
                      </div>
                    </div>
                  );
                })}

                {/* Case Manager */}
                <div className="ApplicationStatusCaseManager">
                  <h3> Case Manager: </h3>
                  <div className="block">
                    <strong>{CaseManager}</strong>
                  </div>
                </div>
                <Logos />
              </div>
              {/* Progress Bar Steps */}
              <div className="ProgressBarContainer">
                <ul class="steps">
                  <li class="completed">
                    <span>
                      <strong>Application Received</strong>
                    </span>
                    <i></i>
                  </li>
                  <li class="completed">
                    <span>
                      <strong>Checking Documents</strong>
                    </span>
                    <i></i>
                  </li>
                  <li class="completed">
                    <span>
                      <strong>Application Confirmed</strong>
                    </span>
                    <i></i>
                  </li>
                  <li class="rejected">
                    <span>
                      <strong>REJECTED</strong>
                    </span>
                    <i></i>
                  </li>
                  <li class="remaining">
                    <span>
                      <strong>In Valuation</strong>
                    </span>
                    <i></i>
                  </li>
                  <li class="remaining">
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

              <div className="ApplicationStatusContainer">
                {/* Application Status Columns */}

                <div className="ApplicationStatus">
                  {/* Application Status Value */}
                  <h1 className="ApplicationStatusValue">
                    Your application status is:{" "}
                    <strong class="Rejected"> {statusValue} </strong>
                  </h1>
                  <div className="descriptionContainer">
                    <h3>What does this mean?</h3>
                    {/* Application Status Description */}
                    <div className="description">{CaseDescription}</div>
                  </div>
                </div>

                {/* Application Contact Details Columns */}
                <div className="ApplicationContactDetails">
                  <h3>Contact Details</h3>
                  <div>
                    <h4>Case Manager Name:</h4>
                    <FontAwesomeIcon icon={faPerson} className="icon" />{" "}
                    {CaseManager}
                    <br />
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />{" "}
                    <a href="mailto:{CaseManagerEmail}">{CaseManagerEmail}</a>
                    <br />
                    <FontAwesomeIcon icon={faPhone} className="icon" />{" "}
                    {CaseManagerPhone}
                    <br />
                    {CaseManagerAddress}
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
