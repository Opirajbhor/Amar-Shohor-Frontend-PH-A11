import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { SmallLoading } from "../../utils/Loading/Loading";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { imageUpload } from "../../utils/PhotoUpload/photoUpload";
import { useMutation } from "@tanstack/react-query";
// issue status color className
const statusStyle = {
  Pending: "badge badge-warning",
  In_Progress: "badge-info",
  Resolved: "badge badge-success",
  Closed: "badge badge-error",
};
const defaultStyle = "badge-ghost";
const My_Issues = () => {
  const { register, handleSubmit } = useForm();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [userData, setUserData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get("/user-issues", {
        headers: {
          email: user?.email,
        },
      })
      .then((res) => {
        setUserData(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setUserData([]);
        setLoading(false);
      });
  }, [axiosSecure, user]);

  // tanstack update data
  const {
    mutate: updateDataBackend,
    isSuccess,
    isPending,
    isError,
  } = useMutation({
    mutationFn: (updateIssueData) => {
      const issueId = updateIssueData.id;

      return axiosSecure.patch(`/all-issues/${issueId}`, updateIssueData);
    },
    onSuccess: () => {
      toast.success("Issue Updated Succesfully");
    },
    onError: (err) => {
      toast.error("Problem with Updating Issue :" + err.message);
    },
  });
  const reportIssueData = async (data) => {
    const currentId = data._id;
    const imgFile = data.image[0];
    if (imgFile) {
      const imageURL = await imageUpload(imgFile);
      const issueData = {
        _id: currentId,
        title: data.title,
        description: data.description,
        location: data.location,
        category: data.category,
        image: imageURL,
      };
      console.log(issueData);
      updateDataBackend(issueData);
    } else {
      const issueData = {
        _id: currentId,

        title: data.title,
        description: data.description,
        location: data.location,
        category: data.category,
      };
      console.log(issueData);
      updateDataBackend(issueData);
    }
  };
  // delete an issue
  const { mutate: deleteUserIssue } = useMutation({
    mutationFn: (id) => {
      return axiosSecure.delete(`/all-issues/${id}`);
    },
    onSuccess: () => {
      toast.success("Issue Deleted Succesfully");
    },
    onError: (err) => {
      toast.error("Problem with Deleting Issue :" + err.message);
    },
  });
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

                  <td>
                    <span
                      className={`badge ${
                        statusStyle[data.status] || defaultStyle
                      }`}
                    >
                      {data.status}
                    </span>
                  </td>
                  {/* details */}
                  <td>
                    <Link
                      to={`/all-issues/${data._id}`}
                      state={{ issueData: data }}
                      className="btn btn-active btn-info"
                    >
                      Details
                    </Link>
                    {/* edit modal here */}
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
                                defaultValue={data.title}
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
                                defaultValue={data.description}
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
                                defaultValue={data.category}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 text-gray-700"
                                {...register("category")}
                              >
                                <option value="" disabled>
                                  Select category
                                </option>
                                <option value="road_problem">
                                  Road Problem
                                </option>
                                <option value="drainage">
                                  Drainage / Sewer
                                </option>
                                <option value="electricity">
                                  Electricity Issue
                                </option>
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
                                defaultValue={data.location}
                                type="text"
                                placeholder="Enter location or address"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
                                {...register("location")}
                              />
                            </div>

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
                  </td>
                  {/* edit */}
                  <td>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                      className="btn btn-active btn-warning"
                    >
                      Edit
                    </button>
                  </td>
                  {/* delete */}
                  <td>
                    <button
                      onClick={() => deleteUserIssue(data._id)}
                      className="btn btn-active btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default My_Issues;
