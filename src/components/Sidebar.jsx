import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGhost,
  faHouse,
  faUsers,
  faChartLine,
  faFlag,
  faUser,
  faPenToSquare,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <nav>
      <h1 className="h4 py-3 text-center text-primary">
        <FontAwesomeIcon icon={faGhost} style={{marginRight:'10px'}}/>
        <span className="d-none d-lg-inline"> ADMIN </span>
      </h1>
      <div className="list-group text-center text-lg-start">
        <span className="list-group-item disabled d-none d-lg-block">
          <small>CONTROLS</small>
        </span>
        <a href="#" className="list-group-item list-group-item-action active">
          <FontAwesomeIcon icon={faHouse} style={{ marginRight: "5px" }} />
          <span className="d-none d-lg-inline">Dashboard</span>{" "}
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faUsers} style={{ marginRight: "5px" }} />
          <span className="d-none d-lg-inline">Users</span>
          <span className="d-none d-lg-inline badge bg-danger rounded-pill float-end">
            20
          </span>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faChartLine} style={{ marginRight: "5px" }} />
          <span className="d-none d-lg-inline">Statistics</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
        <FontAwesomeIcon icon={faFlag} style={{ marginRight: "5px" }} />
          <i className="fas fa-flag"></i>
          <span className="d-none d-lg-inline">Reports</span>
        </a>
      </div>
      <div className="list-group text-center text-lg-start">
        <span className="list-group-item disabled d-none d-lg-block">
          <small>ACTIONS</small>
        </span>
        <a href="#" className="list-group-item list-group-item-action active">
          <FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />
          <span className="d-none d-lg-inline">New User</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faPenToSquare} style={{ marginRight: "5px" }} />
          <span className="d-none d-lg-inline">Update Data</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faCalendarDays} style={{ marginRight: "5px" }} />
          <span className="d-none d-lg-inline">Add Event</span>
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;
