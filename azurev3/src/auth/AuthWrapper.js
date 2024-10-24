import { createContext, useContext, useState, useEffect } from "react";
import { RenderHeader } from "../components/Header";
import RenderMegamenu from "../components/Megamenu";
import { RenderMenu, RenderRoutes } from "../components/RenderNavigation";
import { RenderFooter } from "../components/Footer";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });

  useEffect(() => {
    const disableBackButton = (e) => {
      e.preventDefault();
      window.history.forward();
    };

    if (user.isAuthenticated) {
      window.history.pushState(null, null, window.location.pathname);
      window.addEventListener("popstate", disableBackButton);
    }

    return () => {
      window.removeEventListener("popstate", disableBackButton);
    };
  }, [user.isAuthenticated]);
  

  const login = (pin) => {
    return new Promise(async (resolve, reject) => {
      //Replace with environment variable for azure function uri
      await fetch(`/api/GET_NTS_USER?pin=${pin}`)
        .then(
          async (response) => {
            if(response.ok){
              console.log("Login Successful");
              const matchingUser = await response.json();
              setUser({ ...matchingUser, isAuthenticated: true});
              resolve("Got User");
            } else {
              reject("Sorry! You have entered an incorrect PIN. Please try again");
            }
          }
        )
    });
  };

  const logout = () => {
    setUser({ ...user, isAuthenticated: false });
  };

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