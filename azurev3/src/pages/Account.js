// 1. Importing Components
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logos from "../../src/components/Logos";
import NavBar from "../../src/components/Navbar";
import { AuthData } from "../auth/AuthWrapper";

// 2. Import FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faSignOut, faSmile } from "@fortawesome/free-solid-svg-icons";

// export default function Forgot() {
export const Account = () => {
    const { user } = AuthData();
    
    return (
     <div className="Account">
      <main>
        <div className="wrapper">
          <div className="container">
            <div className="formContainer">
              <Logos />
              <FontAwesomeIcon icon={faSmile} className="icon" />
              <div className="buttonsContainer">
                <div className="row">
                    <div className="row">
                        <h1>Welcome to your Account</h1>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    );
};