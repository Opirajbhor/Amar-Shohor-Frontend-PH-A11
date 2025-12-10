import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const Profile = () => {
  const { user, logOut } = useAuth();

  const [photoPreview, setPhotoPreview] = useState(user?.photoURL);
  const [openModal, setOpenModal] = useState(false);

  // Modal Form Fields
  const [formName, setFormName] = useState(user?.name);
  const [formEmail, setFormEmail] = useState(user?.email);
  const [formPhoto, setFormPhoto] = useState(user?.photo);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormPhoto(URL.createObjectURL(file));
    }
  };

  const handleSaveChanges = () => {
    setUser({
      ...user,
      name: formName,
      email: formEmail,
      photo: formPhoto,
    });
    setPhotoPreview(formPhoto);
    setOpenModal(false);
  };

  const handleSubscription = () => {
    alert("Redirecting to payment gateway for 1000 tk...");
    setUser({ ...user, isPremium: true });
  };

  return (
    <div className="min-h-screen flex justify-center  p-6">
      <div className="w-full max-w-2xl  shadow-lg rounded-xl p-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center gap-4">
          {/* Profile Photo */}
          <img
            src={photoPreview}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-green-500 shadow"
          />

          {/* Name & Email */}
          <h1 className="text-2xl font-bold flex items-center gap-2">
            {user?.displayName}
            {user?.isPremium && (
              <span className="px-2 py-1 text-sm bg-yellow-500 text-white rounded-md">
                Premium
              </span>
            )}
          </h1>

          <p className="text-gray-600">{user?.email}</p>

          {/* Blocked Warning */}
          {user?.isBlocked && (
            <div className="bg-red-100 text-red-700 p-3 rounded-md w-full text-center font-semibold">
              Your account is blocked. Please contact the authorities.
            </div>
          )}

          {/* Update Profile Button */}
          {!user?.isBlocked && (
            <button
              onClick={() => setOpenModal(true)}
              className="px-5 py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
            >
              Update Profile
            </button>
          )}
        </div>

        {/* Subscription Section */}
        {!user?.isPremium && !user?.isBlocked && (
          <div className="mt-8 p-6  border rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">
              Become a Premium User
            </h3>
            <p className="text-gray-600 mb-4">
              Submit unlimited issues after subscribing.
            </p>

            <button
              onClick={handleSubscription}
              className="bg-yellow-500 text-white font-semibold px-5 py-2 rounded hover:bg-yellow-600 transition"
            >
              Subscribe for 1000 tk
            </button>
          </div>
        )}
      </div>

      {/* ===========================
          UPDATE PROFILE MODAL
      ============================ */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className=" w-full max-w-md rounded-lg shadow-lg p-6 animate-fadeIn">
            <h2 className="text-xl font-semibold text-center mb-4">
              Update Profile
            </h2>

            {/* Profile Photo Preview */}
            <div className="flex justify-center mb-4 relative">
              <img
                src={formPhoto}
                alt="Preview"
                className="w-28 h-28 rounded-full border-4 border-green-500 shadow object-cover"
              />

              <label className="absolute bottom-0 right-16 bg-green-600 text-white p-2 rounded-full cursor-pointer">
                ✎
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <input
                type="text"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                className="w-full border px-4 py-2 rounded-md"
                placeholder="Enter name"
              />

              <input
                type="email"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                className="w-full border px-4 py-2 rounded-md"
                placeholder="Enter email"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-6 gap-3">
              <button
                onClick={() => setOpenModal(false)}
                className="px-4 py-2  rounded hover:bg-gray-400"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveChanges}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
