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

/* Static Steps will be Dynamically merged to Step.js} */
import { StepB } from "../pages/StepB";
import { StepC } from "../pages/StepC";
import { StepD } from "../pages/StepD";
import { StepE } from "../pages/StepE";
import { StepF } from "../pages/StepF";

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
    path: "/StepB",
    name: "StepB",
    element: <StepB />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/StepC",
    name: "StepC",
    element: <StepC />,
    isMenu: false,
    isPrivate: true,
  },
  {
    path: "/StepD",
    name: "StepD",
    element: <StepD />,
    isMenu: false,
    isPrivate: true,
  },
  {
    path: "/StepE",
    name: "StepE",
    element: <StepE />,
    isMenu: false,
    isPrivate: true,
  },
  {
    path: "/StepF",
    name: "StepF",
    element: <StepF />,
    isMenu: false,
    isPrivate: true,
  },
  {
    path: "/StepF",
    name: "StepF",
    element: <StepF />,
    isMenu: false,
    isPrivate: true,
  },
  {
    path: "/StepF",
    name: "StepF",
    element: <StepF />,
    isMenu: false,
    isPrivate: true,
  },
  {
    path: "/StepF",
    name: "StepF",
    element: <StepF />,
    isMenu: false,
    isPrivate: true,
  },
  {
    path: "/StepF",
    name: "StepF",
    element: <StepF />,
    isMenu: false,
    isPrivate: true,
  },
  {
    path: "/StepF",
    name: "StepF",
    element: <StepF />,
    isMenu: false,
    isPrivate: true,
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
    isPrivate: true,
  },
];

