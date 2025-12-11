import React from "react";
import { useLocation } from "react-router";

export default function IssueDetails() {
  const fromLocation = useLocation();
  const { issue } = fromLocation.state || {};
  const { title, description, location, category, image, status } = issue;
  console.log(issue);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      {/* PAGE HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Issue Details</h1>
        <span className="badge badge-lg badge-warning text-lg">
          {status} Priority
        </span>
      </div>

      {/* ISSUE INFORMATION SECTION */}
      <div className="bg-base-100 shadow-lg rounded-xl p-6 border border-base-300">
        <h2 className="text-xl font-semibold border-b pb-3 mb-4">
          {description}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500">Category</p>
            <p className="font-medium text-lg">{category}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Reported By</p>
            <p className="font-medium text-lg">{issue?.user} (Citizen)</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Current Status</p>
            <span className="badge badge-info badge-lg">{status}</span>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-500">Description</p>
          <p className="mt-1">
            {description}
          </p>
        </div>

        {/* BOOST BUTTON */}
        <div className="mt-8">
          <button className="btn btn-primary btn-md w-full md:w-auto">
            Boost Priority (100 TK)
          </button>
        </div>
      </div>

      {/* STAFF ASSIGNED SECTION */}
      <div className="bg-base-100 shadow-lg rounded-xl p-6 border border-base-300">
        <h2 className="text-xl font-semibold border-b pb-3 mb-4">
          Assigned Staff
        </h2>

        <div className="flex gap-4 items-center">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://i.pravatar.cc/100?img=5" alt="Staff Avatar" />
            </div>
          </div>

          <div>
            <p className="font-semibold text-lg">John Doe</p>
            <p className="text-sm text-gray-500">Field Technician</p>
            <p className="text-sm text-gray-500">Phone: +880123456789</p>
          </div>
        </div>
      </div>

      {/* TIMELINE SECTION */}
      <div className="bg-base-100 shadow-lg rounded-xl p-6 border border-base-300">
        <h2 className="text-xl font-semibold border-b pb-3 mb-6">
          Tracking & Timeline
        </h2>

        <ul className="timeline timeline-vertical timeline-snap">
          {/* ENTRY 1 */}
          <li>
            <div className="timeline-start font-medium">Just Now</div>
            <div className="timeline-middle">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
            </div>
            <div className="timeline-end bg-base-200 p-4 rounded-lg shadow">
              <span className="badge badge-primary mb-2">In Progress</span>
              <p className="font-semibold">Work started on the issue</p>
              <p className="text-sm text-gray-500">
                Updated by Staff: John Doe
              </p>
            </div>
          </li>

          {/* ENTRY 2 */}
          <li>
            <hr />
            <div className="timeline-start font-medium">1 Hour Ago</div>
            <div className="timeline-middle">
              <div className="w-4 h-4 bg-secondary rounded-full"></div>
            </div>
            <div className="timeline-end bg-base-200 p-4 rounded-lg shadow">
              <span className="badge badge-secondary mb-2">Assigned</span>
              <p className="font-semibold">Issue assigned to Staff: John Doe</p>
              <p className="text-sm text-gray-500">Updated by Admin</p>
            </div>
          </li>

          {/* ENTRY 3 */}
          <li>
            <hr />
            <div className="timeline-start font-medium">2 Hours Ago</div>
            <div className="timeline-middle">
              <div className="w-4 h-4 bg-info rounded-full"></div>
            </div>
            <div className="timeline-end bg-base-200 p-4 rounded-lg shadow">
              <span className="badge badge-info mb-2">Pending</span>
              <p className="font-semibold">Issue reported by citizen</p>
              <p className="text-sm text-gray-500">Updated by Citizen</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
