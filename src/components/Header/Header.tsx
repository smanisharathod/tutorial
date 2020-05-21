import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          Virtual Assistant
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="services.html" className="nav-link">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="how-it-works.html" className="nav-link">
                How It Works
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="pricing.html" className="nav-link">
                Pricing Plans
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="blog.html" className="nav-link">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="contact.html" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
