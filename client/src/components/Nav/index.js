import React from "react";
import { NavLink } from "react-router-dom"
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/"><image id="logo" alt="Logo" src="/images/logo.svg" width="65" height="65"> </image> <span>Destination Expert</span></a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li className="nav-item ml-2 mr-3">
            <NavLink strict to="/Login" className="normal"
              exact={true} activeClassName='active'>Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink strict to="/Signup" className="normal"
              activeClassName='active'>Sign up</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
