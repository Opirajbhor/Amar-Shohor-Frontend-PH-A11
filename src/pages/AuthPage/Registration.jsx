// File: Signup.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import Logo from "../../utils/Logo/Logo";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../Hooks/useAuth";

const Registration = () => {
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
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // if (loading) return LargeLoading;
  // if (user) return <Navigate to={from} replace={true} />;
  const submitData = async (data) => {
    const { name, email, password } = data;
    try {
      const result = await createUser(email, password);
      await updateUserProfile(name);
      toast.success("Registration Successfull!");
      navigate(from);
    } catch (err) {
      console.log(err);
      toast.error("Registration error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className=" shadow-xl rounded-2xl flex w-full max-w-5xl overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-4xl font-bold text-white-800 mb-2">
            Create Account
          </h2>
          <p className=" text-white-500 mb-8">
            Please fill in the details to sign up.
          </p>

          <form onSubmit={handleSubmit(submitData)} className="space-y-5">
            {/* Name */}
            <div>
              <label className=" text-white-700 font-medium">Name</label>
              <input
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

            {/* Email */}
            <div>
              <label className=" text-white-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Email Address"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className=" text-white-700 font-medium">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <span className="absolute right-4 top-3 cursor-pointer text-white-400">
                  👁
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-all shadow"
            >
              Sign Up
            </button>
          </form>

          {/* OR Divider */}
          <div className="text-center my-6 text-white-500 flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-300"></div>
            OR
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Login */}
          <button className="flex items-center justify-center gap-3 w-full border border-gray-300 rounded-lg py-3 hover:bg-green-100 hover:text-black cursor-pointer transition-all">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign Up with Google
          </button>

          {/* Sign In Text */}
          <p className="text-center text-white-600 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 font-semibold cursor-pointer"
            >
              Sign In
            </Link>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center bg-white">
          <Logo />
          <img
            src="/Images/Registration_image.jpg"
            alt="Registration Illustration"
            className="w-96 mt-6 "
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Registration;
