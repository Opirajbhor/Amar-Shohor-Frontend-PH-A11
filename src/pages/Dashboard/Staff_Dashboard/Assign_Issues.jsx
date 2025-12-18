import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { CgArrowsExchange } from "react-icons/cg";
import Swal from "sweetalert2";
import { RxCross1 } from "react-icons/rx";

const Assign_Issues = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();

  const [loading, setLoading] = useState(true);

  const { data: assign_issues = [], refetch } = useQuery({
    queryKey: ["assign_issues", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      setLoading(true);
      const res = await axiosSecure.get("/assign-issues", {
        params: {
          name: user?.displayName,
        },
      });
      setLoading(false);
      return res.data;
    },
  });
  const statuses = ["In-progress", "Working", "Resolved", "Closed"];

  const [currentIssue, setCurrentIssue] = useState(null);

  const handleStatus = async (data) => {
    console.log("data-->", data, "issue-->", currentIssue);
    if (data?.statusValue === "") {
      document.getElementById("change_status")?.close();
      return Swal.fire({
        title: "select status first",
        icon: "error",
      });
    }
    await axiosSecure
      .patch(`/all-issues/${currentIssue?._id}`, {
        status: data.statusValue,
      })
      .then((res) => {
        refetch();
        document.getElementById("change_status")?.close();

        Swal.fire({
          title: "Assign Succesfull!",
          icon: "success",
        });
      });
  };
  return (
    <div className="overflow-x-auto mx-10">
      <h1 className="text-2xl my-10 font-bold text-center">
        Assigned Issues {assign_issues?.length}
      </h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Issue Title</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {assign_issues?.map((issue, index) => (
            <tr key={index} className="hover:bg-base-300 mb-3">
              <th>{index + 1}</th>
              <th>{issue?.title}</th>
              <th>{issue?.category}</th>
              <th>{issue?.isBoosted ? "High" : "Normal"}</th>
              <th>{issue?.status}</th>
              {/* change status button */}
              <th
                className="btn"
                disabled={issue?.status === "Rejected"}
                onClick={() => {
                  setCurrentIssue(issue);
                  document.getElementById("change_status").showModal();
                }}
              >
                Change
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <dialog
        id="change_status"
        className="modal rounded-2xl pt-5 w-[350px] m-auto h-[180px] modal-bottom border sm:modal-middle"
      >
        <h1>
          Change status of{" "}
          <span className="font-bold">{currentIssue?.title}</span>
        </h1>

        <form
          onSubmit={handleSubmit(handleStatus)}
          className="flex items-center gap-3"
        >
          <select
            defaultValue=""
            className="rounded-lg border px-4 py-2.5 text-gray-400 focus:outline-none cursor-pointer"
            {...register("statusValue")}
          >
            <option value="" disabled>
              Change Status
            </option>

            {statuses.map((status, index) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <button type="submit" className="btn">
            <CgArrowsExchange /> Change
          </button>
        </form>

        <button
          onClick={() => document.getElementById("change_status")?.close()}
          type="button"
          className="btn btn-ghost bg-gray-500"
        >
          <RxCross1 /> Cancel
        </button>
      </dialog>
    </div>
  );
};

export default Assign_Issues;
