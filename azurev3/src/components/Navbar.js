// 1. Import All Pages
import { Login } from "../pages/Login";
import { Step } from "../pages/Step";
import { Logout } from "../pages/Logout";
import { Forgot } from "../pages/Forgot";
import { Contact } from "../pages/Contact";
import { Success } from "../pages/Success";
import { Privacy } from "../pages/Privacy";
import { Terms } from "../pages/Terms";
import { Account } from "../pages/Account";
import { Denied } from "../pages/Denied";
import { Getintouch} from "../pages/Getintouch";
import { ContactForms } from "../pages/ContactForms";

/* Static Steps will be Dynamically merged to Step.js} */

/* Desicion States */
import { Rejected } from "../pages/Rejected";
import { Accepted } from "../pages/Accepted";

export const nav = [
  {
    path: "/",
    name: "Login",
    element: <Login />,
    isMenu: false,
    isPrivate: false,
  },

  {
    path: "/Denied",
    name: "Denied",
    element: <Denied />,
    isMenu: false,
    isPrivate: false,
  },

  {
    path: "/Getintouch",
    name: "Getintouch",
    element: <Getintouch />,
    isMenu: false,
    isPrivate: false,
  },

  {
    path: "/Terms",
    name: "Terms",
    element: <Terms />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/Privacy",
    name: "Privacy",
    element: <Privacy />,
    isMenu: false,
    isPrivate: false,
  },

  // Render Our Private (Protected) Routes Pages Please
  {
    path: "/Step",
    name: "Step",
    element: <Step />,
    isMenu: false,
    isPrivate: true,
  },

  {
    path: "/ContactForms",
    name: "ContactForms",
    element: <ContactForms />,
    isMenu: false,
    isPrivate: false,
  },

  {
    path: "/Contact",
    name: "Contact",
    element: <Contact />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/Forgot",
    name: "Forgot",
    element: <Forgot />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/Success",
    name: "Success",
    element: <Success />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/Logout",
    name: "Logout",
    element: <Logout />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/Account",
    name: "Account",
    element: <Account />,
    isMenu: false,
    isPrivate: false,
  },

  {
    path: "/Rejected",
    name: "Rejected",
    element: <Rejected />,
    isMenu: false,
    isPrivate: false,
  },

  {
    path: "/Accepted",
    name: "Accepted",
    element: <Accepted />,
    isMenu: false,
    isPrivate: false,
  },
];

