import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Report_Issue = () => {
  const { register, handleSubmit } = useForm();
  const [previewImg, setPreviewImg] = useState("");

  const submitData = (data) => {
    console.log("Reported Data:", data);
  };

  // Handle image preview
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImg(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-5 py-10">
      <div className=" w-full max-w-3xl shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-400 mb-6">
          Report an Issue
        </h2>

        <form onSubmit={handleSubmit(submitData)} className="space-y-6">
          {/* TITLE */}
          <div>
            <label className="block text-gray-400 font-medium mb-1">
              Issue Title
            </label>
            <input
              type="text"
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 text-gray-700"
              {...register("category")}
            >
              <option value="">Select category</option>
              <option value="road">Road Problem</option>
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
              onChange={handleImage}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 cursor-pointer"
              {...register("image")}
            />

            {/* Preview */}
            {previewImg && (
              <img
                src={previewImg}
                alt="Preview"
                className="mt-4 w-40 h-40 object-cover rounded-lg border"
              />
            )}
          </div>

          {/* LOCATION */}
          <div>
            <label className="block text-gray-400 font-medium mb-1">
              Location
            </label>
            <input
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
    </div>
  );
};

export default Report_Issue;
