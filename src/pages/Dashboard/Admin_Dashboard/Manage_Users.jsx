import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { SmallLoading } from "../../../utils/Loading/Loading";

const Manage_Users = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const { data: all_Users = [], refetch } = useQuery({
    queryKey: ["all_Users", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      setLoading(true);
      const res = await axiosSecure.get("/manage-users", {
        headers: {
          email: user?.email,
        },
      });
      setLoading(false);
      return res.data;
    },
  });
  console.log(all_Users);
  if (loading) return <SmallLoading />;

  return (
    <div className="overflow-x-auto mx-10">
      <h1 className="text-2xl my-10 font-bold text-center">
        All Issues ({all_Users.length})
      </h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Email</th>
            <th>Premium Status</th>
            <th>Block Status</th>
            <th>Block Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {all_Users.map((user, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={user?.imageURL} alt={user?.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user?.name}</div>
                  </div>
                </div>
              </td>
              <td>{user?.email}</td>
              <td>{user?.isPremium ? "Yes" : "No"}</td>
              <td>{user?.isBlocked ? "Blocked" : "Not Blocked"}</td>
              <th>
                <button className="btn btn-ghost ">Block/Unblock</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Manage_Users;
