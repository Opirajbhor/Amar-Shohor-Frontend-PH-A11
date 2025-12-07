import React from "react";
import { Link } from "react-router";

const PrimaryButton = ({ link, name }) => {
  return (
    <Link
      to={link}
      className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 shadow hover:shadow-lg transition"
    >
      {name}
    </Link>
  );
};

export default PrimaryButton;
