import React from "react";
import { BsExclamationTriangle } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import {
  MdAlignHorizontalLeft,
  MdNearbyError,
  MdOutlineBugReport,
  MdOutlineDashboardCustomize,
  MdPayment,
  MdWorkOutline,
} from "react-icons/md";
import { FaMoneyBillTrendUp, FaUsersBetweenLines } from "react-icons/fa6";
import { PiUsersFour } from "react-icons/pi";
import { Link } from "react-router";
import useRole from "../../Hooks/useRole";

const DashboardSidebar = () => {
  const { role } = useRole();

  const citizenDashboardLinks = [
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
      path: "/dashboard/my-issues",
      name: "My Issues",
      iconLink: <MdNearbyError className="size-6" />,
    },
    {
      path: "/dashboard/report-issue",
      name: "Report Issue",
      iconLink: <MdOutlineBugReport className="size-6" />,
    },
    {
      path: "/dashboard/Payments",
      name: "Payments",
      iconLink: <MdPayment className="size-6" />,
    },
    {
      path: "/dashboard/profile",
      name: "Profile",
      iconLink: <ImProfile className="size-6" />,
    },
  ];
  const staffDashboardLinks = [
    // staff dashboard--------
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
      path: "/dashboard/assign-issues",
      name: "Assign Issues",
      iconLink: <MdWorkOutline className="size-6" />,
    },
    {
      path: "/dashboard/profile",
      name: "Profile",
      iconLink: <ImProfile className="size-6" />,
    },
  ];
  const adminDashboardLinks = [
    // admin dashboard Stuff-----------------
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
      path: "/dashboard/manage-issues",
      name: "Manage Issues",
      iconLink: <MdAlignHorizontalLeft className="size-6" />,
    },
    {
      path: "/dashboard/manage-users",
      name: "Manage Citizens",
      iconLink: <FaUsersBetweenLines className="size-6" />,
    },
    {
      path: "/dashboard/manage-staff",
      name: "Manage Staff",
      iconLink: <FaUserFriends className="size-6" />,
    },
    {
      path: "/dashboard/all-payments",
      name: "All Payments",
      iconLink: <FaMoneyBillTrendUp className="size-6" />,
    },
    {
      path: "/dashboard/profile",
      name: "Profile",
      iconLink: <ImProfile className="size-6" />,
    },
  ];

  return (
    <div className="menu w-full grow mt-13">
      <ul>
        {/*citizen List item */}
        {role === "Citizen" &&
          citizenDashboardLinks.map((link, i) => (
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

        {/*staff List item */}

        {role === "Staff" &&
          staffDashboardLinks.map((link, i) => (
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

        {/*admin List item */}

        {role === "Admin" &&
          adminDashboardLinks.map((link, i) => (
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
