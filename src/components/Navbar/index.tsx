import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-root">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/user">
              <Button variant="text" className="navbar-button">
                User
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/rooms">
              <Button variant="text" className="navbar-button">
                Rooms
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/meeting">
              <Button variant="text" className="navbar-button">
                Meeting
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
