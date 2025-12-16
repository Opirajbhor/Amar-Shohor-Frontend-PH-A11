import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { SmallLoading } from "../../utils/Loading/Loading";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { imageUpload } from "../../utils/PhotoUpload/photoUpload";
import { useQuery } from "@tanstack/react-query";
import { MdEditNote, MdOutlineDelete } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Swal from "sweetalert2";

// issue status color className
const statusStyle = {
  Pending: "badge badge-warning",
  In_Progress: "badge-info",
  Resolved: "badge badge-success",
  Closed: "badge badge-error",
};
const defaultStyle = "badge-ghost";
const My_Issues = () => {
  const { register, reset, handleSubmit } = useForm();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [itemEdit, setItemEdit] = useState([]);

  const { data: userData = [], refetch } = useQuery({
    queryKey: ["user-issues", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      setLoading(true);
      const res = await axiosSecure.get("/user-issues", {
        headers: {
          email: user?.email,
        },
      });
      setLoading(false);
      return res.data;
    },
  });

  // update button data state conditon
  const reportIssueData = async (data) => {
    const currentId = data.id;
    const imgFile = data.image?.[0];
    const issueData = {
      _id: currentId,
      title: data.title,
      description: data.description,
      location: data.location,
      category: data.category,
    };
    // image
    if (imgFile !== undefined) {
      if (imgFile && imgFile.type && imgFile.type.startsWith("image/")) {
        try {
          const imageURL = await imageUpload(imgFile);
          issueData.image = imageURL;
        } catch {
          console.log("error");
        }
      }
    }
    try {
      await updateDataBackend(issueData);

      Swal.fire({
        title: "Updated!",
        text: "Issue has been updated successfully.",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to update issue.",
        icon: "error",
      });
      document.getElementById("my_modal_5").close();
    }
  };
  // update button data post conditon
  const updateDataBackend = async (issueItem) => {
    const issueId = issueItem._id;
    const res = await axiosSecure.patch(`/all-issues/${issueId}`, issueItem);
  };
  // delete button condition
  const handleDeleteIssue = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/all-issues/${id}`).then((res) => {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your Issue has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };

  if (loading) return <SmallLoading />;

  return (
    <div>
      <h1 className="text-2xl text-center my-3 font-bold ">
        My Issues({userData.length})
      </h1>
      {userData.length === 0 ? (
        <p className="text-center my-3">No issues found.</p>
      ) : (
        <div className="overflow-x-auto mx-[10px]">
          <table className="table">
            <thead>
              <tr>
                <th>SL</th>
                <th>Issue Title</th>
                <th>Category</th>
                <th>Location</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Details</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((data, index) => (
                <tr className="mb-2" key={index}>
                  <th>{index + 1}</th>
                  <td>{data.title}</td>
                  <td>{data.category}</td>
                  <td>{data.location}</td>
                  {/* status */}
                  <td>
                    <span
                      className={`badge ${
                        statusStyle[data.status] || defaultStyle
                      }`}
                    >
                      {data.status}
                    </span>
                  </td>

                  <td>
                    {data.isBoosted ? (
                      <span className="badge badge-secondary font-bold">
                        Paid
                      </span>
                    ) : (
                      <Link
                        to={`/dashboard/boost/${data._id}`}
                        className="badge badge-info cursor-pointer"
                      >
                        Boost
                      </Link>
                    )}
                  </td>

                  {/* details */}
                  <td>
                    <Link
                      to={`/all-issues/${data._id}`}
                      state={{ issueData: data }}
                      className="btn btn-active btn-info"
                    >
                      <IoMdInformationCircleOutline />
                      Details
                    </Link>
                    {/* edit modal here */}
                  </td>
                  {/* edit */}

                  <td>
                    <button
                      disabled={data?.status !== "Pending"}
                      onClick={() => {
                        setItemEdit(data);
                        setTimeout(() => {
                          reset(data);
                          document.getElementById("my_modal_5").showModal();
                        }, 100);
                      }}
                      className="btn btn-active cursor-pointer btn-warning"
                    >
                      <MdEditNote />
                    </button>
                  </td>

                  {/* delete */}
                  <td>
                    <button
                      onClick={() => handleDeleteIssue(data._id)}
                      className="btn btn-active btn-error"
                    >
                      <MdOutlineDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* edit modal */}
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div className=" w-full max-w-3xl shadow-lg rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-400 mb-6">
                  Update Issue
                </h2>

                <form
                  onSubmit={handleSubmit(reportIssueData)}
                  className="space-y-6"
                >
                  {/* TITLE */}
                  <div>
                    <label className="block text-gray-400 font-medium mb-1">
                      Issue Title
                    </label>
                    <input
                      type="text"
                      defaultValue={itemEdit.title}
                      placeholder="Enter issue title"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
                      {...register("title", { required: true })}
                    />
                  </div>

                  {/* DESCRIPTION */}
                  <div>
                    <label className="block text-gray-400 font-medium mb-1">
                      Description
                    </label>
                    <textarea
                      defaultValue={itemEdit.description}
                      rows="4"
                      placeholder="Describe the issue"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
                      {...register("description", { required: true })}
                    ></textarea>
                  </div>

                  {/* CATEGORY */}
                  <div>
                    <label className="block text-gray-400 font-medium mb-1">
                      Category
                    </label>
                    <select
                      defaultValue={itemEdit.category}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 text-gray-700"
                      {...register("category")}
                    >
                      <option value="" disabled>
                        Select category
                      </option>
                      <option value="road_problem">Road Problem</option>
                      <option value="drainage">Drainage / Sewer</option>
                      <option value="electricity">Electricity Issue</option>
                      <option value="water">Water Supply</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  {/* IMAGE UPLOAD */}
                  <div>
                    <label className="block text-gray-400 font-medium mb-1">
                      Upload Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 cursor-pointer"
                      {...register("image")}
                    />
                  </div>

                  {/* LOCATION */}
                  <div>
                    <label className="block text-gray-400 font-medium mb-1">
                      Location
                    </label>
                    <input
                      defaultValue={itemEdit.location}
                      type="text"
                      placeholder="Enter location or address"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
                      {...register("location")}
                    />
                  </div>
                  {/* only for id collect */}
                  <input
                    type="hidden"
                    value={itemEdit._id}
                    {...register("id")}
                  />

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow cursor-pointer"
                  >
                    Submit Issue
                  </button>
                </form>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default My_Issues;
