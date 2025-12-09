import React from "react";
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
import useAuth from "../../Hooks/useAuth";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Example numbers (replace with API data)
  const stats = {
    totalIssues: 320,
    pending: 45,
    inProgress: 80,
    resolved: 180,
    payments: 12000,
  };

  const barData = {
    labels: ["Pending", "In Progress", "Resolved"],
    datasets: [
      {
        label: "Issues",
        data: [stats.pending, stats.inProgress, stats.resolved],
        backgroundColor: ["#fbbf24", "#60a5fa", "#34d399"],
      },
    ],
  };

  const pieData = {
    labels: ["Pending", "In Progress", "Resolved"],
    datasets: [
      {
        data: [stats.pending, stats.inProgress, stats.resolved],
        backgroundColor: ["#fbbf24", "#60a5fa", "#34d399"],
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
        <div className="bg-white shadow-md p-5 rounded-lg">
          <h2 className="text-gray-500">Total Issues</h2>
          <p className="text-3xl text-gray-800 font-bold mt-2">
            {stats.totalIssues}
          </p>
        </div>

        <div className="bg-yellow-100 shadow-md p-5 rounded-lg">
          <h2 className="text-gray-700">Pending</h2>
          <p className="text-3xl font-bold mt-2 text-yellow-600">
            {stats.pending}
          </p>
        </div>

        <div className="bg-blue-100 shadow-md p-5 rounded-lg">
          <h2 className="text-gray-700">In Progress</h2>
          <p className="text-3xl font-bold mt-2 text-blue-600">
            {stats.inProgress}
          </p>
        </div>

        <div className="bg-green-100 shadow-md p-5 rounded-lg">
          <h2 className="text-gray-700">Resolved</h2>
          <p className="text-3xl font-bold mt-2 text-green-600">
            {stats.resolved}
          </p>
        </div>

        <div className="bg-purple-100 shadow-md p-5 rounded-lg">
          <h2 className="text-gray-700">Total Payments</h2>
          <p className="text-3xl font-bold mt-2 text-purple-600">
            ₹ {stats.payments}
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Issues Status Overview</h2>
          <Bar data={barData} />
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Issues Distribution</h2>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
