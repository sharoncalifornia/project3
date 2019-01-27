import React from "react";
import { NavLink } from "react-router-dom"
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/"><img id="logo" alt="Logo" src="/images/logo.svg" width="65" height="65"></img> <span>Destination Expert</span></a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ml-2 mr-3">
            <NavLink strict to="/login" className="normal"
            activeClassName='active'>Log in</NavLink>
          </li>
          <li className="nav-item">
            <NavLink strict to="/signup" className="normal"
            activeClassName='active'>Sign up</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
