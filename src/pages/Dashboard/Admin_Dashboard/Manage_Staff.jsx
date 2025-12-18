import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { SmallLoading } from "../../../utils/Loading/Loading";
import { MdDelete } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Manage_Staff = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const { data: all_staff = [], refetch } = useQuery({
    queryKey: ["all_staff", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      setLoading(true);
      const res = await axiosSecure.get("/manage-staff");
      setLoading(false);
      return res.data;
    },
  });
  console.log(all_staff);
  if (loading) return <SmallLoading />;
  return (
    <div className="overflow-x-auto mx-10">
      <h1 className="text-2xl my-10 font-bold text-center">
        All Staff ({all_staff?.length})
      </h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {/* name, email, phone, photo, */}
          {all_staff.map((staff, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={staff?.imageURL} alt={staff?.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{staff?.name}</div>
                  </div>
                </div>
              </td>
              <td>{staff?.email}</td>
              <td>{staff?.phone}</td>
              <th>
                <button className="btn btn-ghost ">
                  <FaArrowUpRightFromSquare />
                </button>
                <button className="btn btn-ghost ">
                  <MdDelete />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Manage_Staff;
