import React, { useEffect, useState } from "react";
import IssueCard from "../../components/IssueCard/IssueCard";
import { getAllIssues } from "../../ApiCalls/ApiCall";
import { LargeLoading } from "../../utils/Loading/Loading";

const All_Issues = () => {
  const [issues, setIssues] = useState(null);

  useEffect(() => {
    getAllIssues({
      url: "/all-issues",
      setData: setIssues,
    });

    console.log(issues)
  }, []);
  if (issues === null) {
    return <LargeLoading></LargeLoading>;
  }
  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-5">
        All Issues ({issues?.length})
      </h1>
      <IssueCard issues={issues}></IssueCard>
    </div>
  );
};

export default All_Issues;
