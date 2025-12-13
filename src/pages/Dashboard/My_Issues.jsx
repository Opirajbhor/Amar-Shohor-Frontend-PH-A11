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
      .get("/user-issues", {
        headers: {
          email: user?.email,
        },
      })
      .then((res) => {
        setUserData(res.data);
        console.log(res.data);
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
      <h1 className="text-2xl text-center my-3 font-bold ">
        My Issues({userData.length})
      </h1>
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
                <th>Details</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((data, index) => (
                <tr className="mb-2" key={index}>
                  <th>{index + 1}</th>
                  <td>{data.title}</td>
                  <td>{data.category}</td>
                  <td>{data.location}</td>
                  <td>
                    <button className="btn btn-active btn-info">Details</button>
                  </td>
                  <td>
                    <button className="btn btn-active btn-warning">Edit</button>
                  </td>
                  <td>
                    <button className="btn btn-active btn-error">Delete</button>
                  </td>
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
