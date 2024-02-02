import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { Typewriter } from "react-simple-typewriter";

/* <h1>Abdul Fatah</h1> */
/* <div className="links">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/work">Work</Link>
              <Link to="/contactUs">Contact Us</Link>
              <Link to="/SignIn">Sign In</Link>
              <Link to="/SignUp">Sign Up</Link> */

const Navbar = () => {
  return (
    <>
      <nav className="navbar w-full min-h-12 bg-blue-800">
        <div className="flex  flex-wrap">
          <Typewriter
            words={[
              "Hey There",
              "Sign In to Get Amazing Deals",
              "Best Products",
              "Enjoyed Deals",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />{" "}
        </div>
        <div className="flex flex-wrap">
          <button>Sign In</button>
          <button>Log In</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
