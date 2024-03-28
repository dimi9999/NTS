import logo from "../assets/images/EWR_Logo_CMYK_White.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 0. Import FontAwesome Icons
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// 1. Pull Username with GUID Token from Azure here
const username = "User name";

export default function Navbar() {
  return (
    <nav className="nav">
      {/* <Link to="/" className="logo"> */}
      <span className="logo">
        <img src={logo} alt="East West Rail Need to Sell" />
      </span>
      {/*  </Link> /*}
            {/*}
            <span><FontAwesomeIcon icon={faUser} /> Welcome: {username} </span>
            <ul> 
                {/* <CustomLink to="/step">Application Status</CustomLink>
                <CustomLink to="/">Home</CustomLink>  
                <CustomLink to="/logout"> <FontAwesomeIcon icon={faSignOut} /> Logout</CustomLink>
            </ul>
            */}
    </nav>
  );
}

// Props For Getting the Links
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
