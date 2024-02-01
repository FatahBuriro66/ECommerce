import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
    return (
      <>
        <nav className="navbar">
          <h1>Abdul Fatah</h1>
          <div className="links">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/work">Work</Link>
              <Link to="/contactUs">Contact Us</Link>
              <Link to="/SignIn">Sign In</Link>
              <Link to="/SignUp">Sign Up</Link>
          </div>
        </nav>
      </>
    );
  };
  
  export default Navbar;
  