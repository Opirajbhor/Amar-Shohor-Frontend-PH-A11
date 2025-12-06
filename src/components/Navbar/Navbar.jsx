import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  // navlinks array
  const navLinks = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/all-Issues",
      name: "All Issues",
    },
    {
      path: "/about-us",
      name: "About Us",
    },
    {
      path: "/contact-us",
      name: "Contact Us",
    },
  ];
  //   -----------------

  return (
    <div className="flex items-center justify-between pt-5">
      {/* left side section */}
      {/* tittle and logo start----------------------------------------- */}
      <div className="flex">
        <Link to="/" className="btn btn-ghost text-xl">
          AmarShohor
        </Link>
      </div>
      {/* tittle and logo ends----------------------------------------- */}
      {/* middle section */}
      {/* navlinks here */}

      <div className="lg:flex items-center gap-5 md:flex hidden">
        {navLinks.map((link) => (
          <Link to={link.path}>{link.name}</Link>
        ))}
      </div>

      {/* right side section */}
      <div className="flex">
        {/* Profile and other links---------------------------------------------------------- */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        {/* profile ends------------------------------------------------------------------- */}

        {/* hambarger start--------------------------------------------------- */}
        <div className="flex md:hidden lg:hidden">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <div className="grid grid-cols-1 items-center gap-5">
                {navLinks.map((link) => (
                  <Link to={link.path}>{link.name}</Link>
                ))}
              </div>
            </ul>
          </div>
        </div>
        {/* hambarger end--------------------------------------------------- */}
      </div>
    </div>
  );
};

export default Navbar;
