// 1. Import FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faExclamationCircle,
  faExclamationTriangle,
  faKey,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

// 2. Import AuthWrapper
import { AuthData } from "../auth/AuthWrapper";
import React, { createContext, useContext, useState } from "react";

export const Popup = () => {
    const { user, logout } = AuthData();
    return (
      <div>
        <div className="overlay" onClick={logout}></div>
        <div className="PopupContainer" onClick={logout}>
          <div className="modal-dialog" role="document" onClick={logout}>
            <div className="modal-content" onClick={logout}>
              <div className="modal-header">
                <h3 className="modal-title" id="NextDemoPopupLabel">
                  Your Session Has Expired
                </h3>
                <button type="button" className="close" onClick={logout}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="icon"
                />
                <p>
                  Your session has timed out. Please log back in to view your
                  application status
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={logout}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };