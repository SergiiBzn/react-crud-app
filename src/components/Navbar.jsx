import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="relative">
      <div className="navbar bg-gradient-to-r from-white/30 via-white/10 to-transparent text-black p-4 shadow-md backdrop-blur-md">
        <div className="navbar-start">
          <Link to="/" className="text-4xl font-bold text-gray-800">
            Events App
          </Link>
        </div>

        {/* Large screen navigation */}
        <div className="navbar-end space-x-2 hidden lg:flex">
          <Link to="/" className="btn btn-outline text-white border-white hover:bg-white hover:text-blue-500">
            Home-Events
          </Link>

          {isAuthenticated ? (
            <>
              <Link to="/create-event" className="btn btn-outline text-white border-white hover:bg-white hover:text-blue-500">
                Create Event
              </Link>
              <button onClick={logout} className="btn btn-outline text-white border-white hover:bg-white hover:text-blue-500">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="btn btn-outline text-white border-white hover:bg-white hover:text-blue-500">
                Sign In
              </Link>
              <Link to="/signup" className="btn btn-outline text-white border-white hover:bg-white hover:text-blue-500">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Small screen dropdown */}
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-indigo-700 rounded-box w-52">
              <li>
                <Link to="/" className="text-white">Home-Events</Link>
              </li>

              {isAuthenticated ? (
                <>
                  <li>
                    <Link to="/create-event" className="text-white">Create Event</Link>
                  </li>
                  <li>
                    <button onClick={logout} className="text-white">Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/signin" className="text-white">Sign In</Link>
                  </li>
                  <li>
                    <Link to="/signup" className="text-white">Sign Up</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
