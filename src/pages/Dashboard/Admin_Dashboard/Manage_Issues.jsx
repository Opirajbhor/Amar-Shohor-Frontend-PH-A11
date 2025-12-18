import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { FaChevronCircleUp } from "react-icons/fa";
import { SmallLoading } from "../../../utils/Loading/Loading";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Manage_Issues = () => {
  const { register, handleSubmit } = useForm();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [currentIssue, setCurrentIssue] = useState([]);
  const [staffList, setStaffList] = useState([]);

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
  useEffect(() => {
    axiosSecure.get("/staff-list").then((res) => {
      setStaffList(res.data);
    });
  }, [axiosSecure]);

  const handleAssignStaff = async (data) => {
    axiosSecure
      .patch(`/all-issues/${currentIssue}`, {
        assignedTo: data.staffName,
      })
      .then((res) => {
        document.getElementById("my_modal_5")?.close();
          refetch()
        Swal.fire({
          title: "Assign Succesfull!",
          icon: "success",
          draggable: true,
        });
      });
  };

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
            <tr key={index} className="hover:bg-base-300 mb-3">
              <th>{index + 1}</th>
              <th>{issue?.title}</th>
              <th>{issue?.category}</th>
              <th>{issue?.status}</th>
              <th>{issue?.isBoosted ? "High" : "Normal"}</th>
              <th>{issue?.assignedTo}</th>
              <button
                onClick={() => {
                  console.log(issue);
                  setCurrentIssue(issue._id);
                  document.getElementById("my_modal_5").showModal();
                }}
                className="flex items-center gap-3 cursor-pointer "
                disabled={issue?.assignedTo !== "Not Assigned Yet"}
              >
                <FaChevronCircleUp /> Assign
              </button>
            </tr>
          ))}
        </tbody>
      </table>

      {/* modal------------------ */}

      {/* Assign Staff Modal */}
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle min-h-[400px]"
      >
        <div className="modal-box max-w-md p-6">
          {/* Header */}
          <h2 className="text-xl font-semibold text-center mb-1">
            Assign Staff
          </h2>
          <p className="text-sm text-center text-gray-500 mb-5">
            Select a staff member to handle this issue
          </p>

          {/* Dropdown */}
          <form onSubmit={handleSubmit(handleAssignStaff)}>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Staff List
              </label>
              <select
                defaultValue=""
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5
               text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500
               focus:border-green-500 transition"
                {...register("staffName")}
              >
                <option value="" disabled>
                  Select a staff member
                </option>

                {staffList.map((staff, index) => (
                  <option key={staff._id} value={staff.name}>
                    {index + 1}
                    {". "} {staff.name}
                  </option>
                ))}
              </select>
              {/* Actions */}
              <div className="modal-action mt-6 flex justify-between">
                <div>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_5")?.close()
                    }
                    type="button"
                    className="btn btn-ghost"
                  >
                    Cancel
                  </button>
                </div>

                <button type="submit" className="btn bg-green-500">
                  Assign
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Manage_Issues;
