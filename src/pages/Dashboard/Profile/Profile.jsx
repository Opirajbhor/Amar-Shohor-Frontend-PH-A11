import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PrimaryButton from "../../../utils/Buttons/PrimaryButton";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../utils/PhotoUpload/photoUpload";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdateProfile = async (data) => {
    try {
      let photoURL = user?.photoURL;
      let userName = data?.name;
      if (data?.image?.length > 0) {
        photoURL = await imageUpload(data.image[0]);
      }
      if (data?.name === "") {
        userName = user?.displayName;
      }
      await updateUserProfile(data.name, photoURL);
      const userData = {
        name: userName,
        photoURL,
      };
      const res = await axiosSecure.patch(`/profile-update`, userData);
      document.getElementById("my_modal_5").close();
      Swal.fire({
        title: "Profile Updated Succesfully!",
        icon: "success",
      });
    } catch (error) {
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="relative w-full max-w-3xl bg-gray-400 rounded-3xl shadow-2xl px-10 pt-24 pb-12 text-center">
        {/* Avatar */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-50 h-50 rounded-full object-cover shadow-xl border-4 border-white"
          />
        </div>

        {/* Name */}
        <h1 className="text-3xl mt-15 font-semibold text-gray-700">
          {user?.displayName}
        </h1>

        {/* Email */}
        <p className="text-[18px] mt-2">{user?.email}</p>

        {/* Button */}
        <div className="mt-12">
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn bg-green-800 hover:bg-green-600 cursor-pointer rounded-3xl"
          >
            Change
          </button>
        </div>
      </div>
      {/* modal */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form onSubmit={handleSubmit(handleUpdateProfile)}>
          <div className="modal-box">
            {/* Image */}
            <div>
              <label htmlFor="image" className=" text-white-700 font-medium">
                Profile Image
              </label>
              <input
                name="image"
                type="file"
                id="image"
                accept="image/*"
                className="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-lime-50 file:text-lime-700
      hover:file:bg-lime-100
       border border-dashed  rounded-md cursor-pointer
      focus:outline-none focus:ring-2 
      py-2"
                {...register("image")}
              />
              <p className="mt-1 text-xs text-gray-400">
                PNG, JPG or JPEG (max 2MB)
              </p>
            </div>
            {/* Name */}
            <div>
              <label className=" text-white-700 font-medium">Name</label>
              <input
                defaultValue={user?.displayName}
                type="text"
                placeholder="Full Name"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="modal-action">
              {/* close modal */}
              <button
                type="button"
                onClick={() => document.getElementById("my_modal_5").close()}
                className="btn"
              >
                Close
              </button>
              {/* change data */}
              <button type="submit" className="btn">
                Change
              </button>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Profile;
