import React from "react";

const APIurl = import.meta.env.VITE_API_URL;

export const getAllIssues = async ({ url, setData }) => {
  await fetch(APIurl + url)
    .then((res) => res.json())
    .then((data) => setData(data));
};
