import { createContext, useContext, useState } from "react";
import { RenderHeader } from "../components/Header";
import RenderMegamenu from "../components/Megamenu";
import { RenderMenu, RenderRoutes } from "../components/RenderNavigation";
import { RenderFooter } from "../components/Footer";

/* *********************** USE Graph API to Merge your Changes START *************************** */

import pins from "../api/pins.json"; // Import the PINs JSON file

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });

  const login = (pin) => {
    return new Promise(async (resolve, reject) => {
      //Replace with environment variable for azure function uri
      await fetch(`/api/GET_NTS_USER?pin=${pin}`).then(async (response) => {
        if (response.ok) {
          console.log("Login Successful");
          const matchingUser = await response.json();
          setUser({ ...matchingUser, isAuthenticated: true });
          resolve("Got User");
        } else {
          reject("You have entered an incorrect PIN. Please try again");
        }
      });

      /*const matchingUser = pins.find((user) => user.pin === pin);
  
      if (matchingUser) {
        setUser({ ...matchingUser, isAuthenticated: true });
        resolve("success");
      } else {
        reject("You have entered an Incorrect PIN. Please try again.");
      }*/
    });
  };

  const logout = () => {
    setUser({ ...user, isAuthenticated: false });
  };

  /* *********************** USE Graph API to Merge your Changes END *************************** */

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <>
        <RenderHeader />
        <RenderMegamenu />
        <RenderMenu />
        <RenderRoutes />
        <RenderFooter />
      </>
    </AuthContext.Provider>
  );
};
