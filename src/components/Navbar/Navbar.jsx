import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import LoginButtons from "../../utils/Buttons/LoginButtons";
import Logo from "../../utils/Logo/Logo";
import useAuth from "../../Hooks/useAuth";
import { CiUser } from "react-icons/ci";
import DashboardButton from "../../utils/Buttons/DashboardButton";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();

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
  const { user, logOut } = useAuth();
  const noUserPhoto = <CiUser />;

  const handleLogOut = async () => {
    logOut();
    await toast.success("logout succesfull");
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-between pt-5">
      {/* left side section */}
      {/* tittle and logo start----------------------------------------- */}
      <Logo></Logo>
      {/* tittle and logo ends----------------------------------------- */}

      {/* nav links */}
      <div className="lg:flex items-center gap-5 md:flex hidden">
        {navLinks.map((link, index) => (
          <NavLink key={index} to={link.path}>
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* right side section */}
      <div className="flex items-center  gap-3">
        {/* Profile and other links---------------------------------------------------------- */}
        <div>
          {user ? (
            DashboardButton({ link: "/dashboard", name: "Dashboard" })
          ) : (
            <LoginButtons></LoginButtons>
          )}
        </div>

        {/* profile */}

        {user && (
          <div className="dropdown dropdown-end flex">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt={user.displayName}
                  src={user?.photoURL || noUserPhoto}
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="text-right text-gray-400 mb-2">
                {user?.displayName}
              </li>
              <li>
                <Link to="/dashboard/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>

              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        )}

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
                {navLinks.map((link, index) => (
                  <Link key={index} to={link.path}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </ul>
          </div>
        </div>
        {/* hambarger end--------------------------------------------------- */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Navbar;
