import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Payment_success = () => {
  const [payInfo, setPayInfo] = useState(null);
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          setPayInfo(res.data);
        });
    }
  }, [sessionId, axiosSecure]);


  return (
    <div>
      <h2>Payment Success</h2>

      <h1>Your Transaction ID: {payInfo?.transactionId}</h1>
      <h1>Your Issue Title: {payInfo?.issueTitle}</h1>
      <h1>Amount Paid: {payInfo?.paymentInfo?.amount}</h1>
    </div>
  );
};

export default Payment_success;
