import React from "react";
import { Link } from "react-router";

const DashboardSidebar = () => {
  const dashboardLinks = [
    {
      path: "/dashboard",
      name: "Dashboard",
      iconLink: "",
    },
    {
      path: "/",
      name: "Homepage",
      iconLink: "",
    },
    {
      path: "/All-Issues",
      name: "All Issues",
      iconLink: "",
    },
    {
      path: "/Manage-users",
      name: "Manage Users",
      iconLink: "",
    },
    {
      path: "/Manage-staffs",
      name: "Manage Staffs",
      iconLink: "",
    },
    {
      path: "/Payments",
      name: "Payments",
      iconLink: "",
    },
    {
      path: "/my-issues",
      name: "My Issues",
      iconLink: "",
    },
    {
      path: "/report-issue",
      name: "Report Issue",
      iconLink: "",
    },
    {
      path: "/my-profile",
      name: "Profile",
      iconLink: "",
    },
    {
      path: "/Assigned-issues",
      name: "Assigned issues",
      iconLink: "",
    },
  ];
  return (
    <div className="menu w-full grow mt-13">
      <ul>
        {/* List item */}
        {dashboardLinks.map((link) => (
          <li>
            <Link
              to={link.path}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Homepage"
            >
              {/* Home icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-5"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
              <span className="is-drawer-close:hidden">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
