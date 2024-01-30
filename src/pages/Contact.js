// 1. Importing Components
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

// export default function Contact() {
  export const Contact = () => {
  return (
    <div className="Contact">
      <main>
        <div className="wrapper">
          <div className="container">
            <div className="formContainer">
              <Logos />
              <div className="row">
                Please complete the following form to request a new pin
              </div>
              <div className="buttonsContainerfullwidth">
                <form>
                  {/* First Name */}
                  <div className="row float-left halfwidth padding-right">
                    <FontAwesomeIcon icon={faPerson} className="icon" />
                    <input
                      id="fname"
                      type="text"
                      placeholder="Please enter your first name"
                      required
                    />
                  </div>

                  {/* Email Address */}
                  <div className="row float-left halfwidth padding-right">
                    <FontAwesomeIcon icon={faPerson} className="icon" />
                    <input
                      id="lname"
                      type="text"
                      placeholder="Please enter your last name"
                      required
                    />
                  </div>

                  {/* Email Address */}
                  <div className="row float-left halfwidth padding-right">
                    <FontAwesomeIcon icon={faMailForward} className="icon" />
                    <input
                      id="email"
                      type="email"
                      placeholder="Please enter your email address"
                      required
                    />
                  </div>

                  {/* Csse Manager */}
                  <div className="row float-left halfwidth padding-right">
                    <FontAwesomeIcon icon={faAddressBook} className="icon" />
                    <input
                      id="manager"
                      type="text"
                      placeholder="Please enter your case manager name"
                      required
                    />
                  </div>

                  <div className="row float-left fullwidth padding-right">
                    <Link to="/Success" className="btn btn-primary block">
                      Email us to request a new PIN
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
