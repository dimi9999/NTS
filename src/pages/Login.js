// import logo from './logo.svg';
import React, { useContext }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faKey, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

// 1. Importing Components
import NavBarEmpty from '../../src/components/NavbarEmpty';
import NavBar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

import Copyright from '../../src/components/Copyright';
import Step from '../../src/pages/Step';

// 2. Import Graphics
import Logos from '../../src/components/Logos';

// 3. Import Routes
import { Router, Routes, Route } from 'react-router-dom';
import {Link, useMatch, useResolvedPath } from "react-router-dom";

// 4. Import User details
import { useRef, useState, useEffect} from 'react'; 
import { setRTL } from '@fluentui/react';

// 7. Import Pins (Adjust this for SharePoint)
// const users = require('../api/users.json'); // Adjust the path accordingly

// 8. Import Sharepoint Column Pins (FRONT END ACCESS Col Name )
import pins from '../api/pins.json'; 

const Login = () => {
  const [pin, setPin] = useState('');

  // Create Error Messages

  const navigate = useNavigate();

  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const matchingUser = pins.find((user) => user.pin === pin);

    if (matchingUser) {
      // Successfully matched PIN

     
      setErrMsg('');
      // Perform any additional actions or redirection here
      console.log('Login successful');

      // Validate Username and Pin. Console log the values
      console.log(matchingUser);

       // Redirect to a different page upon successful login
       navigate('/Step');
    } else {
      // Incorrect PIN
      setErrMsg('You have entered an Incorrect PIN. Please try again.');
    }
  };
  return (

    
      <main>
        <div className='wrapper'> 
          <div className='container'>
            <div className='formContainer'>
              <Logos />
              <h1>Welcome to NTS Portal login</h1>

              {/* Form Begins */}  
              <form onSubmit={handleSubmit}>
                <div className='row'>
                  Please enter your pin to login
                </div>
                <div className='buttonsContainer'>
                     {/* PIN Input */}  
                    <div className='row'>
                      <FontAwesomeIcon icon={faKey} className='icon' />
                      <label htmlFor="pin">PIN:</label>
                      <input
                        placeholder='Please enter your PIN'
                        type='password'
                        id='pin'
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        required
                      />                    
                    </div>

                    {/* Error appears here if you input a wrong PIN */}
                    <div className='row'>
                      <span className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</span>           
                    </div>

                     <div className='row'>
                      <button className='btn btn-primary block'>Login to see your status</button>
                     </div>

                    {/* Login */}
                    <div className='row'>
                      <Link className='btn btn-secondary block' to='/forgot'>Forgotten your PIN?</Link>           
                    </div>
                 </div>
              </form>
               {/* Form Ends */}  
            </div>
          </div>
        </div>
      </main>
      
    )
  };
      
  


export default Login;

