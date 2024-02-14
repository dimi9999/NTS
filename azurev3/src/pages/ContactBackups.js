// 1. Importing Components
import { useRef } from "react";
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
  export const Contact = () => {
    const form = useRef()

    const sendEmail = () => {};

  return (
    <div className="Contact">
      <main>
        <div className="wrapper">
          <div className="container">
            <div className="formContainer">
              <Logos />
              <section>
              <div className="buttonsContainerfullwidth">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                      <p> If you cannot locate your case manager’s email, please email <a className="Link" href="needtosell@eastwestrail.co.uk"> needtosell@eastwestrail.co.uk </a> to request a new PIN. 
                        You case manager will arrange a callback with you to verify your identity and authorise a PIN reset request. 
                        You will then receive your new PIN from your case manager.</p>
                    </div>
                    <div className="row">
                        <div className="seperator"> Or </div>
                    </div>
                    <div className="row">
                      <p> 
                        Alternatively complete the following form to request a new pin
                      </p>
                    </div>
                    {/* First Name */}
                    <div className="row float-left halfwidth padding-right">
                      <FontAwesomeIcon icon={faPerson} className="icon" />
                      <input
                        name="fname"
                        type="text"
                        placeholder="Please enter your first name"
                        required
                      />
                    </div>

                    {/* Email Address */}
                    <div className="row float-left halfwidth padding-right">
                      <FontAwesomeIcon icon={faPerson} className="icon" />
                      <input
                        name="lname"
                        type="text"
                        placeholder="Please enter your last name"
                        required
                      />
                    </div>

                    {/* Email Address */}
                    <div className="row float-left halfwidth padding-right">
                      <FontAwesomeIcon icon={faMailForward} className="icon" />
                      <input
                        name="email"
                        type="email"
                        placeholder="Please enter your email address"
                        required
                      />
                    </div>

                    {/* Csse Manager */}
                    <div className="row float-left halfwidth padding-right">
                      <FontAwesomeIcon icon={faAddressBook} className="icon" />
                      <input
                        name="manager"
                        type="text"
                        placeholder="Please enter your case manager name"
                        required
                      />
                    </div>
                    {/* Comments */}
                    <div className="row float-left fullwidth padding-right">
                      <textarea name="message" cols="30" rows="5" placeholder="Any comments you would like to add"></textarea>
                    </div>
                    {/* Submit Button */}
                    <div className="row float-left fullwidth padding-right">
                      <button type="submit" className="btn btn-primary block">
                        Email us to request a new PIN
                      </button>
                    </div>
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
