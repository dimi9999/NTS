// 0. Import State for tracking errors

// 1. Importing Components
import Logos from "../../src/components/Logos";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

// 2. Import Graphics
import React from "react";

// 3. Import FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// export default function Home() {
export const Home = () => {
  return (
    <div>
      <main>
        <div className="wrapper">
          <div className="container">
            <div className="formContainer">
              <Logos />
              <h1>Welcome to NTS Portal</h1>
              <form method="post">
                <div className="row">Please enter your pin to login</div>
                <div className="buttonsContainer">
                  {/* Email Address  
                      <div className='row'>
                        <FontAwesomeIcon icon={faUser} className='icon' />
                        <input type='email' required placeholder='Please enter your email Address' />           
                      </div>
                      /*}

                       {/* PIN Input */}
                  <div className="row">
                    <FontAwesomeIcon icon={faKey} className="icon" />
                    <input
                      type="password"
                      required
                      placeholder="Please enter your PIN"
                    />
                  </div>

                  {/* Error appears here if you input a wrong PIN */}
                  <div className="row">
                    <span className="btn btn-error block">
                      You have entered an Invalid PIN or Email.
                    </span>
                  </div>

                  {/* Login */}
                  <div className="row">
                    <Link className="btn btn-primary block" to="/step">
                      Login to your status
                    </Link>
                  </div>

                  {/* Login */}
                  <div className="row">
                    <Link className="btn btn-secondary block" to="/forgot">
                      Forgotten your PIN?
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
