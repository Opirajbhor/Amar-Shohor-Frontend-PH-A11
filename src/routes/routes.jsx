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
import Dashboard from "../pages/Dashboard/User_Dashboard";
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
import Manage_Users from "../pages/Dashboard/Admin_Dashboard/Manage_Users";
import Manage_Staff from "../pages/Dashboard/Admin_Dashboard/Manage_Staff";
import All_payments from "../pages/Dashboard/Admin_Dashboard/all_payments";
import Assign_Issues from "../pages/Dashboard/Staff_Dashboard/Assign_Issues";
import Admin_Dashboard from "../pages/Dashboard/Admin_Dashboard/Admin_Dashboard";
import Staff_Dashboard from "../pages/Dashboard/Staff_Dashboard/Staff_Dashboard";
import Main_Dashboard from "../pages/Dashboard/Main_Dashboard";

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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Main_Dashboard></Main_Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-issues",
        element: (
          <PrivateRoute>
            <My_Issues></My_Issues>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/report-issue",
        element: (
          <PrivateRoute>
            <Report_Issue></Report_Issue>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/boost/:id",
        element: (
          <PrivateRoute>
            <Boost></Boost>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment-success",
        element: (
          <PrivateRoute>
            <Payment_success></Payment_success>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payments",
        element: (
          <PrivateRoute>
            <Payments></Payments>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment-cancel",
        element: (
          <PrivateRoute>
            <payment_cancel></payment_cancel>
          </PrivateRoute>
        ),
      },
      // admin dashboard-------------------------------
      {
        path: "/dashboard/manage-issues",
        element: (
          <PrivateRoute>
            <Manage_Issues></Manage_Issues>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manage-users",
        element: (
          <PrivateRoute>
            <Manage_Users></Manage_Users>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manage-staff",
        element: (
          <PrivateRoute>
            <Manage_Staff></Manage_Staff>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-payments",
        element: (
          <PrivateRoute>
            <All_payments></All_payments>
          </PrivateRoute>
        ),
      },
      // Staff Dashboard
      {
        path: "/dashboard/assign-issues",
        element: (
          <PrivateRoute>
            <Assign_Issues></Assign_Issues>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
