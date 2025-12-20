import React, { useState } from "react";
import HeroBanner from "../../components/Banner/HeroBanner";
import IssueCard from "../../components/IssueCard/IssueCard";
import TinyCards from "../../components/TinyCards/TinyCards";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import CTASection from "../../components/CTAHomepage/CTASection";
import SuccessGallery from "../../components/SuccessGallery/SuccessGallery";

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

  return (
    <div>
      <HeroBanner></HeroBanner>
      <h2 className="text-3xl text-center mt-5 font-bold mb-6">
        Reported Issues
      </h2>
      <IssueCard issues={issues}></IssueCard>
      <div>
        <h1 className="font-bold text-2xl text-center">Features</h1>
        <TinyCards></TinyCards>
      </div>
      <HowItWorks></HowItWorks>
      <SuccessGallery></SuccessGallery>
      <CTASection></CTASection>
    </div>
  );
};

export default HomePage;
