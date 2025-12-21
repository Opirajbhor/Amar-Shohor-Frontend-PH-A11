import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router"; // Added useNavigate
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
import { AiOutlineLike } from "react-icons/ai";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const IssueDetailspage = () => {
  const { user } = useAuth();

  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { id } = useParams();
  // user Data fetch
  const { data: currentIssue = [], refetch } = useQuery({
    queryKey: ["user-info", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-issues/${id}`);
      return res.data;
    },
  });
  const issue = currentIssue;
  const {
    title = "Untitled Issue",
    upVotes = [],
    description = "No description provided.",
    location = "Unknown Location",
    category = "General",
    image = "https://via.placeholder.com/800x450?text=No+Image+Available",
    status = "Pending",
    reportedBy = "Anonymous",
    assignedTo = "Anonymous",
    createdAt = "",
    timeline = [],
  } = issue;

  // user Data fetch
  const { data: userInfo = [] } = useQuery({
    queryKey: ["user-info", issue?._id],
    queryFn: async () => {
      const res = await axiosSecure.get("/user-info", {
        headers: {
          email: reportedBy,
        },
      });
      return res.data;
    },
  });

  const { mutate: handleUpvote } = useMutation({
    enabled: !!user?.email,
    mutationFn: async () => {
      const res = await axiosSecure.patch(`/issues/upvote/${issue?._id}`, {
        email: user?.email,
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["issues"]);
      Swal.fire("Success!", "Upvote recorded.", "success");
      refetch();
    },
    onError: (error) => {
      Swal.fire("Error", "You need to Login to vote an Issue", "error");
    },
  });

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
          {/* Priority Badge */}
          <span
            className={`text-xs font-bold px-2 py-1 rounded shadow-sm ${
              issue?.isBoosted
                ? "badge badge-soft badge-error"
                : "badge badge-soft badge-success"
            }`}
          >
            {issue?.isBoosted ? "High" : "Normal"}
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
            <div className=" flex items-center justify-between">
              <h3 className="text-lg font-bold  mb-4 flex items-center gap-2">
                <MdOutlineCategory className="text-green-500" /> Issue Overview
              </h3>
              {/* Upvote Group */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <button
                  disabled={upVotes?.includes(user?.email)}
                  onClick={handleUpvote}
                  className={` p-3 rounded-2xl  ${
                    upVotes?.includes(user?.email)
                      ? "bg-green-600 text-white cursor-default"
                      : "bg-gray-50 dark:bg-gray-700 group-hover:bg-green-600 group-hover:text-white cursor-pointer"
                  }
                  `}
                >
                  <AiOutlineLike />
                </button>
                <div className="flex flex-col">
                  <span className="text-sm font-bold  ">{upVotes?.length}</span>
                </div>
              </div>
            </div>
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
                {userInfo?.photoURL ? (
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={userInfo?.photoURL} alt={userInfo?.name} />
                    </div>
                  </div>
                ) : (
                  <FaUser size={20} />
                )}
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase font-bold ">Reported By</p>
                <p className="text-sm font-bold  truncate">{userInfo?.name}</p>
                <p className="text-xs ">{reportedBy.date}</p>
              </div>
            </div>

            <div className=" p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="h-12 w-12  rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                <FaHardHat size={20} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase font-bold ">Assigned To</p>
                <p className="text-sm font-bold  truncate">
                  {assignedTo?.name}
                </p>
                <p className="text-xs ">{issue?.assignedTo}</p>
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
