// 1. Importing Components
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logos from "../../src/components/Logos";
import NavBar from "../../src/components/Navbar";

// 2. Import FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faSignOut } from "@fortawesome/free-solid-svg-icons";

// export default function Forgot() {
export const Forgot = () => {
  return (
    <div className="Forgot">
      <main>
        <div className="wrapper">
          <div className="container">
            <div className="formContainer">
              <Logos />
              <div className="row">
                Please enter your email address to generate a new pin
              </div>
              <div className="buttonsContainer">
                <form method="post">
                  {/* PIN Input */}
                  <div className="row">
                    <FontAwesomeIcon icon={faKey} className="icon" />
                    <input
                      type="email"
                      placeholder="Please enter your email address"
                      required
                    />
                  </div>
                  <div className="row">
                    <Link to="/success" className="btn btn-primary block">
                      Generate a new PIN
                    </Link>
                  </div>
                  <div className="row">
                    <p className="seperator"> Or </p>
                  </div>
                  <div className="row">
                    <p>
                      Email us at
                      <a className="Link" href="mailto:info@eastwestrail.co.uk">
                        mailto:info@eastwestrail.co.uk
                      </a>
                      to request a new PIN
                    </p>
                  </div>
                  <div className="row">
                    <p className="seperator"> Or </p>
                  </div>
                  <div className="row">
                    <Link to="/contact" className="btn btn-secondary block">
                      Please complete this form to request a New PIN
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
};
