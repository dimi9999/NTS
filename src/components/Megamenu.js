// 1. Importing Components
import { Link, useMatch, useResolvedPath } from "react-router-dom";

// 2. Import FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faHamburger,
  faKey,
  faMailForward,
  faMobileButton,
  faPerson,
  faSignOut,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";

// export default function Contact() {
  export const RenderMegamenu = () => {
    return (
        <div  className="Megamenu">
            <FontAwesomeIcon icon={faMobileButton} className="icon" />
            This is the megamenu
        </div>
    )
  }