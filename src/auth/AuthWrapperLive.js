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

     // Use setTimeout to update the message after 600000 milliseconds (10 minutes)
    if (user.isAuthenticated) {
      window.history.pushState(null, null, window.location.pathname);
      window.addEventListener("popstate", disableBackButton);
      const timeoutId = setTimeout(() => {
         
        // ADD DISPLAY POPUP ALERT IN THE FUTURE displayAlert();
        // alert('Your session has timed out. Please log back in to view your application status');
        displayAlert();
        //logout(); 
      }, 600000); // 10 minutes TIMEOUT
      
      return () => clearTimeout(timeoutId);
    }

    return () => {
      window.removeEventListener("popstate", disableBackButton);
    };
  }, [user.isAuthenticated]);

 
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
          reject("Sorry! You have entered an incorrect PIN. Please try again");
        }
      });
    });
  };

  // Logout
  const logout = () => {
    setUser({ ...user, isAuthenticated: false });
  };

  // Display Alerts and Overlays
  const displayAlert = () => {
    const popupContainer = document.querySelector('.PopupContainer');
    const popupoverlay = document.querySelector('.PopupOverlay');
    if (popupContainer) {
      popupContainer.style.display = 'block';
    }
    if (popupoverlay) {
      popupoverlay.style.visibility = 'visible';
    }
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
