import React from "react";
import { useLocation, useNavigate } from "react-router"; // Added useNavigate
import {
  FaMapMarkerAlt,
  FaUser,
  FaHardHat,
  FaClock,
  FaCheckCircle,
  FaExclamationCircle,
  FaArrowLeft,
} from "react-icons/fa";
import { MdOutlineCategory, MdTimeline } from "react-icons/md";

const IssueDetailspage = () => {
  const fromLocation = useLocation();
  const navigate = useNavigate();

  const issue = fromLocation?.state?.issue || {};

  const {
    title = "Untitled Issue",
    description = "No description provided.",
    location = "Unknown Location",
    category = "General",
    image = "https://via.placeholder.com/800x450?text=No+Image+Available",
    status = "Pending",
    severity = "Medium",
    reporter = { name: "Anonymous", date: "N/A" },
    staff = { name: "Not Assigned", dept: "Pending Assignment" },
    timeline = [],
  } = issue;
  // Dynamic color for severity
  const severityColors = {
    High: "bg-red-500 text-white",
    Medium: "bg-yellow-400 text-yellow-900",
    Low: "bg-green-500 text-white",
  };

  return (
    <div className="max-w-4xl mx-auto p-4  min-h-screen pb-10">
      {/* 1. Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center cursor-pointer text-green-600 mb-4 hover:underline font-medium transition-all"
      >
        <FaArrowLeft className="mr-2" /> Back to All Issues
      </button>

      {/* 2. Image Header */}
      <div className="relative h-72 md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl mb-8">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <span
            className={` px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-2 inline-block`}
          >
            {severity} Priority
          </span>
          <h1 className="text-2xl md:text-4xl font-bold  leading-tight drop-shadow-md">
            {title}
          </h1>
        </div>
        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-green-700 px-4 py-2 rounded-xl text-sm font-bold shadow-lg flex items-center gap-2">
          <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
          {status}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Issue Overview */}
          <div className=" p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold  mb-4 flex items-center gap-2">
              <MdOutlineCategory className="text-green-500" /> Issue Overview
            </h3>
            <div className="flex items-center  mb-4">
              <FaMapMarkerAlt className="mr-2 text-red-500" />
              <span className="text-sm font-medium">{location}</span>
            </div>
            <p className=" leading-relaxed  p-4 rounded-xl italic">
              "{description}"
            </p>
          </div>

          {/* Reporter & Staff */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className=" p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="h-12 w-12  rounded-full flex items-center justify-center text-green-600 shrink-0">
                <FaUser size={20} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase font-bold ">Reported By</p>
                <p className="text-sm font-bold  truncate">{reporter.name}</p>
                <p className="text-xs ">{reporter.date}</p>
              </div>
            </div>

            <div className=" p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="h-12 w-12  rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                <FaHardHat size={20} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase font-bold ">
                  Assigned Staff
                </p>
                <p className="text-sm font-bold  truncate">{staff.name}</p>
                <p className="text-xs ">{staff.dept}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Column */}
        <div className="lg:col-span-1">
          <div className=" p-6 rounded-2xl shadow-sm border border-slate-100 h-full">
            <h3 className="text-lg font-bold  mb-8 flex items-center gap-2">
              <MdTimeline className="text-green-500" size={24} /> Work Log
            </h3>

            {timeline.length > 0 ? (
              <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                {timeline.map((step, index) => (
                  <div key={index} className="relative pl-8">
                    <div
                      className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white shadow-sm flex items-center justify-center z-10 ${
                        step.completed ? "bg-blue-600" : "bg-slate-200"
                      }`}
                    >
                      {step.completed ? (
                        <FaCheckCircle className="text-white text-[10px]" />
                      ) : (
                        <FaExclamationCircle className="text-slate-400 text-[10px]" />
                      )}
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-bold ${
                          step.completed ? "text-slate-800" : "text-slate-400"
                        }`}
                      >
                        {step.status}
                      </h4>
                      <p className="text-[10px] text-blue-500 font-semibold mb-1">
                        {step.time}
                      </p>
                      <p className="text-xs text-slate-500 leading-snug">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-400 italic text-center py-10">
                No updates logged yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetailspage;
