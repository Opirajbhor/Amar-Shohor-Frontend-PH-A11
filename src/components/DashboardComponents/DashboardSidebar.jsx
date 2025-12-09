import React from "react";
import { BsExclamationTriangle } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import {
  MdNearbyError,
  MdOutlineBugReport,
  MdOutlineDashboardCustomize,
  MdPayment,
} from "react-icons/md";
import { PiUsersFour } from "react-icons/pi";
import { Link } from "react-router";

const DashboardSidebar = () => {
  const dashboardLinks = [
    {
      path: "/dashboard",
      name: "Dashboard",
      iconLink: <MdOutlineDashboardCustomize className="size-6" />,
    },
    {
      path: "/",
      name: "Homepage",
      iconLink: <IoHomeOutline className="size-6" />,
    },
    {
      path: "/All-Issues",
      name: "All Issues",
      iconLink: <BsExclamationTriangle className="size-6" />,
    },
    {
      path: "/Manage-users",
      name: "Manage Users",
      iconLink: <PiUsersFour className="size-6" />,
    },
    {
      path: "/Manage-staffs",
      name: "Manage Staffs",
      iconLink: <FaUserFriends className="size-6" />,
    },
    {
      path: "/Payments",
      name: "Payments",
      iconLink: <MdPayment className="size-6" />,
    },
    {
      path: "/my-issues",
      name: "My Issues",
      iconLink: <MdNearbyError className="size-6" />,
    },
    {
      path: "/report-issue",
      name: "Report Issue",
      iconLink: <MdOutlineBugReport className="size-6" />,
    },
    {
      path: "/my-profile",
      name: "Profile",
      iconLink: <ImProfile className="size-6" />,
    },
    {
      path: "/Assigned-issues",
      name: "Assigned issues",
      iconLink: <GrUserWorker className="size-6" />,
    },
  ];
  return (
    <div className="menu w-full grow mt-13">
      <ul>
        {/* List item */}
        {dashboardLinks.map((link,i) => (
          <li key={i}>
            <Link
              to={link.path}
              className="flex items-center gap-2 is-drawer-close:tooltip is-drawer-close:tooltip-right
               mb-2 hover:bg-green-300 hover:text-gray-800"
              data-tip={link.name}
            >
              {/* Home icon */}
              {link.iconLink}

              <span className="is-drawer-close:hidden text-[18px]">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
