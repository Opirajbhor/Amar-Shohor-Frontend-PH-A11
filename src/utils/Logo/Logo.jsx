import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div className="flex">
      <style>
        {`
      @keyframes shineMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}
      </style>

      <Link to="/" className="font-bold text-[34px] tracking-wide">
        <span
          className="
        text-transparent
        bg-clip-text
        bg-gradient-to-r
        from-green-500 via-green-100 to-green-600
        bg-[length:250%_250%]
        animate-[shineMove_4s_ease-in-out_infinite]
        drop-shadow-[0_0_4px_rgba(0,255,0,0.3)]
      "
        >
          AmarShohor
        </span>
      </Link>
    </div>
  );
};

export default Logo;
