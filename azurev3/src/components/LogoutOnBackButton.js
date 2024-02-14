import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";

const LogoutOnBackButton = () => {
  const { user, logout } = AuthData();
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = () => {
      if (user.isAuthenticated) {
        alert("test");
        logout();
        navigate("/");
      }
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [user, logout, navigate]);

  return null;
};

export default LogoutOnBackButton;