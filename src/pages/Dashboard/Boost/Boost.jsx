import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { LargeLoading } from "../../../utils/Loading/Loading";

const Boost = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: issue = [], isLoading } = useQuery({
    queryKey: ["currentIssue", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-issues/${id}`);
      return res.data;
    },
  });

  const handleBoost = async () => {
    const paymentInfo = {
      issueId: issue._id,
      email: issue.email,
      title: issue.title,
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    window.location.href = res.data.url;
    console.log(res.data);
  };

  if (isLoading) return <LargeLoading></LargeLoading>;

  return (
    <div className="mx-15 ">
      <h1 className="text-green-600 font-bold text-center text-2xl my-5">
        Boost Your Issue For Faster Response
      </h1>
      <div className="flex gap-15 items-center justify-center">
        <div className="flex flex-col gap-3">
          {/* iamge */}
          <div>
            <img
              className="max-w-[300px] max-h-[250px]"
              src={issue.image}
              alt={issue.image}
            />
          </div>
          {/* id */}
          <label className="input">
            <span className="label">01. Issue ID</span>
            <input disabled value={issue._id} type="text" placeholder="URL" />
          </label>
          {/* title */}
          <label className="input">
            <span className="label">02. Issue Title</span>
            <input disabled value={issue.title} type="text" placeholder="URL" />
          </label>
          {/* status */}
          <label className="input">
            <span className="label">03. Issue Status</span>
            <input
              disabled
              value={issue.status}
              type="text"
              placeholder="URL"
            />
          </label>
          {/* category */}
          <label className="input">
            <span className="label">04. Issue Category</span>
            <input
              disabled
              value={issue.category}
              type="text"
              placeholder="URL"
            />
          </label>
        </div>
        {/* divider */}
        <div className="divider lg:divider-horizontal"></div>
        {/* link  for pay */}
        <div>
          <h2 className=" font-black text-2xl mb-5">
            Cost will be 1000/- Taka
          </h2>
          <Link
            onClick={handleBoost}
            className="badge badge-success text-2xl p-5"
          >
            {" "}
            Boost Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Boost;
