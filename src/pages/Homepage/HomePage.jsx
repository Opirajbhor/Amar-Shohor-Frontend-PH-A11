import React, { useState } from "react";
import HeroBanner from "../../components/Banner/HeroBanner";
import IssueCard from "../../components/IssueCard/IssueCard";
import TinyCards from "../../components/TinyCards/TinyCards";
import { getAllIssues } from "../../ApiCalls/ApiCall";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const HomePage = () => {
  const [issues, setIssues] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["latest-issues"],
    queryFn: async () => {
      const res = await axiosSecure.get("/latest-issues");
      setIssues(res.data);
      return res.data;
    },
  });
  console.log(issues)

  return (
    <div>
      <HeroBanner></HeroBanner>
      <TinyCards></TinyCards>
      <h2 className="text-3xl text-center mt-5 font-bold mb-6">
        Reported Issues
      </h2>
      <IssueCard issues={issues}></IssueCard>
    </div>
  );
};

export default HomePage;
