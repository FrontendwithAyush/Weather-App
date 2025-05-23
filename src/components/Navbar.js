import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link " to="/current">
            TODAY
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/hourly">
            HOURLY
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/daily">
            DAILY
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Change City
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
