import React from "react";
import { Link } from "react-router";

const SecondaryButton = ({ link, name }) => {
  return (
    <Link
      to={link}
      className="px-6 py-3 rounded-xl border border-green-700 text-green-700 font-semibold hover:bg-green-100 dark:text-green-300 dark:border-green-500 dark:hover:bg-gray-700 transition"
    >
      {name}
    </Link>
  );
};

export default SecondaryButton;
