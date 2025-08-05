import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-blue-100 text-blue-800 shadow-md px-4">
  <div className="navbar-start">
    <Link to="/" className="text-2xl font-bold">
      Events App
    </Link>
  </div>

  {/* Large screen  */}
  <div className="navbar-end space-x-2 hidden lg:flex">
    <Link to="/" className="btn btn-outline btn-primary">
      Home-Events
    </Link>
    <Link to="/signin" className="btn btn-outline btn-secondary">
      Sign In
    </Link>
    <Link to="/signup" className="btn btn-outline btn-accent">
      Sign Up
    </Link>
  </div>

  {/* Small screen  */}
  <div className="navbar-end lg:hidden">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-100 rounded-box w-52"
      >
        <li>
          <Link to="/" className="text-blue-800">
            Home-Events
          </Link>
        </li>
        <li>
          <Link to="/signin" className="text-blue-800">
            Sign In
          </Link>
        </li>
        <li>
          <Link to="/signup" className="text-blue-800">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  </div>
</div>

    </>
  );
};

export default Navbar;
