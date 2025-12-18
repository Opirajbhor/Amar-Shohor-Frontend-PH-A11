import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { SmallLoading } from "../../../utils/Loading/Loading";
import { MdDelete } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../utils/PhotoUpload/photoUpload";
import Swal from "sweetalert2";

const Manage_Staff = () => {
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: all_staff = [], refetch } = useQuery({
    queryKey: ["all_staff", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      setLoading(true);
      const res = await axiosSecure.get("/manage-staff");
      setLoading(false);
      return res.data;
    },
  });

  // create account handle button--------
  const submitData = async (data) => {
    const { name, image, email, password, phone } = data;
    const imgFile = image[0];
    try {
      // image upload to imgBB
      const imageURL = await imageUpload(imgFile);
      // firebase account create
      await createUser(email, password);
      await updateUserProfile(name, imageURL);
      // save data to db-------
      const staffData = {
        name: name,
        imageURL: imageURL,
        email: email,
        phone: phone,
      };
      await axiosSecure.post("/staff", staffData);

      document.getElementById("add_staff_modal").close();
      Swal.fire({
        title: "Signup Successful!",
        icon: "success",
      });
    } catch (err) {
      Swal.fire({
        title: "Signup Error!",
        icon: "error",
      });
      refetch()
    }
  };

  if (loading) return <SmallLoading />;
  return (
    <div className="overflow-x-auto mx-10">
      <h1 className="text-2xl my-10 font-bold text-center">
        All Staff ({all_staff?.length})
      </h1>
      <div className="flex items-center gap-3">
        <h1>Create a Staff :</h1>
        {/* create staff button */}
        <button
          onClick={() => document.getElementById("add_staff_modal").showModal()}
          className="btn btn-outline btn-success"
        >
          {" "}
          <IoMdPersonAdd />
          Create
        </button>
        {/* -------------- */}
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {/* name, email, phone, photo, */}
          {all_staff.map((staff, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={staff?.imageURL} alt={staff?.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{staff?.name}</div>
                  </div>
                </div>
              </td>
              <td>{staff?.email}</td>
              <td>{staff?.phone}</td>
              <th>
                <button className="btn btn-ghost ">
                  <FaArrowUpRightFromSquare />
                </button>
                <button className="btn btn-ghost ">
                  <MdDelete />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add Staff Modal */}
      <dialog
        id="add_staff_modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box max-w-lg">
          {/* Header */}
          <h3 className="font-semibold text-xl text-center">Add New Staff</h3>
          <p className="text-sm text-center text-gray-500 mb-6">
            Provide basic information to create a staff account
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(submitData)} className="space-y-4">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                className="input input-bordered w-full"
                required
                {...register("name")}
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="staff@email.com"
                className="input input-bordered w-full"
                required
                {...register("email")}
              />
            </div>

            {/* Phone */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="tel"
                placeholder="01XXXXXXXXX"
                className="input input-bordered w-full"
                required
                {...register("phone")}
              />
            </div>

            {/* Photo */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Photo</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                accept="image/*"
                {...register("image")}
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                required
                {...register("password")}
              />
            </div>

            {/* Actions */}
            <div className="modal-action flex justify-between pt-4">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() =>
                  document.getElementById("add_staff_modal").close()
                }
              >
                Cancel
              </button>

              <button type="submit" className="btn btn-primary">
                Create Staff
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Manage_Staff;
