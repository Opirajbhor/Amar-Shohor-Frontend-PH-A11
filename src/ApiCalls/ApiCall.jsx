import React, { useEffect, useEffectEvent, useState } from "react";
import useAuth from "../Hooks/useAuth";

const APIurl = import.meta.env.VITE_API_URL;

export const getAllIssues = async ({ url, setData }) => {
  await fetch(APIurl + url)
    .then((res) => res.json())
    .then((data) => setData(data));
};
