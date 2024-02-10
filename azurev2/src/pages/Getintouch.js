// 1. Importing Components
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logos from "../../src/components/Logos";
import NavBar from "../../src/components/Navbar";

// 2. Import FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faKey,
  faMailForward,
  faPerson,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { useReducer } from "react";

// export default function Contact() {
  export const Getintouch = () => {

    const [Message, setMessage] = useState(null);
    const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_ehr7f59', 'template_ty15vh5', form.current, {
          publicKey: 'AzGz4b9yswpTcLCD4',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setMessage("Your request has been sent");
            {}
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        e.target.reset();
    };

  return (
    <div className="Getintouch">
      <main>
        <div className="wrapper">
          <div className="container">
            <div className="formContainer">
              <Logos />
              <section>
              <div className="buttonsContainerfullwidth">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                      <p> If you cannot locate your case manager’s email, please email <a className="Link" href="mailto:needtosell@eastwestrail.co.uk"> needtosell@eastwestrail.co.uk </a> to request a new PIN. 
                      </p>
                    </div>
                    <div className="row">
                        <div className="seperator"> Or </div>
                    </div>
                    <div className="row">
                      <p>  Please write to us in the following address: </p>
                      <address>
                        East West Railway Company Ltd <br />
                        The Quadrant <br />
                        Elder Gate <br />
                        Milton Keynes <br />
                        MK9 1EN <br />
                      </address>
                    </div>
                    <div className="row">
                        <Link to="/" className="btn btn-secondary block">
                            Back to the Login Page.
                        </Link>
                    </div>
                    {/*
                    <div className="row">
                        <div className="seperator"> Or </div>
                    </div>

                     */}
                    {/*  
                    <div className="row">
                      <p> 
                        Alternatively complete the following form to request a new pin
                      </p>
                    </div>
                  

                    {/* Last Name  
                    <div className="row float-left halfwidth padding-right">
                      <FontAwesomeIcon icon={faPerson} className="icon" />
                      <input
                        name="user_lastname"
                        type="text"
                        placeholder="* Please enter your last name (required)"
                        required
                      />
                    </div>

                      {/* First Name  
                      <div className="row float-left halfwidth padding-right">
                      <FontAwesomeIcon icon={faPerson} className="icon" />
                      <input
                        name="user_name"
                        type="text"
                        placeholder="* Please enter your first name (required)"
                        required
                      />
                    </div>

                     {/* Case Manager  
                     <div className="row float-left halfwidth padding-right">
                      <FontAwesomeIcon icon={faAddressBook} className="icon" />
                      <input
                        name="user_manager"
                        type="text"
                        placeholder="Case Manager name if you remember it"
                 
                      />
                    </div>

                    {/* Email Address  
                    <div className="row float-left halfwidth padding-right">
                      <FontAwesomeIcon icon={faMailForward} className="icon" />
                      <input
                        name="user_email"
                        type="email"
                        placeholder="* Please enter your email address (required)"
                        required
                      />
                    </div>

                   
                    {/* Comments  
                    <div className="row float-left fullwidth padding-right">
                      <textarea name="message" cols="30" rows="5" placeholder="* Any comments you would like to add"></textarea>
                    </div>

                    {/* Message  
                    {Message ? (
                      <div> 
                        <div className="row float-left fullwidth padding-right"> 
                          <span className="successMsg">
                            {Message}
                          </span>
                        </div>

                        <div className="row float-left fullwidth padding-right">
                          <Link to="/" className="btn btn-secondary block">
                            Please click here to go back to the Login Page
                          </Link>
                        </div>
                      </div>
                    ) : null}
                    

                    {/* Submit Button  
                    <div className="row float-left fullwidth padding-right">
                      <button type="submit" className="btn btn-primary block">
                        Email us to request a new PIN
                      </button>
                    </div>
                     */}
                  </form>

                  
              </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
