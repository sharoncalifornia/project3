import React from "react";
import { NavLink } from "react-router-dom"
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/"><img id="logo" alt="Logo" src="/images/logo.svg" width="65" height="65"></img> <span>Destination Expert</span></a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <button className="btn navbtn flex-grow-2 ml-3 mr-3" id="login" name="login">Login</button>
          <button className="btn navbtn flex-grow-1 ml-3 mr-5" id="signup" name="signup">Sign up</button>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
