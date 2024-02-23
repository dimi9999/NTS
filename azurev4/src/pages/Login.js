// 1. Import Components

import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";
import { Link } from "react-router-dom";
import Logos from "../components/Logos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import spinner from "../assets/images/loading.gif";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = AuthData();

  const [formData, setFormData] = useReducer(
    (formData, newItem) => {
      return { ...formData, ...newItem };
    },
    { userName: "", password: "" }
  );

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false); // State to manage loading spinner visibility

  const doLogin = async () => {
    setLoading(true); // Show loading spinner while login is in progress
    try {
      await login(formData.password); // Pass only the PIN for login
      navigate("/Step");
    } catch (error) {
      setErrorMessage(error);
    } finally {
      setLoading(false); // Hide loading spinner after login attempt
    }
  };
  return (
    <div className="Login">
      <main>
        <div className="wrapper">
          <div className="container">
            <div className="formContainer">
              <Logos />
              <FontAwesomeIcon icon={faUserCircle} className="LoginImage" />
              <h1>Welcome to NTS Portal</h1>

              {/* Form Begins */}
              <div className="form">
                <div className="row">Please enter your PIN to login.</div>
                <div className="buttonsContainer">
                  {/* PIN Input */}
                  <div className="row">
                    <label htmlFor="password">PIN:</label>
                    <FontAwesomeIcon icon={faKey} className="icon" />
                    <input
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ password: e.target.value })
                      }
                      type="password"
                      placeholder="Please Enter your PIN"
                      required
                    />
                  </div>
                  {/* Add spinner images while log in */}
                  {/* Conditionally render spinner image while logging in */}
                  {loading && (
                    <div className="row">
                      <img className="spinner" src={spinner} alt="Spinner" />
                    </div>
                  )}
                  {/* Error appears here if you input a wrong PIN */}
                  <div className="row">
                    {errorMessage ? (
                      <span className="errMsg">{errorMessage}</span>
                    ) : null}
                  </div>

                  {/* Login */}
                  <div className="row">
                    <button
                      type="submit"
                      className="btn btn-primary block"
                      onClick={doLogin}
                    >
                      Login to see your status
                    </button>
                  </div>

                  {/* Forgotten your PIN? */}
                  <div className="row">
                    <Link className="btn btn-secondary block" to="/forgot">
                      Forgotten your PIN?
                    </Link>
                  </div>
                </div>
              </div>
              {/* Form Ends */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
