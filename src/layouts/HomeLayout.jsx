import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <>
      <div className="lg:max-w-6xl mx-auto ">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default HomeLayout;
