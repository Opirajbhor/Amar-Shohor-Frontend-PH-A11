import React from "react";
import useRole from "../../Hooks/useRole";
import User_Dashboard from "./User_Dashboard";
import Staff_Dashboard from "./Staff_Dashboard/Staff_Dashboard";
import Admin_Dashboard from "./Admin_Dashboard/Admin_Dashboard";

const Main_Dashboard = () => {
  const { role } = useRole();

  if (role === "Citizen") {
    return <User_Dashboard></User_Dashboard>;
  }
  if (role === "Staff") {
    return <Staff_Dashboard></Staff_Dashboard>;
  }
  if (role === "Admin") {
    return <Admin_Dashboard></Admin_Dashboard>;
  }

  return <div>No user Found</div>;
};

export default Main_Dashboard;
