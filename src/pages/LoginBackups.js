// import logo from './logo.svg';
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faKey, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// 1. Importing Components
import NavBarEmpty from "../../src/components/NavbarEmpty";
import NavBar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";

import Copyright from "../../src/components/Copyright";
import Step from "../../src/pages/Step";

// 2. Import Graphics
import Logos from "../../src/components/Logos";

// 5. Import Routes
import { Router, Routes, Route } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

// 6. Import User details
import { useRef, useState, useEffect } from "react";
import { setRTL } from "@fluentui/react";

// 7. Import Global Auth State
import AuthContext from "../context/authProvider";

// 8. Import Axios to Call External and Azure Sharepoint Data
import axios from "../api/axios";
const LOGIN_URL = "http://localhost:3001/context/authProvider.js";

// 9. Import Users
const users = require("../api/users.json"); // Adjust the path accordingly
const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [PIN, setPIN] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // 2. Set User State
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // 3. Set Error Messages
  useEffect(() => {
    setErrMsg("");
  }, [user, PIN]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const matchingUser = users.find(
      (u) => u.username === user && u.PIN === PIN
    );

    console.log("Matching User:", matchingUser);

    const axiosInstance = axios.create({
      baseURL: "https://localhost:3000", // Adjust this to your API domain
    });

    if (matchingUser) {
      try {
        // Make your API call here if needed
        const response = await axiosInstance.post(
          LOGIN_URL,
          JSON.stringify({ user, PIN }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        console.log("API Response:", response?.data);

        // ... rest of the code
      } catch (err) {
        console.error("Error making API call:", err);
        setErrMsg("Login failed. Check the console for details.");
        errRef.current?.focus();
      }
    } else {
      setErrMsg("Incorrect username or PIN. Please try again.");
      errRef.current?.focus();
    }
  };
  return (
    <>
      {success ? (
        <div className="App">
          {/* Header (to be changed) */}
          <NavBar />

          <Routes></Routes>

          <Footer />
        </div>
      ) : (
        <main>
          <div className="wrapper">
            <div className="container">
              <div className="formContainer">
                <Logos />
                <h1>Welcome to NTS Portal login</h1>

                {/* Form Begins */}
                <form onSubmit={handleSubmit}>
                  <div className="row">Please enter your pin to login</div>
                  <div className="buttonsContainer">
                    {/* Email Address */}
                    <div className="row">
                      <FontAwesomeIcon icon={faUser} className="icon" />
                      <label htmlFor="username">Username:</label>
                      <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        placeholder="Please enter your email Address"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                      />
                    </div>

                    {/* PIN Input */}
                    <div className="row">
                      <FontAwesomeIcon icon={faKey} className="icon" />
                      <label htmlFor="password">PIN:</label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Please enter your PIN"
                        onChange={(e) => setPIN(e.target.value)}
                        value={PIN}
                        required
                      />
                    </div>

                    {/* Error appears here if you input a wrong PIN */}
                    <div className="row">
                      <span
                        ref={errRef}
                        className={errMsg ? "errmsg" : "offscreen"}
                        aria-live="assertive"
                      >
                        {errMsg}
                      </span>
                    </div>

                    {/* Login  
                    <div className='row'>
                      <Link className='btn btn-primary block' to='/step'>Login to see your status</Link>           
                    </div>
                    */}
                    <div className="row">
                      <button className="btn btn-primary block">
                        Login to see your status
                      </button>
                    </div>

                    {/* Login */}
                    <div className="row">
                      <Link className="btn btn-secondary block" to="/forgot">
                        Forgotten your PIN?
                      </Link>
                    </div>
                  </div>
                </form>
                {/* Form Ends */}
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Login;
