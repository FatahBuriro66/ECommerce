import React from "react";
import { NavLink } from "react-router-dom";
import "../Navbars/Navbar.scss";
// import { initializeApp } from "firebase-admin/app";
import { Typewriter } from "react-simple-typewriter";

const Slider = () => {
  return (
    <>
      <nav className="navbar w-full shadow sticky z-10 top-0 p-2 flex bg-cyan-600">
        <div className="flex justify-between  w-full ">
          <div className="w-64">
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
              deleteSpeed={70}
              delaySpeed={1000}
            />{" "}
          </div>
          <div className="flex ">
            <NavLink
              className={({ isActive }) =>
                `inline-flex items-center px-4 py-1 text-gray-700 font-semibold hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 duration-300 ${
                  isActive ? "border-b-2 border-cyan-500" : ""
                }`
              }
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `inline-flex items-center px-4 py-1 text-gray-700 font-semibold hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 duration-300 ${
                  isActive ? "border-b-2 border-cyan-500" : ""
                }`
              }
              to="work"
            >
              Work
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `inline-flex items-center px-4 py-1 text-gray-700 font-semibold hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 duration-300 ${
                  isActive ? "border-b-2 border-cyan-500" : ""
                }`
              }
              to="service"
            >
              Services
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `inline-flex items-center px-4 py-1 text-gray-700 font-semibold hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 duration-300 ${
                  isActive ? "border-b-2 border-cyan-500" : ""
                }`
              }
              to="/"
            >
              Products
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `inline-flex items-center px-4 py-1 text-gray-700 font-semibold hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 duration-300 ${
                  isActive ? "border-b-2 border-cyan-500" : ""
                }`
              }
              to="dashboard"
            >
              DashBoard
            </NavLink>
          </div>
          <div className="flex items-center ">
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `text-black text-base mx-1 bg-gradient-to-r border border-white ${
                  isActive
                    ? "from-cyan-400 to-cyan-600"
                    : "from-cyan-200 to-cyan-400"
                } px-2 py-1  rounded-md shadow-md transition-colors duration-500 hover:from-cyan-600 hover:text-white hover:to-cyan-800`
              }
            >
              Sign Up
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-black text-base mx-1 bg-gradient-to-r border border-white ${
                  isActive
                    ? "from-cyan-400 to-cyan-600"
                    : "from-cyan-200 to-cyan-400"
                } px-2 py-1  rounded-md shadow-md transition-colors duration-500 hover:from-cyan-600 hover:text-white hover:to-cyan-800`
              }
            >
              Log In
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Slider;
