import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { SmallLoading } from "../../../utils/Loading/Loading";

const Payments = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  const { data: userData = [] } = useQuery({
    queryKey: ["user-issues", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      setLoading(true);
      const res = await axiosSecure.get("/user-payments", {
        headers: {
          email: user?.email,
        },
      });
      setLoading(false);
      return res.data;
    },
  });
  console.log(userData);
  console.log(user?.email);
  if (loading) return <SmallLoading />;

  return (
    <div className="overflow-x-auto  mx-10">
      <h1 className="font-bold text-2xl text-center my-3">
        Your Payment History
      </h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Issue Name</th>
            <th>Transection Id</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data, index) => (
            <tr key={index} className="bg-base-200">
              <th>{index + 1}</th>
              <td>{data.title}</td>
              <td>{data.transactionId}</td>
              <td>{data.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
