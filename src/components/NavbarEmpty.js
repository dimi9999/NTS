import logo from "../assets/images/EWR_Logo_CMYK_White.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBarEmpty() {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <img src={logo} alt="East West Rail Need to Sell" />
      </Link>
    </nav>
  );
}
