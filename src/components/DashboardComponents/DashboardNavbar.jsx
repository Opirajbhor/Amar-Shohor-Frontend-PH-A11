import React from "react";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const handleLogOut = async () => {
    logOut();
    await toast.success("logout succesfull");
    navigate("/login");
  };

  return (
    <div className="flex items-center gap-2">
      <h1 className="text-gray-300 font-semibold">{user?.displayName}</h1>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img alt={user?.displayName} src={user?.photoURL} />
          </div>
        </div>
        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
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
    </div>
  );
};

export default DashboardNavbar;
