import React from "react";

const My_Issues = () => {
  return (
    <div>
      <h1 className="text-2xl text-center my-3 font-bold ">My Issues()</h1>
      <div className="overflow-x-auto mx-[10px]">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Issue Title</th>
              <th>Category </th>
              <th>Location</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td className="btn">Edit</td>
              <td >Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default My_Issues;
