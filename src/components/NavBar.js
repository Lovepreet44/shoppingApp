import React from "react";
import "../sass/NavBar.scss";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active">
              <Link to="/shop">Shop</Link>
            </a>
            <a className="nav-item nav-link">
              <Link to="/content">Content</Link>
            </a>
            <a className="nav-item nav-link">
              <Link to="/signin">Sign In</Link>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
