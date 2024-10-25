import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/images/EWR_Logo_CMYK_White.png";
import { useEffect } from "react";

// 0. Import FontAwesome Icons
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { nav } from "./Navbar";
import { Denied } from "../pages/Denied";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// Import the NotFound component
import { Notfound } from "../pages/Notfound";

export const RenderRoutes = () => {
  const { user } = AuthData();
  const navigate = useNavigate();

  // Always redirect to NotFound page when hitting ENTER on the address bar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        navigate("/Notfound");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  // Authenticate Private Pages
  return (
    <Routes>
      {nav.map((r, i) => {
        if (!r.isPrivate) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else if (r.isPrivate && user.isAuthenticated) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else {
          // Redirect to /Denied if the route is private and the user is not authenticated
          return (
            <Route key={i} path={r.path} element={<Navigate to="/Denied" />} />
          );
        }
      })}

     {/* Wildcard route for NotFound page */}
     <Route path="*" element={<Notfound />} />
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
      {user.isAuthenticated ? (
        <Link to={"/Step"} className="logo">
          <span className="logo">
            <img src={logo} alt="East West Rail Need to Sell" />
          </span>
        </Link>
      ) : (
        <Link to="/" className="logo">
          <span className="logo">
            <img src={logo} alt="East West Rail Need to Sell" />
          </span>
        </Link>
      )}

      {nav.map((r, i) => {
        if (!r.isPrivate && r.isMenu) {
          return <MenuItem key={i} r={r} />;
        } else if (user.isAuthenticated && r.isMenu) {
          return <MenuItem key={i} r={r} />;
        } else return false;
      })}

      {user.isAuthenticated ? (
        <div className="menuItem">
          {/* View Status Button */}
          <Link className="statuslink" to={"/Step"}>
            <FontAwesomeIcon icon={faUser} /> &nbsp; View your Status
          </Link>

          {/* Logout Button */}
          <Link className="logoutlink" to={"/Logout"} onClick={logout}>
            <FontAwesomeIcon icon={faSignOut} /> &nbsp; Log out
          </Link>
        </div>
      ) : (
        <div className="menuItem"></div>
      )}
    </nav>
  );
};
