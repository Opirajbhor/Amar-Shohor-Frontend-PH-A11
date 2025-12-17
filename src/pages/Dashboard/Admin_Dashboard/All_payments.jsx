import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { SmallLoading } from "../../../utils/Loading/Loading";

const All_payments = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const { data: all_payments = [], refetch } = useQuery({
    queryKey: ["all_payments", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      setLoading(true);
      const res = await axiosSecure.get("/manage-payments", {
        headers: {
          email: user?.email,
        },
      });
      setLoading(false);
      return res.data;
    },
  });
  // sort by dates
  const [latestFirst, setLatestFirst] = useState(true);
  const sortedPayments = [...all_payments].sort((a, b) =>
    latestFirst
      ? new Date(b.paidAt) - new Date(a.paidAt)
      : new Date(a.paidAt) - new Date(b.paidAt)
  );

  const statusStyles = {
    paid: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    failed: "bg-red-100 text-red-700",
  };
  if (loading) return <SmallLoading />;
  return (
    <div className="p-6 rounded-xl shadow-md">
      <h2 className="text-xl text-center font-semibold mb-4">
        All Transactions ({all_payments.length})
      </h2>
      <div className="flex items-center gap-3 my-5">
        <h3 className="text-[16px]">Filter Transactions by Dates : </h3>
        <button
          onClick={() => setLatestFirst(!latestFirst)}
          className=" cursor-pointer px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600"
        >
          {latestFirst ? "Latest First" : "Oldest First"}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                SL
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Product Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Payer Email
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Transaction Id
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Amount (৳)
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {sortedPayments.map((payment, index) => (
              <tr key={index} className="hover:bg-gray-500">
                <td className="px-4 py-3 text-sm">{index + 1}</td>
                <td className="px-4 py-3 text-sm">{payment?.title}</td>
                <td className="px-4 py-3 text-sm">{payment?.email}</td>
                <td className="px-4 py-3 text-sm">{payment?.transactionId}</td>
                <td className="px-4 py-3 text-sm font-medium">
                  {payment?.amount}
                </td>
                <td className="px-4 py-3 text-sm">
                  {new Date(payment?.paidAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      statusStyles[payment.paymentStatus]
                    }`}
                  >
                    {payment.paymentStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default All_payments;
