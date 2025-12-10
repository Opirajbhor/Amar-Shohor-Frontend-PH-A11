import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { SmallLoading } from "../../utils/Loading/Loading";
import useAuth from "../../Hooks/useAuth";

const My_Issues = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get("/all-issues")
      .then((res) => {
        const filtered = res.data.filter((data) => data?.email === user?.email);
        setUserData(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setUserData([]);
        setLoading(false);
      });
  }, [axiosSecure, user]);

  if (loading) return <SmallLoading />;

  return (
    <div>
      <h1 className="text-2xl text-center my-3 font-bold ">My Issues()</h1>
      {userData.length === 0 ? (
        <p className="text-center my-3">No issues found.</p>
      ) : (
        <div className="overflow-x-auto mx-[10px]">
          <table className="table">
            <thead>
              <tr>
                <th>SL</th>
                <th>Issue Title</th>
                <th>Category</th>
                <th>Location</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((data, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{data.title}</td>
                  <td>{data.category}</td>
                  <td>{data.location}</td>
                  <td className="btn">Edit</td>
                  <td>Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default My_Issues;
