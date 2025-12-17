import React, { Children } from "react";
import { createBrowserRouter, Routes } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/Homepage/HomePage";
import All_Issues from "../pages/Issues/All_Issues";
import Login from "../pages/AuthPage/Login";
import Registration from "../pages/AuthPage/Registration";
import About_Us from "../pages/OtherPages/About_Us";
import Contact_Us from "../pages/OtherPages/Contact_Us";
import Dashboard from "../pages/Dashboard/Dashboard";
import My_Issues from "../pages/Dashboard/My_Issues";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Report_Issue from "../pages/Dashboard/Report_Issue";
import Profile from "../pages/Dashboard/Profile/Profile";
import IssueDetailsPage from "../pages/IssueDetails/IssueDetailspage";
import Boost from "../pages/Dashboard/Boost/Boost";
import Payment_success from "../pages/Dashboard/Payment/Payment_success";
import payment_cancel from "../pages/Dashboard/Payment/payment_cancel";
import Payments from "../pages/Dashboard/Payment/Payments";
import Manage_Issues from "../pages/Dashboard/Admin_Dashboard/Manage_Issues";

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
        path: "/all-issues/:id",
        element: <IssueDetailsPage></IssueDetailsPage>,
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
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/my-issues",
        element: <My_Issues></My_Issues>,
      },
      {
        path: "/dashboard/report-issue",
        element: <Report_Issue></Report_Issue>,
      },
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/boost/:id",
        Component: Boost,
      },
      {
        path: "/dashboard/payment-success",
        Component: Payment_success,
      },
      {
        path: "/dashboard/payments",
        Component: Payments,
      },
      {
        path: "/dashboard/payment-cancel",
        Component: payment_cancel,
      },
      // admin dashboard-------------------------------
      {
        path: "/dashboard/manage-issues",
        Component: Manage_Issues,
      },
    ],
  },
]);

export default router;
