import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Payment_success = () => {
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure()
  console.log(searchParams)
  const sessionId = searchParams.get("session_id");
  console.log(sessionId);

  useEffect(() => {
    if(sessionId){
        axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
        .then (res=>{
            console.log(res.data)
        })
    }
  }, [sessionId,axiosSecure]);
  return <div>payment-success</div>;
};

export default Payment_success;
