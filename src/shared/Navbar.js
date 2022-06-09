import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Link, NavLink, useLocation } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  return (
    <div
      style={{ zIndex: "999" }}
      className="sticky top-0 bg-slate-50  navbar shadow-lg px-10 "
    >
      <div className=" navbar-start">
        <a className=" font-serif font-bold text-2xl text-secondary normal-case text-2xl">
          DoctorsHome
        </a>
      </div>

      <div className=" navbar-start"></div>
      <div className=" navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal font-bold font-serif p-2">
          <li className="font-serif font-bold px-2">
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/appointments">Appointments</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contact </NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            {user ? (
              <button className=" btn" onClick={logout}>
                SignOut
              </button>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label
            tabIndex="1"
            for="dashboard-sidebar"
            className="btn btn-ghost lg:hidden"
          >
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-serif font-bold w-52"
          >
            <li className="font-serif font-bold px-2">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/appointments">Appointments</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/doctors">Doctors </NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            {user ? (
              <button onClick={logout}>SignOut</button>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
