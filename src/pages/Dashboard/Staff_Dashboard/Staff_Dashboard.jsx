import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { SmallLoading } from "../../../utils/Loading/Loading";

const Staff_Dashboard = () => {
  const axiosSecure = useAxiosSecure();

  const { user } = useAuth();
  const [userData, setUserData] = useState([]);
  const { data = [], isLoading } = useQuery({
    queryKey: ["all-user-issues", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get("/assign-issues", {
        params: {
          name: user?.displayName,
        },
      });
      setUserData(res.data);
      return res.data;
    },
    isLoading: <SmallLoading></SmallLoading>,
  });
  console.log(userData);
  const resolvedIssues = userData.filter((data) => data?.status === "Resolved");

  const stats = {
    totalIssues: userData?.length,
    resolved: resolvedIssues,
  };
  const barData = {
    labels: ["Total Issues", "Resolved"],
    datasets: [
      {
        label: "Issues",
        data: [stats.totalIssues, stats.resolved],
        backgroundColor: ["#fbbf24", "#60a5fa"],
      },
    ],
  };

  const pieData = {
    labels: ["Total Issues", "Resolved"],
    datasets: [
      {
        data: [stats.pending, stats.inProgress, stats.resolved, stats.rejected],
        backgroundColor: ["#fbbf24", "#60a5fa"],
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid mx-auto grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        <div className="bg-blue-100 shadow-md p-5 rounded-lg">
          <h2 className="text-gray-700">In Progress</h2>
          <p className="text-3xl font-bold mt-2 text-blue-600">
            {userData?.length}
          </p>
        </div>

        <div className="bg-green-100 shadow-md p-5 w-full rounded-lg">
          <h2 className="text-gray-700">Resolved</h2>
          <p className="text-3xl font-bold mt-2 text-green-600">
            {resolvedIssues?.length}
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg text-black font-semibold mb-4">
            Issues Status Overview
          </h2>
          <Bar data={barData} />
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg text-black font-semibold mb-4">
            Issues Distribution
          </h2>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Staff_Dashboard;
