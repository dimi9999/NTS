import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../assets/images/EWR_Logo_CMYK_White.png';

// 0. Import FontAwesome Icons
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { nav } from "./Navbar";

export const RenderRoutes = () => {
  const { user } = AuthData();

  return (
    <Routes>
      {nav.map((r, i) => {
        if (r.isPrivate && user.isAuthenticated) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else if (!r.isPrivate) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else return false;
      })}
    </Routes>
  );
};

export const RenderMenu = () => {
  const { user, logout } = AuthData();

  const MenuItem = ({ r }) => {
    return (
      <div className="menuItem">
        <Link to={r.path}>{r.name}</Link>
      </div>
    );
  };
  return (
    <nav className="nav">
    <Link to="/" className="logo"> 
      <span className="logo">
        <img src={logo} alt="East West Rail Need to Sell" />
      </span>
      </Link>
      {nav.map((r, i) => {
        if (!r.isPrivate && r.isMenu) {
          return <MenuItem key={i} r={r} />;
        } else if (user.isAuthenticated && r.isMenu) {
          return <MenuItem key={i} r={r} />;
        } else return false;
      })}

      {user.isAuthenticated ? (
        <div className="menuItem">
          <Link className="logoutlink" to={"/Logout"} onClick={logout}>
          <FontAwesomeIcon icon={faSignOut} /> Log out
          </Link>
        </div>
      ) : (
        <div className="menuItem">
           
        </div>
      )}
    </nav>
  );
};
