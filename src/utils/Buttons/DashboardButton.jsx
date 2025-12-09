import React from "react";
import { Link } from "react-router";

const DashboardButton = ({ link, name }) => {
  return (
    <Link
      to={link}
      className="p-2 rounded-xl border border-green-300 text-green-700 font-semibold hover:bg-green-100 dark:text-green-300 dark:border-green-300 dark:hover:bg-gray-700 transition"
    >
      {name}
    </Link>
  );
};

export default DashboardButton;
