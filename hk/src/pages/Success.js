// 1. Importing Components
import { Link/*, useMatch, useResolvedPath*/ } from "react-router-dom";
import Logos from "../../src/components/Logos";
//import NavBar from "../../src/components/Navbar";

// export default function Success() {
export const Success = () => {
  return (
    <div className="Success">
      <main>
        <div className="wrapper">
          <div className="container">
            <div className="formContainer">
              <Logos />
              <div className="buttonsContainer">
                <div className="row">
                  <span className="btn btn-secondary block">
                    Your new PIN has been sucessfully generated
                  </span>
                </div>
                <div className="row">
                  <Link to="/" className="btn btn-primary block">
                    Back to login page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
