// 1. Importing Components
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ehr7f59", "template_ty15vh5", form.current, {
        publicKey: "AzGz4b9yswpTcLCD4",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMessage("Your request has been sent");
          {
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
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
                <div className="buttonsContainerfullwidth align-left">
                  <div className="row">
                    <h1>Contact Us</h1>
                    <p>
                      For any enquiries, please contact the Need to Sell team
                      using the bellow details{" "}
                    </p>
                  </div>
                  <div className="row">
                    <div class="responsiveTbl">
                      <table>
                        <tbody>
                          <tr>
                            <td className="align-left valign-top nopaddingleft">
                              <strong> Email </strong><br />
                              <a
                                href="mailto:needtosell@eastwestrail.co.uk"
                                className="mailLink">
                                {" "}
                                needtosell@eastwestrail.co.uk{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-left valign-top nopaddingleft">
                              <strong> Address </strong><br />
                              <address>
                                East West Railway Company Ltd <br />
                                The Quadrant <br />
                                Elder Gate <br />
                                Milton Keynes <br />
                                MK9 1EN <br />
                              </address>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <Link to="/" className="btn btn-secondary block">
                      Back to the Login Page.
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};