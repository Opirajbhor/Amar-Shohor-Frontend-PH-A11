import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { FaChevronCircleUp } from "react-icons/fa";
import { SmallLoading } from "../../../utils/Loading/Loading";

const Manage_Issues = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const { data: all_Issues = [], refetch } = useQuery({
    queryKey: ["all_Issues", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      setLoading(true);
      const res = await axiosSecure.get("/manage-issues", {
        headers: {
          email: user?.email,
        },
      });
      setLoading(false);
      return res.data;
    },
  });
  console.log(all_Issues);
  if (loading) return <SmallLoading />;

  return (
    <div className="overflow-x-auto mx-10">
      <h1 className="text-2xl my-10 font-bold text-center">
        All Issues {all_Issues.length}
      </h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Issue Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Assigned Staff</th>
            <th>Assign</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {all_Issues.map((issue, index) => (
            <tr key={index} className="hover:bg-base-300">
              <th>{index + 1}</th>
              <th>{issue?.title}</th>
              <th>{issue?.category}</th>
              <th>{issue?.status}</th>
              <th>{issue?.isBoosted ? "High" : "Normal"}</th>
              <th>{issue?.assignedTo}</th>
              <th
                className="flex items-center gap-3 cursor-pointer border"
                disabled={issue?.assignedTo !== "Not Assigned Yet"}
              >
                <FaChevronCircleUp /> Assign
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Manage_Issues;
