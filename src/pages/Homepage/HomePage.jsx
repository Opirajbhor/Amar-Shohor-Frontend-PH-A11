import React, { useState } from "react";
import HeroBanner from "../../components/Banner/HeroBanner";
import IssueCard from "../../components/IssueCard/IssueCard";
import TinyCards from "../../components/TinyCards/TinyCards";
import { getAllIssues } from "../../ApiCalls/ApiCall";

const HomePage = () => {
  const [issues, setIssues] = useState([]);

  getAllIssues({
    url: "/users",
    setData: setIssues,
  });
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
