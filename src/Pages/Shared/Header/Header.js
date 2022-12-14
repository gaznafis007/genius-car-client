import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const menuItems = (
    <>
      <li>
        <Link className="font-semibold" to="/">
          Home
        </Link>
        <Link className="font-semibold" to="/">
          Services
        </Link>
        <Link to="/myOrders" className="font-semibold">
          My orders
        </Link>
        <Link className="font-semibold" to="/">
          About us
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100  my-12 h-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="nav-logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <>
            <span className="font-semibold mr-2">{user.displayName}</span>
            <button
              onClick={() => logOut()}
              className="btn btn-outline btn-error"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline btn-error mr-2">
              Login
            </Link>
            <Link to="/signup" className="btn btn-outline btn-error">
              Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
