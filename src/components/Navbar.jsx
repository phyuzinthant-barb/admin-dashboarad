import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="flex-fill"></div>
      <div className="navbar nav">
        <li className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown">
            <FontAwesomeIcon icon={faCircleUser} style={{ marginRight: "15px" }}/>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#" className="dropdown-item">
                User Profile
              </a>
            </li>
            <li>
              <a href="#" className="dropdown-item">
                Logout
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
          <FontAwesomeIcon icon={faGear} style={{ marginRight: "20px" }} />
          </a>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
