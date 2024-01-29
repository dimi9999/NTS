import { createContext, useContext, useState } from "react";
import { RenderHeader } from "../components/Header";
import { RenderMenu, RenderRoutes } from "../components/RenderNavigation";
import pins from "../api/pins.json"; // Import the PINs JSON file

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });

  const login = (pin) => {
    return new Promise((resolve, reject) => {
      const matchingUser = pins.find((user) => user.pin === pin);

      if (matchingUser) {
        setUser({ name: matchingUser.username, isAuthenticated: true });
        resolve("success");
      } else {
        reject("You have entered an Incorrect PIN. Please try again.");
      }
    });
  };

  const logout = () => {
    setUser({ ...user, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <>
        <RenderHeader />
        <RenderMenu />
        <RenderRoutes />
      </>
    </AuthContext.Provider>
  );
};