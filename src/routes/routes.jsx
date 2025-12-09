import React, { Children } from "react";
import { createBrowserRouter, Routes } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/Homepage/HomePage";
import All_Issues from "../pages/Issues/All_Issues";
import My_Issues from "../pages/Issues/My_Issues";
import Login from "../pages/AuthPage/Login";
import Registration from "../pages/AuthPage/Registration";
import About_Us from "../pages/OtherPages/About_Us";
import Contact_Us from "../pages/OtherPages/Contact_Us";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  // main routes
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/all-issues",
        element: <All_Issues></All_Issues>,
      },
      {
        path: "/about-us",
        element: <About_Us></About_Us>,
      },
      {
        path: "/contact-us",
        element: <Contact_Us></Contact_Us>,
      },
    ],
  },
  // auth routes, login and registration
  { path: "/login", element: <Login></Login> },
  { path: "/registration", element: <Registration></Registration> },
  // dashboard routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default router;
