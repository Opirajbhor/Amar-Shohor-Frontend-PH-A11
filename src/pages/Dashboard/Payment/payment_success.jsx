import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Payment_success = () => {
  const [payInfo, setPayInfo] = useState();
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          setPayInfo({
            transactionId: res?.data?.transactionId,
            paymentInfo: res?.data?.paymentInfo,
          });
        });
    }
  }, [sessionId, axiosSecure, payInfo]);
  return (
    <div>
      payment-success
      <div>
        <h1>Your Transection ID : {payInfo?.transactionId}</h1>
        <h1>Your Issue Title : {}</h1>
        <h1>Your Payment Info : {payInfo?.paymentInfo}</h1>
      </div>
    </div>
  );
};

export default Payment_success;
